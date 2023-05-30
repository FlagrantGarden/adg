function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function ritualDisabled(character) {
    let disabled = statInvalid(character.agility) ||
        statInvalid(character.brawn) ||
        statInvalid(character.cunning) ||
        statInvalid(character.health);

    return disabled;
}

function statInvalid(stat) {
    return (stat <= 0 || stat == null);
}

function rollDie(size) {
    return Math.floor(Math.random() * (size - 1) + 1);
}

function rollDice(count, size) {
    let total = 0;

    for (let i = 0; i < count; i++) {
        total += rollDie(size);
    }

    return total;
}

function randomItem(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
}

function rollAttributes({ character }, { input_agility, input_brawn, input_cunning }) {
    input_agility.value = character.agility = rollDice(3, 6)
    input_brawn.value = character.brawn = rollDice(3, 6)
    input_cunning.value = character.cunning = rollDice(3, 6)
}

function newRitual(temp_ritual, ritualInfo) {
    temp_ritual.type = randomItem(ritualInfo.types);
    temp_ritual.descriptor = randomItem(ritualInfo.descriptors);
    temp_ritual.noun = randomItem(ritualInfo.nouns);
    temp_ritual.combined = `${temp_ritual.type}: ${temp_ritual.descriptor} ${temp_ritual.noun}`;
}

function addExtraRitual(data, refs) {
    newRitual(data.temp_ritual, data.ritualInfo)

    data.character.rituals.push(data.temp_ritual.combined)
    let extra_text = `Learned the ${data.temp_ritual.combined} without paying any cost.`

    resetTempRitual(data)

    return extra_text
}

function rollOccupation({ character, occupations }, { input_occupation }) {
    character.occupation = randomItem(occupations)

    if (input_occupation?.value) {
        input_occupation.value = character.occupation
    }
}

function swapValue(first, second) {
    return [second, first]
}
function swapAttribute(first, second, data, refs) {
    let [newFirst, newSecond] = swapValue(data.character[first], data.character[second]);
    refs[`input_${first}`].value = data.character[first] = newFirst;
    refs[`input_${second}`].value = data.character[second] = newSecond;
}

function rollHealth({ character }, { input_health }) {
    input_health.value = character.health = Math.floor(character.brawn * 0.5) + rollDie(6)
}

function rollWealth({ character }, { input_wealth }) {
    input_wealth.value = character.wealth = rollDice(2, 6) * 10
}

