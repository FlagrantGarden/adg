---
title: Violence
weight: 50
---

You're made of meat and when people poke holes in you, you bleed and die. If you're going to fight
you have to be prepared for it to be to the death, and you should be sure you're going to win
before you draw your blade.

## Fighting

When you attack something, pick which attribute you're using. Unless you can come up with a good
reason why it should be different, use Agility for ranged attacks, Brawn for melee attacks, and
Cunning if there's magic or trickery involved.

Roll ![roll:1d20](). If your result is less than or equal to your attribute and above their Armour
Class (AC), you hit them. Roll your weapon's damage.

If your result is either higher than your attribute or equal to or lower than your enemy's AC, you
miss.

If you roll your attribute exactly your enemy is temporarily stunned and you get to make another
attack immediately.

If you roll the enemy's AC exactly you deal no damage but reduce their AC by 1 for the rest of the
encounter. Armour breaks when the AC reaches 0.

Every roll you make in combat can be modified by +/- X, where X is the number of Scars you possess.

Enemy attacks work in the same manner as adventurer attacks, rolling between their Attack and the
adventurer's AC.

Roll morale for enemies when they reach half health to see if they stay and fight or try to flee.

## Dying

If you reach 0 health for any reason, gain a new Scar. Then roll 2d6 and compare the result to the
number of Scars you have earned.

If your roll is equal to or lower than the number of Scars you have earned, you succumb to your
accumulated injuries and die.

If your roll is higher than the number of Scars you have earned you regain consciousness at 1
health in Xd6 Rounds, where X is the number of Scars you have accrued.

## Combat Rounds

At the start of combat, each character involved makes an initiative roll by rolling ![roll:1d20]()
versus their Agility. Characters who roll under their Agility act before enemies. Those who fail
act after enemies.

Characters who roll their Agility exactly may make one quick action before combat commences -
readying a weapon, quaffing a potion, etc.

On your initiative you have enough time to traverse a normal-sized room and perform one action.

Accessing items in your pack during combat requires a Cunning check to quickly lay hands on it.
Passing the check means that it takes your action on your initiative to locate the item, which may
be used the next Round. Rolling your Cunning exactly means that you can use the item on the same
initiative Round that you retrieved it. Characters failing this check can't quickly locate the item
and must either forgo retrieving it or spend ![roll:1d3]() Rounds searching for it while unable to
take other actions.

## Rituals in Combat

Performing Rituals while fighting is difficult and dangerous. You can't cast a spell and move in
the same Round.

If you take damage before your go in a combat Round, your Cunning check to perform the Ritual only
succeeds if it is equal to or below your Cunning but greater than the amount of damage you took. If
you fail, roll a Mishap as normal.

## Surprise

When enemies are encountered in the dungeon, the fiction will tell you whether one side surprises
the other. If one side is surprised and combat begins, the surprised party takes no actions in the
first combat Round.

If not made obvious by the fiction, encounters in the dungeon occur at [!roll:2d6*10](. "2d6 x 10
feet"). Encounters outside occur at ![roll:2d6*10](. "2d6 x 10 yards").

## Reactions

Roll to determine the initial attitude of any enemy whose reaction to the adventurers isn't obvious
from the fiction.

```roll-table
roll: 2d6
result_text: >-
  Rolled {{ roll }} - their attitude is {{ result }}.
results:
  2--3:   Friendly
  4--6:   Helpful
  7:      Uninterested
  8--10:  Hostile
  11--12: Murderous
```

## Morale

Most enemies will not fight to the death, preferring to flee and live to fight another day. If the
enemy response to violence isn't clear from the fiction, make a Morale check for them.

- When the adventurers face a lone enemy, roll Morale at the end of the first Round in which the
  enemy is reduced to half hit points and for every subsequent Round in which they take damage.
- When facing a group of enemies, roll Morale at the end of each Round in which one of them dies.

  If a group of enemies has a clear leader or is well organised, you may decide to roll for the
  leader as though they were a lone enemy rather than making checks for the group. This check
  should also occur at the end of the first Round in which half of the group is slain, and for
  every subsequent Round in which one of them dies.

To test Morale, roll ![roll:1d20]() under 10 + the enemy's HD. If they are successful, they
continue to fight. If they fail, they flee or surrender at the first opportunity. Enemies who flee
may regroup and strike again, lay ambushes, pursue the adventurers, or simply hold a grudge.

Enemies who roll exactly 10 + their HD on a Morale test rally themselves. They gain an additional
attack in the next combat Round, and don't test Morale again during the encounter.

### Hireling Morale

Hirelings who find themselves in combat are likely to break and flee. At the end of the first Round
in which a hireling takes damage or witnesses a member of the party die, the adventurer who hired
them must test their Morale.

To test Hireling Morale, roll under your Cunning but over the Hireling's HD on a ![roll:d20]().

- On a success, the hireling's morale holds.
- On a failure, the hireling flees and cannot be hired again.
- If you roll exactly the hireling's HD, they waver. They can be convinced to stand and fight if
  paid an additional HD x 15sp.
- If you roll exactly your Cunning, you inspire the hireling to heroics. They may make an
  additional attack in the next combat Round, and their Morale can't be broken during this fight.

## Timekeeping

Time in the dungeon is measured in exploration turns (Turns) and combat rounds (Rounds).

An exploration Turn is approximately ten minutes. This is enough time to search a single room,
traverse a corridor, take a short rest, perform an attribute check, or the like.

Check for random encounters after every Turn by rolling ![roll:1d6](). On a 1, an encounter occurs.
In less populated areas of the dungeon you may wish to change this frequency, lowering checks to
every other Turn or even every third Turn.

Combat is measured in Rounds. Each Round is approximately one minute in game time. Characters have
enough time to traverse a normal-sized room and take an action - ready a weapon, retrieve something
from a pack, make an attack, make an attribute check, etc.

Time outside the dungeon passes in 6 hour Watches. This is enough time to cross or explore a single
hex, or make camp and sleep overnight. Roll for random encounters once per Watch.
