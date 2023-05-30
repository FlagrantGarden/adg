---
title: Character Creation
summary: Process for creating a character.
weight: 10
---

You are an Adventurer.

You possess ![roll:2d6*10](. "2d6 x 10sp") which you can use to outfit yourself prior to the start of
your adventure (see [Equipment](./equipment.md)).

You know nothing, but you will learn.

## Roll Your Attributes

There are three attributes: Agility, Brawn, and Cunning.

**Agility:** Dodge things, tumble and climb, make ranged attacks, run.

**Brawn:** Hit things, lift and push, make melee attacks, resist.

**Cunning:** Spot things, sneak and deceive, wield magic, hide.

Determine them by rolling ![roll:3d6]() in order. You may swap two results.

## Determine Health

Roll ![roll:1d6]() and add half your Brawn score (rounded down) to determine your starting health.

If you reach 0 health for any reason, roll ![roll:2d6]() and compare the result to the number of
Scars you have earned.

If your roll is equal to or lower than the number of Scars you have earned, you succumb to your
accumulated injuries and die.

If your roll is higher than the number of Scars you have earned, gain a new Scar.

## Roll an Occupation

You always roll with advantage when performing tasks related to your vocation.

```roll-list
result_text: >-
  Rolled {{ roll }} - your occupation is {{ result }}.
column_count: 4
results:
  - Archaeologist
  - Astrologer
  - Brewer
  - Burglar
  - Clergyman
  - Courier
  - Dramatist
  - Ditch digger
  - Forester
  - Gambler
  - Hangman
  - Healer
  - Jeweler
  - Netmaker
  - Ostler
  - Scribe
  - Taxidermist
  - Trapper
  - Undertaker
  - Weaver
```

## Choose Scars

The more violence you do over the course of your adventure, the more Scars you accumulate. All
characters start play with one historic Scar.

If you want to think about how you earned it then do so. if you don't, don't. Sometimes it's best
not to dwell on the past.

Once per initiative round when you make a roll in combat you may modify it by +/- X, where X is the
number of Scars you possess.

```roll-table
roll_name: d66
roll: d6,d6
headers:
  - Scar Description
tabs:
  1: Head
  2: Face
  3: Arms
  4: Hands
  5: Legs
  6: Torso
result_text: >-
  You rolled {{ roll }}. Your scar is: <br /><blockquote>{{ result }}</blockquote>
results:
  1-1: >-
    The tip of one of your ears is hacked off.
  1-2: >-
    A flap of skin was sheared away from your scalp, revealing exposed bone.
    The skin will never grow back.
  1-3: >-
    Your ear becomes permanently swollen and deformed, resembling a cauliflower.
  1-4: >-
    There's no physical sign that you were injured, but you've become prone to
    apocalyptic headaches that come on without warning.
  1-5: >-
    The dome of your head is visibly mis-shapen, and helmets don't fit like
    they used to.
  1-6: >-
    Hair only grows on one side of your head now. The other side is knotted
    with scar tissue.
  2-1: >-
    A broken tooth pierced your lip. Your mouth is crooked and your lip is
    permanently a little swollen.
  2-2: >-
    The blade caught you in your mouth, slicing straight through your cheek.
    The scar extends up to just below your cheek bone, and it's a beautiful
    shade of dead-flesh-white.
  2-3: >-
    You never use all of your teeth at the same time anyway. Don't worry -
    you'll get used to only being able to chew on one side eventually.
  2-4: >-
    The blow shattered your orbital bone, leaving your eye hanging out of your
    skull. The bones didn't set quite right and your eye is visibly lower in
    your face than it used to be.
  2-5: >-
    Your nose oozes a small trickle of blood constantly.
  2-6: >-
    One of your cheeks is noticeably lower than the other, with a visible lump
    where the bone didn't set properly.
  3-1: >-
    You fractured your shoulder socket. The joint sometimes catches so your arm
    locks in place and has to be forced back into motion, often painfully. The
    joint grinds audibly when it moves.
  3-2: >-
    One of the tendons in your forearm is permanently damaged. Now your hand
    flops a little too far back at the wrist.
  3-3: >-
    The bones of your wrist didn't quite line up properly when you healed and
    now there's a very visible misalignment where your wrist joins your hand.
  3-4: >-
    Your arm hung limp by your side for so long before you set it and healed 
    that your shoulder now sits a little lower than its opposite number.
  3-5: >-
    Elbows are made to bend, and that's a good thing because yours will never
    be able to extend fully again.
  3-6: >-
    Your arm is twisted so that when you stand the back of your hand sits at a
    right angle to your body, the thumb parallel to your thigh.
  4-1: >-
    You lose the tip of one of your fingers, just below the nail.
  4-2: >-
    The fractured bones of your ring finger rotated slightly during healing and
    now it overlaps your middle finger every time you make a fist.
  4-3: >-
    One of your fingers has had all the meat and sinew torn away from it, so
    that only bone remains.
  4-4: >-
    The skin of your hand is boiled and charred, like meat left on the fire for
    too long.
  4-5: >-
    The veins in the back of your hand are thick and black like they carry an
    infection.
  4-6: >-
    Pick your favourite finger and say goodbye to it. It's gone now.
  5-1: >-
    The bones in your leg were shattered beyond complete repair. That leg will
    always be fractionally shorter than the other.
  5-2: >-
    One of your feet twists inward at an odd angle, and can never be
    straightened properly.
  5-3: >-
    One of your kneecaps has been shifted sideways so that it rests on the
    outside of your leg.
  5-4: >-
    You lose a foot, forever. Find something to replace it with.
  5-5: >-
    Your kneecap is shattered, leaving free-floating chunks of bone just
    beneath your skin.
  5-6: >-
    Your ankle is crushed, and heals with a large, visible lump.
  6-1: >-
    Your chest is visibly concave, the result of poorly-set broken ribs.
  6-2: >-
    Most bruises heal. This one didn't. The skin where you were struck is
    permanently stained a dull shade of piss-yellow, with hints of brown and
    flecks of purple.
  6-3: >-
    Your pectoral muscle is separated from the bone, and when it heals your
    chest on that side is lower than the other.
  6-4: >-
    A thick knot of scar tissue runs down the center of your chest, as though
    you have been zipped up.
  6-5: >-
    Your stomach was split open and poorly stitched, and now you have no
    visible belly button.
  6-6: >-
    After breaking all of your ribs on one side, a metal plate was grafted onto
    your bones. It shines through the hole in your missing flesh.
```

## Learn Rituals (Optional)

All characters can learn magic, but it comes at a cost. You can start with as many Rituals as you
dare to learn. If you overextend yourself and your health or any attribute reaches 0, your
character has died. Make a new one.

To learn a Ritual, roll on the [Ritual Generator](./magic.md#ritual-generator) or choose something
from another game. Then roll ![roll:1d3]() and reduce either your maximum health or one of your
attributes by that amount permanently. Once you have decided to learn a Ritual you can't change
your mind - you have to roll and pay the price.

## Roll an Extra

```roll-table
roll: 2d6
results:
  - +1d3 Cunning
  - +1d3 Brawn
  - +1d3 Agility
  - +1d3 health points
  - -2 to saving throws vs Poison
  - -2 to saving throws vs Spells
  - +2d6 x 10sp
  - +2 AC, always
  - +1 to recovery rolls
  - +1 damage
  - Learn a Ritual without reducing health or attributes
```
