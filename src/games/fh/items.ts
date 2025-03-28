import { FHClasses, GloomhavenItem, GloomhavenItemSlot } from "../../State"
import { Expansions, GameType } from "../GameType"

export const items: GloomhavenItem[] = [
  {
    id: 1,
    gameType: GameType.Frosthaven,
    name: "Spyglass",
    count: 2,
    resources: {
      metal: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 1",
    desc: "During your attack ability, gain advantage on one attack.",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true
  },
  {
    id: 2,
    gameType: GameType.Frosthaven,
    name: "Crude Helmet",
    count: 2,
    resources: {
      metal: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 1",
    desc: "When you are attacked, treat any ^modifier_2x_circle^ attack modifier card the enemy draws as a ^modifier_plus_1^ instead.",
    folder: "001-010",
    unlockCrafstmanLevel: 1
  },
  {
    id: 3,
    gameType: GameType.Frosthaven,
    name: "Traveling Cloak",
    count: 2,
    resources: {
      hide: 1
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 1",
    desc: "At the start of the scenario increase your maximum hit point value by 1.",
    folder: "001-010",
    unlockCrafstmanLevel: 1
  },
  {
    id: 4,
    gameType: GameType.Frosthaven,
    name: "Crude Hide Armor",
    count: 2,
    resources: {
      hide: 2
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 1",
    desc: "On the next two attacks targeting you, the attacker gains disadvantage.",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true,
    minusOneCardsAdded: 1
  },
  {
    id: 5,
    gameType: GameType.Frosthaven,
    name: "Crude Boots",
    count: 2,
    resources: {
      hide: 2
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 1",
    desc: "During your move ability, add +1 ^fh-move^",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true
  },
  {
    id: 6,
    gameType: GameType.Frosthaven,
    name: "Flexible Slippers",
    count: 2,
    resources: {
      hide: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 1",
    desc: "During your end-of-turn looting, loot an adjacent hex instead of the hex you occupy.",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true
  },
  {
    id: 7,
    gameType: GameType.Frosthaven,
    name: "Crude Bow",
    count: 2,
    resources: {
      lumber: 1
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Craftsman 1",
    desc: "During your turn, add +1 ^fh-range^ to one of your ranged attacks.",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true
  },
  {
    id: 8,
    gameType: GameType.Frosthaven,
    name: "Crude Spear",
    count: 2,
    resources: {
      lumber: 1,
      metal: 1
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Craftsman 1",
    desc: "During your turn, one of your single-target melee attack abilities may target an enemy two hexes away.",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true
  },
  {
    id: 9,
    gameType: GameType.Frosthaven,
    name: "Protective Scepter",
    count: 2,
    resources: {
      lumber: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 1",
    desc: "During you turn, grant one ally within ^fh-range^ 2: ^fh-shield^ 1. ^eot^",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    spent: true
  },
  {
    id: 10,
    gameType: GameType.Frosthaven,
    name: "Crude Shield",
    count: 2,
    resources: {
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 1",
    desc: "When an enemy would apply a negative condition to you, prevent the condition",
    folder: "001-010",
    unlockCrafstmanLevel: 1,
    minusOneCardsAdded: 1,
    consumed: true
  },
  {
    id: 11,
    gameType: GameType.Frosthaven,
    name: "Simple Charm",
    count: 2,
    resources: {
      metal: 2
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 2",
    desc: "At the start of the scenario remove one ^modifier_minus_one_circle^ modifier card from your attack modifier deck.",
    folder: "011-015",
    unlockCrafstmanLevel: 2
  },
  {
    id: 12,
    gameType: GameType.Frosthaven,
    name: "Crude Chain Armor",
    count: 2,
    resources: {
      metal: 1
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 2",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 2 for the attack.",
    folder: "011-015",
    unlockCrafstmanLevel: 2,
    spent: true,
    minusOneCardsAdded: 1
  },
  {
    id: 13,
    gameType: GameType.Frosthaven,
    name: "Dancing Slippers",
    count: 2,
    resources: {
      hide: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 2",
    desc: "After you suffer ^damage^ from an attack, perform: ^fh-move^ 2",
    folder: "011-015",
    unlockCrafstmanLevel: 2,
    spent: true
  },
  {
    id: 14,
    gameType: GameType.Frosthaven,
    name: "Heavy Sword",
    count: 2,
    resources: {
      metal: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 2",
    desc: "During your melee attack ability, add +1 ^attack^ to one attack.",
    folder: "011-015",
    unlockCrafstmanLevel: 2,
    spent: true
  },
  {
    id: 15,
    gameType: GameType.Frosthaven,
    name: "Reinforced Shield",
    count: 2,
    resources: {
      item: [
        10
      ],
      lumber: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 2",
    desc: "When an enemy would apply a negative condition to you, prevent the condition.",
    folder: "011-015",
    unlockCrafstmanLevel: 2,
    spent: true,
    minusOneCardsAdded: 2
  },
  {
    id: 16,
    gameType: GameType.Frosthaven,
    name: "Inspiring Helmet",
    count: 2,
    resources: {
      item: [
        2
      ],
      metal: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 3",
    desc: "During your turn, grant all adjacent allies: ^fh-move^ 2",
    folder: "016-020",
    unlockCrafstmanLevel: 3,
    consumed: true
  },
  {
    id: 17,
    gameType: GameType.Frosthaven,
    name: "Cured Leather Armor",
    count: 2,
    resources: {
      item: [
        4,
        98
      ]
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 3\nTreasure 50",
    desc: "On the next two attacks targeting you, the attacker gains disadvantage.",
    folder: "016-020",
    unlockCrafstmanLevel: 3,
    spent: true
  },
  {
    id: 18,
    gameType: GameType.Frosthaven,
    name: "Rough Boots",
    count: 2,
    resources: {
      item: [
        5
      ],
      hide: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 3",
    desc: "During your turn add +1 ^fh-move^ to all your move abilities.",
    folder: "016-020",
    unlockCrafstmanLevel: 3,
    spent: true
  },
  {
    id: 19,
    gameType: GameType.Frosthaven,
    name: "Ringing Hammer",
    count: 1,
    resources: {
      lumber: 1,
      metal: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 3",
    desc: "During your attack ability add $wfh-muddle$ to all your attacks.",
    folder: "016-020",
    unlockCrafstmanLevel: 3,
    minusOneCardsAdded: 1,
    spent: true
  },
  {
    id: 20,
    gameType: GameType.Frosthaven,
    name: "Well Strung Bow",
    count: 1,
    resources: {
      item: [
        7
      ],
      arrowvine: 1
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Craftsman 3",
    desc: "During your turn, add +1 ^fh-range^ to all your ranged attacks.",
    folder: "016-020",
    unlockCrafstmanLevel: 3,
    spent: true
  },
  {
    id: 21,
    gameType: GameType.Frosthaven,
    name: "Chain Hood",
    count: 2,
    resources: {
      metal: 3,
      hide: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 4",
    desc: "While you are adjacent to tree or more enemies, gain ^fh-shield^ 1.",
    folder: "021-025",
    unlockCrafstmanLevel: 4,
    minusOneCardsAdded: 1
  },
  {
    id: 22,
    gameType: GameType.Frosthaven,
    name: "Heavy Chain Armor",
    count: 2,
    resources: {
      item: [
        12
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 4",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 3 for the attack.",
    folder: "021-025",
    unlockCrafstmanLevel: 4,
    minusOneCardsAdded: 2,
    spent: true
  },
  {
    id: 23,
    gameType: GameType.Frosthaven,
    name: "Sturdy Greaves",
    count: 1,
    resources: {
      metal: 2,
      hide: 2
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 4",
    desc: "At the start of your turn, add -2 ^fh-move^ to all your move abilities to gain ^fh-shield^ this round. ^eot^",
    folder: "021-025",
    unlockCrafstmanLevel: 4,
    minusOneCardsAdded: 2,
    spent: true
  },
  {
    id: 24,
    gameType: GameType.Frosthaven,
    name: "Corrupted Blade",
    count: 2,
    resources: {
      item: [
        14,
        98
      ]
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 4\nWR-04",
    desc: "During your melee attack ability, add $wfh-wound$, $wfh-poison$, $wfh-muddle$ to one attack.",
    folder: "021-025",
    unlockCrafstmanLevel: 4,
    consumed: true
  },
  {
    id: 25,
    gameType: GameType.Frosthaven,
    name: "Soothing Scepter",
    count: 1,
    resources: {
      lumber: 1,
      hide: 1,
      rockroot: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 4",
    desc: "During your turn, perform $wfh-regenerate$ ~!^target^ 1 ally, ^fh-range^ 2!~",
    folder: "021-025",
    unlockCrafstmanLevel: 4,
    spent: true
  },
  {
    id: 26,
    gameType: GameType.Frosthaven,
    name: "Truesight Lenses",
    count: 2,
    resources: {
      metal: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 5",
    desc: "During your attack ability, treat all negative and ^modifier_no_damage^ modifier cards as ^modifier_zero_circle^ instead.",
    folder: "026-030",
    unlockCrafstmanLevel: 5,
    spent: true
  },
  {
    id: 27,
    gameType: GameType.Frosthaven,
    name: "Cloak of Warding",
    count: 2,
    resources: {
      item: [
        3,
        91
      ],
      hide: 1
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 5\nSR-17",
    desc: "Immediately after an enemy ends its move ability adjacent to you, perform $wfh-push$ 1 ~!^target^ the enemy!~",
    folder: "026-030",
    unlockCrafstmanLevel: 5,
    consumed: true
  },
  {
    id: 28,
    gameType: GameType.Frosthaven,
    name: "Sturdy Boots",
    count: 2,
    resources: {
      item: [
        18
      ],
      hide: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 5",
    desc: "During your turn add +1 ^fh-move^ to all your move abilities and ignore difficult terrain.",
    folder: "026-030",
    unlockCrafstmanLevel: 5,
    spent: true
  },
  {
    id: 29,
    gameType: GameType.Frosthaven,
    name: "Cleaving Axe",
    count: 2,
    resources: {
      lumber: 1,
      metal: 2
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Craftsman 5",
    desc: "After your melee attack, one enemy adjacent to the target suffers ^damage^ 2.",
    folder: "026-030",
    unlockCrafstmanLevel: 5,
    spent: true
  },
  {
    id: 30,
    gameType: GameType.Frosthaven,
    name: "Parrying Gauntlet",
    count: 2,
    resources: {
      metal: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 5",
    desc: "Immediately after an enemy ends its move ability adjacent to you, perform ^attack^ 3 ~!^target^ the enemy!~",
    folder: "026-030",
    unlockCrafstmanLevel: 5,
    consumed: true
  },
  {
    id: 31,
    gameType: GameType.Frosthaven,
    name: "Deathproof Charm",
    count: 2,
    resources: {
      item: [
        11,
        106
      ]
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 6\nWR-37\nSO-11",
    desc: "When you suffer ^damage^ from any source, negate the ^damage^.",
    folder: "031-035",
    unlockCrafstmanLevel: 6,
    consumed: true
  },
  {
    id: 32,
    gameType: GameType.Frosthaven,
    name: "Shell Armor",
    count: 1,
    resources: {
      lumber: 1,
      metal: 2,
      hide: 2
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 6",
    desc: "During yur turn, perform $wfh-ward$ ~!self!~",
    folder: "031-035",
    unlockCrafstmanLevel: 6,
    spent: true
  },
  {
    id: 33,
    gameType: GameType.Frosthaven,
    name: "Volatile Boots",
    count: 2,
    resources: {
      item: [
        18,
        96
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 6",
    desc: "Up to once each turn during your move ability, add +1 ^fh-move^, then flip this card over at the end of your turn.",
    backDesc: "Up to once each turn during your move ability, suffer ^damage^ 1, then flip this card over at the end of your turn.",
    folder: "031-035",
    unlockCrafstmanLevel: 6
  },
  {
    id: 34,
    gameType: GameType.Frosthaven,
    name: "Shrapnel Bomb",
    count: 2,
    resources: {
      item: [
        97
      ],
      metal: 2
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 6",
    desc: "After your ranged attack, all enemies adjacent to the target suffer ^damage^ 2.",
    folder: "031-035",
    unlockCrafstmanLevel: 6,
    consumed: true
  },
  {
    id: 35,
    gameType: GameType.Frosthaven,
    name: "Kite Shield",
    count: 2,
    resources: {
      lumber: 2,
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 6",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 1 for the attack and prevent any negative conditions from the attack.",
    folder: "031-035",
    unlockCrafstmanLevel: 6,
    minusOneCardsAdded: 2,
    spent: true
  },
  {
    id: 36,
    gameType: GameType.Frosthaven,
    name: "Plumed Helmet",
    count: 2,
    resources: {
      item: [
        16
      ],
      hide: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 7",
    desc: "When you are attacked by an attack with disadvantage, treat all ^modifier_zero_circle^ and ^modifier_plus_1^ attack modifier cards as ^modifier_minus_one_circle^.",
    folder: "036-040",
    unlockCrafstmanLevel: 7
  },
  {
    id: 37,
    gameType: GameType.Frosthaven,
    name: "Ghost Cloak",
    count: 2,
    resources: {
      item: [
        3,
        114
      ],
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 7\nSR-36",
    desc: "During your turn suffer ^damage^ 3 to perform $invisible$ ~!self!~",
    folder: "036-040",
    unlockCrafstmanLevel: 7,
    consumed: true
  },
  {
    id: 38,
    gameType: GameType.Frosthaven,
    name: "Duelists Shoes",
    count: 1,
    resources: {
      item: [
        13,
        113
      ]
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 7",
    desc: "During your turn, perform: ^fh-move^ 2 This movement must end adjacent to an enemy.",
    folder: "036-040",
    unlockCrafstmanLevel: 7,
    spent: true
  },
  {
    id: 39,
    gameType: GameType.Frosthaven,
    name: "Abyss Axe",
    count: 2,
    resources: {
      item: [
        29,
        101,
        112
      ]
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Craftsman 7",
    desc: "During your attack ability, add +3 ^attack^ and $wfh-pierce$ 1 to one attack targeting a Frozen Corpse, Ice Wraith, or Living Doom.",
    folder: "036-040",
    unlockCrafstmanLevel: 7,
    spent: true
  },
  {
    id: 40,
    gameType: GameType.Frosthaven,
    name: "Heartstrike Bow",
    count: 1,
    resources: {
      item: [
        20,
        85
      ],
      lumber: 1
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Craftsman 7",
    desc: "During your turn, add +1 ^attack^ and +2 ^fh-range^ to one of your ranged attacks.",
    folder: "036-040",
    unlockCrafstmanLevel: 7,
    spent: true
  },
  {
    id: 41,
    gameType: GameType.Frosthaven,
    name: "Intricate Charm",
    count: 2,
    resources: {
      item: [
        11,
        110
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 8",
    desc: "At the start of the scenario remove one ^modifier_zero_circle^ and one ^modifier_minus_one_circle^ modifier card from your attack modifier deck.",
    folder: "041-045",
    unlockCrafstmanLevel: 8
  },
  {
    id: 42,
    gameType: GameType.Frosthaven,
    name: "Ornate Armor",
    count: 2,
    resources: {
      item: [
        112
      ],
      metal: 3
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 8",
    desc: "On the next two sources of ^damage^ from attacks targeting you gain ^fh-shield^ 2 for the attacks.",
    folder: "041-045",
    unlockCrafstmanLevel: 8,
    minusOneCardsAdded: 4,
    spent: true
  },
  {
    id: 43,
    gameType: GameType.Frosthaven,
    name: "Kicking Boots",
    count: 2,
    resources: {
      item: [
        28,
        90
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 8",
    desc: "During your melee attack ability, add $wfh-push$ 2 to one attack.",
    folder: "041-045",
    unlockCrafstmanLevel: 8,
    spent: true
  },
  {
    id: 44,
    gameType: GameType.Frosthaven,
    name: "Sword of Absolution",
    count: 2,
    resources: {
      item: [
        24,
        101
      ]
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 8",
    desc: "When you would gain $wfh-poison$ or $wfh-curse$, gain $wfh-bless$ instead.",
    folder: "041-045",
    unlockCrafstmanLevel: 8,
    spent: true
  },
  {
    id: 45,
    gameType: GameType.Frosthaven,
    name: "Master Scepter",
    count: 2,
    resources: {
      item: [
        9,
        25
      ]
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 8",
    desc: "During your turn, perform: ^fh-heal^ 1 ~!^target^ 1 ally, ^fh-range^ 2, $wfh-ward$!~ ",
    folder: "041-045",
    unlockCrafstmanLevel: 8,
    spent: true
  },
  {
    id: 46,
    gameType: GameType.Frosthaven,
    name: "Double-Lens Goggles",
    count: 2,
    resources: {
      item: [
        26,
        129
      ],
      hide: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Craftsman 9",
    desc: "During your attack ability, gain advantage on all attacks and treat all ^modifier_zero_circle^ and ^modifier_minus_one_circle^ modifier cards as ^modifier_plus_1^ instead.",
    folder: "046-050",
    unlockCrafstmanLevel: 9,
    spent: true
  },
  {
    id: 47,
    gameType: GameType.Frosthaven,
    name: "Robes of Doom",
    count: 2,
    resources: {
      item: [
        27,
        119,
        162
      ]
    },
    slot: GloomhavenItemSlot.Body,
    source: "Craftsman 9\nWR-34",
    desc: "On the next two sources of ^damage^ from attacks targeting you, suffer ^damage^ 3 to give the attacker $wfh-brittle$.",
    folder: "046-050",
    unlockCrafstmanLevel: 9,
    spent: true
  },
  {
    id: 48,
    gameType: GameType.Frosthaven,
    name: "Living Shoes",
    count: 2,
    resources: {
      item: [
        13
      ],
      hide: 2,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Craftsman 9",
    desc: "After an ally's heal ability targeting you, perform: ^fh-move^ 2",
    folder: "046-050",
    unlockCrafstmanLevel: 9
  },
  {
    id: 49,
    gameType: GameType.Frosthaven,
    name: "Cruel Dagger",
    count: 2,
    resources: {
      item: [
        111,
        145
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 9",
    desc: "During your melee attack ability, add +1 ^attack^ and $wfh-wound$ to one attack.",
    folder: "046-050",
    unlockCrafstmanLevel: 9,
    spent: true,
    faq: "There is a misprint in the first edition of the game. This item should be spent"
  },
  {
    id: 50,
    gameType: GameType.Frosthaven,
    name: "Shield of Reciprocity",
    count: 2,
    resources: {
      item: [
        35,
        105,
        161
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Craftsman 9",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 1 for the attack and flip this card over.",
    backDesc: "During your melee attack ability, add $wfh-pierce$ 1 to one attack and flip this card over.",
    folder: "046-050",
    unlockCrafstmanLevel: 9,
    minusOneCardsAdded: 3
  },
  {
    id: 51,
    gameType: GameType.Frosthaven,
    name: "Spiked Collar",
    count: 2,
    resources: {
      item: [
        11
      ],
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "Random Blueprint\nSO-48",
    desc: "During your turn perform $wfh-wound$ ~!self!~",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 52,
    gameType: GameType.Frosthaven,
    name: "Laser Lens",
    count: 2,
    resources: {
      item: [
        97,
        129
      ]
    },
    slot: GloomhavenItemSlot.Head,
    source: "Random Blueprint",
    desc: "During your turn, @wfh-fire-consume@ to cause up to two enemies within ^fh-range^ 4 to suffer ^damage^ 1.",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 53,
    gameType: GameType.Frosthaven,
    name: "Hobnail Boots",
    count: 2,
    resources: {
      item: [
        18,
        88
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Random Blueprint",
    desc: "After you move 4 or more hexes during your turn, gain ^retaliate^ 1 for the round.",
    folder: "051-065",
    imageSuffix: "a"
  },
  {
    id: 54,
    gameType: GameType.Frosthaven,
    name: "Restful Slippers",
    count: 2,
    resources: {
      item: [
        6,
        92
      ],
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Random Blueprint",
    desc: "During your short rest, instead of randomly losing one card from your discard pile, randomly draw three cards from your discard pile and choose one to lose.",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 55,
    gameType: GameType.Frosthaven,
    name: "Biting Gauntlet",
    count: 2,
    resources: {
      item: [
        94
      ],
      metal: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Random Blueprint",
    desc: "When you are attacked by an adjacent enemy, gain ^retaliate^ 2 for the attack.",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 56,
    gameType: GameType.Frosthaven,
    name: "Scavenger's Magnet",
    count: 2,
    resources: {
      lumber: 1,
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Random Blueprint",
    desc: "During your turn, @wfh-earth-consume@ to loot one adjacent loot token.",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 57,
    gameType: GameType.Frosthaven,
    name: "Shovel",
    count: 2,
    resources: {
      lumber: 1,
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Random Blueprint",
    desc: "During your turn, destroy one adjacent obstacle, hazardous terrain, difficult terrain, icy terrain, or trap tile.",
    folder: "051-065",
    imageSuffix: "a",
    consumed: false
  },
  {
    id: 58,
    gameType: GameType.Frosthaven,
    name: "Slippery Sword",
    count: 2,
    resources: {
      item: [
        14,
        85,
        90
      ]
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Random Blueprint",
    desc: "During your melee attack ability, add +2 ^attack^ to one attack. After the ability, gain $wfh-disarm$.",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 59,
    gameType: GameType.Frosthaven,
    name: "Charm of Expertise",
    count: 2,
    resources: {
      item: [
        11,
        113
      ]
    },
    slot: GloomhavenItemSlot.Head,
    source: "Random Blueprint",
    desc: "At the start of the scenario, for the scenario, gain one 1-mark perk from your character sheet which you have not yet gained.",
    folder: "051-065",
    imageSuffix: "a"
  },
  {
    id: 60,
    gameType: GameType.Frosthaven,
    name: "Cloak of Many Pockets",
    count: 2,
    resources: {
      item: [
        132
      ],
      hide: 3
    },
    slot: GloomhavenItemSlot.Body,
    source: "Random Blueprint",
    desc: "At the start of the scenario, bring up to two additional #small# items.",
    folder: "051-065",
    imageSuffix: "a"
  },
  {
    id: 61,
    gameType: GameType.Frosthaven,
    name: "Spiked Shell",
    count: 2,
    resources: {
      item: [
        32,
        105
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Body,
    source: "Random Blueprint",
    desc: "Immediately after you are attacked by an adjacent enemy, that enemy suffers ^damage^ X, where is X is your ^fh-shield^ value for the attack.",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 62,
    gameType: GameType.Frosthaven,
    name: "Everlasting Boots",
    count: 2,
    resources: {
      item: [
        28,
        99
      ]
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Random Blueprint",
    desc: "During your move ability, add +1 ^fh-move^ and gain $wfh-regenerate$",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 63,
    gameType: GameType.Frosthaven,
    name: "Shadow Stompers",
    count: 2,
    resources: {
      item: [
        13,
        158
      ]
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Random Blueprint",
    desc: "During your move ability, @wfh-dark-consume@ add +2 ^fh-move^",
    folder: "051-065",
    imageSuffix: "a",
    spent: true
  },
  {
    id: 64,
    gameType: GameType.Frosthaven,
    name: "Detonator",
    count: 2,
    resources: {
      item: [
        96,
        112
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Random Blueprint",
    desc: "When one of your summons is killed, all enemies adjacent to it suffer ^damage^ 2 and gain $wfh-wound$.",
    folder: "051-065",
    imageSuffix: "a",
    consumed: true
  },
  {
    id: 65,
    gameType: GameType.Frosthaven,
    name: "Rust Powder",
    count: 2,
    resources: {
      item: [
        157
      ],
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Random Blueprint",
    desc: "During your turn, place a character token on one normal or elite enemy within ^fh-range^ 3.  That enemy gains -1 ^fh-shield^ for the scenario. ^ongoing^",
    folder: "051-065",
    imageSuffix: "a",
    consumed: true
  },
  {
    id: 66,
    gameType: GameType.Frosthaven,
    name: "Amulet of Eternal Life",
    count: 2,
    resources: {
      item: [
        109,
        120
      ]
    },
    slot: GloomhavenItemSlot.Head,
    source: "Scenario 188",
    desc: "At the start of your rest, perform: ^fh-heal^ 1 ~!self!~",
    folder: "066-082"
  },
  {
    id: 67,
    gameType: GameType.Frosthaven,
    name: "Converging Lenses",
    count: 2,
    resources: {
      item: [
        1,
        93
      ],
      metal: 1
    },
    slot: GloomhavenItemSlot.Head,
    source: "unknown",
    desc: "When you are attacked, add +1 ^attack^ to attack to instead of drawing an attack modifier card and flip this card over.",
    backDesc: "During you attack ability add +1 ^attack^ to one attack instead of drawing an attack modifier card and flip this card over.",
    folder: "066-082"
  },
  {
    id: 68,
    gameType: GameType.Frosthaven,
    name: "Scaled Armor",
    count: 2,
    resources: {
      item: [
        89,
        123
      ]
    },
    slot: GloomhavenItemSlot.Body,
    source: "Treasure 22",
    desc: "On the next three sources of 2 or fewer ^damage^ you would suffer, negate the ^damage^.",
    folder: "066-082",
    consumed: true
  },
  {
    id: 69,
    gameType: GameType.Frosthaven,
    name: "Feathered Cloak",
    count: 2,
    resources: {
      item: [
        3,
        233
      ]
    },
    slot: GloomhavenItemSlot.Body,
    source: "Scenario 32",
    desc: "When you suffer ^damage^ from an attack, @wfh-air-consume@ to gain ^fh-shield^ 3 for the attack.",
    folder: "066-082",
    spent: true
  },
  {
    id: 70,
    gameType: GameType.Frosthaven,
    name: "Aesther Robe",
    count: 2,
    resources: {
      item: [
        27,
        113
      ]
    },
    slot: GloomhavenItemSlot.Body,
    source: "Scenario 81",
    desc: "When you suffer ^damage^ from ^retaliate^, reduce the ^damage^ to 1. If it already 1, reduce it to 0 instead.",
    folder: "066-082"
  },
  {
    id: 71,
    gameType: GameType.Frosthaven,
    name: "Bone Boots",
    count: 2,
    resources: {
      item: [
        18
      ],
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.Legs,
    source: "Treasure 49",
    desc: "After your ability where you kill an enemy, perform: ^fh-move^ 4",
    folder: "066-082",
    consumed: true
  },
  {
    id: 72,
    gameType: GameType.Frosthaven,
    name: "Oak Staff",
    count: 2,
    resources: {
      item: [
        91
      ],
      lumber: 1
    },
    slot: GloomhavenItemSlot.TwoHands,
    source: "Treasure 82",
    desc: "During you turn, @wfh-light-consume@ to perform: $wfh-bless$ ~!^fh-range^ 3!~",
    folder: "066-082",
    spent: true
  },
  {
    id: 73,
    gameType: GameType.Frosthaven,
    name: "Energizing Baton",
    count: 2,
    resources: {
      item: [
        101
      ],
      metal: 2
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 44",
    desc: "When you apply a positive condition to an ally, a different ally within ^fh-range^ 3 gains the same condition.",
    folder: "066-082",
    spent: true
  },
  {
    id: 74,
    gameType: GameType.Frosthaven,
    name: "Shock Grenades",
    count: 2,
    resources: {
      item: [
        19,
        97
      ]
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 51",
    desc: "During your turn, perform $wfh-muddle$ ~!^fh-range^ 2!~ *cone_1_1*",
    folder: "066-082",
    spent: true
  },
  {
    id: 75,
    gameType: GameType.Frosthaven,
    name: "Rose Gauntlet",
    count: 2,
    resources: {
      item: [
        30
      ],
      flamefruit: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 110",
    desc: "After any ally within ^fh-range^ 2 suffers ^damage^ from an attack, remove all negative conditions from the ally then perform: ^fh-heal^ 3 ~!^target^ the ally, $wfh-pull$ 1!~",
    folder: "066-082",
    consumed: true
  },
  {
    id: 76,
    gameType: GameType.Frosthaven,
    name: "Horn of Command",
    count: 2,
    resources: {
      metal: 1,
      hide: 1,
      rockroot: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 70",
    desc: "During one of your summons' turns, decide how it performs its abilities.",
    folder: "066-082",
    spent: true
  },
  {
    id: 77,
    gameType: GameType.Frosthaven,
    name: "Chaos Cannon",
    count: 2,
    resources: {
      item: [
        86
      ],
      metal: 2
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 40",
    desc: "During you turn, replace one 1-hex obstacle, hazardous terrain, difficult terrain, or icy terrain tile in an unoccupied hex within ^fh-range^ 2 with a different type of tile listed above.",
    folder: "066-082",
    consumed: true
  },
  {
    id: 78,
    gameType: GameType.Frosthaven,
    name: "Balanced Scales",
    count: 2,
    resources: {
      item: [
        110
      ],
      metal: 1,
      hide: 1
    },
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 31",
    desc: "Once each turn, during your attack ability, gain advantage on one attack, then flip this card over at the end of your turn.",
    backDesc: "Once each turn, during your attack ability, gain disadvantage on one attack, then flip this card over at the end of your turn.",
    folder: "066-082",
    faq: "In Scenario 122, both treasures are listed as 31. This might be an error. As such, the source might not be accurate."
  },
  {
    id: 79,
    gameType: GameType.Frosthaven,
    name: "Roasted Fowl",
    count: 2,
    resources: {
      hide: 2,
      flamefruit: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 93",
    desc: "During you turn, add +1 ^attack^ to all your attacks and perform: ^fh-heal^ 2 ~!self!~",
    folder: "066-082",
    consumed: true
  },
  {
    id: 80,
    gameType: GameType.Frosthaven,
    name: "Living Stone",
    count: 2,
    resources: {
      item: [
        99,
        156
      ],
      rockroot: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Treasure 72",
    desc: "When you would suffer 4 or fewer ^damage^ from attack, negate the ^damage^ and perform ^fh-heal^ X ~!self!~ where x is the amount of damage you would have suffered.",
    folder: "066-082",
    consumed: true
  },
  {
    id: 81,
    gameType: GameType.Frosthaven,
    name: "Pain Simulacrum",
    count: 2,
    resources: {
      item: [
        97
      ],
      hide: 2
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Treasure 59",
    desc: "When you suffer 5 or fewer ^damage^ from an attack, one enemy within ^fh-range^ 2 also suffers the same amount of ^damage^.",
    folder: "066-082",
    consumed: true
  },
  {
    id: 82,
    gameType: GameType.Frosthaven,
    name: "Mechanical Cube",
    count: 2,
    resources: {
      item: [
        112
      ],
      metal: 2
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Both Treasure 62 and 69",
    desc: "During your move ability, after you enter any one hex, give $wfh-immobilize$ to all adjacent enemies.",
    folder: "066-082",
    consumed: true
  },
  {
    id: 83,
    gameType: GameType.Frosthaven,
    name: "Healing Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      rockroot: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform ^fh-heal^ 3 ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 84,
    gameType: GameType.Frosthaven,
    name: "Stamina Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, ^recover^ one level 1 card from your discard pile.",
    folder: "083-119",
    consumed: true,
    lost: true
  },
  {
    id: 85,
    gameType: GameType.Frosthaven,
    name: "Power Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, add +1 ^attack^ to all your attacks.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 86,
    gameType: GameType.Frosthaven,
    name: "Element Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, @wfh-wild@",
    folder: "083-119",
    consumed: true
  },
  {
    id: 87,
    gameType: GameType.Frosthaven,
    name: "Cure Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, remove one negative condition you have.  This item can be used while you have $wfh-impair$ or $wfh-stun$.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 88,
    gameType: GameType.Frosthaven,
    name: "Fireshield Potion",
    count: 2,
    resources: {
      rockroot: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn perform ^retaliate^ 1 ~!^fh-range^ 3!~ ^eot^",
    folder: "083-119",
    consumed: true
  },
  {
    id: 89,
    gameType: GameType.Frosthaven,
    name: "Stoneskin Potion",
    count: 2,
    resources: {
      rockroot: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-ward$ ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 90,
    gameType: GameType.Frosthaven,
    name: "Muscle Potion",
    count: 2,
    resources: {
      rockroot: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-strengthen$ ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 91,
    gameType: GameType.Frosthaven,
    name: "Holy Water",
    count: 2,
    resources: {
      corpsecap: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-bless$ ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 92,
    gameType: GameType.Frosthaven,
    name: "Renewing Potion",
    count: 2,
    resources: {
      rockroot: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, ^recover^ up to two of your spent items.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 93,
    gameType: GameType.Frosthaven,
    name: "Glancing Potion",
    count: 2,
    resources: {
      rockroot: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "When you reveal a ^modifier_no_damage^ attack modifier card from your attack modifier deck, treat it as a ^modifier_zero_circle^ instead.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 94,
    gameType: GameType.Frosthaven,
    name: "Frenzy Potion",
    count: 2,
    resources: {
      corpsecap: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform: ^attack^ 2",
    folder: "083-119",
    consumed: true
  },
  {
    id: 95,
    gameType: GameType.Frosthaven,
    name: "Poison Vial",
    count: 2,
    resources: {
      snowthistle: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy\nSR-14",
    desc: "During your turn, perform $wfh-poison$ ~!^fh-range^ 1!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 96,
    gameType: GameType.Frosthaven,
    name: "Flame Vial",
    count: 2,
    resources: {
      snowthistle: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-wound$ ~!^fh-range^ 1!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 97,
    gameType: GameType.Frosthaven,
    name: "Explosive Vial",
    count: 2,
    resources: {
      snowthistle: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, one enemy within ^fh-range^ 2 suffers ^damage^ 2.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 98,
    gameType: GameType.Frosthaven,
    name: "Unhealthy Mixture",
    count: 2,
    resources: {},
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy\nWO-10",
    desc: "During your turn, perform $wfh-wound$, $wfh-poison$ ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 99,
    gameType: GameType.Frosthaven,
    name: "Major Healing Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      rockroot: 1,
      snowthistle: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform ^fh-heal^ 6 ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 100,
    gameType: GameType.Frosthaven,
    name: "Major Stamina Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      snowthistle: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, ^recover^ one card from your discard pile.",
    folder: "083-119",
    consumed: true,
    lost: true
  },
  {
    id: 101,
    gameType: GameType.Frosthaven,
    name: "Major Power Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      axenut: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, add +2 ^attack^ to all your attacks.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 102,
    gameType: GameType.Frosthaven,
    name: "Major Element Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      axenut: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, @wfh-wild@ @wfh-wild@",
    folder: "083-119",
    consumed: true
  },
  {
    id: 103,
    gameType: GameType.Frosthaven,
    name: "Major Cure Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      corpsecap: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, remove all negative conditions you have.  This item can be used while you have $wfh-impair$ or $wfh-stun$.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 104,
    gameType: GameType.Frosthaven,
    name: "Swiftness Potion",
    count: 2,
    resources: {
      rockroot: 1,
      axenut: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your move ability, add +3 ^fh-move^ and ^fh-jump^.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 105,
    gameType: GameType.Frosthaven,
    name: "Major Fireshield Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      rockroot: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform, ^retaliate^ 2 ~!^fh-range^ 3!~ ^eot^",
    folder: "083-119",
    consumed: true
  },
  {
    id: 106,
    gameType: GameType.Frosthaven,
    name: "Stonewall Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      rockroot: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-ward$ ~!^target^ 2 adjacent allies and self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 107,
    gameType: GameType.Frosthaven,
    name: "Vigor Potion",
    count: 2,
    resources: {
      arrowvine: 1,
      rockroot: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-strengthen$ ~!^target^ 2 adjacent allies and self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 108,
    gameType: GameType.Frosthaven,
    name: "Holy Rain",
    count: 2,
    resources: {
      arrowvine: 1,
      snowthistle: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform $wfh-bless$ ~!^target^ 2 adjacent allies and self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 109,
    gameType: GameType.Frosthaven,
    name: "Major Renewing Potion",
    count: 2,
    resources: {
      rockroot: 1,
      snowthistle: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, ^recover^ up to one of your lost 2-herb potions.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 110,
    gameType: GameType.Frosthaven,
    name: "Precision Potion",
    count: 2,
    resources: {
      rockroot: 1,
      snowthistle: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "When you reveal a ^modifier_no_damage^ attack modifier card from your attack modifier deck, treat it as a ^modifier_plus_2^ instead.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 111,
    gameType: GameType.Frosthaven,
    name: "Major Frenzy Potion",
    count: 2,
    resources: {
      rockroot: 1,
      axenut: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform: ^attack^ 4",
    folder: "083-119",
    consumed: true
  },
  {
    id: 112,
    gameType: GameType.Frosthaven,
    name: "Hammer Potion",
    count: 2,
    resources: {
      rockroot: 1,
      snowthistle: 1,
      axenut: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn suffer ^damage^ 10.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 113,
    gameType: GameType.Frosthaven,
    name: "Expertise Potion",
    count: 2,
    resources: {
      rockroot: 1,
      corpsecap: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "At the start of your turn, discard one of your played cards to perform both the top and bottom actions of your other played card. At most one action can trigger a ^consumed^ icon.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 114,
    gameType: GameType.Frosthaven,
    name: "Foresight Potion",
    count: 2,
    resources: {
      snowthistle: 1,
      corpsecap: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, reveal the top card of one monster ability deck. You may place the card on the bottom of the deck.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 115,
    gameType: GameType.Frosthaven,
    name: "Infusion Potion",
    count: 2,
    resources: {
      axenut: 1,
      corpsecap: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, ignore one elemental consumption symbol on an action you played and gain its effect.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 116,
    gameType: GameType.Frosthaven,
    name: "Plague Flask",
    count: 2,
    resources: {
      snowthistle: 1,
      axenut: 1,
      corpsecap: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn perform, $wfh-poison$ ~!^fh-range^ 1!~ *cone_1_1*",
    folder: "083-119",
    consumed: true
  },
  {
    id: 117,
    gameType: GameType.Frosthaven,
    name: "Inferno Flask",
    count: 2,
    resources: {
      snowthistle: 1,
      axenut: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn perform, $wfh-wound$ ~!^fh-range^ 1!~ *cone_1_1*",
    folder: "083-119",
    consumed: true
  },
  {
    id: 118,
    gameType: GameType.Frosthaven,
    name: "Fulminant Flask",
    count: 2,
    resources: {
      arrowvine: 1,
      snowthistle: 1,
      flamefruit: 1
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, one enemy within ^fh-range^ 2 suffers ^damage^ 4.",
    folder: "083-119",
    consumed: true
  },
  {
    id: 119,
    gameType: GameType.Frosthaven,
    name: "Deadly Mixture",
    count: 2,
    resources: {
      any: [
        2,
        1
      ]
    },
    slot: GloomhavenItemSlot.SmallItem,
    source: "Alchemy",
    desc: "During your turn, perform: $wfh-wound$, $wfh-poison$, $wfh-immobilize$, $wfh-disarm$ ~!self!~",
    folder: "083-119",
    consumed: true
  },
  {
    id: 120,
    gameType: GameType.Frosthaven,
    name: "Amulet of Life",
    count: 2,
    cost: 15,
    slot: GloomhavenItemSlot.Head,
    source: "Initially Available",
    desc: "During your turn, perform ^fh-heal^ 1 ~!self!~",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 121,
    gameType: GameType.Frosthaven,
    name: "Circlet of Elements",
    count: 2,
    cost: 25,
    slot: GloomhavenItemSlot.Head,
    source: "Initially Available",
    desc: "During your turn, perform",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true,
    consumption: {
      elements: [
        {
          element: "wild",
          "consume": true
        }
      ],
      effect: "@wfh-wild@"
    }
  },
  {
    id: 122,
    gameType: GameType.Frosthaven,
    name: "Warden's Robes",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Body,
    source: "Initially Available",
    desc: "When one of your summons suffers ^damage^ from an attack, that summons gains ^fh-shield^ 2 for the attack.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 123,
    gameType: GameType.Frosthaven,
    name: "Leather Armor",
    count: 2,
    cost: 15,
    slot: GloomhavenItemSlot.Body,
    source: "Initially Available",
    desc: "When you are attacked, before drawing an attack modifier car, the attacker gains disadvantage on the attack.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 124,
    gameType: GameType.Frosthaven,
    name: "Winged Shoes",
    count: 2,
    cost: 15,
    slot: GloomhavenItemSlot.Legs,
    source: "Initially Available",
    desc: "During your turn, add ^fh-jump^ to all your move abilities.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 125,
    gameType: GameType.Frosthaven,
    name: "Boots of Speed",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Legs,
    source: "Initially Available",
    desc: "During ordering of initiative after all ability card have been revealed, increase or decrease your initiative by 10.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 126,
    gameType: GameType.Frosthaven,
    name: "Weighted Net",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Initially Available",
    desc: "During your ranged attack ability, add $wfh-immobilize$ to one attack.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 127,
    gameType: GameType.Frosthaven,
    name: "Poison Dagger",
    count: 2,
    cost: 15,
    slot: GloomhavenItemSlot.OneHand,
    source: "Initially Available",
    desc: "During your melee attack ability, add $wfh-poison$ to one attack.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 128,
    gameType: GameType.Frosthaven,
    name: "Heater Shield",
    count: 2,
    cost: 15,
    slot: GloomhavenItemSlot.OneHand,
    source: "Initially Available",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 1 for the attack.",
    folder: "120-128",
    unlockTradingPostLevel: -1,
    spent: true
  },
  {
    id: 129,
    gameType: GameType.Frosthaven,
    name: "Eagle-Eye Goggles",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "Trading Post 2",
    desc: "During your attack ability, gain advantage on all attacks.",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    spent: true
  },
  {
    id: 130,
    gameType: GameType.Frosthaven,
    name: "Iron Helmet",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.Head,
    source: "Trading Post 2",
    desc: "When you are attacked, treat any ^modifier_2x_circle^ attack modifier card the enemy draws as a ^modifier_zero_circle^ instead.",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    minusOneCardsAdded: 1
  },
  {
    id: 131,
    gameType: GameType.Frosthaven,
    name: "Chainmail",
    count: 2,
    cost: 25,
    slot: GloomhavenItemSlot.Body,
    source: "Trading Post 2",
    desc: "On the next three sources of ^damage^ from attacks targeting you, you gain ^fh-shield^ 1 for the attacks.",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    spent: true,
    minusOneCardsAdded: 3
  },
  {
    id: 132,
    gameType: GameType.Frosthaven,
    name: "Cloak of Pockets",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Body,
    source: "Trading Post 2",
    desc: "At the start of the scenario, bring one additional #small# items.",
    folder: "129-167",
    unlockTradingPostLevel: 2
  },
  {
    id: 133,
    gameType: GameType.Frosthaven,
    name: "Nimble Legguards",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.Legs,
    source: "Trading Post 2",
    desc: "When an adjacent ally would be targeted by an attack, you are targeted instead, regardless of range and line-of-sight.",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    spent: true
  },
  {
    id: 134,
    gameType: GameType.Frosthaven,
    name: "Comfortable Shoes",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Legs,
    source: "Trading Post 2",
    desc: "When you use the basic bottom action of an ability card, perform ^fh-move^ 3 instead of ^fh-move^ 2.",
    folder: "129-167",
    unlockTradingPostLevel: 2
  },
  {
    id: 135,
    gameType: GameType.Frosthaven,
    name: "Armorbane Bow",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 2",
    desc: "During your attack, add $wfh-pierce$ 3 to all your ranged attacks.",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    consumed: true
  },
  {
    id: 136,
    gameType: GameType.Frosthaven,
    name: "Battle Axe",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 2",
    desc: "During your single-target melee attack ability, change the targeting of the ability to: *cone_0_1*",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    consumed: true
  },
  {
    id: 137,
    gameType: GameType.Frosthaven,
    name: "Tower Shield",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.OneHand,
    source: "Trading Post 2",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 2 for the attack.",
    folder: "129-167",
    unlockTradingPostLevel: 2,
    minusOneCardsAdded: 1,
    spent: true
  },
  {
    id: 138,
    gameType: GameType.Frosthaven,
    name: "Heavy Basinet",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "Trading Post 3",
    desc: "When an enemy would give you $wfh-disarm$, $wfh-stun$, or $wfh-muddle$, prevent the condition.",
    folder: "129-167",
    unlockTradingPostLevel: 3,
    minusOneCardsAdded: 2
  },
  {
    id: 139,
    gameType: GameType.Frosthaven,
    name: "Horned Helm",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.Head,
    source: "Trading Post 3",
    desc: "After your move 4 or more hexes on your turn, add +1 ^attack^ to your next melee attack this turn.",
    folder: "129-167",
    unlockTradingPostLevel: 3
  },
  {
    id: 140,
    gameType: GameType.Frosthaven,
    name: "Mantle of Summoning",
    count: 2,
    cost: 40,
    slot: GloomhavenItemSlot.Body,
    source: "Trading Post 3",
    desc: "During your turn, grant one of your summons: ^fh-shield^ 2. ^eot^",
    folder: "129-167",
    unlockTradingPostLevel: 3,
    spent: true
  },
  {
    id: 141,
    gameType: GameType.Frosthaven,
    name: "Studded Leather",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.Body,
    source: "Trading Post 3",
    desc: "When you are attacked, before drawing an attack modifier car, the attacker gains disadvantage on the attack and you gain ^fh-shield^ 1 for the attack.",
    folder: "129-167",
    unlockTradingPostLevel: 3,
    spent: true
  },
  {
    id: 142,
    gameType: GameType.Frosthaven,
    name: "Boots of Quickness",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.Legs,
    source: "Trading Post 3",
    desc: "During ordering of initiative after all ability card have been revealed, increase or decrease your initiative by 20.",
    folder: "129-167",
    unlockTradingPostLevel: 3,
    spent: true
  },
  {
    id: 143,
    gameType: GameType.Frosthaven,
    name: "Endurance Footwraps",
    count: 2,
    cost: 40,
    slot: GloomhavenItemSlot.Legs,
    source: "Trading Post 3",
    desc: "After you move 4 or more hexes during your turn, after the move ability perform: ^fh-heal^ 1 ~!self!~.",
    folder: "129-167",
    unlockTradingPostLevel: 3
  },
  {
    id: 144,
    gameType: GameType.Frosthaven,
    name: "Staff of Eminence",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 3",
    desc: "During your turn, @wfh-wild-consume@ to add +1 ^attack^ to all your attacks.",
    folder: "129-167",
    unlockTradingPostLevel: 3,
    spent: true
  },
  {
    id: 145,
    gameType: GameType.Frosthaven,
    name: "Versatile Dagger",
    count: 2,
    cost: 25,
    slot: GloomhavenItemSlot.OneHand,
    source: "Trading Post 3",
    desc: "When you use the basic top action of an ability card, perform ^attack^ 3 instead of ^attack^ 2.",
    folder: "129-167",
    unlockTradingPostLevel: 3
  },
  {
    id: 146,
    gameType: GameType.Frosthaven,
    name: "Hooked Chain",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 3",
    desc: "During your attack, add $wfh-pull$ 2 to all your ranged attacks.",
    folder: "129-167",
    unlockTradingPostLevel: 3,
    spent: true
  },
  {
    id: 147,
    gameType: GameType.Frosthaven,
    name: "Mask of Terror",
    count: 2,
    cost: 60,
    slot: GloomhavenItemSlot.Head,
    source: "Trading Post 4",
    desc: "During your melee attack, add $wfh-push$ 1.",
    folder: "129-167",
    unlockTradingPostLevel: 4
  },
  {
    id: 148,
    gameType: GameType.Frosthaven,
    name: "Circlet of Sanctity",
    count: 2,
    cost: 45,
    slot: GloomhavenItemSlot.Head,
    source: "Trading Post 4",
    desc: "After the next three attacks targeting an ally within ^fh-range^ 2, flip this card over.",
    backDesc: "During your turn, perform: $wfh-ward$ ~!^fh-range^3!~ then flip this card over.",
    folder: "129-167",
    unlockTradingPostLevel: 4
  },
  {
    id: 149,
    gameType: GameType.Frosthaven,
    name: "Platemail",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.Body,
    source: "Trading Post 4",
    desc: "On the next five sources of ^damage^ from attacks targeting you, you gain ^fh-shield^ 1 for the attacks.",
    folder: "129-167",
    unlockTradingPostLevel: 4,
    spent: true,
    minusOneCardsAdded: 5
  },
  {
    id: 150,
    gameType: GameType.Frosthaven,
    name: "Robes of the Oak",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Body,
    source: "Trading Post 4",
    desc: "During your turn, perform: ^fh-heal^ 3 ~!^target^ 1 ally, ^fh-range^ 1!~ ",
    folder: "129-167",
    unlockTradingPostLevel: 4,
    spent: true
  },
  {
    id: 151,
    gameType: GameType.Frosthaven,
    name: "Serene Sandals",
    count: 2,
    cost: 75,
    slot: GloomhavenItemSlot.Legs,
    source: "Trading Post 4",
    desc: "When you use the basic bottom action of an ability card, perform ^fh-move^ 4 instead of ^fh-move^ 2.",
    folder: "129-167",
    unlockTradingPostLevel: 4
  },
  {
    id: 152,
    gameType: GameType.Frosthaven,
    name: "Steel Sabatons",
    count: 2,
    cost: 55,
    slot: GloomhavenItemSlot.Legs,
    source: "Trading Post 4",
    desc: "At the end of your turn, if you have moved 1 or fewer hexes during your turn, gain ^fh-shield^ 1 for the round.",
    folder: "129-167",
    unlockTradingPostLevel: 4,
    minusOneCardsAdded: 2
  },
  {
    id: 153,
    gameType: GameType.Frosthaven,
    name: "Long Spear",
    count: 2,
    cost: 40,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 4",
    desc: "During your single-target melee attack ability, change the targeting of the ability to: *line_0_1_1*",
    folder: "129-167",
    unlockTradingPostLevel: 4,
    spent: true
  },
  {
    id: 154,
    gameType: GameType.Frosthaven,
    name: "volatile Bomb",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 4",
    desc: "During your single-target ranged attack ability, change the targeting of the ability to: *cone_1_1*",
    folder: "129-167",
    unlockTradingPostLevel: 4,
    consumed: true
  },
  {
    id: 155,
    gameType: GameType.Frosthaven,
    name: "Wall Shield",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Trading Post 4",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 4 for the attack.",
    folder: "129-167",
    unlockTradingPostLevel: 4,
    spent: true,
    minusOneCardsAdded: 2
  },
  {
    id: 156,
    gameType: GameType.Frosthaven,
    name: "Moon Earring",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 1",
    desc: "When you short rest, ^recover^ up to three of your spent items.",
    folder: "129-167",
    unlockJewelerLevel: 1,
    consumed: true
  },
  {
    id: 157,
    gameType: GameType.Frosthaven,
    name: "Steel Ring",
    count: 2,
    cost: 20,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 1",
    desc: "When you suffer ^damage^ from an attack, gain ^fh-shield^ 4 for the attack.",
    folder: "129-167",
    unlockJewelerLevel: 1,
    consumed: true
  },
  {
    id: 158,
    gameType: GameType.Frosthaven,
    name: "Deep Earth Brooch",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 1",
    desc: "During your turn, perform",
    folder: "129-167",
    unlockJewelerLevel: 1,
    consumed: true,
    consumption: {
      elements: [
        {
          element: "earth",
          colorize: true
        },
        {
          element: "dark",
          colorize: true,
          "consume": true
        }
      ],
      effect: "^fh-heal^ 3 ~!self, $wfh-ward$!~"
    }
  },
  {
    id: 159,
    gameType: GameType.Frosthaven,
    name: "Glorious Bracelet",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 1",
    desc: "After your attack ability during which one enemy suffered at least ^damage^ 6, perform: $wfh-bless$, $wfh-bless$ ~!self!~",
    folder: "129-167",
    unlockJewelerLevel: 1,
    consumed: true
  },
  {
    id: 160,
    gameType: GameType.Frosthaven,
    name: "Sun Earring",
    count: 2,
    cost: 35,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 2",
    desc: "When you short rest, ^recover^ up to three of your spent items, and perform ^fh-heal^ 2 ~!self!~.",
    folder: "129-167",
    unlockJewelerLevel: 2,
    consumed: true
  },
  {
    id: 161,
    gameType: GameType.Frosthaven,
    name: "Strategists Ring",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 2",
    desc: "At the end of your turn, play one card from your hand and perform all persistent and mandatory abilities on either the top or bottom action of the card.",
    folder: "129-167",
    unlockJewelerLevel: 2,
    consumed: true
  },
  {
    id: 162,
    gameType: GameType.Frosthaven,
    name: "Howling Ice Brooch",
    count: 2,
    cost: 40,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 2",
    desc: "During your turn, perform",
    folder: "129-167",
    unlockJewelerLevel: 2,
    consumed: true,
    consumption: {
      elements: [
        {
          element: "ice",
          colorize: true
        },
        {
          element: "air",
          colorize: true,
          "consume": true
        }
      ],
      effect: "^attack^ 3 ~!^fh-range^ 3, $wfh-immobilize$!~"
    }
  },
  {
    id: 163,
    gameType: GameType.Frosthaven,
    name: "Stunning Bracelet",
    count: 2,
    cost: 35,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 2",
    desc: "During your turn, give $wfh-stun$ to half (rounded up) the enemies adjacent to you.",
    folder: "129-167",
    unlockJewelerLevel: 2,
    consumed: true
  },
  {
    id: 164,
    gameType: GameType.Frosthaven,
    name: "Star Earring",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 3",
    desc: "When you short rest, ^recover^ up to three of your spent items, choose which card to lose during the rest, and perform ^fh-heal^ 2 ~!self!~.",
    folder: "129-167",
    unlockJewelerLevel: 3,
    consumed: true
  },
  {
    id: 165,
    gameType: GameType.Frosthaven,
    name: "Ring of Haste",
    count: 2,
    cost: 40,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 3",
    desc: "At the end of you turn, play one card from your hand and perform the bottom action of the card.",
    folder: "129-167",
    unlockJewelerLevel: 3,
    consumed: true
  },
  {
    id: 166,
    gameType: GameType.Frosthaven,
    name: "Blazing Sun Brooch",
    count: 2,
    cost: 50,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 3",
    desc: "During your turn, perform ",
    folder: "129-167",
    unlockJewelerLevel: 3,
    consumed: true,
    consumption: {
      elements: [
        {
          element: "fire",
          colorize: true
        },
        {
          element: "light",
          colorize: true,
          "consume": true
        }
      ],
      effect: "^attack^ 3 ~!$wfh-disarm$!~"
    }
  },
  {
    id: 167,
    gameType: GameType.Frosthaven,
    name: "Attractive Bracelet",
    count: 2,
    cost: 40,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Jeweler 3\nWR-10",
    desc: "At the start of the enemy's turn, before it determines its focus, perform: $wfh-pull$ 4 ~!^target^ the enemy, ^fh-range^ 5, $wfh-muddle$!~",
    folder: "129-167",
    unlockJewelerLevel: 3,
    consumed: true
  },
  {
    id: 168,
    gameType: GameType.Frosthaven,
    name: "Circlet of Eyes",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.Head,
    source: "Loot Deck Random",
    desc: "During your ranged attack ability, add +1 ^target^.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 169,
    gameType: GameType.Frosthaven,
    name: "Fateful Charm",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "Loot Deck Random",
    desc: "During your turn, reveal the top card of your attack modifier deck.  You may place the card on the bottom of the deck.",
    folder: "168-192",
    spent: true
  },
  {
    id: 170,
    gameType: GameType.Frosthaven,
    name: "Eye of Truth",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.Head,
    source: "Loot Deck Random",
    desc: "During your turn, reveal the top card of each monster ability deck.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 171,
    gameType: GameType.Frosthaven,
    name: "Rejuvenating Charm",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.Head,
    source: "Loot Deck Random",
    desc: "Whenever you lose a card to negate ^damage^, ^recover^ up to one card from your discard pile and gain $wfh-regenerate$.",
    folder: "168-192"
  },
  {
    id: 172,
    gameType: GameType.Frosthaven,
    name: "Cap of Premonition",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.Head,
    source: "Loot Deck Random",
    desc: "During your turn, look at the top four cards of your attack modifier deck and put them back in any order.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 173,
    gameType: GameType.Frosthaven,
    name: "Multi Colored Cloak",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.Body,
    source: "Loot Deck Random",
    desc: "When attacked: @wfh-wild@.",
    folder: "168-192",
    spent: true
  },
  {
    id: 174,
    gameType: GameType.Frosthaven,
    name: "Magnetic Cape",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.Body,
    source: "Loot Deck Random",
    desc: "During your turn, perform: ^teleport^ 20 This teleport must end in a hex adjacent to one of your allies.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 175,
    gameType: GameType.Frosthaven,
    name: "Mirrored Armor",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.Body,
    source: "Loot Deck Random",
    desc: "When you suffer ^damage^ from an attack, the attacker suffers and equal amount of ^damage^.",
    folder: "168-192",
    consumed: true,
    minusOneCardsAdded: 2
  },
  {
    id: 176,
    gameType: GameType.Frosthaven,
    name: "Blinking Cape",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.Body,
    source: "Loot Deck Random",
    desc: "During your turn, perform: ^teleport^ 4 This teleport must end in a hex adjacent to one of your enemies.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 177,
    gameType: GameType.Frosthaven,
    name: "Boots of Transference",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.Legs,
    source: "Loot Deck Random",
    desc: "When you spring a trap by entering its hex, you may apply its effects to a figure within ^fh-range^ 3 instead of yourself.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 178,
    gameType: GameType.Frosthaven,
    name: "Tranquil Shoes",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.Legs,
    source: "Loot Deck Random",
    desc: "At the start of your turn in which your initiative is 60 or higher and you are not performing a long rest, perform ^fh-heal^ 1 ~!self!~.",
    folder: "168-192"
  },
  {
    id: 179,
    gameType: GameType.Frosthaven,
    name: "Burst Boots",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.Legs,
    source: "Loot Deck Random",
    desc: "During your move ability, add +4 ^fh-move^.  After the move ability gain $wfh-immobilize$.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 180,
    gameType: GameType.Frosthaven,
    name: "Boots of Greed",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.Legs,
    source: "Loot Deck Random",
    desc: "When you loot two or more tokens at once, perform: $wfh-bless$ ~!self!~.",
    folder: "168-192"
  },
  {
    id: 181,
    gameType: GameType.Frosthaven,
    name: "Translocation Rod",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Loot Deck Random",
    desc: "During your turn, designate two allies or any two normal or elite monsters. Each designated figure simultaneously ^teleport^ to the hex occupied by the other designated figure.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 182,
    gameType: GameType.Frosthaven,
    name: "Wing Clippers",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Loot Deck Random",
    desc: "After your melee attack, place a character token on the target. The target loses ^fh-flying^. ^ongoing^",
    folder: "168-192",
    spent: true
  },
  {
    id: 183,
    gameType: GameType.Frosthaven,
    name: "Decanter of Mists",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.OneHand,
    source: "Loot Deck Random\nTreasure 16",
    desc: "During your turn, all figures gain disadvantage on and add 1 ^fh-range^ to all ranged attacks this round. ^eot^",
    folder: "168-192",
    consumed: true
  },
  {
    id: 184,
    gameType: GameType.Frosthaven,
    name: "Flashing Axe",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "Loot Deck Random",
    desc: "During your multi-target melee attack ability, add +1 ^target^.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 185,
    gameType: GameType.Frosthaven,
    name: "Mirrored Knife",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "Loot Deck Random",
    desc: "During your melee attack ability, add all negative conditions you have except $wfh-brittle$, $wfh-bane$ and $wfh-stun$ to one attack.",
    folder: "168-192",
    spent: true
  },
  {
    id: 186,
    gameType: GameType.Frosthaven,
    name: "Wild Growth Seeds",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "During your turn, create one 1-hex obstacle in an adjacent empty hex.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 187,
    gameType: GameType.Frosthaven,
    name: "Dangerous Gear",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "During your turn, create one ^damage^ 3 trap in an adjacent empty hex.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 188,
    gameType: GameType.Frosthaven,
    name: "Freezing Crystal",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "During your turn, create one 1-hex hazardous terrain, icy terrain, or water tile in an adjacent featureless hex.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 189,
    gameType: GameType.Frosthaven,
    name: "Ring of the Night",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "During your, perform",
    folder: "168-192",
    consumed: true,
    consumption: {
      elements: [
        {
          element: "dark",
          "consume": true
        },
        {
          element: "wild",
          "consume": true
        }
      ],
      effect: "$wfh-invisible$ ~!self!~"
    }
  },
  {
    id: 190,
    gameType: GameType.Frosthaven,
    name: "White Card",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "During your turn, place a character token on one normal or elite enemy within ^fh-range^ 3. This enemy adds -1 ^attack^ to all its attacks. ^ongoing^.",
    folder: "168-192",
    consumed: true
  },
  {
    id: 191,
    gameType: GameType.Frosthaven,
    name: "Corrupted Scroll",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "During your, perform ^fh-heal^ 5 ~!^fh-range^ 5!~ $wfh-poison$ ~@!~!^target^ the target of the heal ability@~",
    folder: "168-192",
    consumed: true
  },
  {
    id: 192,
    gameType: GameType.Frosthaven,
    name: "Enticing Bell",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Loot Deck Random",
    desc: "At the end of your turn, designate one enemy within ^fh-range^ 3. You are its primary focus and it does not avoid negative hexes when determining movement this round. ^eot^",
    folder: "168-192",
    consumed: true
  },
  {
    id: 193,
    gameType: GameType.Frosthaven,
    name: "Mind Thieving Helmet",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "Scenario 121",
    desc: "During your turn, control one enemy within ^fh-range^ 3: ^attack^ 3",
    folder: "193-247",
    consumed: true
  },
  {
    id: 194,
    gameType: GameType.Frosthaven,
    name: "Temporal Amulet",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "Scenario 125",
    desc: "During ordering of initiative after all ability card have been revealed, increase or decrease a monster set's initiative by 30.",
    folder: "193-247"
  },
  {
    id: 195,
    gameType: GameType.Frosthaven,
    name: "Tri-Corner Hat",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "Treasure 83\nScenario 127",
    desc: "During your turn add +1 ^fh-range^ and $wfh-pierce$ 1 to one of your ranged attacks.",
    folder: "193-247",
    spent: true
  },
  {
    id: 196,
    gameType: GameType.Frosthaven,
    name: "Choker of Sacrifice",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "SR-26",
    desc: "During your turn, discard one loot card except Random Item to perform: ^fh-heal^ 5 ~!^fh-range^ 2, $wfh-ward$!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 197,
    gameType: GameType.Frosthaven,
    name: "Aesther Diadem",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.Head,
    source: "WO-77",
    desc: "After ordering of initiative, exchange a card in your hand for one which you have played. Your initiative is unaffected.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 198,
    gameType: GameType.Frosthaven,
    name: "Hunter's Necklace",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.Head,
    source: "WR-36",
    desc: "During your turn, perform $wfh-pull$ 3 ~!^fh-range^ 4!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 199,
    gameType: GameType.Frosthaven,
    name: "Opulent Shoes",
    count: 2,
    cost: 30,
    slot: GloomhavenItemSlot.Legs,
    source: "Treasure 6\nTreasure 78",
    desc: "At the start of the scenario, consider yourself to be your summons in initiative order when determining monster focus for the remainder of the scenario.",
    folder: "193-247",
    faq: "In Scenario 122, both treasures are listed as 31. This might be an error. As such, the source might not be accurate."
  },
  {
    id: 200,
    gameType: GameType.Frosthaven,
    name: "Eventide Scepter",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 4",
    desc: "During your heal ability targeting an ally, @wfh-light-consume@ to add $wfh-regenerate$ to one heal and flip this card over.",
    backDesc: "During your attack ability, @wfh-dark-consume@ to add $wfh-curse$ to one attack and flip this card over.",
    folder: "193-247"
  },
  {
    id: 201,
    gameType: GameType.Frosthaven,
    name: "Wave Blade",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Scenario 76\nScenario 77",
    desc: "During your attack ability performed while occupying or adjacent to a hex with a water tile, add $wfh-push$ 1 and $wfh-immobilize$ to one attack.",
    folder: "193-247",
    spent: true
  },
  {
    id: 202,
    gameType: GameType.Frosthaven,
    name: "Giant Piranha Pig Spine",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Scenario 83",
    desc: "During your melee attack ability, add $wfh-pierce$ 2 and $wfh-wound$ to one attack.",
    folder: "193-247",
    spent: true
  },
  {
    id: 203,
    gameType: GameType.Frosthaven,
    name: "Scepter of Control",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 119",
    desc: "After your ability control one target: ^fh-move^ 2",
    folder: "193-247",
    consumed: true
  },
  {
    id: 204,
    gameType: GameType.Frosthaven,
    name: "Severed Claw",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 5",
    desc: "During your turn, one adjacent normal or elite enemy suffers ^damage^ to their ^fh-shield^ value.",
    folder: "193-247",
    consumed: true,
    minusOneCardsAdded: 1
  },
  {
    id: 205,
    gameType: GameType.Frosthaven,
    name: "Harpoon",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Treasure 55",
    desc: "During your, perform ^attack^ 2 ~!^fh-range^, $wfh-pull$ 2!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 206,
    gameType: GameType.Frosthaven,
    name: "Giant Sword",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Treasure 42\nSO-30",
    desc: "During your melee attack ability, if you have not move this round, add +2 ^attack^ to one attack, and you may perform no move abilities this turn.",
    folder: "193-247",
    spent: true,
    minusOneCardsAdded: 3
  },
  {
    id: 207,
    gameType: GameType.Frosthaven,
    name: "Fishhook",
    count: 1,
    cost: 25,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Treasure 13",
    desc: "After your attack, if the target's current hit point is 3 or less, give the target $wfh-bane$",
    folder: "193-247",
    spent: true
  },
  {
    id: 208,
    gameType: GameType.Frosthaven,
    name: "Titan Nail",
    count: 1,
    cost: 35,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Treasure 52",
    desc: "During your attack ability add $wfh-pierce$ 3 to one attack targeting an enemy whose current hit point value is 4 or less.",
    folder: "193-247",
    spent: true
  },
  {
    id: 209,
    gameType: GameType.Frosthaven,
    name: "Sword of Mastery",
    count: 1,
    cost: 60,
    slot: GloomhavenItemSlot.TwoHands,
    source: "SR-35",
    desc: "During your melee attack ability, give advantage on one attack.  For each mastery you have completed, also add one of the following to the attack: +1 ^attack^, $wfh-wound$, or $wfh-poison$. ",
    folder: "193-247",
    spent: true
  },
  {
    id: 210,
    gameType: GameType.Frosthaven,
    name: "Tanjo",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.TwoHands,
    source: "SO-39",
    desc: "During your turn, add +3 ^attack^ to all your attacks performed by Lurkers targeting you this round. ^eot^",
    folder: "193-247",
    spent: true
  },
  {
    id: 211,
    gameType: GameType.Frosthaven,
    name: "Boom Barrel",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Boat Event 11",
    desc: "During your turn, designate one adjacent hex.  At the end of your turn, all figures within ^fh-range^ 2 of the designated hex suffer ^damage^ 1.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 212,
    gameType: GameType.Frosthaven,
    name: "Elemental Stone",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 66",
    desc: "After ordering of initiative, choose one element. This element cannot be infused or consume by any monster this round. ^eot^",
    folder: "193-247",
    spent: true
  },
  {
    id: 213,
    gameType: GameType.Frosthaven,
    name: "Key of Seasons",
    count: 1,
    cost: 70,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 106",
    desc: "During your attack ability @wfh-ice-consume@ to add $wfh-immobilize$ to one attack, then flip this card over at the end of your turn.",
    backDesc: "During your attack ability @wfh-fire-consume@ to add $wfh-wound$ to one attack, then flip this card over at the end of your turn.",
    folder: "193-247"
  },
  {
    id: 214,
    gameType: GameType.Frosthaven,
    name: "Cup of Ventillion",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 107",
    desc: "During your heal ability add one positive condition you have to one heal.",
    folder: "193-247",
    spent: true
  },
  {
    id: 215,
    gameType: GameType.Frosthaven,
    name: "Befuddling Mug",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 128",
    desc: "During your, add +1 ^attack^ and $wfh-muddle$ to all your attacks. At the end of your turn, perform: $wfh-muddle$ ~!self!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 216,
    gameType: GameType.Frosthaven,
    name: "Tome of Elements",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "SR-48 or WR-46 Event Chain",
    desc: "During your turn, @wfh-fire@ @wfh-ice@ @wfh-air@ @wfh-earth@ @wfh-light@ @wfh-dark@ Elements do not move from strong to waning at the end of this round. ^eot^",
    folder: "193-247",
    consumed: true
  },
  {
    id: 217,
    gameType: GameType.Frosthaven,
    name: "Tome of Time",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "SR-49 or WR-47 Event Chain",
    desc: "During ordering of initiative after all ability card have been revealed, shuffle all monster ability decks and draw a new card for each active monster set.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 218,
    gameType: GameType.Frosthaven,
    name: "Tome of Life",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "SR-47 or WR-45 Event Chain",
    desc: "During your turn, remove all conditions from all figures then grant all figures: ^fh-heal^ 2 ~!self!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 219,
    gameType: GameType.Frosthaven,
    name: "Tome of Conflict",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 134\n",
    desc: "During your turn all figures gain $wfh-strengthen$. Until any monster is killed, the first attack modifier card drawn for every attack is treated as rolling. ^ongoing^",
    folder: "193-247",
    consumed: true
  },
  {
    id: 220,
    gameType: GameType.Frosthaven,
    name: "Belaras Quill",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "Scenario 135",
    desc: "During your turn, ^recover^ up to one Tome item.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 221,
    gameType: GameType.Frosthaven,
    name: "Ice Shiv",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 84",
    desc: "During your melee attack ability, @wfh-ice-consume@ to add $wfh-pierce$ 3 to one attack.",
    folder: "193-247",
    spent: true
  },
  {
    id: 222,
    gameType: GameType.Frosthaven,
    name: "Black Box",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 36",
    desc: "During yor turn, discard two cards from your hand to perform: ^fh-heal^ 6 ~!self!~",
    folder: "193-247",
    spent: true
  },
  {
    id: 223,
    gameType: GameType.Frosthaven,
    name: "Lightning Rod",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 26",
    desc: "After ordering of initiative, all monsters consider you to be first in initiative order when determining focus this round. ^eot^",
    folder: "193-247",
    spent: true
  },
  {
    id: 224,
    gameType: GameType.Frosthaven,
    name: "Armor of Empathy",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.Body,
    source: "Scenario 60",
    desc: "After the next three attacks targeting you, flip this card over.",
    backDesc: "During your turn, perform ^fh-heal^ 3 ~!^target^ 1 ally, ^fh-range^ 3, $wfh-bless$!~ then flip this card over.",
    folder: "193-247"
  },
  {
    id: 225,
    gameType: GameType.Frosthaven,
    name: "Algox Carving",
    count: 1,
    cost: 60,
    slot: GloomhavenItemSlot.Body,
    source: "Treasure 41",
    desc: "During your melee attack ability, @wfh-earth-consume@ to add +1 ^attack^ to one attack and flip this card over.",
    backDesc: "During your melee attack ability, @wfh-air-consume@ to add $wfh-push$ 2 to one attack and flip this card over.",
    folder: "193-247"
  },
  {
    id: 226,
    gameType: GameType.Frosthaven,
    name: "Unfettered Arm",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 81\nWR-22",
    desc: "During your attack ability, double the numerical value of the next attack modifier card you draw. ^modifier_2x_circle^ and ^modifier_no_damage^ modifier cards are unaffected.",
    folder: "193-247",
    spent: true
  },
  {
    id: 227,
    gameType: GameType.Frosthaven,
    name: "Data Drive",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 7",
    desc: "When you short rest, place half (rounded down) of your discard pile on this item, lose of the remaining cards randomly as normal, then draw the cards on this item.",
    folder: "193-247",
    spent: true
  },
  {
    id: 228,
    gameType: GameType.Frosthaven,
    name: "Extendable Pole",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "Treasure 35",
    desc: "During your turn, open one unlocked door while within ^fh-range^ 2.",
    folder: "193-247",
    spent: true
  },
  {
    id: 229,
    gameType: GameType.Frosthaven,
    name: "Exquisite Map",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.OneHand,
    source: "SO-42",
    desc: "During your turn grant one ally within ^fh-range^ 3: ^fh-move^ 3",
    folder: "193-247",
    consumed: true
  },
  {
    id: 230,
    gameType: GameType.Frosthaven,
    name: "Examination Glass",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "SR-26",
    desc: "After you draw one loot card, draw one additional card, keep one, and place the other on either the top or bottom of the loot deck.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 231,
    gameType: GameType.Frosthaven,
    name: "Skinning Knife",
    count: 1,
    cost: 15,
    slot: GloomhavenItemSlot.OneHand,
    source: "WR-16",
    desc: "When you gain a loot token, gain 3 `hide` instead of drawing a loot card.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 232,
    gameType: GameType.Frosthaven,
    name: "Orchid Wand",
    count: 1,
    cost: 20,
    slot: GloomhavenItemSlot.OneHand,
    source: "WR-12",
    desc: "During your turn lose 1 morale to perform: $wfh-bless$ ~!^target^ all allies and self!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 233,
    gameType: GameType.Frosthaven,
    name: "Dead Raven",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 13",
    desc: "During you ally's ranged attack ability, add $wfh-muddle$ and $wfh-curse$ to one attack.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 234,
    gameType: GameType.Frosthaven,
    name: "ooze vial",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 84",
    desc: "During your turn, create one $wfh-poison$, $wfh-immobilize$ trap in an empty hex within ^fh-range^ 2.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 235,
    gameType: GameType.Frosthaven,
    name: "Small Rat",
    count: 1,
    cost: 10,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 93",
    desc: "During your turn, loot one loot token within ^fh-range^ 2.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 236,
    gameType: GameType.Frosthaven,
    name: "Cracked Mirror",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 111",
    desc: "During your turn, lose one card from your hand to ^recover^ one card from your lost pile of equal or lower level.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 237,
    gameType: GameType.Frosthaven,
    name: "Mesmerizing Seashell",
    count: 1,
    cost: 45,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 131",
    desc: "During your turn, choose one of six directions. You and all figures within ^fh-range^ 2 are forced to simultaneously move 2 hexes in the chosen direction.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 238,
    gameType: GameType.Frosthaven,
    name: "Cracked Idol",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 133",
    desc: "When you would become exhausted from suffering ^damage^, set your hit point value to 1 instead.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 239,
    gameType: GameType.Frosthaven,
    name: "Eye of the Storm",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Treasure 53",
    desc: "During your turn, all allies and enemies within ^fh-range^ 2 suffer ^damage^ 1.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 240,
    gameType: GameType.Frosthaven,
    name: "Demons Gem",
    count: 1,
    cost: 15,
    slot: GloomhavenItemSlot.SmallItem,
    source: "SO-53 event chain",
    desc: "When you fail a scenario, still earn all ^checkmark^ from your battle goal if it was completed.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 241,
    gameType: GameType.Frosthaven,
    name: "Shimmering Powder",
    count: 1,
    cost: 40,
    slot: GloomhavenItemSlot.SmallItem,
    source: "SR-26",
    desc: "After you draw one loot card, draw one additional loot card.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 242,
    gameType: GameType.Frosthaven,
    name: "Lucky Dice",
    count: 1,
    cost: 30,
    slot: GloomhavenItemSlot.SmallItem,
    source: "SO-4",
    desc: "During your attack ability, treat the next three attack modifier cards you draw as rolling",
    folder: "193-247",
    consumed: true
  },
  {
    id: 243,
    gameType: GameType.Frosthaven,
    name: "Cursed Rock",
    count: 1,
    cost: 10,
    slot: GloomhavenItemSlot.SmallItem,
    source: "WR-3",
    desc: "This item cannot be sold and must be brought into and used every scenario. At the start of the scenario perform: $wfh-curse$, $wfh-bless$ ~!self!~",
    folder: "193-247",
    consumed: true
  },
  {
    id: 244,
    gameType: GameType.Frosthaven,
    name: "Ember Energy Source",
    count: 1,
    cost: 50,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Scenario 33",
    desc: "During your turn, increase the printed ^attack^, ^fh-move^, ^target^, or ^fh-range^ numerical value on one of your abilities by 1.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 245,
    gameType: GameType.Frosthaven,
    name: "Ancient Coin",
    count: 1,
    cost: 0,
    source: "Scenario 136\nBuilding 74\nLoot Cards",
    desc: "",
    folder: "193-247",
    imageSuffix: "a",
    faqImage: "FIXME",
    slot: GloomhavenItemSlot.None,
  },
  {
    id: 245,
    gameType: GameType.Frosthaven,
    name: "Ancient Coin",
    count: 1,
    cost: 0,
    source: "Scenario 136\nBuilding 74\nLoot Cards",
    desc: "",
    folder: "193-247",
    imageSuffix: "b",
    faqImage: "FIXME",
    slot: GloomhavenItemSlot.None,
  },
  {
    id: 245,
    gameType: GameType.Frosthaven,
    name: "Ancient Coin",
    count: 1,
    cost: 0,
    source: "Scenario 136\nBuilding 74\nLoot Cards",
    desc: "",
    folder: "193-247",
    imageSuffix: "c",
    faqImage: "FIXME",
    slot: GloomhavenItemSlot.None,
  },
  {
    id: 245,
    gameType: GameType.Frosthaven,
    name: "Ancient Coin",
    count: 1,
    cost: 0,
    source: "Scenario 136\nBuilding 74\nLoot Cards",
    desc: "",
    folder: "193-247",
    imageSuffix: "d",
    faqImage: "FIXME",
    slot: GloomhavenItemSlot.None,
  },
  {
    id: 246,
    gameType: GameType.Frosthaven,
    name: "Key Card",
    count: 1,
    cost: 0,
    source: "Scenario 58\nScenario 59",
    desc: "",
    folder: "193-247",
    faqImage: "FIXME",
    slot: GloomhavenItemSlot.None,
  },
  {
    id: 247,
    gameType: GameType.Frosthaven,
    name: "Trainers Net",
    count: 1,
    cost: 10,
    slot: GloomhavenItemSlot.OneHand,
    source: "Stables",
    desc: "During your turn, capture an adjacent enemy whose hit point value is 1 or 2.",
    folder: "193-247",
    consumed: true
  },
  {
    id: 248,
    gameType: Expansions.FHSoloScenarios,
    name: "Wanderer's Club",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #01 — {FH1}",
    desc: "During your attack ability, move one character token on one of your persistent abilities backward one slot and add +X ^attack^ to one attack, where X is the number of active persistent abilities.",
    folder: "248-264",
    soloItem: FHClasses.FH1,
    lockToClasses: [
      FHClasses.FH1
    ],
    consumed: true
  },
  {
    id: 249,
    gameType: Expansions.FHSoloScenarios,
    name: "Recalibration Trigger",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Reward from Solo Scenario #02 — {FH2}",
    desc: "During our turn, perform one of the two following abilities: Lose one card from your hand to gain 3 ^fh-hourglass^. ~@-2 ^fh-hourglass^ : ^recover^ up to two of your discarded cards@~",
    folder: "248-264",
    soloItem: FHClasses.FH2,
    lockToClasses: [
      FHClasses.FH2,
    ],
    lost: true,
    consumed: true
  },
  {
    id: 250,
    gameType: Expansions.FHSoloScenarios,
    name: "Spear of Justice",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #03 — {FH3}",
    desc: "During your turn perform: ^attack^ 2 ~!^fh-range^ 3!~. All your banners are treated as additionally occupying the hex of the attack target of their bonuses and that hex is treated as occupied by an ally this round. ^eot^",
    folder: "248-264",
    soloItem: FHClasses.FH3,
    lockToClasses: [
      FHClasses.FH3,
    ],
    consumed: true
  },
  {
    id: 251,
    gameType: Expansions.FHSoloScenarios,
    name: "Soul Urn",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #04 — {FH4}",
    desc: "Place one ^fh-shadow^ in an adjacent hex. @wfh-dark@",
    folder: "248-264",
    soloItem: FHClasses.FH4,
    lockToClasses: [
      FHClasses.FH4,
    ],
    consumed: true
  },
  {
    id: 252,
    gameType: Expansions.FHSoloScenarios,
    name: "Black Earth Codex",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #05 — {FH5}",
    desc: "On the next three deaths of any of your summons,",
    consumption: {
      elements: [
        {
          element: "earth",
          colorize: true
        },
        {
          element: "dark",
          colorize: true
        }
      ],
      effect: "and perform: ^fh-heal^ 2 ~!self!~"
    },
    folder: "248-264",
    soloItem: FHClasses.FH5,
    lockToClasses: [
      FHClasses.FH5,
    ],
    consumed: true
  },
  {
    id: 253,
    gameType: Expansions.FHSoloScenarios,
    name: "Mask of Duality",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.Head,
    source: "Reward from Solo Scenario #06 — {FH6}",
    desc: "During your ranged attack ability while in ^fh-geminate-right^, gain advantage for one attack, then flip this card over.",
    backDesc: "When an enemy performs an attack targeting you while you are in ^fh-geminate-left^, the attacker gains disadvantage, then flip this card over.",
    folder: "248-264",
    soloItem: FHClasses.FH6,
    lockToClasses: [
      FHClasses.FH6,
    ]
  },
  {
    id: 254,
    gameType: Expansions.FHSoloScenarios,
    name: "Ancestral Blade",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.TwoHands,
    source: "Reward from Solo Scenario #07 — {FH7}",
    desc: "During your turn, activate all your ^fh-astral^ as if you just performed a ^fh-astral^ action.",
    folder: "248-264",
    soloItem: FHClasses.FH7,
    lockToClasses: [
      FHClasses.FH7,
    ],
    consumed: true
  },
  {
    id: 255,
    gameType: Expansions.FHSoloScenarios,
    name: "Mountain's Heart",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Reward from Solo Scenario #08 — {FH8}",
    desc: "During your turn, you may create either one 1-hex obstacle or hazardous terrain tile in an empty tile within ^fh-range^ 2.",
    consumption: {
      elements: [
        {
          element: "fire",
          colorize: true
        },
        {
          element: "earth",
          colorize: true
        }
      ]
    },
    folder: "248-264",
    soloItem: FHClasses.FH8,
    lockToClasses: [
      FHClasses.FH8,
    ],
    consumed: true
  },
  {
    id: 256,
    gameType: Expansions.FHSoloScenarios,
    name: "Sonorous Shard",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Reward from Solo Scenario #09 — {FH9}",
    desc: "Gain 3 ^fh-shards^",
    folder: "248-264",
    soloItem: FHClasses.FH9,
    lockToClasses: [
      FHClasses.FH9,
    ],
    consumption: {
      elements: [
        {
          element: "air",
          colorize: true
        },
        {
          element: "earth",
          colorize: true
        }
      ]
    },
    lost: true,
    consumed: true
  },
  {
    id: 257,
    gameType: Expansions.FHSoloScenarios,
    name: "Sly Camouflage",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #10 — {FH10}",
    desc: "When you create a trap, place a character token on it.  Monsters do not treat the trap as negative. Remove the token when you ^recover^ this item. ^ongoing^",
    folder: "248-264",
    soloItem: FHClasses.FH10,
    lockToClasses: [
      FHClasses.FH10,
    ],
    spent: true
  },
  {
    id: 258,
    gameType: Expansions.FHSoloScenarios,
    name: "Skull of Agony",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Reward from Solo Scenario #11 — {FH11}",
    desc: "When you suffer damage, if your hit point value is reduced to below half your maximum, perform: ^fh-heal^ 7 ~!self, $wfh-curse$!~ This heal is not affect by and cannot remove negative conditions.",
    folder: "248-264",
    soloItem: FHClasses.FH11,
    lockToClasses: [
      FHClasses.FH11,
    ],
    consumed: true
  },
  {
    id: 259,
    gameType: Expansions.FHSoloScenarios,
    name: "Storm Carving",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #12 — {FH12}",
    desc: "During an attack ability you grant an ally, add $wfh-push$ 2 to one of their attacks, then flip this card over.",
    backDesc: "During your attack ability you, add $wfh-pull$ 2 to one attack, then flip this card over.",
    folder: "248-264",
    soloItem: FHClasses.FH12,
    lockToClasses: [
      FHClasses.FH12,
    ]
  },
  {
    id: 260,
    gameType: Expansions.FHSoloScenarios,
    name: "Freezing Orb",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #13 — {FH13}",
    desc: "During your attack ability, add $wfh-brittle$ to one attack and create one 1-hex icy terrain tile in the featureless hex occupied by the target.",
    folder: "248-264",
    soloItem: FHClasses.FH13,
    lockToClasses: [
      FHClasses.FH13,
    ],
    consumed: true
  },
  {
    id: 261,
    gameType: Expansions.FHSoloScenarios,
    name: "Energized Module",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.SmallItem,
    source: "Reward from Solo Scenario #14 — {FH14}",
    desc: "Remove all damage and negative conditions from one of your summons, then ^fh-prism^ to that summon.",
    folder: "248-264",
    soloItem: FHClasses.FH14,
    lockToClasses: [
      FHClasses.FH14,
    ],
    consumed: true
  },
  {
    id: 262,
    gameType: Expansions.FHSoloScenarios,
    name: "Exhaust Boots",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.Legs,
    source: "Reward from Solo Scenario #15 — {FH15}",
    desc: "During your move ability, when you have ^fh-meter-yellow^ or ^fh-meter-red^, add +1 ^fh-move^, then flip this card over at the end of your turn.",
    backDesc: "During your turn when you have ^fh-meter-blue^, perform: $wfh-muddle$ ~!^fh-range^ 1!~ then flip this card over at the end of your turn.",
    folder: "248-264",
    soloItem: FHClasses.FH15,
    lockToClasses: [
      FHClasses.FH15,
    ]
  },
  {
    id: 263,
    gameType: Expansions.FHSoloScenarios,
    name: "Warlords Skull",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.OneHand,
    source: "Reward from Solo Scenario #16 — {FH16}",
    desc: "Whenever you gain $wfh-invisible$ or perform a teleport ability while you have $wfh-invisible$, after the ability perform: $wfh-muddle$ ~!^fh-range^ 1!~",
    folder: "248-264",
    soloItem: FHClasses.FH16,
    lockToClasses: [
      FHClasses.FH16,
    ]
  },
  {
    id: 264,
    gameType: Expansions.FHSoloScenarios,
    name: "Spiraled Medallion",
    count: 1,
    cost: 0,
    slot: GloomhavenItemSlot.Head,
    source: "Reward from Solo Scenario #17 — {FH17}",
    desc: "When you rest, you may keep up to three ^fh-anemone^ cards in your active area.",
    folder: "248-264",
    soloItem: FHClasses.FH17,
    lockToClasses: [
      FHClasses.FH17,
    ],
    lost: true,
    consumed: true,
    consumption: {
      elements: [
        {
          element: "light",
          colorize: true
        },
        {
          element: "dark",
          colorize: true
        }
      ]
    }
  }
]
