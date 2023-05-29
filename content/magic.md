---
title: Magic
weight: 30
---

All characters can learn magic, but it comes at a cost. You can start with as many Rituals as you
dare to learn. If you overextend yourself and your health or any attribute reaches 0, your
character has died. Make a new one.

To learn a Ritual, roll on the [Ritual Generator](#ritual-generator) or choose something from
another game. Then roll ![roll:1d3]() and reduce either your maximum health or one of your
attributes by that amount permanently. Once you have decided to learn a Ritual you can't change
your mind - you have to roll and pay the price.

New Rituals must be discovered in play. When you discover a new Ritual and try to learn it, roll
1d3 and reduce your maximum health or one of your attributes by that amount permanently. Then roll
under your Cunning on a ![roll:d20](). If the roll succeeds you learn the Ritual. If it fails, that
Ritual is forever lost to you - you can never learn it. You can exert yourself on this roll.

To perform a Ritual, roll under your Cunning on a ![roll:d20](). If you succeed the Ritual takes
effect. If you roll your Cunning score exactly it either lasts twice as long, or is twice as
effective (your choice). If you roll over your Cunning score, the Ritual fails. Roll on the Mishap
table, adding the difference between your failed roll and your Cunning score to your roll.

Rituals that deal damage deal Adventurer Level x 1d6 damage.

There are three kinds of Ritual: Phrases, Sigils, and Ceremonies.

Phrases take no time to cast, occur instantly, and fade as soon as they have taken effect.

Sigils take a minute to draw, can be triggered at will or when a certain condition is met, and
their effects last for ten minutes per Adventurer Level of the caster.

Ceremonies take an hour or more to perform, occur as soon as the ceremony is complete, and their
effects last for one day per Adventurer Level of the caster.

## Ritual Generator

Rituals are made up of three parts - the Ritual Type and two words that are combined to create the
Ritual's effect. Interpret your spells as you see fit and put them to creative use. You've paid the
price to learn them; now they work for you.

```adg_ritual_generator
data_path: core
```

### 1d3 - Ritual Type

```roll-list
result_text: >-
  Rolled {{ roll }} - the ritual is a {{ result }}.
results:
  - Phrase
  - Sigil
  - Ceremony
column_count: 3
```

### 1d20 - Descriptor

```roll-list
column_count: 4
result_text: >-
  Rolled {{ roll }} - descriptor is {{ result }}.
results:
  - Hungering
  - Entropic
  - Corrupting
  - Shifting
  - Rotting
  - Preserved
  - Violating
  - Desecrating
  - Summoning
  - Sloughing
  - Rambling
  - Creating
  - Imbibing
  - Glimmering
  - Evading
  - Wandering
  - Concealing
  - Revealing
  - Lingering
  - Combusting
```

### 1d20 - Noun

```roll-list
column_count: 4
result_text: >-
  Rolled {{ roll }} - noun is {{ result }}.
results:
  - Death
  - Life
  - Swarm
  - Hate
  - Light
  - Darkness
  - Silence
  - Noise
  - Violence
  - Peace
  - Bears
  - Abominations
  - Flesh
  - Blood
  - Ooze
  - Flight
  - Alarm
  - Stone
  - Grief
  - Sword
```

## Mishaps

Roll 2d6 + the difference between your failed roll and your Cunning, then apply the effect below.

Unless specified otherwise, you don't remember new Words that replace those in the Ritual you
failed to cast once the Ritual is complete.

```roll-table
roll_name: 2d6 + Failure
roll: 2d6 + ({{ failed_roll }} - {{ cunning }})
headers:
  - Effect
result_text: >-
  You rolled a {{ roll }}. {{ result }}
prompt_title: Roll for a Mishap
prompts:
  - name: cunning
    help-text: Enter your Cunning.
    min: 1
    max: 20
  - name: failed_roll
    help-text: Enter your failed casting roll.
    min: 1
    max: 20
results:
  3: >-
    Replace the first Word in your Ritual with a random different Word and cast
    it on the same target. Add the new Word to your list of Words known.
  4: >-
    Replace the second Word in your Ritual with a random different Word and
    cast it on the same target.
  5: >-
    Replace the first Word in your Ritual with a random different Word and cast
    it on a different target.
  6: >-
    Replace both Words in your Ritual with different random Words and cast it
    on a different target, in addition to your original Ritual.
  7: >-
    Take 1d6 damage. If you take 4 or more damage, forget the second Word in
    your Ritual and learn a new one in its place.
  8: >-
    Take 1d6 damage. Your Ritual works as intended.
  9: >-
    Take 1d6 damage. If you take 4 or more damage, your Ritual fails. If you
    take 3 or less damage, your Ritual works as intended.
  10: >-
    Your spell has the opposite effect.
  11: >-
    Summon 2 x Adventurer Level bears.
  12: >-
    Lose 1d3 Brawn permanently.
  13: >-
    Lose 1d3 Agility permanently.
  14: >-
    Lose 1d3 Cunning permanently.
  15: >-
    Lose 250 x Adventurer Level XP. If this takes you below 0 XP you die.
  16: >-
    Roll twice and apply both effects. This result stacks.
  ">=17": >-
    You permanently lose the ability to perform Rituals.
```

## Using Spells From Other Games

Instead of rolling 1d3 when attempting to learn a new Ritual, reduce your maximum health or one of
your attributes by the level of the spell you are attempting to learn.

If the spell you are attempting to learn has no level or is level 0, roll ![roll:1d3]() as normal.