function rollAnyScar({ character, scars }, { input_scar }) {
    input_scar = character.scar = randomItem(scars).description
}
function rollScarForArea({ character, scars, area }, { input_scar }) {
    fScars = scars.filter(scar => scar.area == area)
    input_scar = character.scar = randomItem(fScars).description
}
function selectScar({ character, scar }, { input_scar }) {
    input_scar.value = character.scar = scar.description
}
function toggleHealthButton({ character }, el) {
    if (character.brawn > 0) {
        el.disabled = false
    } else {
        el.disabled = true
    }
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function getLastRitual({ character }) {
    return character?.rituals[character?.rituals?.length - 1]
}

async function payRitualCost(data, refs, from) {
    data.temp_ritual.cost = rollDie(3)
    data.temp_ritual.from = toTitleCase(from)
    data.character.rituals.push(data.temp_ritual.combined)
    data.character[from] = data.character[from] - data.temp_ritual.cost
    refs[`input_${from}`].value = data.character[from]
    if (checkRitualDeath(data.character) != '') {
        refs.ritual_death_dialog.show()
        refs.ritualDrawer.hide()
    } else {
        const alert = Object.assign(document.createElement('sl-alert'), {
            variant: "danger",
            closable: true,
            duration: 2000,
            class: "adg-alert-wide",
            innerHTML: `
            <sl-icon slot="icon" name="magic"></sl-icon>
            Paid ${data.temp_ritual.cost}
            from ${data.temp_ritual.from}
            to learn the ${getLastRitual(data)}
            `
        });
    
        refs.ritualDrawer.append(alert);
        alert.toast();
        refs.ritualDrawer.hide()
    }
    resetTempRitual(data)
}

function checkRitualDeath(character) {
    let killed_by = ''
    let stats = ['health', 'agility', 'brawn', 'cunning']

    stats.forEach(function (stat) {
        if (statInvalid(character[stat])) {
            killed_by = toTitleCase(stat)
        }
    })

    return killed_by
}

function closeRitualDeath(data, refs) {
    resetCharacter(data, refs)
    refs.ritual_death_dialog.hide()
}

function dialogDenyOverlayClose(event) {
    console.log(`closing event for death: ${event}`)
    if (event.detail.source === 'overlay') {
        event.preventDefault();
    }
}

function exportCharacter({ character }) {
    console.log(character);
    download(
        character,
        'dungeon-game-adventurer.json',
        'application/json;charset=utf-8'
    );
}

function download(data, filename, type) {
    var str    = JSON.stringify(data);
    var bytes  = new TextEncoder().encode(str);
    var file   = new Blob([bytes], {type: type});
    var a      = document.createElement("a");
    url        = URL.createObjectURL(file);
    a.href     = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

function resetCharacter({ character }, refs) {
    refs.input_agility.value = character.agility = null
    refs.input_brawn.value = character.brawn = null
    refs.input_cunning.value = character.cunning = null
    refs.input_health.value = character.health = null
    refs.input_wealth.value = character.wealth = null
    refs.input_occupation.value = character.occupation = null
    refs.input_scar = character.scar = null
    character.rituals = []
    character.extra = null
}

function characterReady({ character }) {
    let ready = true

    let numberStats = [
        character.agility,
        character.brawn,
        character.cunning,
        character.health,
        character.wealth
    ]

    let stringStats = [
        character.occupation,
        character.scar,
        character.extra
    ]

    numberStats.forEach(function (stat) {
        if (statInvalid(stat)) {
            ready = false
        }
    })

    stringStats.forEach(function (stat) {
        if (stat == null) {
            ready = false
        }
    })

    return ready
}

function rollExtra(data, refs) {
    let extraRoll = rollDice(2, 6)
    let extra = data.extras.find(e => e.roll == extraRoll)
    if (extra?.text) {
        data.character.extra = extra.text
    } else if (extra?.update) {
        if (extra?.modifier_roll) {
            modifier = rollString(extra.modifier_roll)
            data.character[extra.update] += modifier
            switch (extra.update) {
                case 'agility':
                case 'brawn':
                case 'cunning':
                case 'health':
                case 'wealth':
                    refs[`input_${extra.update}`].value = data.character[extra.update]
            }
            data.character.extra = `Modified ${toTitleCase(extra.update)} by ${extra.modifier_roll} (${modifier})`
        } else if (extra?.function) {
            data.character.extra = window[extra.function](data, refs)
        } else {
            console.error('Invalid extra, update defined without modifier_roll or function', extra)
        }
    } else {
        console.error("Invalid extra, missing text and update keys", extra)
    }
}

function rollString(rolling) {
    let result = 0
    let operation = '+'
    let parts = rolling.split(" ")
    let partPattern = /((?<rollCount>\d+)d(?<rollSize>\d+)|(?<operator>[+*x\-\/])|(?<number>\d+))/
    parts.forEach(function (part) {
        matching = part.match(partPattern)
        if (matching?.groups?.operator) {
            operation = matching.groups.operator
        } else if (matching?.groups?.number) {
            let number = Number(matching.groups.number)
            switch (operation) {
                case '+':
                    result += number
                    break
                case '-':
                    result -= number
                    break
                case '*':
                case 'x':
                case 'X':
                    result *= number
                    break
                case '/':
                    result /= number
                    break
                default:
                    console.error(`Invalid operation '${operation}' when rolling '${rolling}'`)
            }
        } else {
            count = Number(matching.groups.rollCount)
            size = Number(matching.groups.rollSize)
            roll = rollDice(count, size)

            switch (operation) {
                case '+':
                    result += roll
                    break
                case '-':
                    result -= roll
                    break
                case '*':
                case 'x':
                case 'X':
                    result *= roll
                    break
                case '/':
                    result /= roll
                    break
                default:
                    console.error(`Invalid operation '${operation}' when rolling '${rolling}'`)
            }
        }
    })

    return result
}

function generateCharacter(data, refs) {
    resetCharacter(data, refs)
    rollAttributes(data, refs)
    rollHealth(data, refs)
    rollWealth(data, refs)
    rollOccupation(data, refs)
    rollAnyScar(data, refs)

    let learnCount = 0
    if (rollDie(6) > 3) {
        learnCount = rollDie(6) - 1
    }

    if (learnCount > 0) {
        for (learnCount; learnCount > 0; learnCount--) {
            let from = randomItem(['agility', 'brawn', 'cunning', 'health'])
            newRitual(data.temp_ritual, data.ritualInfo)
            data.temp_ritual.cost = rollDie(3)
            data.temp_ritual.from = toTitleCase(from)
            data.character.rituals.push(data.temp_ritual.combined)
            data.character[from] = data.character[from] - data.temp_ritual.cost
            refs[`input_${from}`].value = data.character[from]
            if (checkRitualDeath(data.character) != '') {
                refs.ritual_death_dialog.show()
            }
            resetTempRitual(data)
        }
    }

    rollExtra(data, refs)
}

function generatePartyMember(data, partyMember) {
    partyMember.agility    = rollDice(3, 6)
    partyMember.brawn      = rollDice(3, 6)
    partyMember.cunning    = rollDice(3, 6)
    partyMember.health     = Math.floor(partyMember.brawn * 0.5) + rollDie(6)
    partyMember.wealth     = rollDice(2, 6) * 10
    partyMember.occupation = randomItem(data.occupations)
    partyMember.scar       = randomItem(data.scars).description
    partyMember.pronouns   = randomItem(data.pronouns)

    let learnCount = 0
    if (rollDie(6) > 3) {
        learnCount = rollDie(6) - 1
    }
    if (learnCount > 0) {
        for (learnCount; learnCount > 0; learnCount--) {
            let from = randomItem(['agility', 'brawn', 'cunning', 'health'])
            newRitual(data.temp_ritual, data.ritualInfo)
            data.temp_ritual.cost = rollDie(3)
            data.temp_ritual.from = toTitleCase(from)
            partyMember.rituals.push(data.temp_ritual.combined)
            partyMember[from] = partyMember[from] - data.temp_ritual.cost
            // refs[`input_${from}`].value = data.character[from]
            resetTempRitual(data)
            if (checkRitualDeath(partyMember) != '') {
                generatePartyMember(data, partyMember)
            }
        }
    }

    let extraRoll = rollDice(2, 6)
    let extra = data.extras.find(e => e.roll == extraRoll)
    if (extra?.text) {
        partyMember.extra = extra.text
    } else if (extra?.update) {
        if (extra?.modifier_roll) {
            modifier = rollString(extra.modifier_roll)
            partyMember[extra.update] += modifier
            partyMember.extra = `Modified ${toTitleCase(extra.update)} by ${extra.modifier_roll} (${modifier})`
        } else if (extra?.function) {
            if (extra.function == 'addExtraRitual') {
                newRitual(data.temp_ritual, data.ritualInfo)
                partyMember.rituals.push(data.temp_ritual.combined)
                let extra_text = `Learned the ${data.temp_ritual.combined} without paying any cost.`

                resetTempRitual(data)
            } else {
                partyMember.extra = window[extra.function](data)
            }
        } else {
            console.error('Invalid extra, update defined without modifier_roll or function', extra)
        }
    } else {
        console.error("Invalid extra, missing text and update keys", extra)
    }
}

function generateParty(data) {
    members = data.party.map(member => {
        member = resetPartyMember(member)
        
        return generatePartyMember(data, member)
    })
}

function partyReady(data) {
    let ready = true
    data.party.forEach(member => {
        if (member.agility == null) ready = false
    })
    return ready
}

function resetPartyMember(member) {
    member.name       = "Adventurer"
    member.pronouns   = null
    member.brawn      = null
    member.agility    = null
    member.cunning    = null
    member.health     = null
    member.wealth     = null
    member.occupation = null
    member.scar       = null
    member.rituals    = []
    member.extra      = null

    return member
}

function resetTempRitual(data) {
    data.temp_ritual.combined   = null
    data.temp_ritual.type       = null
    data.temp_ritual.descriptor = null
    data.temp_ritual.noun       = null
}

function resetParty(data) {
    data.party = data.party.map(member => resetPartyMember(member))
}