export type Category =
  | "habilidad"
  | "coleccionable"
  | "bench"
  | "jefe"
  | "npc"
  | "mejora"
  | "info";

export interface Zone {
  id: string;
  name: string;
  pos: [number, number];
  color: string;
}

export interface Item {
  id: string;
  name: string;
  category: Category;
  zoneId: string;
  x: number;
  y: number;
  description: string;
  search: string[];
}

export const CATEGORY_INFO: Record<
  Category,
  { label: string; color: string; icon: string }
> = {
  habilidad: { label: "Habilidades y herramientas", color: "#ffd166", icon: "★" },
  coleccionable: { label: "Coleccionables", color: "#4cc9f0", icon: "◆" },
  bench: { label: "Bencillas y viajes", color: "#90e0ef", icon: "▣" },
  jefe: { label: "Jefes y arenas", color: "#ef476f", icon: "☠" },
  npc: { label: "NPCs y misiones", color: "#c77dff", icon: "☻" },
  mejora: { label: "Mejoras", color: "#2ec4b6", icon: "⬆" },
  info: { label: "Mapas y atajos", color: "#a89fae", icon: "◎" },
};

export const ZONES: Zone[] = [
  {
    "id": "z0",
    "name": "MOSS GROTTO",
    "pos": [
      -721.2,
      191.31
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z1",
    "name": "Bonegrave",
    "pos": [
      -705.9,
      124.51
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z2",
    "name": "Bone Bottom",
    "pos": [
      -701.1,
      268.4
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z3",
    "name": "Mosshome",
    "pos": [
      -621.91,
      290.5
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z4",
    "name": "WORMWAYS",
    "pos": [
      -649.91,
      181.01
    ],
    "color": "#948A7A"
  },
  {
    "id": "z5",
    "name": "Weavenest Atla",
    "pos": [
      -761.19,
      313.3
    ],
    "color": "#8E85B5"
  },
  {
    "id": "z6",
    "name": "THE MARROW",
    "pos": [
      -708.9,
      435.29
    ],
    "color": "rgba(150,150,150,1)"
  },
  {
    "id": "z7",
    "name": "HUNTER'S MARCH",
    "pos": [
      -631.71,
      662.78
    ],
    "color": "#B2594A"
  },
  {
    "id": "z8",
    "name": "DEEP DOCKS",
    "pos": [
      -725.2,
      608.48
    ],
    "color": "rgba(174,127,73,1)"
  },
  {
    "id": "z9",
    "name": "Pilgrim's Rest",
    "pos": [
      -667.01,
      921.36
    ],
    "color": "#A0AA64"
  },
  {
    "id": "z10",
    "name": "FAR FIELDS",
    "pos": [
      -630.41,
      895.26
    ],
    "color": "#9AA266"
  },
  {
    "id": "z11",
    "name": "Craw Lake",
    "pos": [
      -561.93,
      982.76
    ],
    "color": "#92B8B2"
  },
  {
    "id": "z12",
    "name": "SINNER'S ROAD",
    "pos": [
      -513.23,
      833.77
    ],
    "color": "#CA9E8C"
  },
  {
    "id": "z13",
    "name": "Halfway Home",
    "pos": [
      -557.63,
      765.27
    ],
    "color": "#8DB9AF"
  },
  {
    "id": "z14",
    "name": "GREYMOOR",
    "pos": [
      -526.23,
      684.28
    ],
    "color": "#9AB6B0"
  },
  {
    "id": "z15",
    "name": "Wisp Thicket",
    "pos": [
      -477.44,
      646.98
    ],
    "color": "#77B98A"
  },
  {
    "id": "z16",
    "name": "Exhaust Organ",
    "pos": [
      -386.06,
      774.07
    ],
    "color": "#A9B655"
  },
  {
    "id": "z17",
    "name": "The Mist",
    "pos": [
      -433.25,
      814.27
    ],
    "color": "rgba(150,150,150,1)"
  },
  {
    "id": "z18",
    "name": "BILEWATER",
    "pos": [
      -377.16,
      957.96
    ],
    "color": "#B7B25D"
  },
  {
    "id": "z19",
    "name": "Bilehaven",
    "pos": [
      -278.78,
      975.26
    ],
    "color": "#AFB95A"
  },
  {
    "id": "z20",
    "name": "Bellhart",
    "pos": [
      -590.02,
      535.88
    ],
    "color": "#F5C687"
  },
  {
    "id": "z21",
    "name": "SHELLWOOD",
    "pos": [
      -543.43,
      330.3
    ],
    "color": "#B0B58E"
  },
  {
    "id": "z22",
    "name": "Blasted Steps",
    "pos": [
      -458.24,
      195.01
    ],
    "color": "#B79C76"
  },
  {
    "id": "z23",
    "name": "MOUNT FAY",
    "pos": [
      -278.38,
      156.75
    ],
    "color": "#7492D7"
  },
  {
    "id": "z24",
    "name": "Brightvein",
    "pos": [
      -195.88,
      208
    ],
    "color": "#7E9DDD"
  },
  {
    "id": "z25",
    "name": "THE SLAB",
    "pos": [
      -175.38,
      324.5
    ],
    "color": "#ACAAAC"
  },
  {
    "id": "z26",
    "name": "HIGH HALLS",
    "pos": [
      -149.88,
      490.5
    ],
    "color": "#D38A4F"
  },
  {
    "id": "z27",
    "name": "The Forum",
    "pos": [
      -203.13,
      496.5
    ],
    "color": "#D2915E"
  },
  {
    "id": "z28",
    "name": "Citadel Spa",
    "pos": [
      -310.53,
      496.63
    ],
    "color": "#F3EAB0"
  },
  {
    "id": "z29",
    "name": "The Cauldron",
    "pos": [
      -452.38,
      633.5
    ],
    "color": "#9F9FA4"
  },
  {
    "id": "z30",
    "name": "Underworks",
    "pos": [
      -390.63,
      576.75
    ],
    "color": "#908E92"
  },
  {
    "id": "z31",
    "name": "CHORAL CHAMBERS",
    "pos": [
      -311.13,
      596.25
    ],
    "color": "#E5D792"
  },
  {
    "id": "z32",
    "name": "WHITEWARD",
    "pos": [
      -362.13,
      614.5
    ],
    "color": "#F0EEF0"
  },
  {
    "id": "z33",
    "name": "The Stage",
    "pos": [
      -296.57,
      726.88
    ],
    "color": "#EBB36F"
  },
  {
    "id": "z34",
    "name": "COGWORK CORE",
    "pos": [
      -141.57,
      664.13
    ],
    "color": "#B4B898"
  },
  {
    "id": "z35",
    "name": "MEMORIUM",
    "pos": [
      -181.19,
      780.25
    ],
    "color": "#DECFC1"
  },
  {
    "id": "z36",
    "name": "THE CRADLE (ACT 2)",
    "pos": [
      -119.57,
      600
    ],
    "color": "#9389BD"
  },
  {
    "id": "z37",
    "name": "THE CRADLE (ACT 3)",
    "pos": [
      -133.6,
      718.51
    ],
    "color": "#9389BD"
  },
  {
    "id": "z38",
    "name": "The Surface",
    "pos": [
      10.62,
      797.75
    ],
    "color": "rgba(98,100,150,1)"
  },
  {
    "id": "z39",
    "name": "Fleatopia",
    "pos": [
      -247.88,
      1129.75
    ],
    "color": "#8AA4B6"
  },
  {
    "id": "z40",
    "name": "Pale Lake",
    "pos": [
      -246.88,
      1198.75
    ],
    "color": "#8AA4B6"
  },
  {
    "id": "z41",
    "name": "WHISPERING VAULTS",
    "pos": [
      -334.38,
      791.75
    ],
    "color": "#FCAC60"
  },
  {
    "id": "z42",
    "name": "GRAND GATE",
    "pos": [
      -395.63,
      356.75
    ],
    "color": "#D4D3B6"
  },
  {
    "id": "z43",
    "name": "SANDS OF KARAK",
    "pos": [
      -385.88,
      114.5
    ],
    "color": "#E989A8"
  },
  {
    "id": "z44",
    "name": "Voltnest",
    "pos": [
      -331.13,
      206
    ],
    "color": "#EA91AA"
  },
  {
    "id": "z45",
    "name": "Coral Tower",
    "pos": [
      -353.63,
      68
    ],
    "color": "#E385A4"
  },
  {
    "id": "z46",
    "name": "VERDANIA",
    "pos": [
      -555.88,
      1107.75
    ],
    "color": "#8AE7AA"
  },
  {
    "id": "z47",
    "name": "THE ABYSS",
    "pos": [
      -845.77,
      653
    ],
    "color": "#838183"
  },
  {
    "id": "z48",
    "name": "PUTRIFIED DUCTS",
    "pos": [
      -186.13,
      919.25
    ],
    "color": "#8BA7B9"
  },
  {
    "id": "z49",
    "name": "Songclave",
    "pos": [
      -219.13,
      806
    ],
    "color": "#E2D798"
  },
  {
    "id": "z50",
    "name": "The Mist",
    "pos": [
      -60.53,
      1021
    ],
    "color": "rgba(150,150,150,1)"
  }
];

export const ITEMS: Item[] = [
  {
    "id": "i0",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z44",
    "x": -305.05,
    "y": 247.86,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i1",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z0",
    "x": -712.4,
    "y": 221.21,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i2",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z2",
    "x": -698.2,
    "y": 274,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i3",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z47",
    "x": -820.6,
    "y": 625.74,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i4",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z3",
    "x": -637.61,
    "y": 333.4,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i5",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z1",
    "x": -723.2,
    "y": 128.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i6",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z6",
    "x": -651.81,
    "y": 401.19,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i7",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z6",
    "x": -703.8,
    "y": 389.59,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i8",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z6",
    "x": -681.2,
    "y": 430.99,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i9",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z3",
    "x": -658.41,
    "y": 319.2,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i10",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z5",
    "x": -755.99,
    "y": 330.4,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i11",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z8",
    "x": -678,
    "y": 542.18,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i12",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z20",
    "x": -586.02,
    "y": 549.38,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i13",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z4",
    "x": -605.62,
    "y": 123.81,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i14",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z8",
    "x": -682.6,
    "y": 634.58,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i15",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z8",
    "x": -725.4,
    "y": 684.18,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i16",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z7",
    "x": -712.2,
    "y": 729.37,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i17",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z8",
    "x": -770.19,
    "y": 666.78,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i18",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z8",
    "x": -771.99,
    "y": 627.98,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i19",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z47",
    "x": -786.58,
    "y": 762.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i20",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z7",
    "x": -678.2,
    "y": 770.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i21",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z13",
    "x": -629.01,
    "y": 747.37,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i22",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z9",
    "x": -670.41,
    "y": 911.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i23",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z9",
    "x": -702.2,
    "y": 908.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i24",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z9",
    "x": -710.8,
    "y": 979.36,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i25",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z46",
    "x": -739.59,
    "y": 1122.35,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i26",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z11",
    "x": -602.35,
    "y": 1005.52,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i27",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z13",
    "x": -554.83,
    "y": 764.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i28",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z11",
    "x": -543.83,
    "y": 911.16,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i29",
    "name": "Bench [Temporary]",
    "category": "bench",
    "zoneId": "z11",
    "x": -556.83,
    "y": 930.76,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i30",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z11",
    "x": -489.84,
    "y": 977.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i31",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z12",
    "x": -478.84,
    "y": 821.17,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i32",
    "name": "Bench [Temporary]",
    "category": "bench",
    "zoneId": "z7",
    "x": -587.22,
    "y": 614.78,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i33",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z15",
    "x": -489.64,
    "y": 677.18,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i34",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z20",
    "x": -560.43,
    "y": 549.38,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i35",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z20",
    "x": -548.83,
    "y": 455.59,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i36",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z3",
    "x": -619.61,
    "y": 369.2,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i37",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z21",
    "x": -538.03,
    "y": 311.8,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i38",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z3",
    "x": -579.42,
    "y": 266.4,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i39",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z22",
    "x": -520.03,
    "y": 216.21,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i40",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z22",
    "x": -461.24,
    "y": 129.01,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i41",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z22",
    "x": -442.85,
    "y": 226.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i42",
    "name": "Bench [Temporary]",
    "category": "bench",
    "zoneId": "z42",
    "x": -412.85,
    "y": 332.8,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i43",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z16",
    "x": -387.86,
    "y": 808.57,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i44",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z18",
    "x": -425.85,
    "y": 895.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i45",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z19",
    "x": -323.87,
    "y": 1061.55,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i46",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z19",
    "x": -274.88,
    "y": 984.55,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i47",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z46",
    "x": -676.2,
    "y": 1116.35,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i48",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z25",
    "x": -213.27,
    "y": 308.81,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i49",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z25",
    "x": -227.57,
    "y": 327.94,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i50",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z25",
    "x": -255.28,
    "y": 367.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i51",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z42",
    "x": -305.75,
    "y": 337.92,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i52",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z27",
    "x": -232.11,
    "y": 473.31,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i53",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z28",
    "x": -291.93,
    "y": 504.13,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i54",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z31",
    "x": -242.19,
    "y": 600.63,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i55",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z31",
    "x": -218.09,
    "y": 604,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i56",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z31",
    "x": -282.97,
    "y": 592.53,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i57",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z28",
    "x": -357.91,
    "y": 501.25,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i58",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z42",
    "x": -457.83,
    "y": 456.94,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i59",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z30",
    "x": -398.75,
    "y": 552.27,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i60",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z29",
    "x": -400.58,
    "y": 660.14,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i61",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z39",
    "x": -240.36,
    "y": 1146.46,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i62",
    "name": "Bench (for 60 Rosaries)",
    "category": "bench",
    "zoneId": "z19",
    "x": -201.13,
    "y": 1018.72,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i63",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z19",
    "x": -253.03,
    "y": 926.53,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i64",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z49",
    "x": -267.75,
    "y": 830.72,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i65",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z41",
    "x": -322.87,
    "y": 861.08,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i66",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z33",
    "x": -322.81,
    "y": 748.57,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i67",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z49",
    "x": -235.52,
    "y": 780.41,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i68",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z49",
    "x": -218.91,
    "y": 793.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i69",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z35",
    "x": -208.06,
    "y": 716.38,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i70",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z37",
    "x": -115.29,
    "y": 698.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i71",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z23",
    "x": -276.54,
    "y": 81.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i72",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z24",
    "x": -212.6,
    "y": 266.8,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i73",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z25",
    "x": -129.6,
    "y": 275.36,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i74",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z44",
    "x": -305.3,
    "y": 261.77,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i75",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z43",
    "x": -346.78,
    "y": 135.69,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i76",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z42",
    "x": -372.07,
    "y": 351.19,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i77",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z31",
    "x": -322.07,
    "y": 609.94,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i78",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z46",
    "x": -544.77,
    "y": 1146.07,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i79",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z47",
    "x": -845.65,
    "y": 757.69,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i80",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z47",
    "x": -911.72,
    "y": 622.99,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i81",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z20",
    "x": -567.7,
    "y": 540.27,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i82",
    "name": "Bench",
    "category": "bench",
    "zoneId": "z48",
    "x": -126.89,
    "y": 881.5,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i83",
    "name": "Bellway - Marrow",
    "category": "bench",
    "zoneId": "z3",
    "x": -651.81,
    "y": 357.6,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i84",
    "name": "Bellway - Bone Bottom",
    "category": "bench",
    "zoneId": "z2",
    "x": -709.6,
    "y": 300,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i85",
    "name": "Bellway - Deep Docks",
    "category": "bench",
    "zoneId": "z8",
    "x": -718.2,
    "y": 626.98,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i86",
    "name": "Bellway - Far Fields",
    "category": "bench",
    "zoneId": "z9",
    "x": -702,
    "y": 916.56,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i87",
    "name": "Bellway - Greymoor",
    "category": "bench",
    "zoneId": "z13",
    "x": -568.82,
    "y": 741.57,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i88",
    "name": "Bellway - Bellhart",
    "category": "bench",
    "zoneId": "z20",
    "x": -599.42,
    "y": 548.58,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i89",
    "name": "Bellway - Shellwood",
    "category": "bench",
    "zoneId": "z21",
    "x": -537.83,
    "y": 334,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i90",
    "name": "Bellway - Blasted Steps",
    "category": "bench",
    "zoneId": "z22",
    "x": -442.45,
    "y": 215.61,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i91",
    "name": "Bellway - Bilewater",
    "category": "bench",
    "zoneId": "z18",
    "x": -425.85,
    "y": 901.36,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i92",
    "name": "Bellway - The Slab",
    "category": "bench",
    "zoneId": "z42",
    "x": -306.32,
    "y": 318.81,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i93",
    "name": "Bellway - Grand Bellway",
    "category": "bench",
    "zoneId": "z33",
    "x": -322.27,
    "y": 737.63,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i94",
    "name": "Bellway - Putrified Ducts",
    "category": "bench",
    "zoneId": "z19",
    "x": -200.8,
    "y": 1006.6,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i95",
    "name": "Ventrica - Choral Chambers (for 80 Rosaries)",
    "category": "bench",
    "zoneId": "z28",
    "x": -322.11,
    "y": 462.44,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i96",
    "name": "Ventrica - Underworks",
    "category": "bench",
    "zoneId": "z29",
    "x": -414.55,
    "y": 618.13,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i97",
    "name": "Ventrica - Grand Bellway for 80 Rosaries",
    "category": "bench",
    "zoneId": "z33",
    "x": -321.96,
    "y": 754,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i98",
    "name": "Ventrica - First Shrine",
    "category": "bench",
    "zoneId": "z49",
    "x": -222.52,
    "y": 771.94,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i99",
    "name": "Ventrica - High Halls (for 80 Rosaries)",
    "category": "bench",
    "zoneId": "z34",
    "x": -217.16,
    "y": 611.38,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i100",
    "name": "Ventrica - Memorium (for 80 Rosaries)",
    "category": "bench",
    "zoneId": "z34",
    "x": -165.1,
    "y": 693.88,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i101",
    "name": "Ventrica - Terminus",
    "category": "bench",
    "zoneId": "z37",
    "x": -114.93,
    "y": 688.44,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i102",
    "name": "Map Vendor - Shakra",
    "category": "info",
    "zoneId": "z2",
    "x": -691.4,
    "y": 297.4,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i103",
    "name": "Map Vendor - Shakra",
    "category": "info",
    "zoneId": "z20",
    "x": -579.94,
    "y": 562.3,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i104",
    "name": "Map - Mosslands",
    "category": "info",
    "zoneId": "z3",
    "x": -658.81,
    "y": 339.2,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i105",
    "name": "Map - Memorium",
    "category": "info",
    "zoneId": "z35",
    "x": -207.07,
    "y": 780.63,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i106",
    "name": "Map - Marrow",
    "category": "info",
    "zoneId": "z3",
    "x": -659.51,
    "y": 339.2,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i107",
    "name": "Map - Wormways",
    "category": "info",
    "zoneId": "z4",
    "x": -611.02,
    "y": 181.61,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i108",
    "name": "Map - Hunter's March",
    "category": "info",
    "zoneId": "z10",
    "x": -651.51,
    "y": 800.97,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i109",
    "name": "Map - Deep Docks",
    "category": "info",
    "zoneId": "z8",
    "x": -711.7,
    "y": 647.58,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i110",
    "name": "Map - Far Fields",
    "category": "info",
    "zoneId": "z9",
    "x": -715.1,
    "y": 896.16,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i111",
    "name": "Map - Greymoor",
    "category": "info",
    "zoneId": "z11",
    "x": -555.93,
    "y": 932.56,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i112",
    "name": "Map - Sinner's Road",
    "category": "info",
    "zoneId": "z12",
    "x": -478.64,
    "y": 817.97,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i113",
    "name": "Map - Bilewater",
    "category": "info",
    "zoneId": "z18",
    "x": -386.86,
    "y": 973.06,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i114",
    "name": "Map - Bellhart",
    "category": "info",
    "zoneId": "z20",
    "x": -579.62,
    "y": 562.18,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i115",
    "name": "Map - Shellwood",
    "category": "info",
    "zoneId": "z21",
    "x": -581.72,
    "y": 396.99,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i116",
    "name": "Map - Blasted Steps",
    "category": "info",
    "zoneId": "z21",
    "x": -498.74,
    "y": 289.2,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i117",
    "name": "Map - Weavenest Atla",
    "category": "info",
    "zoneId": "z5",
    "x": -726.9,
    "y": 366,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i118",
    "name": "Map - Cogwork Core",
    "category": "info",
    "zoneId": "z31",
    "x": -233.53,
    "y": 601.38,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i119",
    "name": "Map - The Abyss",
    "category": "info",
    "zoneId": "z47",
    "x": -903.77,
    "y": 621.56,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i120",
    "name": "Map - Verdania",
    "category": "info",
    "zoneId": "z46",
    "x": -544.77,
    "y": 1148.41,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i121",
    "name": "Map - Sand of Karak",
    "category": "info",
    "zoneId": "z44",
    "x": -381.68,
    "y": 176.56,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i122",
    "name": "Map - Mount Fay",
    "category": "info",
    "zoneId": "z44",
    "x": -305.23,
    "y": 246.94,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i123",
    "name": "Map - The Slab",
    "category": "info",
    "zoneId": "z25",
    "x": -253.6,
    "y": 386.7,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i124",
    "name": "Map - Choral Chambers #1 (for 70 Rosaries)",
    "category": "info",
    "zoneId": "z28",
    "x": -322.62,
    "y": 483.94,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i125",
    "name": "Map - Grand Gate",
    "category": "info",
    "zoneId": "z42",
    "x": -411.75,
    "y": 413.25,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i126",
    "name": "Map - Underworks",
    "category": "info",
    "zoneId": "z42",
    "x": -423.24,
    "y": 462.72,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i127",
    "name": "Map - Whiteward for 70 Rosaries",
    "category": "info",
    "zoneId": "z32",
    "x": -352.38,
    "y": 607.27,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i128",
    "name": "Map - Choral Chambers #2 (for 70 Rosaries)",
    "category": "info",
    "zoneId": "z41",
    "x": -322.62,
    "y": 762.38,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i129",
    "name": "Map - Whispering Vaults",
    "category": "info",
    "zoneId": "z49",
    "x": -245.67,
    "y": 798.55,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i130",
    "name": "Map - High Halls (for 70 Rosaries)",
    "category": "info",
    "zoneId": "z34",
    "x": -217.83,
    "y": 619.28,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i131",
    "name": "Map - The Cradle",
    "category": "info",
    "zoneId": "z36",
    "x": -87.45,
    "y": 621,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i132",
    "name": "Map - Putrified Ducts",
    "category": "info",
    "zoneId": "z19",
    "x": -214.84,
    "y": 984.41,
    "description": "Shakra o un mapa del reino.",
    "search": []
  },
  {
    "id": "i133",
    "name": "Requires Elegy of the Deep",
    "category": "info",
    "zoneId": "z11",
    "x": -531.66,
    "y": 1032.39,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i134",
    "name": "Requires Craw Summons",
    "category": "info",
    "zoneId": "z11",
    "x": -573.58,
    "y": 1043.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i135",
    "name": "Requires Bellhome Key",
    "category": "info",
    "zoneId": "z20",
    "x": -572.79,
    "y": 546.14,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i136",
    "name": "Requires Key of Apostate",
    "category": "info",
    "zoneId": "z42",
    "x": -292.02,
    "y": 341.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i137",
    "name": "Requires Key of Heretic",
    "category": "info",
    "zoneId": "z25",
    "x": -265.95,
    "y": 347.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i138",
    "name": "Requires Key of Heretic",
    "category": "info",
    "zoneId": "z25",
    "x": -227.2,
    "y": 334.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i139",
    "name": "Requires Key of Heretic",
    "category": "info",
    "zoneId": "z42",
    "x": -304.92,
    "y": 352.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i140",
    "name": "Requires Key of Apostate",
    "category": "info",
    "zoneId": "z25",
    "x": -227.14,
    "y": 353.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i141",
    "name": "Requires Key of Indolent",
    "category": "info",
    "zoneId": "z25",
    "x": -263.8,
    "y": 371.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i142",
    "name": "Requires Key of Indolent",
    "category": "info",
    "zoneId": "z25",
    "x": -255.1,
    "y": 334.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i143",
    "name": "Requires Key of Indolent",
    "category": "info",
    "zoneId": "z25",
    "x": -243.7,
    "y": 334.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i144",
    "name": "Requires Architect's Key",
    "category": "info",
    "zoneId": "z32",
    "x": -391.6,
    "y": 656.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i145",
    "name": "Requires White Key",
    "category": "info",
    "zoneId": "z31",
    "x": -321.82,
    "y": 599.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i146",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z13",
    "x": -541.03,
    "y": 772.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i147",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z36",
    "x": -202.7,
    "y": 582.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i148",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z32",
    "x": -336.24,
    "y": 611.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i149",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z24",
    "x": -231.97,
    "y": 230.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i150",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z45",
    "x": -267.24,
    "y": 61.64,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i151",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z42",
    "x": -301.49,
    "y": 337.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i152",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z27",
    "x": -245.95,
    "y": 524.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i153",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z22",
    "x": -425.6,
    "y": 188.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i154",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z33",
    "x": -225.89,
    "y": 705.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i155",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z13",
    "x": -554.05,
    "y": 754.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i156",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z18",
    "x": -403.02,
    "y": 935.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i157",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z12",
    "x": -502.69,
    "y": 905.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i158",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z1",
    "x": -717.6,
    "y": 138.95,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i159",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z33",
    "x": -277.84,
    "y": 671.21,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i160",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z47",
    "x": -843.7,
    "y": 750.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i161",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z43",
    "x": -398.22,
    "y": 107.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i162",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z37",
    "x": -74.78,
    "y": 732.27,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i163",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z42",
    "x": -405.53,
    "y": 434.67,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i164",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z42",
    "x": -440.58,
    "y": 430.71,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i165",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z20",
    "x": -566.53,
    "y": 550.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i166",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z40",
    "x": -221.02,
    "y": 1204.6,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i167",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z5",
    "x": -743.92,
    "y": 328.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i168",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z12",
    "x": -479.77,
    "y": 901.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i169",
    "name": "Requires Flea Brew and Silkspeed Anklets",
    "category": "info",
    "zoneId": "z46",
    "x": -742.47,
    "y": 1154.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i170",
    "name": "Requires Cursed Crest",
    "category": "info",
    "zoneId": "z15",
    "x": -534.24,
    "y": 608.42,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i171",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -557.35,
    "y": 490.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i172",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -543.67,
    "y": 448.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i173",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z21",
    "x": -528.64,
    "y": 403.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i174",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z0",
    "x": -690.6,
    "y": 184.21,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i175",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z6",
    "x": -697.1,
    "y": 504.79,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i176",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z6",
    "x": -627.91,
    "y": 421.99,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i177",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z10",
    "x": -702.3,
    "y": 794.27,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i178",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z1",
    "x": -654.41,
    "y": 127.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i179",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z9",
    "x": -693.67,
    "y": 928.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i180",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z13",
    "x": -611.02,
    "y": 767.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i181",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z21",
    "x": -506.16,
    "y": 399.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i182",
    "name": "Requires Silkspear Attack",
    "category": "info",
    "zoneId": "z3",
    "x": -651.91,
    "y": 343.2,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i183",
    "name": "Requires Silkspear Attack",
    "category": "info",
    "zoneId": "z3",
    "x": -630.31,
    "y": 280.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i184",
    "name": "Requires Silkspear Attack",
    "category": "info",
    "zoneId": "z3",
    "x": -636.61,
    "y": 317.9,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i185",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z32",
    "x": -337.91,
    "y": 655.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i186",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z19",
    "x": -277.11,
    "y": 883.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i187",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z44",
    "x": -305.16,
    "y": 274.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i188",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z29",
    "x": -412.85,
    "y": 661.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i189",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z29",
    "x": -411.22,
    "y": 684.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i190",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z16",
    "x": -388.8,
    "y": 727.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i191",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z32",
    "x": -396.27,
    "y": 666.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i192",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z9",
    "x": -733.09,
    "y": 1059.45,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i193",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z43",
    "x": -459.42,
    "y": 110.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i194",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z9",
    "x": -732.6,
    "y": 844.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i195",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z12",
    "x": -472.74,
    "y": 851.71,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i196",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z11",
    "x": -617.22,
    "y": 992.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i197",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z9",
    "x": -644.41,
    "y": 992.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i198",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z46",
    "x": -496.58,
    "y": 1093.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i199",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z42",
    "x": -430.68,
    "y": 438.16,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i200",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z27",
    "x": -192.66,
    "y": 549.8,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i201",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z37",
    "x": -156.6,
    "y": 710.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i202",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z33",
    "x": -288.45,
    "y": 666.26,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i203",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z31",
    "x": -246.79,
    "y": 579.95,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i204",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z11",
    "x": -581.39,
    "y": 1032.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i205",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z27",
    "x": -215.17,
    "y": 548.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i206",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z42",
    "x": -463.14,
    "y": 408.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i207",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z34",
    "x": -184.77,
    "y": 648.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i208",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z41",
    "x": -315.74,
    "y": 809.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i209",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z41",
    "x": -283.61,
    "y": 801.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i210",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z41",
    "x": -354.47,
    "y": 838.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i211",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z19",
    "x": -242.41,
    "y": 936.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i212",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z25",
    "x": -199.13,
    "y": 316.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i213",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z32",
    "x": -339.72,
    "y": 600.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i214",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z19",
    "x": -304.32,
    "y": 935.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i215",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z34",
    "x": -114.78,
    "y": 672.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i216",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z28",
    "x": -322.28,
    "y": 467.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i217",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z30",
    "x": -457.69,
    "y": 470.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i218",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z11",
    "x": -484.67,
    "y": 954.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i219",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z42",
    "x": -411.53,
    "y": 397.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i220",
    "name": "Requires Needolin and activating 5 bells",
    "category": "info",
    "zoneId": "z42",
    "x": -411.92,
    "y": 350.41,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i221",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z9",
    "x": -762.22,
    "y": 801.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i222",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z47",
    "x": -786.77,
    "y": 702.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i223",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z19",
    "x": -237.85,
    "y": 989.63,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i224",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z44",
    "x": -378.53,
    "y": 253.16,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i225",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z33",
    "x": -252.7,
    "y": 759.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i226",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z31",
    "x": -258.8,
    "y": 646.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i227",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z31",
    "x": -235.95,
    "y": 652.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i228",
    "name": "Intersection - Up/Down or Left/Right",
    "category": "info",
    "zoneId": "z29",
    "x": -413.03,
    "y": 634,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i229",
    "name": "Intersection - Up/Down or Left/Right",
    "category": "info",
    "zoneId": "z33",
    "x": -251.77,
    "y": 713.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i230",
    "name": "Intersection - Up/Down or Left/Right",
    "category": "info",
    "zoneId": "z47",
    "x": -751.89,
    "y": 740.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i231",
    "name": "Intersection - Up/Down or Left/Right",
    "category": "info",
    "zoneId": "z28",
    "x": -288.88,
    "y": 480.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i232",
    "name": "Intersection - Up/Down or Left/Right",
    "category": "info",
    "zoneId": "z41",
    "x": -317.03,
    "y": 775.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i233",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z19",
    "x": -324.03,
    "y": 1053.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i234",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z16",
    "x": -396.24,
    "y": 699.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i235",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z25",
    "x": -279.08,
    "y": 353.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i236",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z42",
    "x": -404.16,
    "y": 311.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i237",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z33",
    "x": -307.52,
    "y": 722.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i238",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z18",
    "x": -452.67,
    "y": 934.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i239",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z18",
    "x": -450.69,
    "y": 919.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i240",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z8",
    "x": -699.92,
    "y": 607,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i241",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z11",
    "x": -501.96,
    "y": 933.26,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i242",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z11",
    "x": -489.34,
    "y": 964.55,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i243",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z14",
    "x": -564.83,
    "y": 654.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i244",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z13",
    "x": -579.86,
    "y": 721.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i245",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z13",
    "x": -569.02,
    "y": 730.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i246",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z0",
    "x": -697.03,
    "y": 174.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i247",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z20",
    "x": -582.27,
    "y": 441.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i248",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z21",
    "x": -537.41,
    "y": 316.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i249",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z7",
    "x": -678.8,
    "y": 735.27,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i250",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z10",
    "x": -614.69,
    "y": 875.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i251",
    "name": "Requires breaking from above",
    "category": "info",
    "zoneId": "z30",
    "x": -460.82,
    "y": 478.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i252",
    "name": "Requires coming from the west side, which requires Silk Soar",
    "category": "info",
    "zoneId": "z10",
    "x": -614.69,
    "y": 888.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i253",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z26",
    "x": -159.77,
    "y": 543.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i254",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z22",
    "x": -523.97,
    "y": 124,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i255",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z29",
    "x": -432.23,
    "y": 597.08,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i256",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z31",
    "x": -302.3,
    "y": 587.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i257",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z30",
    "x": -390.96,
    "y": 562.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i258",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z9",
    "x": -661.81,
    "y": 940.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i259",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z46",
    "x": -440.67,
    "y": 1092.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i260",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z12",
    "x": -482.17,
    "y": 892.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i261",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z18",
    "x": -430.95,
    "y": 925.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i262",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z17",
    "x": -448.85,
    "y": 793.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i263",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z20",
    "x": -543.6,
    "y": 517.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i264",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z20",
    "x": -539.82,
    "y": 465,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i265",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z20",
    "x": -634.16,
    "y": 548.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i266",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z9",
    "x": -654.74,
    "y": 934.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i267",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z7",
    "x": -653.71,
    "y": 753.57,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i268",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z11",
    "x": -495.05,
    "y": 1009,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i269",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z11",
    "x": -536.35,
    "y": 964.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i270",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z12",
    "x": -543.41,
    "y": 904.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i271",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z11",
    "x": -556.15,
    "y": 999.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i272",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z13",
    "x": -678,
    "y": 774.67,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i273",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z8",
    "x": -724.8,
    "y": 679.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i274",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z6",
    "x": -676.9,
    "y": 463.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i275",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z6",
    "x": -702,
    "y": 471.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i276",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z46",
    "x": -522.95,
    "y": 1099.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i277",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z48",
    "x": -191.42,
    "y": 1006.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i278",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z47",
    "x": -848.54,
    "y": 631.6,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i279",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z34",
    "x": -223.38,
    "y": 680.8,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i280",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z34",
    "x": -89.89,
    "y": 669.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i281",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z27",
    "x": -219.24,
    "y": 576.07,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i282",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z34",
    "x": -202.61,
    "y": 683.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i283",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z37",
    "x": -191.05,
    "y": 710.04,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i284",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z39",
    "x": -337.82,
    "y": 1069.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i285",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z23",
    "x": -292.63,
    "y": 154.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i286",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z44",
    "x": -349.78,
    "y": 198.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i287",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z30",
    "x": -443.64,
    "y": 573.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i288",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z41",
    "x": -318.32,
    "y": 758.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i289",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z30",
    "x": -440.35,
    "y": 583.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i290",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z41",
    "x": -298.91,
    "y": 817.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i291",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z42",
    "x": -315.05,
    "y": 334.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i292",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z49",
    "x": -264.83,
    "y": 816.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i293",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z25",
    "x": -275.99,
    "y": 347.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i294",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z19",
    "x": -274.53,
    "y": 943.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i295",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z24",
    "x": -192.08,
    "y": 144.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i296",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z24",
    "x": -231.29,
    "y": 264.14,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i297",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z31",
    "x": -275.33,
    "y": 550.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i298",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z31",
    "x": -270.86,
    "y": 569.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i299",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z31",
    "x": -271.14,
    "y": 601.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i300",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z44",
    "x": -391.07,
    "y": 200,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i301",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z33",
    "x": -269.53,
    "y": 729.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i302",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z30",
    "x": -417.47,
    "y": 477.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i303",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z6",
    "x": -652.81,
    "y": 421.99,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i304",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z42",
    "x": -416.94,
    "y": 435,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i305",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z22",
    "x": -474.85,
    "y": 248.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i306",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z22",
    "x": -508.47,
    "y": 193.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i307",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z18",
    "x": -390.27,
    "y": 896.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i308",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z12",
    "x": -483.74,
    "y": 840.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i309",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z11",
    "x": -544.72,
    "y": 928.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i310",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z14",
    "x": -525.06,
    "y": 664.63,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i311",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z20",
    "x": -526.91,
    "y": 460.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i312",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z7",
    "x": -577.55,
    "y": 650.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i313",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z30",
    "x": -434.57,
    "y": 586.63,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i314",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z41",
    "x": -351.05,
    "y": 797.97,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i315",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z8",
    "x": -740.26,
    "y": 721.2,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i316",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z9",
    "x": -741.41,
    "y": 789.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i317",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z33",
    "x": -303.77,
    "y": 763.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i318",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z41",
    "x": -291.39,
    "y": 798.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i319",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z29",
    "x": -402.53,
    "y": 691,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i320",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z41",
    "x": -291.11,
    "y": 831.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i321",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z25",
    "x": -239.28,
    "y": 336.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i322",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z25",
    "x": -245.14,
    "y": 349.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i323",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z19",
    "x": -244.37,
    "y": 943.98,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i324",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z25",
    "x": -265.03,
    "y": 356.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i325",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z23",
    "x": -268.86,
    "y": 81.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i326",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z25",
    "x": -281.2,
    "y": 347.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i327",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z28",
    "x": -359.02,
    "y": 506.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i328",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z1",
    "x": -688.53,
    "y": 70.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i329",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z17",
    "x": -473.72,
    "y": 800.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i330",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z20",
    "x": -642.24,
    "y": 557.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i331",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z28",
    "x": -352.68,
    "y": 470.33,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i332",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z13",
    "x": -534.14,
    "y": 746.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i333",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z15",
    "x": -494.2,
    "y": 658.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i334",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z31",
    "x": -251.61,
    "y": 618.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i335",
    "name": "Requires Faydown Cloak",
    "category": "info",
    "zoneId": "z44",
    "x": -339.33,
    "y": 201.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i336",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z11",
    "x": -534.7,
    "y": 927.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i337",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z21",
    "x": -583.85,
    "y": 371.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i338",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z20",
    "x": -622.14,
    "y": 558.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i339",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z20",
    "x": -581.02,
    "y": 576.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i340",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z21",
    "x": -551.19,
    "y": 430,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i341",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z12",
    "x": -550.69,
    "y": 881.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i342",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z9",
    "x": -719.85,
    "y": 1033.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i343",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z20",
    "x": -656.31,
    "y": 524.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i344",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z10",
    "x": -661.71,
    "y": 848.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i345",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z3",
    "x": -666.21,
    "y": 296.4,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i346",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z20",
    "x": -554.95,
    "y": 536.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i347",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z9",
    "x": -685.66,
    "y": 882.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i348",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z42",
    "x": -313.41,
    "y": 338.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i349",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z34",
    "x": -207.55,
    "y": 700.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i350",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z42",
    "x": -456.28,
    "y": 427.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i351",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z33",
    "x": -233.79,
    "y": 711.2,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i352",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z3",
    "x": -656.11,
    "y": 323.4,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i353",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z4",
    "x": -611.28,
    "y": 157.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i354",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z13",
    "x": -605.82,
    "y": 816.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i355",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z4",
    "x": -676.6,
    "y": 159.21,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i356",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z9",
    "x": -722.7,
    "y": 829.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i357",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z9",
    "x": -739.8,
    "y": 996,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i358",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z2",
    "x": -677.9,
    "y": 259.3,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i359",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z6",
    "x": -672.01,
    "y": 359.9,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i360",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z19",
    "x": -222.95,
    "y": 998.74,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i361",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z9",
    "x": -743.55,
    "y": 850.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i362",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z5",
    "x": -696.8,
    "y": 350.1,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i363",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z6",
    "x": -698.8,
    "y": 359.1,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i364",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z3",
    "x": -652.91,
    "y": 267.9,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i365",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z20",
    "x": -654.31,
    "y": 540.18,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i366",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z7",
    "x": -678.6,
    "y": 643.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i367",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z4",
    "x": -641.91,
    "y": 163.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i368",
    "name": "One-Way Shortcut - Down",
    "category": "info",
    "zoneId": "z9",
    "x": -703.85,
    "y": 962.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i369",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z25",
    "x": -243.58,
    "y": 352.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i370",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z49",
    "x": -252.8,
    "y": 820.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i371",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z16",
    "x": -386.47,
    "y": 755.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i372",
    "name": "One-Way Shortcut - Left",
    "category": "info",
    "zoneId": "z8",
    "x": -769.59,
    "y": 659.58,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i373",
    "name": "Requires Needolin",
    "category": "info",
    "zoneId": "z46",
    "x": -738.89,
    "y": 1110.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i374",
    "name": "Requires Needolin",
    "category": "info",
    "zoneId": "z46",
    "x": -440.55,
    "y": 1067,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i375",
    "name": "Requires Surgeon's Key",
    "category": "info",
    "zoneId": "z30",
    "x": -354.69,
    "y": 547.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i376",
    "name": "Unlocked during Trail's End wish",
    "category": "info",
    "zoneId": "z39",
    "x": -264.86,
    "y": 1108.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i377",
    "name": "Unlocked during Final Audience wish",
    "category": "info",
    "zoneId": "z36",
    "x": -206.11,
    "y": 599.82,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i378",
    "name": "Unlocked after meeting Green Prince in Cogwork Core",
    "category": "info",
    "zoneId": "z11",
    "x": -551.02,
    "y": 1023.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i379",
    "name": "Requirement Unknown",
    "category": "info",
    "zoneId": "z21",
    "x": -488.28,
    "y": 307.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i380",
    "name": "Unlocked during A Vassal Lost wish (Steel Soul only)",
    "category": "info",
    "zoneId": "z1",
    "x": -702.44,
    "y": 109.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i381",
    "name": "Requires Act 3",
    "category": "info",
    "zoneId": "z0",
    "x": -706.49,
    "y": 189.97,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i382",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z9",
    "x": -750.92,
    "y": 825.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i383",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z0",
    "x": -741.55,
    "y": 180.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i384",
    "name": "Requirement Unknown",
    "category": "info",
    "zoneId": "z11",
    "x": -489.58,
    "y": 979.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i385",
    "name": "Requires completing Crow Battle",
    "category": "info",
    "zoneId": "z11",
    "x": -548.16,
    "y": 995.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i386",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z13",
    "x": -625.67,
    "y": 798,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i387",
    "name": "Requires Silk Soar",
    "category": "info",
    "zoneId": "z24",
    "x": -221.53,
    "y": 192.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i388",
    "name": "One-Way Shortcut - Right",
    "category": "info",
    "zoneId": "z3",
    "x": -629.21,
    "y": 377.3,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i389",
    "name": "Requires Needolin",
    "category": "info",
    "zoneId": "z5",
    "x": -726.7,
    "y": 299.3,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i390",
    "name": "Requires Clawline",
    "category": "info",
    "zoneId": "z1",
    "x": -633.41,
    "y": 92.01,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i391",
    "name": "One-Way Shortcut - Up",
    "category": "info",
    "zoneId": "z8",
    "x": -766.29,
    "y": 632.48,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i392",
    "name": "Requires Swift Step",
    "category": "info",
    "zoneId": "z8",
    "x": -733.89,
    "y": 708.57,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "dash",
      "esprint"
    ]
  },
  {
    "id": "i393",
    "name": "Requires Swift Step",
    "category": "info",
    "zoneId": "z1",
    "x": -641.21,
    "y": 111.11,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "dash",
      "esprint"
    ]
  },
  {
    "id": "i394",
    "name": "Requires Simple Key",
    "category": "info",
    "zoneId": "z8",
    "x": -733.09,
    "y": 714.97,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i395",
    "name": "Requires Simple Key",
    "category": "info",
    "zoneId": "z4",
    "x": -644.83,
    "y": 158.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i396",
    "name": "Requires Simple Key",
    "category": "info",
    "zoneId": "z12",
    "x": -499.66,
    "y": 843.86,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i397",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z0",
    "x": -682.47,
    "y": 220.02,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i398",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z32",
    "x": -400.7,
    "y": 648.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i399",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z31",
    "x": -247.62,
    "y": 558.61,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i400",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z10",
    "x": -643.41,
    "y": 819.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i401",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z10",
    "x": -682.28,
    "y": 794.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i402",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z9",
    "x": -711.2,
    "y": 954.26,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i403",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z9",
    "x": -700.16,
    "y": 928.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i404",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z9",
    "x": -729.72,
    "y": 907.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i405",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z9",
    "x": -727.24,
    "y": 980.41,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i406",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z9",
    "x": -730.33,
    "y": 1007.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i407",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z10",
    "x": -609.57,
    "y": 881.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i408",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z10",
    "x": -649.78,
    "y": 882.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i409",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z2",
    "x": -672.97,
    "y": 244.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i410",
    "name": "Requires Drifter's Cloak",
    "category": "info",
    "zoneId": "z11",
    "x": -553.28,
    "y": 944.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i411",
    "name": "Requires Swift Step",
    "category": "info",
    "zoneId": "z8",
    "x": -708.1,
    "y": 677.08,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "dash",
      "esprint"
    ]
  },
  {
    "id": "i412",
    "name": "Requires Swift Step",
    "category": "info",
    "zoneId": "z8",
    "x": -711.9,
    "y": 687.67,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "dash",
      "esprint"
    ]
  },
  {
    "id": "i413",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z7",
    "x": -665.01,
    "y": 748.77,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i414",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z8",
    "x": -693.9,
    "y": 546.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i415",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z4",
    "x": -605.32,
    "y": 160.61,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i416",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z3",
    "x": -571.92,
    "y": 282.7,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i417",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z4",
    "x": -620.51,
    "y": 133.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i418",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z14",
    "x": -535.33,
    "y": 668.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i419",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z4",
    "x": -643.61,
    "y": 163.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i420",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z21",
    "x": -577.7,
    "y": 415.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i421",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -617.8,
    "y": 558.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i422",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -583.02,
    "y": 518,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i423",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -550.1,
    "y": 461.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i424",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -509.66,
    "y": 493.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i425",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -515.85,
    "y": 499,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i426",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z20",
    "x": -513.6,
    "y": 453.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i427",
    "name": "Requires Cling Grip",
    "category": "info",
    "zoneId": "z4",
    "x": -613.12,
    "y": 145.01,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": []
  },
  {
    "id": "i428",
    "name": "Ability - Needolin",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -559.03,
    "y": 549.38,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i429",
    "name": "Ability - Sylphsong",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -763.19,
    "y": 378.6,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i430",
    "name": "Ability - Cling Grip",
    "category": "habilidad",
    "zoneId": "z21",
    "x": -510.43,
    "y": 392.99,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i431",
    "name": "Ability - Swift Step",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -676,
    "y": 683.18,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "dash",
      "esprint"
    ]
  },
  {
    "id": "i432",
    "name": "Ability - Elegy of the Deep",
    "category": "habilidad",
    "zoneId": "z1",
    "x": -721.8,
    "y": 128.41,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i433",
    "name": "Ability - Needle Strike",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -459.24,
    "y": 132.01,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i434",
    "name": "Ability - Sharpdart",
    "category": "habilidad",
    "zoneId": "z1",
    "x": -632.41,
    "y": 12.02,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i435",
    "name": "Ability - Silkspear",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -628.81,
    "y": 299.4,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i436",
    "name": "Ability - Thread Storm",
    "category": "habilidad",
    "zoneId": "z11",
    "x": -490.04,
    "y": 998.35,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i437",
    "name": "Ability - Cross Stitch",
    "category": "habilidad",
    "zoneId": "z41",
    "x": -360.56,
    "y": 803.37,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i438",
    "name": "Ability - Drifter's Cloak",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -709.6,
    "y": 982.16,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i439",
    "name": "Ability - Silk Soar",
    "category": "habilidad",
    "zoneId": "z47",
    "x": -911.86,
    "y": 728.22,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i440",
    "name": "Ability - Faydown Cloak",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -114.36,
    "y": 280.38,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i441",
    "name": "Ability - Beastling Call",
    "category": "habilidad",
    "zoneId": "z33",
    "x": -329.4,
    "y": 750.5,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i442",
    "name": "Ability - Clawline",
    "category": "habilidad",
    "zoneId": "z29",
    "x": -421.42,
    "y": 655.16,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i443",
    "name": "Ability - Rune Rage",
    "category": "habilidad",
    "zoneId": "z42",
    "x": -314.11,
    "y": 394.56,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i444",
    "name": "Ability - Pale Nails",
    "category": "habilidad",
    "zoneId": "z38",
    "x": -19.45,
    "y": 729.13,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i445",
    "name": "Ability - Conductor's Melody",
    "category": "habilidad",
    "zoneId": "z27",
    "x": -215.14,
    "y": 517.33,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i446",
    "name": "Ability - Vaultkeeper's Melody",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -274.35,
    "y": 830.34,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i447",
    "name": "Ability - Architect's Melody",
    "category": "habilidad",
    "zoneId": "z34",
    "x": -140.64,
    "y": 647.19,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": []
  },
  {
    "id": "i448",
    "name": "Tool - Pin Badge",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -178.72,
    "y": 274.82,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i449",
    "name": "Tool - Volt Filament",
    "category": "habilidad",
    "zoneId": "z23",
    "x": -314.23,
    "y": 143.41,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i450",
    "name": "Tool - Conchcutter",
    "category": "habilidad",
    "zoneId": "z43",
    "x": -348.02,
    "y": 117.56,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i451",
    "name": "Tool - Voltvessels",
    "category": "habilidad",
    "zoneId": "z35",
    "x": -162.46,
    "y": 773.02,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i452",
    "name": "Tool - Ascendant's Grip (for 350 Rosaries)",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -234.64,
    "y": 798.35,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i453",
    "name": "Tool - Spool Extender (for 720 Rosaries)",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -234.64,
    "y": 798.35,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i454",
    "name": "Tool - Spider Strings (for 320 Rosaries)",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -234.64,
    "y": 798.35,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i455",
    "name": "Tool - Silkshot (Twelfth Architect)",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -391.4,
    "y": 676.19,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i456",
    "name": "Tool - Injector Band",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -346.13,
    "y": 654.25,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i457",
    "name": "Tool - Longclaw",
    "category": "habilidad",
    "zoneId": "z19",
    "x": -252.89,
    "y": 928.14,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i458",
    "name": "Tool - Wreath of Purity",
    "category": "habilidad",
    "zoneId": "z39",
    "x": -221.92,
    "y": 1071.41,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i459",
    "name": "Tool - Egg of Flealia (requires finding all Lost Fleas)",
    "category": "habilidad",
    "zoneId": "z39",
    "x": -239.7,
    "y": 1157.85,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i460",
    "name": "Tool - Throwing Ring",
    "category": "habilidad",
    "zoneId": "z40",
    "x": -269.86,
    "y": 1177.95,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i461",
    "name": "Tool - Scuttlebrace",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -393.07,
    "y": 676.26,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i462",
    "name": "Tool - Cogwork Wheel",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -394.09,
    "y": 676.28,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i463",
    "name": "Tool - Claw Mirror",
    "category": "habilidad",
    "zoneId": "z33",
    "x": -306.57,
    "y": 749.78,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i464",
    "name": "Tool - Dark Mirror (Claw Mirrors)",
    "category": "habilidad",
    "zoneId": "z33",
    "x": -306.57,
    "y": 749.78,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i465",
    "name": "Tool - Sawtooth Circlet",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -393.61,
    "y": 676.27,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i466",
    "name": "Tool - Memory Crystal",
    "category": "habilidad",
    "zoneId": "z23",
    "x": -283.63,
    "y": 125.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i467",
    "name": "Tool - Silkshot (Original)",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -129.07,
    "y": 272.59,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i468",
    "name": "Tool - Cogfly",
    "category": "habilidad",
    "zoneId": "z36",
    "x": -171.09,
    "y": 569.38,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i469",
    "name": "Tool - Rosary Cannon",
    "category": "habilidad",
    "zoneId": "z26",
    "x": -171.07,
    "y": 502.34,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i470",
    "name": "Tool - Reserve Bind",
    "category": "habilidad",
    "zoneId": "z34",
    "x": -205.14,
    "y": 615.2,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i471",
    "name": "Tool - Straight Pin",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -668.81,
    "y": 551.18,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i472",
    "name": "Tool - Threefold Pin",
    "category": "habilidad",
    "zoneId": "z11",
    "x": -521.95,
    "y": 1014.09,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i473",
    "name": "Tool - Sting Shard",
    "category": "habilidad",
    "zoneId": "z8",
    "x": -723.6,
    "y": 706.17,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i474",
    "name": "Tool - Tacks",
    "category": "habilidad",
    "zoneId": "z12",
    "x": -471.24,
    "y": 891.56,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i475",
    "name": "Tool - Longpin",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -571.22,
    "y": 511.59,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i476",
    "name": "Tool - Curveclaw",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -616.02,
    "y": 705.57,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i477",
    "name": "Tool - Curveclaw",
    "category": "habilidad",
    "zoneId": "z13",
    "x": -608.95,
    "y": 737.06,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i478",
    "name": "Tool - Pimpillo",
    "category": "habilidad",
    "zoneId": "z15",
    "x": -517.63,
    "y": 612.38,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i479",
    "name": "Tool - Flintslate",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -723.8,
    "y": 775.77,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i480",
    "name": "Tool - Snare Setter",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -736.59,
    "y": 337.8,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i481",
    "name": "Tool - Compass",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -658.11,
    "y": 339.2,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i482",
    "name": "Tool - Shard Pendant",
    "category": "habilidad",
    "zoneId": "z6",
    "x": -673.4,
    "y": 398.39,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i483",
    "name": "Tool - Magnetite Brooch",
    "category": "habilidad",
    "zoneId": "z2",
    "x": -695.5,
    "y": 289.4,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i484",
    "name": "Tool - Weighted Belt",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -668.81,
    "y": 907.96,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i485",
    "name": "Tool - Barbed Bracelet",
    "category": "habilidad",
    "zoneId": "z12",
    "x": -519.23,
    "y": 903.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i486",
    "name": "Tool - Dead Bug's Purse",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -600.22,
    "y": 190.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i487",
    "name": "Tool - Shell Satchel",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -600.22,
    "y": 191.61,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i488",
    "name": "Tool - Magnetite Dice",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -449.85,
    "y": 138.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i489",
    "name": "Tool - Delver's Drill",
    "category": "habilidad",
    "zoneId": "z30",
    "x": -478.04,
    "y": 514.29,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i490",
    "name": "Tool - Silkspeed Anklets",
    "category": "habilidad",
    "zoneId": "z46",
    "x": -740.39,
    "y": 1156.34,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i491",
    "name": "Tool - Thief's Mark",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -421.05,
    "y": 179.21,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i492",
    "name": "Tool - Plasmium Phial",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i493",
    "name": "Tool - Needle Phial",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i494",
    "name": "Tool - Polip Pouch",
    "category": "habilidad",
    "zoneId": "z21",
    "x": -556.03,
    "y": 407.99,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i495",
    "name": "Tool - Weavelight",
    "category": "habilidad",
    "zoneId": "z0",
    "x": -756.79,
    "y": 211.41,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i496",
    "name": "Tool - Druid's Eye",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -635.21,
    "y": 346.4,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i497",
    "name": "Tool - Magma Bell",
    "category": "habilidad",
    "zoneId": "z8",
    "x": -723,
    "y": 706.17,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i498",
    "name": "Tool - Silkshot (Forge Daughter)",
    "category": "habilidad",
    "zoneId": "z8",
    "x": -722.4,
    "y": 706.17,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i499",
    "name": "Tool - Warding Bell",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -718.6,
    "y": 868.76,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i500",
    "name": "Tool - Fractured Mask",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -616.82,
    "y": 705.57,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i501",
    "name": "Tool - Flea Brew",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -586.82,
    "y": 609.18,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i502",
    "name": "Tool - Multibinder",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -585.02,
    "y": 544.18,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i503",
    "name": "Tool - Wispfire Lantern",
    "category": "habilidad",
    "zoneId": "z30",
    "x": -479.44,
    "y": 538.98,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i504",
    "name": "Tool - Quick Sling",
    "category": "habilidad",
    "zoneId": "z18",
    "x": -336.67,
    "y": 975.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i505",
    "name": "Tool - Snitch Pick",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -420.25,
    "y": 179.21,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i506",
    "name": "Tool - Druid's Eyes",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -634.61,
    "y": 346.4,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i507",
    "name": "Tool - Curvesickle",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -683,
    "y": 906.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": []
  },
  {
    "id": "i508",
    "name": "Crest of the Shaman",
    "category": "habilidad",
    "zoneId": "z0",
    "x": -745.99,
    "y": 167.81,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i509",
    "name": "Crest of the Wanderer",
    "category": "habilidad",
    "zoneId": "z1",
    "x": -703.8,
    "y": 77.82,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i510",
    "name": "Crest of the Beast",
    "category": "habilidad",
    "zoneId": "z13",
    "x": -605.02,
    "y": 789.27,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i511",
    "name": "Crest of the Reaper",
    "category": "habilidad",
    "zoneId": "z15",
    "x": -540.63,
    "y": 600.58,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i512",
    "name": "Crest of the Witch",
    "category": "habilidad",
    "zoneId": "z15",
    "x": -538.83,
    "y": 610.78,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i513",
    "name": "Crest of Architect",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -379.47,
    "y": 668.69,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i514",
    "name": "Crest Upgrade - Crest of the Hunter",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -762.59,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i515",
    "name": "Crest Upgrade - Crest of the Hunter #2",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -760.79,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i516",
    "name": "Crest Upgrade - Yellow Vesticrest (requires 12 crest slots)",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -761.99,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i517",
    "name": "Crest Upgrade - Blue Vesticrest",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -761.39,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": []
  },
  {
    "id": "i518",
    "name": "Simple Key #1",
    "category": "habilidad",
    "zoneId": "z2",
    "x": -693.5,
    "y": 289.4,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i519",
    "name": "Simple Key #2",
    "category": "habilidad",
    "zoneId": "z18",
    "x": -420.45,
    "y": 929.36,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i520",
    "name": "Simple Key #3",
    "category": "habilidad",
    "zoneId": "z42",
    "x": -370.84,
    "y": 351.36,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i521",
    "name": "Simple Key #4",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -232.91,
    "y": 799.94,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i522",
    "name": "Key of Indolent",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -253.5,
    "y": 308,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i523",
    "name": "Key of Heretic",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -227.64,
    "y": 314.77,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i524",
    "name": "Key of Apostate",
    "category": "habilidad",
    "zoneId": "z48",
    "x": -232.86,
    "y": 888.61,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i525",
    "name": "Surgeon's Key",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -338.44,
    "y": 651.29,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i526",
    "name": "Craw Summons",
    "category": "habilidad",
    "zoneId": "z2",
    "x": -698.08,
    "y": 271.69,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i527",
    "name": "White Key",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -235.3,
    "y": 805.94,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i528",
    "name": "Architect's Key",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -392.49,
    "y": 676.26,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i529",
    "name": "Diving Bell Key",
    "category": "habilidad",
    "zoneId": "z47",
    "x": -776.99,
    "y": 752.57,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i530",
    "name": "Bellhome Key",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -585.02,
    "y": 551.78,
    "description": "Una llave que abre algo muy importante.",
    "search": []
  },
  {
    "id": "i531",
    "name": "Mask Shard #1",
    "category": "mejora",
    "zoneId": "z4",
    "x": -654.01,
    "y": 166.21,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i532",
    "name": "Mask Shard #2",
    "category": "mejora",
    "zoneId": "z2",
    "x": -691.5,
    "y": 289.4,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i533",
    "name": "Mask Shard #3",
    "category": "mejora",
    "zoneId": "z6",
    "x": -734.99,
    "y": 425.19,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i534",
    "name": "Mask Shard #4",
    "category": "mejora",
    "zoneId": "z8",
    "x": -699,
    "y": 603.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i535",
    "name": "Mask Shard #5",
    "category": "mejora",
    "zoneId": "z9",
    "x": -714.2,
    "y": 926.96,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i536",
    "name": "Mask Shard #6",
    "category": "mejora",
    "zoneId": "z9",
    "x": -749.99,
    "y": 1067.95,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i537",
    "name": "Mask Shard #7",
    "category": "mejora",
    "zoneId": "z46",
    "x": -677.6,
    "y": 1122.25,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i538",
    "name": "Mask Shard #8",
    "category": "mejora",
    "zoneId": "z17",
    "x": -470.64,
    "y": 761.57,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i539",
    "name": "Mask Shard #9 (Hidden Hunter wish reward)",
    "category": "mejora",
    "zoneId": "z20",
    "x": -581.22,
    "y": 542.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i540",
    "name": "Mask Shard #10 (Dark Hearts wish reward)",
    "category": "mejora",
    "zoneId": "z20",
    "x": -578.22,
    "y": 542.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i541",
    "name": "Mask Shard #11",
    "category": "mejora",
    "zoneId": "z20",
    "x": -577.62,
    "y": 542.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i542",
    "name": "Mask Shard #12",
    "category": "mejora",
    "zoneId": "z21",
    "x": -543.63,
    "y": 427.19,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i543",
    "name": "Mask Shard #13",
    "category": "mejora",
    "zoneId": "z22",
    "x": -492.64,
    "y": 128.01,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i544",
    "name": "Mask Shard #14",
    "category": "mejora",
    "zoneId": "z39",
    "x": -334.07,
    "y": 1107.75,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i545",
    "name": "Mask Shard #15",
    "category": "mejora",
    "zoneId": "z45",
    "x": -265.51,
    "y": 61.56,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i546",
    "name": "Mask Shard #16",
    "category": "mejora",
    "zoneId": "z25",
    "x": -206.21,
    "y": 360.39,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i547",
    "name": "Mask Shard #17",
    "category": "mejora",
    "zoneId": "z31",
    "x": -246.51,
    "y": 582.47,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i548",
    "name": "Mask Shard #18",
    "category": "mejora",
    "zoneId": "z49",
    "x": -235.3,
    "y": 788.88,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i549",
    "name": "Mask Shard #19",
    "category": "mejora",
    "zoneId": "z41",
    "x": -281.23,
    "y": 828.41,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i550",
    "name": "Mask Shard #20",
    "category": "mejora",
    "zoneId": "z24",
    "x": -131.71,
    "y": 242.16,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": []
  },
  {
    "id": "i551",
    "name": "Spool Fragment #1",
    "category": "mejora",
    "zoneId": "z5",
    "x": -744.19,
    "y": 295.4,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i552",
    "name": "Spool Fragment #2",
    "category": "mejora",
    "zoneId": "z2",
    "x": -670.61,
    "y": 305.2,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i553",
    "name": "Spool Fragment #3",
    "category": "mejora",
    "zoneId": "z8",
    "x": -744.99,
    "y": 677.38,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i554",
    "name": "Spool Fragment #4",
    "category": "mejora",
    "zoneId": "z9",
    "x": -743.59,
    "y": 853.36,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i555",
    "name": "Spool Fragment #5",
    "category": "mejora",
    "zoneId": "z12",
    "x": -504.24,
    "y": 917.96,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i556",
    "name": "Spool Fragment #6",
    "category": "mejora",
    "zoneId": "z20",
    "x": -584.22,
    "y": 542.18,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i557",
    "name": "Spool Fragment #7",
    "category": "mejora",
    "zoneId": "z22",
    "x": -418.65,
    "y": 179.21,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i558",
    "name": "Spool Fragment #8",
    "category": "mejora",
    "zoneId": "z42",
    "x": -411.65,
    "y": 334,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i559",
    "name": "Spool Fragment #9",
    "category": "mejora",
    "zoneId": "z25",
    "x": -256.77,
    "y": 294.8,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i560",
    "name": "Spool Fragment #10",
    "category": "mejora",
    "zoneId": "z36",
    "x": -119.48,
    "y": 544.63,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i561",
    "name": "Spool Fragment #11",
    "category": "mejora",
    "zoneId": "z33",
    "x": -293.64,
    "y": 687.59,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i562",
    "name": "Spool Fragment #12",
    "category": "mejora",
    "zoneId": "z42",
    "x": -367.16,
    "y": 405.88,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i563",
    "name": "Spool Fragment #13",
    "category": "mejora",
    "zoneId": "z16",
    "x": -437.34,
    "y": 719.69,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i564",
    "name": "Spool Fragment #14",
    "category": "mejora",
    "zoneId": "z29",
    "x": -430.98,
    "y": 601.1,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i565",
    "name": "Spool Fragment #15",
    "category": "mejora",
    "zoneId": "z32",
    "x": -358.33,
    "y": 597.45,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i566",
    "name": "Spool Fragment #16",
    "category": "mejora",
    "zoneId": "z32",
    "x": -345.9,
    "y": 654.26,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i567",
    "name": "Spool Fragment #17",
    "category": "mejora",
    "zoneId": "z34",
    "x": -199.7,
    "y": 682.19,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i568",
    "name": "Spool Fragment #18",
    "category": "mejora",
    "zoneId": "z49",
    "x": -230.98,
    "y": 798.32,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i569",
    "name": "Memory Locket #1",
    "category": "mejora",
    "zoneId": "z1",
    "x": -669.41,
    "y": 118.01,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i570",
    "name": "Memory Locket #2",
    "category": "mejora",
    "zoneId": "z2",
    "x": -694.6,
    "y": 293.4,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i571",
    "name": "Memory Locket #3",
    "category": "mejora",
    "zoneId": "z6",
    "x": -625.01,
    "y": 433.59,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i572",
    "name": "Memory Locket #4",
    "category": "mejora",
    "zoneId": "z47",
    "x": -802.38,
    "y": 665.18,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i573",
    "name": "Memory Locket #5",
    "category": "mejora",
    "zoneId": "z10",
    "x": -650.21,
    "y": 829.57,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i574",
    "name": "Memory Locket #6",
    "category": "mejora",
    "zoneId": "z9",
    "x": -667.61,
    "y": 907.96,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i575",
    "name": "Memory Locket #7",
    "category": "mejora",
    "zoneId": "z46",
    "x": -618.42,
    "y": 1078.55,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i576",
    "name": "Memory Locket #8",
    "category": "mejora",
    "zoneId": "z13",
    "x": -553.83,
    "y": 751.77,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i577",
    "name": "Memory Locket #9",
    "category": "mejora",
    "zoneId": "z13",
    "x": -576.22,
    "y": 712.97,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i578",
    "name": "Memory Locket #10",
    "category": "mejora",
    "zoneId": "z20",
    "x": -584.42,
    "y": 544.18,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i579",
    "name": "Memory Locket #11",
    "category": "mejora",
    "zoneId": "z20",
    "x": -564.42,
    "y": 545.78,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i580",
    "name": "Memory Locket #12",
    "category": "mejora",
    "zoneId": "z22",
    "x": -504.64,
    "y": 218.61,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i581",
    "name": "Memory Locket #13",
    "category": "mejora",
    "zoneId": "z17",
    "x": -384.86,
    "y": 839.36,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i582",
    "name": "Memory Locket #14",
    "category": "mejora",
    "zoneId": "z19",
    "x": -320.87,
    "y": 1049.35,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i583",
    "name": "Memory Locket #15",
    "category": "mejora",
    "zoneId": "z43",
    "x": -405.01,
    "y": 105.41,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i584",
    "name": "Memory Locket #16",
    "category": "mejora",
    "zoneId": "z28",
    "x": -292.73,
    "y": 410.38,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i585",
    "name": "Memory Locket #17",
    "category": "mejora",
    "zoneId": "z30",
    "x": -399.01,
    "y": 543.52,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i586",
    "name": "Memory Locket #18",
    "category": "mejora",
    "zoneId": "z33",
    "x": -317.3,
    "y": 748.72,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i587",
    "name": "Memory Locket #19",
    "category": "mejora",
    "zoneId": "z49",
    "x": -265.25,
    "y": 863,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i588",
    "name": "Memory Locket #20",
    "category": "mejora",
    "zoneId": "z37",
    "x": -186.07,
    "y": 713.16,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": []
  },
  {
    "id": "i589",
    "name": "Silk Heart #1",
    "category": "mejora",
    "zoneId": "z3",
    "x": -651.01,
    "y": 350.2,
    "description": "Un corazón de seda. ¡Aumenta tu vida!",
    "search": []
  },
  {
    "id": "i590",
    "name": "Silk Heart #2",
    "category": "mejora",
    "zoneId": "z30",
    "x": -372.62,
    "y": 547.9,
    "description": "Un corazón de seda. ¡Aumenta tu vida!",
    "search": []
  },
  {
    "id": "i591",
    "name": "Silk Heart #3",
    "category": "mejora",
    "zoneId": "z34",
    "x": -117.22,
    "y": 647.38,
    "description": "Un corazón de seda. ¡Aumenta tu vida!",
    "search": []
  },
  {
    "id": "i592",
    "name": "Crafting Kit Upgrade #1",
    "category": "mejora",
    "zoneId": "z8",
    "x": -721.8,
    "y": 706.17,
    "description": "Un kit de creación para hacer herramientas.",
    "search": []
  },
  {
    "id": "i593",
    "name": "Crafting Kit Upgrade #2",
    "category": "mejora",
    "zoneId": "z13",
    "x": -557.41,
    "y": 759.26,
    "description": "Un kit de creación para hacer herramientas.",
    "search": []
  },
  {
    "id": "i594",
    "name": "Crafting Kit Upgrade #3",
    "category": "mejora",
    "zoneId": "z22",
    "x": -419.85,
    "y": 179.21,
    "description": "Un kit de creación para hacer herramientas.",
    "search": []
  },
  {
    "id": "i595",
    "name": "Crafting Kit Upgrade #4",
    "category": "mejora",
    "zoneId": "z32",
    "x": -395.75,
    "y": 676.28,
    "description": "Un kit de creación para hacer herramientas.",
    "search": []
  },
  {
    "id": "i596",
    "name": "Tool Pouch Upgrade #1",
    "category": "mejora",
    "zoneId": "z8",
    "x": -677.2,
    "y": 544.58,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": []
  },
  {
    "id": "i597",
    "name": "Tool Pouch Upgrade #2",
    "category": "mejora",
    "zoneId": "z9",
    "x": -668.21,
    "y": 907.96,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": []
  },
  {
    "id": "i598",
    "name": "Tool Pouch Upgrade #3",
    "category": "mejora",
    "zoneId": "z13",
    "x": -550.03,
    "y": 756.97,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": []
  },
  {
    "id": "i599",
    "name": "Tool Pouch Upgrade #4 (requires 20 Lost Fleas)",
    "category": "mejora",
    "zoneId": "z39",
    "x": -237.51,
    "y": 1157.85,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": []
  },
  {
    "id": "i600",
    "name": "Upgrade - Pale Oil",
    "category": "mejora",
    "zoneId": "z33",
    "x": -267.92,
    "y": 727.31,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i601",
    "name": "Upgrade - Pale Oil",
    "category": "mejora",
    "zoneId": "z31",
    "x": -268.55,
    "y": 611.89,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i602",
    "name": "Upgrade - Pale Oil (requires completing Ectasy of the End wish)",
    "category": "mejora",
    "zoneId": "z39",
    "x": -238.57,
    "y": 1162.32,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i603",
    "name": "Nail Upgrade #1",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i604",
    "name": "Nail Upgrade #2",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i605",
    "name": "Nail Upgrade #3",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i606",
    "name": "Nail Upgrade #4",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": []
  },
  {
    "id": "i607",
    "name": "Craftmetal #1",
    "category": "mejora",
    "zoneId": "z2",
    "x": -697.5,
    "y": 289.4,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i608",
    "name": "Craftmetal #2",
    "category": "mejora",
    "zoneId": "z6",
    "x": -661.01,
    "y": 498.39,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i609",
    "name": "Craftmetal #3",
    "category": "mejora",
    "zoneId": "z9",
    "x": -732.79,
    "y": 804.37,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i610",
    "name": "Craftmetal #4",
    "category": "mejora",
    "zoneId": "z29",
    "x": -453.65,
    "y": 621.58,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i611",
    "name": "Craftmetal #5",
    "category": "mejora",
    "zoneId": "z42",
    "x": -443.45,
    "y": 290.4,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i612",
    "name": "Craftmetal #6",
    "category": "mejora",
    "zoneId": "z40",
    "x": -237.14,
    "y": 1226.35,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i613",
    "name": "Craftmetal #7",
    "category": "mejora",
    "zoneId": "z49",
    "x": -232.8,
    "y": 795.3,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i614",
    "name": "Craftmetal #8",
    "category": "mejora",
    "zoneId": "z29",
    "x": -431.46,
    "y": 647.7,
    "description": "Metal de creación para fabricar herramientas.",
    "search": []
  },
  {
    "id": "i615",
    "name": "Upgrade - Plasmium Gland",
    "category": "mejora",
    "zoneId": "z4",
    "x": -605.32,
    "y": 133.16,
    "description": "Una mejora misteriosa.",
    "search": []
  },
  {
    "id": "i616",
    "name": "Upgrade - Everbloom",
    "category": "mejora",
    "zoneId": "z1",
    "x": -720.8,
    "y": 126.78,
    "description": "Una mejora misteriosa.",
    "search": []
  },
  {
    "id": "i617",
    "name": "Bellhome Upgrade - Materium",
    "category": "mejora",
    "zoneId": "z35",
    "x": -162.03,
    "y": 752.89,
    "description": "Una mejora misteriosa.",
    "search": []
  },
  {
    "id": "i618",
    "name": "Bellhome Upgrade - Farsight",
    "category": "mejora",
    "zoneId": "z47",
    "x": -878.72,
    "y": 755.75,
    "description": "Una mejora misteriosa.",
    "search": []
  },
  {
    "id": "i619",
    "name": "Bellhome Upgrade - Crawbell",
    "category": "mejora",
    "zoneId": "z11",
    "x": -593.95,
    "y": 1029.81,
    "description": "Una mejora misteriosa.",
    "search": []
  },
  {
    "id": "i620",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -189.1,
    "y": 314.01,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i621",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -238.59,
    "y": 359.33,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i622",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -416.21,
    "y": 605.53,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i623",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -203.87,
    "y": 984.82,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i624",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -273.98,
    "y": 374.53,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i625",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -204.98,
    "y": 572.9,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i626",
    "name": "Pale Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -163.68,
    "y": 515.27,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i627",
    "name": "Heavy Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -234.46,
    "y": 794.16,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i628",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -743.39,
    "y": 251.3,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i629",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -634.31,
    "y": 279,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i630",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -599.52,
    "y": 158.91,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i631",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -671.11,
    "y": 459.49,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i632",
    "name": "Heavy Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -676.6,
    "y": 544.58,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i633",
    "name": "Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -582.87,
    "y": 546.06,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i634",
    "name": "Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -639.11,
    "y": 637.68,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i635",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -379.02,
    "y": 515.21,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i636",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -662.51,
    "y": 721.57,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i637",
    "name": "Rosary String",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -740.2,
    "y": 992.13,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i638",
    "name": "Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -667.01,
    "y": 907.96,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i639",
    "name": "Pale Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -606.22,
    "y": 992.35,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i640",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -551.33,
    "y": 965.06,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i641",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -547.53,
    "y": 979.56,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i642",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -508.44,
    "y": 804.47,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i643",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z15",
    "x": -522.93,
    "y": 611.68,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i644",
    "name": "Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -480.34,
    "y": 606.98,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i645",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -578.12,
    "y": 468.79,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i646",
    "name": "Rosary String",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -592.82,
    "y": 411.99,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i647",
    "name": "Rosary String",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -534.43,
    "y": 458.99,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i648",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -520.63,
    "y": 251.8,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i649",
    "name": "Rosary String",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -260.58,
    "y": 581.66,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i650",
    "name": "Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -675.27,
    "y": 1119.94,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i651",
    "name": "Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -304.09,
    "y": 537.55,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i652",
    "name": "Heavy Rosary Necklace",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -285.82,
    "y": 485.5,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i653",
    "name": "Frayed Rosary String",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -351.76,
    "y": 951.56,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": []
  },
  {
    "id": "i654",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -670.49,
    "y": 914.04,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i655",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -580.45,
    "y": 1025.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i656",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -301.83,
    "y": 537.47,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i657",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -175.4,
    "y": 515.14,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i658",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -173.05,
    "y": 501.96,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i659",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -236.95,
    "y": 358.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i660",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -450.51,
    "y": 532.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i661",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -362.68,
    "y": 688.74,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i662",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -224.48,
    "y": 1013.41,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i663",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -224.34,
    "y": 1016.96,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i664",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -270.38,
    "y": 883.17,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i665",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -297.23,
    "y": 814.75,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i666",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -321.34,
    "y": 448.93,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i667",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z23",
    "x": -263.32,
    "y": 79.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i668",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z23",
    "x": -276.02,
    "y": 97.21,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i669",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -275.35,
    "y": 294.71,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i670",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z36",
    "x": -130.21,
    "y": 594.94,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i671",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -167.92,
    "y": 521.54,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i672",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -171.96,
    "y": 520.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i673",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -722.01,
    "y": 115.1,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i674",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -165.63,
    "y": 522.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i675",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -163.68,
    "y": 522.98,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i676",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -162.28,
    "y": 522.58,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i677",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -162.1,
    "y": 518.55,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i678",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -304.91,
    "y": 359.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i679",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -303.3,
    "y": 361.84,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i680",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -213.55,
    "y": 501.03,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i681",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -240.63,
    "y": 570.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i682",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -249.9,
    "y": 510.63,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i683",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -264.99,
    "y": 864.25,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i684",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -280.14,
    "y": 559.45,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i685",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -283.69,
    "y": 856.47,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i686",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -303.69,
    "y": 452.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i687",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -314.96,
    "y": 488.29,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i688",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -331.57,
    "y": 472.2,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i689",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -702.8,
    "y": 120.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i690",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -673.2,
    "y": 240.2,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i691",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -546.99,
    "y": 976.53,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i692",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -686.67,
    "y": 65.78,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i693",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -661.41,
    "y": 235.61,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i694",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -526.19,
    "y": 201.75,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i695",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -350.59,
    "y": 436.53,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i696",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -661.81,
    "y": 267.7,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i697",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -667.81,
    "y": 269.1,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i698",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -720.7,
    "y": 243.7,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i699",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -627.11,
    "y": 325.9,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i700",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -401.47,
    "y": 516.25,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i701",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -381.01,
    "y": 492.64,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i702",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -643.91,
    "y": 276.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i703",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -668.71,
    "y": 318.6,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i704",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -669.21,
    "y": 315.9,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i705",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -663.51,
    "y": 395.69,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i706",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -683.5,
    "y": 391.39,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i707",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -683.5,
    "y": 389.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i708",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -702,
    "y": 365.6,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i709",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -702.2,
    "y": 378,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i710",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -670.31,
    "y": 423.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i711",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -690.8,
    "y": 476.59,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i712",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -682.4,
    "y": 508.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i713",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -693.6,
    "y": 519.89,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i714",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -657.11,
    "y": 480.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i715",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -625.71,
    "y": 501.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i716",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -632.71,
    "y": 464.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i717",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -627.31,
    "y": 466.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i718",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -668.81,
    "y": 530.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i719",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -668.81,
    "y": 531.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i720",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -659.21,
    "y": 541.68,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i721",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -635.11,
    "y": 557.78,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i722",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -615.02,
    "y": 542.48,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i723",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -637.51,
    "y": 606.68,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i724",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -609.22,
    "y": 734.77,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i725",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -689,
    "y": 719.77,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i726",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -762.29,
    "y": 629.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i727",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -762.29,
    "y": 635.68,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i728",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -742.49,
    "y": 755.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i729",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -696.1,
    "y": 775.27,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i730",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -693.9,
    "y": 811.47,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i731",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -688.3,
    "y": 830.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i732",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -665.51,
    "y": 829.67,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i733",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -660.71,
    "y": 842.86,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i734",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -670.71,
    "y": 877.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i735",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -730.09,
    "y": 912.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i736",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -686.1,
    "y": 976.86,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i737",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -726.8,
    "y": 1023.45,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i738",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -720.2,
    "y": 1089.35,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i739",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -605.82,
    "y": 991.55,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i740",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -643.91,
    "y": 999.25,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i741",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -513.97,
    "y": 911.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i742",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -508.28,
    "y": 909,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i743",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -544.03,
    "y": 857.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i744",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -521.53,
    "y": 926.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i745",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -531.63,
    "y": 963.96,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i746",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -563.8,
    "y": 1032.22,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i747",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -563.49,
    "y": 1041,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i748",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -573.74,
    "y": 1023.97,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i749",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -568.14,
    "y": 1045.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i750",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -562.77,
    "y": 1036.5,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i751",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -568.3,
    "y": 1032.16,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i752",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -568.39,
    "y": 1035.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i753",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -563.78,
    "y": 1025.06,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i754",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -544.03,
    "y": 1021.45,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i755",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -534.63,
    "y": 1024.35,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i756",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -508.51,
    "y": 998.41,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i757",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -520.48,
    "y": 1013.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i758",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -492.56,
    "y": 1022.02,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i759",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -493.87,
    "y": 1015.64,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i760",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -458.34,
    "y": 926.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i761",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -448.75,
    "y": 947.56,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i762",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -442.65,
    "y": 974.16,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i763",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -392.76,
    "y": 901.46,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i764",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -316.27,
    "y": 929.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i765",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -264.98,
    "y": 1105.95,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i766",
    "name": "Rosary Chest",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -450.55,
    "y": 842.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i767",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -481.54,
    "y": 845.46,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i768",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -475.14,
    "y": 830.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i769",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -541.42,
    "y": 964.34,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i770",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -506.54,
    "y": 837.86,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i771",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -500.14,
    "y": 879.36,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i772",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -514.53,
    "y": 771.07,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i773",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -540.23,
    "y": 732.07,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i774",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -506.84,
    "y": 700.97,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i775",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -505.14,
    "y": 685.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i776",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -544.2,
    "y": 721.72,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i777",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -542.23,
    "y": 712.77,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i778",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -557.43,
    "y": 678.18,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i779",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -548.33,
    "y": 661.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i780",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -545.63,
    "y": 654.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i781",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -576.32,
    "y": 653.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i782",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -569.42,
    "y": 638.78,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i783",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -587.02,
    "y": 725.07,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i784",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -580.62,
    "y": 512.29,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i785",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -539.93,
    "y": 548.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i786",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -529.54,
    "y": 555.22,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i787",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -498.14,
    "y": 454.39,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i788",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -515.53,
    "y": 359,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i789",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -567.82,
    "y": 318.7,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i790",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -488.74,
    "y": 296.2,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i791",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -668.81,
    "y": 457.69,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i792",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -664.51,
    "y": 319.4,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i793",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -675.48,
    "y": 161.41,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i794",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -685.16,
    "y": 93.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i795",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -679.07,
    "y": 77.67,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i796",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -426.64,
    "y": 450.19,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i797",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -297.71,
    "y": 339.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i798",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -591.61,
    "y": 1029.56,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i799",
    "name": "Rosaries",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -645.11,
    "y": 308.4,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": []
  },
  {
    "id": "i800",
    "name": "Pristine Core",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -394.85,
    "y": 674.82,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i801",
    "name": "Pristine Core",
    "category": "coleccionable",
    "zoneId": "z33",
    "x": -272.89,
    "y": 667.79,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i802",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -241.95,
    "y": 609,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i803",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z35",
    "x": -197.17,
    "y": 753.6,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i804",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -675.27,
    "y": 1123.94,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i805",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -562.95,
    "y": 699.19,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i806",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -208.42,
    "y": 879.41,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i807",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -276.01,
    "y": 305.52,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i808",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -412.85,
    "y": 658.2,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i809",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -641.91,
    "y": 196.81,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i810",
    "name": "Hornet Statuette",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -697.3,
    "y": 294.6,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i811",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z5",
    "x": -744.79,
    "y": 273.8,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i812",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -723.5,
    "y": 662.98,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i813",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -721.2,
    "y": 706.17,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i814",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -763.99,
    "y": 729.57,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i815",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -809.68,
    "y": 724.07,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i816",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -663.71,
    "y": 948.16,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i817",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -534.53,
    "y": 807.17,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i818",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -453.25,
    "y": 931.86,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i819",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -542.03,
    "y": 699.07,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i820",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -505.14,
    "y": 497.79,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i821",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -434.3,
    "y": 500.03,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i822",
    "name": "Shard Bundle",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -377.35,
    "y": 836.88,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i823",
    "name": "Beast Shard",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -415.25,
    "y": 210.21,
    "description": "Un puñado de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i824",
    "name": "Shell Shards (Outreachable without glitches)",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -498.02,
    "y": 368.38,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i825",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -892.88,
    "y": 645.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i826",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -894.51,
    "y": 679.7,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i827",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -857.7,
    "y": 758.68,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i828",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -469.38,
    "y": 382.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i829",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -385.29,
    "y": 316.41,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i830",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -381.38,
    "y": 256.16,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i831",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -377.88,
    "y": 179.81,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i832",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -353.27,
    "y": 190.21,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i833",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z43",
    "x": -340.73,
    "y": 138.11,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i834",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z24",
    "x": -202.29,
    "y": 235.19,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i835",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -325.43,
    "y": 363.44,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i836",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -218.45,
    "y": 385.55,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i837",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -456.43,
    "y": 570.19,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i838",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -463.94,
    "y": 594.86,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i839",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -428.33,
    "y": 536.6,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i840",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -404.69,
    "y": 667.79,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i841",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -384.32,
    "y": 726.71,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i842",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -382.01,
    "y": 802.72,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i843",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -345.89,
    "y": 804.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i844",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -361.73,
    "y": 862.88,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i845",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -364.79,
    "y": 972.24,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i846",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -287.23,
    "y": 1123.66,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i847",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z40",
    "x": -228.08,
    "y": 1199.91,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i848",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -275.51,
    "y": 889.92,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i849",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -242.21,
    "y": 892.28,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i850",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -226.84,
    "y": 916.71,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i851",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -202.17,
    "y": 968.16,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i852",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z37",
    "x": -171.38,
    "y": 713.39,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i853",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z35",
    "x": -169.24,
    "y": 741.14,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i854",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z34",
    "x": -68.09,
    "y": 661.14,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i855",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -393.99,
    "y": 559.42,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i856",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -284.62,
    "y": 322.2,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i857",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -289.38,
    "y": 298.05,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i858",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -193.8,
    "y": 531.52,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i859",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z36",
    "x": -178.07,
    "y": 582.63,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i860",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -415.05,
    "y": 212.5,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i861",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -339.58,
    "y": 457.09,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i862",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z33",
    "x": -302.37,
    "y": 731.22,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i863",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -404.96,
    "y": 720.2,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i864",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z0",
    "x": -737.59,
    "y": 179.71,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i865",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -747.59,
    "y": 265.4,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i866",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -733.79,
    "y": 276.5,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i867",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z5",
    "x": -730.39,
    "y": 299.6,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i868",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -677.6,
    "y": 337.6,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i869",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -662.91,
    "y": 333.4,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i870",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -646.61,
    "y": 470.59,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i871",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -646.81,
    "y": 502.99,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i872",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -383.87,
    "y": 503.89,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i873",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -608.02,
    "y": 367.5,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i874",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -660.11,
    "y": 560.88,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i875",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -641.51,
    "y": 740.07,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i876",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -617.52,
    "y": 753.27,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i877",
    "name": "Shell Shards (Hornet Statue)",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -697.56,
    "y": 264.57,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i878",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -693.8,
    "y": 638.98,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i879",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -764.99,
    "y": 621.98,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i880",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -730.29,
    "y": 662.58,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i881",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -753.49,
    "y": 691.07,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i882",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -733.49,
    "y": 761.77,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i883",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -752.49,
    "y": 776.47,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i884",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -707.2,
    "y": 858.36,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i885",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -732.79,
    "y": 887.76,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i886",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -724.4,
    "y": 1040.65,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i887",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -784.28,
    "y": 1064.25,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i888",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -643.91,
    "y": 997.75,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i889",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -629.51,
    "y": 970.16,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i890",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -612.82,
    "y": 935.56,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i891",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -624.81,
    "y": 900.96,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i892",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -509.14,
    "y": 947.06,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i893",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -422.98,
    "y": 486.67,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i894",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -497.14,
    "y": 892.66,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i895",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -474.54,
    "y": 883.56,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i896",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -454.55,
    "y": 789.57,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i897",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -591.82,
    "y": 696.97,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i898",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -577.52,
    "y": 492.79,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i899",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -570.52,
    "y": 469.99,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i900",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -568.62,
    "y": 451.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i901",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -481.34,
    "y": 435.89,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i902",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -194.1,
    "y": 274.44,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i903",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -303.43,
    "y": 1072.89,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i904",
    "name": "Shell Shards",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -517.63,
    "y": 160.01,
    "description": "Un depósito de fragmentos de concha.",
    "search": []
  },
  {
    "id": "i905",
    "name": "Lost Flea #1",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -635.01,
    "y": 194.01,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i906",
    "name": "Lost Flea #2",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -624.21,
    "y": 415.99,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i907",
    "name": "Lost Flea #3",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -567.42,
    "y": 370.8,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i908",
    "name": "Lost Flea #4",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -638.01,
    "y": 601.18,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i909",
    "name": "Lost Flea #5",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -714.6,
    "y": 603.98,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i910",
    "name": "Lost Flea #6",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -666.81,
    "y": 655.78,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i911",
    "name": "Lost Flea #7",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -738.39,
    "y": 841.56,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i912",
    "name": "Lost Flea #8",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -688.8,
    "y": 859.76,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i913",
    "name": "Lost Flea #9",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -659.01,
    "y": 962.56,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i914",
    "name": "Lost Flea #10",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -539.83,
    "y": 1014.15,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i915",
    "name": "Lost Flea #11 (Kratt)",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -522.23,
    "y": 812.77,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i916",
    "name": "Lost Flea #12",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -524.03,
    "y": 669.38,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i917",
    "name": "Lost Flea #13",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -469.04,
    "y": 943.96,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i918",
    "name": "Lost Flea #14",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -421.65,
    "y": 1005.55,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i919",
    "name": "Lost Flea #15",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -406.45,
    "y": 790.77,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i920",
    "name": "Lost Flea #16",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -513.63,
    "y": 527.39,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i921",
    "name": "Lost Flea #17",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -396.06,
    "y": 195.81,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i922",
    "name": "Lost Flea #18",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -289.88,
    "y": 1039.95,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i923",
    "name": "Lost Flea #19",
    "category": "coleccionable",
    "zoneId": "z24",
    "x": -214.79,
    "y": 169.19,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i924",
    "name": "Lost Flea #20",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -297.45,
    "y": 336.78,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i925",
    "name": "Lost Flea #21 (Vog)",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -187.57,
    "y": 1015.75,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i926",
    "name": "Lost Flea #22",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -234.65,
    "y": 561.53,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i927",
    "name": "Lost Flea #23",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -263.1,
    "y": 532.31,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i928",
    "name": "Lost Flea #24",
    "category": "coleccionable",
    "zoneId": "z37",
    "x": -145.65,
    "y": 725.25,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i929",
    "name": "Lost Flea #25",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -218.74,
    "y": 870.97,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i930",
    "name": "Lost Flea #26",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -372.14,
    "y": 220.75,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i931",
    "name": "Lost Flea #27",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -260.26,
    "y": 311.72,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i932",
    "name": "Lost Flea #28",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -439.87,
    "y": 592.92,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i933",
    "name": "Lost Flea #29",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -256.24,
    "y": 789.77,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i934",
    "name": "Lost Flea #30",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -442.68,
    "y": 524.5,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": []
  },
  {
    "id": "i935",
    "name": "Item - Choral Commandment #1",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -639.41,
    "y": 257,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i936",
    "name": "Item - Choral Commandment #2",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -340.75,
    "y": 547.38,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i937",
    "name": "Item - Choral Commandment #3",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -330.57,
    "y": 667.59,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i938",
    "name": "Item - Choral Commandment #4",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -235.33,
    "y": 799.97,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i939",
    "name": "Item - Weaver Effigy #1",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -591.82,
    "y": 490.59,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i940",
    "name": "Item - Weaver Effigy #2",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -675.8,
    "y": 235.01,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i941",
    "name": "Item - Weaver Effigy #2",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -321.8,
    "y": 392.63,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i942",
    "name": "Item - Bone Scroll #1",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -727.2,
    "y": 1005.15,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i943",
    "name": "Item - Bone Scroll #2",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -557.23,
    "y": 836.16,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i944",
    "name": "Item - Bone Scroll #3",
    "category": "coleccionable",
    "zoneId": "z15",
    "x": -446.45,
    "y": 689.57,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i945",
    "name": "Item - Bone Scroll #4",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -431.82,
    "y": 463.79,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i946",
    "name": "Item - Rune Harp #1",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -728.19,
    "y": 387.79,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i947",
    "name": "Item - Rune Harp #2",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -751.39,
    "y": 1127.15,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i948",
    "name": "Item - Rune Harp #3",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -216.48,
    "y": 519.91,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i949",
    "name": "Item - Psalm Cylinder #1",
    "category": "coleccionable",
    "zoneId": "z36",
    "x": -189.42,
    "y": 578.41,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i950",
    "name": "Item - Psalm Cylinder #2",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -264.96,
    "y": 857.06,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i951",
    "name": "Item - Psalm Cylinder #3",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -419.25,
    "y": 179.21,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i952",
    "name": "Item - Psalm Cylinder #4",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -386.64,
    "y": 545.97,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i953",
    "name": "Item - Psalm Cylinder #5",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -252.89,
    "y": 829.81,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i954",
    "name": "Item - Sacred Cylinder",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -322.74,
    "y": 827.58,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i955",
    "name": "Item - Arcane Egg",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -881.09,
    "y": 603.14,
    "description": "Un objeto valioso para cambiar.",
    "search": []
  },
  {
    "id": "i956",
    "name": "Memento - Guardian's Memento",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -239.81,
    "y": 1139.08,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i957",
    "name": "Memento - Grey Memento",
    "category": "coleccionable",
    "zoneId": "z45",
    "x": -390.75,
    "y": 75,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i958",
    "name": "Memento - Surface Memento",
    "category": "coleccionable",
    "zoneId": "z38",
    "x": -10.8,
    "y": 908.21,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i959",
    "name": "Memento - Hunter's Memento",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -548.83,
    "y": 756.97,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i960",
    "name": "Memento - Sprintmaster Memento",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -677.3,
    "y": 1121.95,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i961",
    "name": "Memento - Craw Memento",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -602.39,
    "y": 1032.72,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i962",
    "name": "Memento - Hero's Memento",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -447.45,
    "y": 145.41,
    "description": "Un recuerdo de Pharloom.",
    "search": []
  },
  {
    "id": "i963",
    "name": "Silkeater #1",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -772.99,
    "y": 693.37,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i964",
    "name": "Silkeater #2",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -488.24,
    "y": 976.16,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i965",
    "name": "Silkeater #3",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -496.64,
    "y": 726.77,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i966",
    "name": "Silkeater #4",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -387.66,
    "y": 823.87,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i967",
    "name": "Silkeater #5",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -485.84,
    "y": 304.2,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i968",
    "name": "Silkeater #6",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -257.24,
    "y": 842.44,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i969",
    "name": "Silkeater #7",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -267.04,
    "y": 627.05,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i970",
    "name": "Silkeater #8",
    "category": "coleccionable",
    "zoneId": "z34",
    "x": -127.66,
    "y": 666.38,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i971",
    "name": "Silkeater #9",
    "category": "coleccionable",
    "zoneId": "z33",
    "x": -323.02,
    "y": 701.11,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i972",
    "name": "Silkeater #10",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -334.7,
    "y": 623.72,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": []
  },
  {
    "id": "i973",
    "name": "Map Item - Quill",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i974",
    "name": "Map Item - Quill (Red)",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -295.54,
    "y": 778.38,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i975",
    "name": "Map Item - Quill (Purple)",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -295.54,
    "y": 778.38,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i976",
    "name": "Map Item - Bench Pins",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i977",
    "name": "Map Item - Bellways Pins",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i978",
    "name": "Map Item - Ventrica Pins",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i979",
    "name": "Map Item - Vendor Pins",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i980",
    "name": "Map Item - Shell Marker",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i981",
    "name": "Map Item - Hunt Marker",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i982",
    "name": "Map Item - Dark Marker",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i983",
    "name": "Map Item - Bronze Marker",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": []
  },
  {
    "id": "i984",
    "name": "NPC - Shakra",
    "category": "npc",
    "zoneId": "z44",
    "x": -305.71,
    "y": 246.95,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i985",
    "name": "NPC - Mask Maker",
    "category": "npc",
    "zoneId": "z24",
    "x": -137.19,
    "y": 101.84,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i986",
    "name": "NPC - Conductor Ballador",
    "category": "npc",
    "zoneId": "z27",
    "x": -215.25,
    "y": 516.52,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i987",
    "name": "NPC - Garmond and Zaza",
    "category": "npc",
    "zoneId": "z27",
    "x": -230.9,
    "y": 513.91,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i988",
    "name": "NPC - Loyal Mergwin",
    "category": "npc",
    "zoneId": "z31",
    "x": -269.43,
    "y": 610.53,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i989",
    "name": "NPC - Sherma",
    "category": "npc",
    "zoneId": "z28",
    "x": -287.71,
    "y": 527.86,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i990",
    "name": "NPC - Garmond And Zaza",
    "category": "npc",
    "zoneId": "z28",
    "x": -279.01,
    "y": 523.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i991",
    "name": "NPC - Grindle",
    "category": "npc",
    "zoneId": "z27",
    "x": -244.95,
    "y": 480.34,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i992",
    "name": "NPC - Sula",
    "category": "npc",
    "zoneId": "z1",
    "x": -712.2,
    "y": 66.22,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i993",
    "name": "NPC - Snail Shamans",
    "category": "npc",
    "zoneId": "z1",
    "x": -723,
    "y": 127.01,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i994",
    "name": "NPC - Chapel Maid",
    "category": "npc",
    "zoneId": "z0",
    "x": -697.6,
    "y": 208.01,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i995",
    "name": "NPC - Flick the Fixer",
    "category": "npc",
    "zoneId": "z2",
    "x": -698,
    "y": 294.6,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i996",
    "name": "NPC - Little Pilgrim",
    "category": "npc",
    "zoneId": "z2",
    "x": -698.2,
    "y": 277,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i997",
    "name": "NPC - Fearful Pilgrim",
    "category": "npc",
    "zoneId": "z2",
    "x": -698.2,
    "y": 282.8,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i998",
    "name": "NPC - Mr. Mushroom #2",
    "category": "npc",
    "zoneId": "z2",
    "x": -690.8,
    "y": 297.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i999",
    "name": "NPC - Sherma",
    "category": "npc",
    "zoneId": "z5",
    "x": -704,
    "y": 346.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1000",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z3",
    "x": -658.81,
    "y": 295.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1001",
    "name": "NPC - Courier Tipp",
    "category": "npc",
    "zoneId": "z3",
    "x": -621.01,
    "y": 242.6,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1002",
    "name": "NPC - Alchemist Zylotol",
    "category": "npc",
    "zoneId": "z4",
    "x": -605.42,
    "y": 130.81,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1003",
    "name": "NPC - Sherma",
    "category": "npc",
    "zoneId": "z3",
    "x": -653.21,
    "y": 348.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1004",
    "name": "NPC - Moss Druid",
    "category": "npc",
    "zoneId": "z3",
    "x": -636.41,
    "y": 346.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1005",
    "name": "NPC - Flick the Fixer",
    "category": "npc",
    "zoneId": "z6",
    "x": -681.2,
    "y": 432.99,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1006",
    "name": "NPC - Flea Caravan",
    "category": "npc",
    "zoneId": "z6",
    "x": -681.2,
    "y": 437.59,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1007",
    "name": "NPC - Nuu #3",
    "category": "npc",
    "zoneId": "z6",
    "x": -673.4,
    "y": 493.79,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1008",
    "name": "NPC - Grindle",
    "category": "npc",
    "zoneId": "z8",
    "x": -671.81,
    "y": 550.38,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1009",
    "name": "NPC - Loddie",
    "category": "npc",
    "zoneId": "z8",
    "x": -678,
    "y": 544.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1010",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z8",
    "x": -705,
    "y": 571.98,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1011",
    "name": "NPC - Bell Hermit",
    "category": "npc",
    "zoneId": "z20",
    "x": -620.01,
    "y": 551.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1012",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z7",
    "x": -678.2,
    "y": 695.77,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1013",
    "name": "NPC - Ballow",
    "category": "npc",
    "zoneId": "z8",
    "x": -726.4,
    "y": 711.57,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1014",
    "name": "NPC - Ballow",
    "category": "npc",
    "zoneId": "z8",
    "x": -769.99,
    "y": 668.98,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1015",
    "name": "NPC - Ballow",
    "category": "npc",
    "zoneId": "z47",
    "x": -777.59,
    "y": 752.57,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1016",
    "name": "NPC - Gilly",
    "category": "npc",
    "zoneId": "z13",
    "x": -665.61,
    "y": 774.37,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1017",
    "name": "NPC - Gilly",
    "category": "npc",
    "zoneId": "z13",
    "x": -631.81,
    "y": 799.97,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1018",
    "name": "NPC - Gilly #2",
    "category": "npc",
    "zoneId": "z13",
    "x": -628.81,
    "y": 745.57,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1019",
    "name": "NPC - Pillby #2",
    "category": "npc",
    "zoneId": "z9",
    "x": -664.41,
    "y": 914.36,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1020",
    "name": "NPC - Sherma",
    "category": "npc",
    "zoneId": "z9",
    "x": -664.41,
    "y": 915.36,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1021",
    "name": "NPC - Weary Pilgrim",
    "category": "npc",
    "zoneId": "z9",
    "x": -664.41,
    "y": 916.36,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1022",
    "name": "NPC - Seamstress",
    "category": "npc",
    "zoneId": "z9",
    "x": -710.4,
    "y": 982.16,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1023",
    "name": "NPC - Mr. Mushroom #3",
    "category": "npc",
    "zoneId": "z9",
    "x": -735.19,
    "y": 1087.75,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1024",
    "name": "NPC - Sprintmaster Swift",
    "category": "npc",
    "zoneId": "z46",
    "x": -678.2,
    "y": 1121.95,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1025",
    "name": "NPC - Gilly #5",
    "category": "npc",
    "zoneId": "z46",
    "x": -608.82,
    "y": 1049.75,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1026",
    "name": "NPC - Gilly #3",
    "category": "npc",
    "zoneId": "z11",
    "x": -644.81,
    "y": 1010.55,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1027",
    "name": "NPC - Gilly #4",
    "category": "npc",
    "zoneId": "z10",
    "x": -613.62,
    "y": 935.16,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1028",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z9",
    "x": -740.19,
    "y": 1027.55,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1029",
    "name": "NPC - Seth",
    "category": "npc",
    "zoneId": "z11",
    "x": -556.03,
    "y": 930.76,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1030",
    "name": "NPC - Nuu",
    "category": "npc",
    "zoneId": "z13",
    "x": -550.83,
    "y": 756.97,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1031",
    "name": "NPC - Creige",
    "category": "npc",
    "zoneId": "z13",
    "x": -556.63,
    "y": 759.17,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1032",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z14",
    "x": -545.83,
    "y": 680.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1033",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z14",
    "x": -564.42,
    "y": 694.37,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1034",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z14",
    "x": -572.62,
    "y": 648.18,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1035",
    "name": "NPC - Flea Caravan",
    "category": "npc",
    "zoneId": "z7",
    "x": -586.62,
    "y": 617.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1036",
    "name": "NPC - Yarnaby",
    "category": "npc",
    "zoneId": "z15",
    "x": -539.43,
    "y": 610.18,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1037",
    "name": "NPC - Lace",
    "category": "npc",
    "zoneId": "z12",
    "x": -505.24,
    "y": 785.97,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1038",
    "name": "NPC - Green Prince",
    "category": "npc",
    "zoneId": "z12",
    "x": -499.64,
    "y": 845.56,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1039",
    "name": "NPC - Courier Pill",
    "category": "npc",
    "zoneId": "z12",
    "x": -468.84,
    "y": 861.16,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1040",
    "name": "NPC - Crull & Benjin",
    "category": "npc",
    "zoneId": "z12",
    "x": -471.84,
    "y": 891.56,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1041",
    "name": "NPC - Garmond & Zaza #2",
    "category": "npc",
    "zoneId": "z17",
    "x": -452.45,
    "y": 902.76,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1042",
    "name": "NPC - Styx",
    "category": "npc",
    "zoneId": "z11",
    "x": -488.04,
    "y": 974.56,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1043",
    "name": "NPC - Skynx",
    "category": "npc",
    "zoneId": "z11",
    "x": -489.44,
    "y": 984.95,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1044",
    "name": "NPC - Pavo",
    "category": "npc",
    "zoneId": "z20",
    "x": -585.82,
    "y": 551.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1045",
    "name": "NPC - Sherma",
    "category": "npc",
    "zoneId": "z20",
    "x": -586.02,
    "y": 557.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1046",
    "name": "NPC - Relic Seeker Scrounge",
    "category": "npc",
    "zoneId": "z20",
    "x": -573.82,
    "y": 537.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1047",
    "name": "NPC - Couriers Tipp & Pill",
    "category": "npc",
    "zoneId": "z20",
    "x": -580.42,
    "y": 540.38,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1048",
    "name": "NPC - Pinmaster Plinney",
    "category": "npc",
    "zoneId": "z20",
    "x": -574.62,
    "y": 561.98,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1049",
    "name": "NPC - Pondcatcher Reed",
    "category": "npc",
    "zoneId": "z20",
    "x": -586.02,
    "y": 536.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1050",
    "name": "NPC - Shakra",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 494.99,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1051",
    "name": "NPC - Shakra",
    "category": "npc",
    "zoneId": "z7",
    "x": -644.41,
    "y": 683.18,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1052",
    "name": "NPC - Greyroot",
    "category": "npc",
    "zoneId": "z21",
    "x": -556.83,
    "y": 407.39,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1053",
    "name": "NPC - Seth",
    "category": "npc",
    "zoneId": "z21",
    "x": -531.83,
    "y": 424.79,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1054",
    "name": "NPC - Nuu #2",
    "category": "npc",
    "zoneId": "z21",
    "x": -517.03,
    "y": 430.19,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1055",
    "name": "NPC - Pinmaster Plinney",
    "category": "npc",
    "zoneId": "z21",
    "x": -568.42,
    "y": 322.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1056",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z3",
    "x": -580.62,
    "y": 298.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1057",
    "name": "NPC - Lace",
    "category": "npc",
    "zoneId": "z21",
    "x": -537.63,
    "y": 248.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1058",
    "name": "NPC - Garmond & Zaza",
    "category": "npc",
    "zoneId": "z22",
    "x": -509.83,
    "y": 174.61,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1059",
    "name": "NPC - Steel Seer Zi",
    "category": "npc",
    "zoneId": "z21",
    "x": -488.04,
    "y": 319.8,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1060",
    "name": "NPC - Nuu #4",
    "category": "npc",
    "zoneId": "z22",
    "x": -479.64,
    "y": 204.21,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1061",
    "name": "NPC - Pinstress",
    "category": "npc",
    "zoneId": "z22",
    "x": -460.44,
    "y": 132.01,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1062",
    "name": "NPC - Lumble the Lucky",
    "category": "npc",
    "zoneId": "z22",
    "x": -450.45,
    "y": 138.81,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1063",
    "name": "NPC - Sherma",
    "category": "npc",
    "zoneId": "z22",
    "x": -442.85,
    "y": 225.41,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1064",
    "name": "NPC - Tall Pilgrim",
    "category": "npc",
    "zoneId": "z42",
    "x": -412.65,
    "y": 345.8,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1065",
    "name": "NPC - Vog",
    "category": "npc",
    "zoneId": "z42",
    "x": -412.65,
    "y": 347,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1066",
    "name": "NPC - Flea Caravan",
    "category": "npc",
    "zoneId": "z42",
    "x": -412.65,
    "y": 334,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1067",
    "name": "Vendor - Twelfth Architect",
    "category": "npc",
    "zoneId": "z32",
    "x": -395.1,
    "y": 676.29,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1068",
    "name": "Vendor - Vaultkeeper Cardinius",
    "category": "npc",
    "zoneId": "z49",
    "x": -273.68,
    "y": 830.34,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1069",
    "name": "Vendor - Pebb",
    "category": "npc",
    "zoneId": "z2",
    "x": -698.2,
    "y": 289.4,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1070",
    "name": "Vendor - Frey",
    "category": "npc",
    "zoneId": "z20",
    "x": -585.62,
    "y": 544.18,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1071",
    "name": "Vendor - Mottled Skarr",
    "category": "npc",
    "zoneId": "z7",
    "x": -617.82,
    "y": 705.37,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1072",
    "name": "Vendor - Forge Daughter",
    "category": "npc",
    "zoneId": "z8",
    "x": -724.6,
    "y": 706.17,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1073",
    "name": "Vendor - Mort",
    "category": "npc",
    "zoneId": "z9",
    "x": -670.01,
    "y": 907.96,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1074",
    "name": "Wish - Bone Bottom Supplies",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1075",
    "name": "Wish - Final Audience",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1076",
    "name": "Wish - Fleatopia Supplies",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1077",
    "name": "Wish - Pain, Anguish and Misery",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1078",
    "name": "Wish - Pilgrim's Rest Supplies",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1079",
    "name": "Wish - Runtfeast",
    "category": "npc",
    "zoneId": "z19",
    "x": -252.47,
    "y": 930.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1080",
    "name": "Wish - Silk and Soul",
    "category": "npc",
    "zoneId": "z1",
    "x": -723.06,
    "y": 128.91,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1081",
    "name": "Wish - Songclave Supplies",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1082",
    "name": "Wish - Survivor's Camp Supplies",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1083",
    "name": "Wish - The Lost Merchant",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1084",
    "name": "Wish - The Wailing Mother",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1085",
    "name": "Wish - Passing of the Age",
    "category": "npc",
    "zoneId": "z40",
    "x": -210.3,
    "y": 1191.91,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1086",
    "name": "Wish - Fine Pins",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1087",
    "name": "Wish - Building Up Songclave",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1088",
    "name": "Wish - Cloaks of the Choir",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1089",
    "name": "Wish - Balm for the Wounded",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1090",
    "name": "Wish - Strengthening Songclave",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1091",
    "name": "Wish - The Wandering Merchant",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1092",
    "name": "Wish - Great Taste of Pharloom",
    "category": "npc",
    "zoneId": "z31",
    "x": -269.43,
    "y": 609.96,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1093",
    "name": "Wish - Bone Bottom Repairs",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1094",
    "name": "Wish - Garb of the Pilgrims",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1095",
    "name": "Wish - A Lifesaving Bridge",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1096",
    "name": "Wish - Volatile Flintbeetles",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1097",
    "name": "Wish - The Terrible Tyrant",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1098",
    "name": "Wish - An Icon of Hope",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1099",
    "name": "Wish - Queen's Egg",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1100",
    "name": "Wish - Liquid Lacquer",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1101",
    "name": "Wish - Silver Bells",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1102",
    "name": "Wish - My Missing Courier",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1103",
    "name": "Wish - Crawbug Clearing",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1104",
    "name": "Wish - Restoration of Bellhart",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1105",
    "name": "Wish - Bellhart's Glory",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1106",
    "name": "Wish - My Missing Brother",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1107",
    "name": "Wish - Savage Beastfly",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1108",
    "name": "Wish - Trail's End",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1109",
    "name": "Wish - Fatal Resolve",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1110",
    "name": "Wish - Ecstasy of the End",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1111",
    "name": "Wish - Hero's Call",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1112",
    "name": "Wish - The Hidden Hunter",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1113",
    "name": "Wish - Dark Hearts",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1114",
    "name": "Wish - Berry Picking",
    "category": "npc",
    "zoneId": "z3",
    "x": -635.21,
    "y": 345.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1115",
    "name": "Wish - Alchemist's Assistant",
    "category": "npc",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.21,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1116",
    "name": "Wish - Advanced Alchemy",
    "category": "npc",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.21,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1117",
    "name": "Wish - The Lost Fleas",
    "category": "npc",
    "zoneId": "z6",
    "x": -680.4,
    "y": 437.59,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1118",
    "name": "Wish - Flexile Spines",
    "category": "npc",
    "zoneId": "z9",
    "x": -709.6,
    "y": 981.56,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1119",
    "name": "Wish - Fastest in Pharloom",
    "category": "npc",
    "zoneId": "z46",
    "x": -677.6,
    "y": 1121.95,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1120",
    "name": "Wish - Roach Guts",
    "category": "npc",
    "zoneId": "z12",
    "x": -471.24,
    "y": 890.96,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1121",
    "name": "Wish - Bugs of Pharloom",
    "category": "npc",
    "zoneId": "z13",
    "x": -550.03,
    "y": 756.37,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1122",
    "name": "Wish - Infestation Operation",
    "category": "npc",
    "zoneId": "z15",
    "x": -538.83,
    "y": 610.18,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1123",
    "name": "Wish - Pinmaster's Oil",
    "category": "npc",
    "zoneId": "z20",
    "x": -573.02,
    "y": 561.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1124",
    "name": "Wish - Rite of the Pollip",
    "category": "npc",
    "zoneId": "z21",
    "x": -556.03,
    "y": 407.39,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1125",
    "name": "Wish - Rite of Rebirth",
    "category": "npc",
    "zoneId": "z21",
    "x": -556.03,
    "y": 407.39,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1126",
    "name": "Wish - Broodfeast",
    "category": "npc",
    "zoneId": "z19",
    "x": -252.47,
    "y": 930.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1127",
    "name": "Wish Progress for Fatal Resolve wish",
    "category": "npc",
    "zoneId": "z22",
    "x": -461.91,
    "y": 133.26,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1128",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z22",
    "x": -477.35,
    "y": 202.75,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1129",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z3",
    "x": -577.67,
    "y": 296.6,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1130",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z31",
    "x": -278.86,
    "y": 658.69,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1131",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z42",
    "x": -461.91,
    "y": 392.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1132",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z11",
    "x": -628.07,
    "y": 1041.13,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1133",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z6",
    "x": -691.1,
    "y": 407.23,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1134",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z3",
    "x": -657.27,
    "y": 341.25,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1135",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z3",
    "x": -626.47,
    "y": 322.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1136",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z5",
    "x": -754.15,
    "y": 265.65,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1137",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z20",
    "x": -636.32,
    "y": 504.91,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1138",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z8",
    "x": -693.32,
    "y": 571.03,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1139",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z8",
    "x": -738.38,
    "y": 651,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1140",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z9",
    "x": -748.6,
    "y": 823.72,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1141",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z9",
    "x": -702.51,
    "y": 858.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1142",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z10",
    "x": -663.15,
    "y": 842.88,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1143",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -671.28,
    "y": 705.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1144",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -684.96,
    "y": 733.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1145",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -650.09,
    "y": 732.31,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1146",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z42",
    "x": -483.28,
    "y": 440.5,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1147",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z20",
    "x": -539.1,
    "y": 481.94,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1148",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z20",
    "x": -558.51,
    "y": 459.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1149",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z21",
    "x": -548.51,
    "y": 427.31,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1150",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z22",
    "x": -481.64,
    "y": 265.25,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1151",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z42",
    "x": -418.65,
    "y": 301.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1152",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -637.27,
    "y": 615.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1153",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z14",
    "x": -575.7,
    "y": 691.06,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1154",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z14",
    "x": -568.2,
    "y": 647.06,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1155",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z14",
    "x": -501.76,
    "y": 687.28,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1156",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z12",
    "x": -528.76,
    "y": 813.13,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1157",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z12",
    "x": -497.58,
    "y": 889.56,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1158",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z11",
    "x": -500.96,
    "y": 926.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1159",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z11",
    "x": -482.33,
    "y": 961.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1160",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z18",
    "x": -443.55,
    "y": 965.75,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1161",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z30",
    "x": -449.73,
    "y": 473.53,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1162",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z28",
    "x": -347.99,
    "y": 446.22,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1163",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z28",
    "x": -295.83,
    "y": 457.22,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1164",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z30",
    "x": -414.54,
    "y": 586.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1165",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z29",
    "x": -411.58,
    "y": 666.69,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1166",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z27",
    "x": -247.71,
    "y": 518.13,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1167",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z27",
    "x": -227.52,
    "y": 517.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1168",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z27",
    "x": -186.93,
    "y": 541.22,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1169",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z36",
    "x": -150.43,
    "y": 568.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1170",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z31",
    "x": -313.21,
    "y": 583.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1171",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z31",
    "x": -300.34,
    "y": 609.25,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1172",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z49",
    "x": -265.84,
    "y": 800.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1173",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z41",
    "x": -285.84,
    "y": 819.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1174",
    "name": "Wish Progress for Dark Hearts wish - Void Mass",
    "category": "npc",
    "zoneId": "z41",
    "x": -292.65,
    "y": 845.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1175",
    "name": "Wish - A Vassal Lost",
    "category": "npc",
    "zoneId": "z21",
    "x": -487.04,
    "y": 319.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1176",
    "name": "Wish Item - Pollen Heart",
    "category": "npc",
    "zoneId": "z21",
    "x": -471.8,
    "y": 300.57,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1177",
    "name": "Wish Item - Encursted Heart",
    "category": "npc",
    "zoneId": "z43",
    "x": -345.49,
    "y": 114.49,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1178",
    "name": "Wish Item - Plasmified Blood",
    "category": "npc",
    "zoneId": "z4",
    "x": -622.89,
    "y": 148.16,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1179",
    "name": "Wish Item - Plasmified Blood",
    "category": "npc",
    "zoneId": "z4",
    "x": -636.49,
    "y": 122.35,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1180",
    "name": "Wish Item - Plasmified Blood",
    "category": "npc",
    "zoneId": "z1",
    "x": -637.49,
    "y": 99.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1181",
    "name": "Wish Item - Crustnut",
    "category": "npc",
    "zoneId": "z43",
    "x": -361.21,
    "y": 136.69,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1182",
    "name": "Wish Item - Broodmother's Eye",
    "category": "npc",
    "zoneId": "z25",
    "x": -224.86,
    "y": 313.22,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1183",
    "name": "Wish Item - Cogheart Piece #1",
    "category": "npc",
    "zoneId": "z27",
    "x": -255.57,
    "y": 486.13,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1184",
    "name": "Wish Item - Cogheart Piece #2",
    "category": "npc",
    "zoneId": "z41",
    "x": -311.19,
    "y": 787.5,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1185",
    "name": "Wish Item - Cogheart Piece #3",
    "category": "npc",
    "zoneId": "z35",
    "x": -196.21,
    "y": 782.72,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1186",
    "name": "Wish Item - Plasmium #1",
    "category": "npc",
    "zoneId": "z1",
    "x": -660.81,
    "y": 76.02,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1187",
    "name": "Wish Item - Plasmium #2",
    "category": "npc",
    "zoneId": "z4",
    "x": -662.81,
    "y": 156.21,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1188",
    "name": "Wish Item - Plasmium #3",
    "category": "npc",
    "zoneId": "z4",
    "x": -628.41,
    "y": 135.21,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1189",
    "name": "Wish Item - Plasmium Gland",
    "category": "npc",
    "zoneId": "z4",
    "x": -603.42,
    "y": 130.21,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1190",
    "name": "Wish Item - Maiden's Soul",
    "category": "npc",
    "zoneId": "z0",
    "x": -696.6,
    "y": 208.01,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1191",
    "name": "Wish Item - Flintgem #1",
    "category": "npc",
    "zoneId": "z3",
    "x": -678.4,
    "y": 348,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1192",
    "name": "Wish Item - Flintgem #2",
    "category": "npc",
    "zoneId": "z6",
    "x": -619.81,
    "y": 403.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1193",
    "name": "Wish Item - Flintgem #3",
    "category": "npc",
    "zoneId": "z20",
    "x": -653.01,
    "y": 507.19,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1194",
    "name": "Wish Item - Mossberry #1",
    "category": "npc",
    "zoneId": "z1",
    "x": -688.6,
    "y": 153.01,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1195",
    "name": "Wish Item - Mossberry #2",
    "category": "npc",
    "zoneId": "z0",
    "x": -730.59,
    "y": 229.61,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1196",
    "name": "Wish Item - Mossberry #3",
    "category": "npc",
    "zoneId": "z5",
    "x": -754.39,
    "y": 272.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1197",
    "name": "Wish Item - Mossberry #4",
    "category": "npc",
    "zoneId": "z2",
    "x": -714.4,
    "y": 276.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1198",
    "name": "Wish Item - Mossberry #5",
    "category": "npc",
    "zoneId": "z2",
    "x": -680.2,
    "y": 280.4,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1199",
    "name": "Wish Item - Mossberry #6",
    "category": "npc",
    "zoneId": "z3",
    "x": -646.41,
    "y": 338.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1200",
    "name": "Wish Item - Mossberry #7",
    "category": "npc",
    "zoneId": "z35",
    "x": -204.83,
    "y": 740.44,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1201",
    "name": "Wish Item - Mossberry Stew",
    "category": "npc",
    "zoneId": "z3",
    "x": -634.01,
    "y": 346.4,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1202",
    "name": "Wish Item - Crown Fragment",
    "category": "npc",
    "zoneId": "z6",
    "x": -671.61,
    "y": 493.79,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1203",
    "name": "Wish Item - Horn Fragment",
    "category": "npc",
    "zoneId": "z9",
    "x": -730.59,
    "y": 921.56,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1204",
    "name": "Wish Item - Grass Doll",
    "category": "npc",
    "zoneId": "z46",
    "x": -675.2,
    "y": 1056.95,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1205",
    "name": "Wish Item - Vintage Nectar",
    "category": "npc",
    "zoneId": "z13",
    "x": -583.42,
    "y": 758.37,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1206",
    "name": "Wish Item - Hunter's Journal",
    "category": "npc",
    "zoneId": "z13",
    "x": -549.43,
    "y": 756.97,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1207",
    "name": "Wish Item - Steel Spines",
    "category": "npc",
    "zoneId": "z12",
    "x": -470.64,
    "y": 891.56,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1208",
    "name": "Wish Item - Pickled Muckmaggot",
    "category": "npc",
    "zoneId": "z12",
    "x": -477.24,
    "y": 911.56,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1209",
    "name": "Wish Item - Ruined Tool",
    "category": "npc",
    "zoneId": "z46",
    "x": -440.45,
    "y": 1101.75,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1210",
    "name": "Wish Item - Twisted Bud",
    "category": "npc",
    "zoneId": "z18",
    "x": -374.46,
    "y": 876.96,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1211",
    "name": "Wish Item - Seeker's Soul",
    "category": "npc",
    "zoneId": "z19",
    "x": -266.08,
    "y": 979.96,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1212",
    "name": "Wish Item - Hermit's Soul",
    "category": "npc",
    "zoneId": "z20",
    "x": -619.21,
    "y": 551.78,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1213",
    "name": "Wish Item - Courier's Rasher",
    "category": "npc",
    "zoneId": "z20",
    "x": -578.42,
    "y": 540.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1214",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #1",
    "category": "npc",
    "zoneId": "z20",
    "x": -547.43,
    "y": 548.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1215",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #2",
    "category": "npc",
    "zoneId": "z20",
    "x": -541.43,
    "y": 551.78,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1216",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #3",
    "category": "npc",
    "zoneId": "z20",
    "x": -536.63,
    "y": 537.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1217",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #4",
    "category": "npc",
    "zoneId": "z20",
    "x": -529.83,
    "y": 553.98,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1218",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #5",
    "category": "npc",
    "zoneId": "z20",
    "x": -519.83,
    "y": 528.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1219",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #6",
    "category": "npc",
    "zoneId": "z20",
    "x": -615.22,
    "y": 552.18,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1220",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #7",
    "category": "npc",
    "zoneId": "z20",
    "x": -625.21,
    "y": 548.78,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1221",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #8",
    "category": "npc",
    "zoneId": "z20",
    "x": -629.12,
    "y": 543.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1222",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #9",
    "category": "npc",
    "zoneId": "z20",
    "x": -640.81,
    "y": 555.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1223",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #10",
    "category": "npc",
    "zoneId": "z20",
    "x": -646.41,
    "y": 544.18,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1224",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #11",
    "category": "npc",
    "zoneId": "z20",
    "x": -651.41,
    "y": 551.98,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1225",
    "name": "Wish Item - Silver Bell (Random Spawn Location) #12",
    "category": "npc",
    "zoneId": "z20",
    "x": -629.47,
    "y": 552.64,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1226",
    "name": "Wish Item - Polip Heart #1",
    "category": "npc",
    "zoneId": "z20",
    "x": -555.43,
    "y": 486.19,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1227",
    "name": "Wish Item - Polip Heart #2",
    "category": "npc",
    "zoneId": "z20",
    "x": -545.03,
    "y": 470.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1228",
    "name": "Wish Item - Polip Heart #3",
    "category": "npc",
    "zoneId": "z21",
    "x": -522.03,
    "y": 425.59,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1229",
    "name": "Wish Item - Polip Heart #4",
    "category": "npc",
    "zoneId": "z21",
    "x": -494.44,
    "y": 427.59,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1230",
    "name": "Wish Item - Polip Heart #5",
    "category": "npc",
    "zoneId": "z21",
    "x": -531.83,
    "y": 380.8,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1231",
    "name": "Wish Item - Polip Heart #6",
    "category": "npc",
    "zoneId": "z20",
    "x": -556.03,
    "y": 441.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1232",
    "name": "Wish Item - Hunter's Heart",
    "category": "npc",
    "zoneId": "z46",
    "x": -607.22,
    "y": 1053.35,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1233",
    "name": "Wish Item - Conjoined Heart",
    "category": "npc",
    "zoneId": "z46",
    "x": -547.6,
    "y": 1074.5,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "personaje"
    ]
  },
  {
    "id": "i1234",
    "name": "Boss - Garmond & Zaza",
    "category": "jefe",
    "zoneId": "z49",
    "x": -251.89,
    "y": 850.66,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1235",
    "name": "Boss - Shakra",
    "category": "jefe",
    "zoneId": "z7",
    "x": -587.2,
    "y": 629.73,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1236",
    "name": "Boss - Bell Eater",
    "category": "jefe",
    "zoneId": "z41",
    "x": -329.51,
    "y": 751.63,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1237",
    "name": "Boss - Nyleth",
    "category": "jefe",
    "zoneId": "z21",
    "x": -471.98,
    "y": 297.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1238",
    "name": "Boss - Shrine Guardian Seth",
    "category": "jefe",
    "zoneId": "z42",
    "x": -463.27,
    "y": 352.19,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1239",
    "name": "Boss - Lace #2",
    "category": "jefe",
    "zoneId": "z34",
    "x": -118.18,
    "y": 647.41,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1240",
    "name": "Boss - Moss Mother #2",
    "category": "jefe",
    "zoneId": "z0",
    "x": -736.74,
    "y": 227.31,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1241",
    "name": "Boss - Lost Lace",
    "category": "jefe",
    "zoneId": "z47",
    "x": -928.67,
    "y": 642.13,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1242",
    "name": "Boss - Palestag",
    "category": "jefe",
    "zoneId": "z46",
    "x": -473.44,
    "y": 1105.94,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1243",
    "name": "Boss - Clover Dancers",
    "category": "jefe",
    "zoneId": "z46",
    "x": -452.95,
    "y": 1171.39,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1244",
    "name": "Boss - The Unravelled",
    "category": "jefe",
    "zoneId": "z30",
    "x": -372.53,
    "y": 547,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1245",
    "name": "Boss - Second Sentinel",
    "category": "jefe",
    "zoneId": "z34",
    "x": -204.14,
    "y": 614.41,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1246",
    "name": "Boss - Pinstress",
    "category": "jefe",
    "zoneId": "z25",
    "x": -177.69,
    "y": 275.44,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1247",
    "name": "Boss - First Sinner",
    "category": "jefe",
    "zoneId": "z42",
    "x": -313.52,
    "y": 394.5,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1248",
    "name": "Boss - Broodmother",
    "category": "jefe",
    "zoneId": "z25",
    "x": -226.37,
    "y": 313.19,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1249",
    "name": "Boss - Voltvyrm",
    "category": "jefe",
    "zoneId": "z23",
    "x": -314.01,
    "y": 141.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1250",
    "name": "Boss - Raging Vonchfly",
    "category": "jefe",
    "zoneId": "z43",
    "x": -336.14,
    "y": 121.97,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1251",
    "name": "Boss - Watcher at the Edge",
    "category": "jefe",
    "zoneId": "z45",
    "x": -388.77,
    "y": 74.75,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1252",
    "name": "Boss - Crust King Khann",
    "category": "jefe",
    "zoneId": "z43",
    "x": -345.41,
    "y": 117.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1253",
    "name": "Boss - Grand Mother Silk",
    "category": "jefe",
    "zoneId": "z36",
    "x": -45.45,
    "y": 647.31,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1254",
    "name": "Boss - Cogwork Dancers",
    "category": "jefe",
    "zoneId": "z34",
    "x": -228.52,
    "y": 646.14,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1255",
    "name": "Boss - Trobbio",
    "category": "jefe",
    "zoneId": "z33",
    "x": -307.23,
    "y": 749.78,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1256",
    "name": "Boss - Tormented Trobbio (Pain, Anguish and Misery wish)",
    "category": "jefe",
    "zoneId": "z33",
    "x": -307.23,
    "y": 749.78,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1257",
    "name": "Boss - Moss Mother",
    "category": "jefe",
    "zoneId": "z0",
    "x": -705.8,
    "y": 207.21,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1258",
    "name": "Boss - Moss Mothers",
    "category": "jefe",
    "zoneId": "z0",
    "x": -756.59,
    "y": 211.61,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1259",
    "name": "Boss - Summoned Saviour",
    "category": "jefe",
    "zoneId": "z1",
    "x": -710.2,
    "y": 67.82,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1260",
    "name": "Boss - Plasmified Zango",
    "category": "jefe",
    "zoneId": "z1",
    "x": -657.81,
    "y": 60.42,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1261",
    "name": "Boss - Skull Tyrant #2",
    "category": "jefe",
    "zoneId": "z2",
    "x": -697.8,
    "y": 282,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1262",
    "name": "Boss - Bell Beast",
    "category": "jefe",
    "zoneId": "z3",
    "x": -651.61,
    "y": 350.2,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1263",
    "name": "Boss - Skull Tyrant",
    "category": "jefe",
    "zoneId": "z6",
    "x": -672.21,
    "y": 493.79,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1264",
    "name": "Boss - Lace",
    "category": "jefe",
    "zoneId": "z7",
    "x": -711.4,
    "y": 694.57,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1265",
    "name": "Boss - Forebrothers Signis & Gron",
    "category": "jefe",
    "zoneId": "z47",
    "x": -763.99,
    "y": 696.97,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1266",
    "name": "Boss - Savage Beastfly",
    "category": "jefe",
    "zoneId": "z13",
    "x": -604.42,
    "y": 801.87,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1267",
    "name": "Boss - Fourth Chorus",
    "category": "jefe",
    "zoneId": "z9",
    "x": -732.59,
    "y": 921.56,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1268",
    "name": "Boss - Savage Beastfly #2",
    "category": "jefe",
    "zoneId": "z9",
    "x": -731.19,
    "y": 921.56,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1269",
    "name": "Boss - Gurr the Outcast",
    "category": "jefe",
    "zoneId": "z46",
    "x": -678.4,
    "y": 1082.75,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1270",
    "name": "Boss - Skarrsinger Karmelita",
    "category": "jefe",
    "zoneId": "z46",
    "x": -608.42,
    "y": 1053.35,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1271",
    "name": "Boss - Crawfather",
    "category": "jefe",
    "zoneId": "z11",
    "x": -599.7,
    "y": 1035.66,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1272",
    "name": "Boss - Disgraced Chef Lugoli",
    "category": "jefe",
    "zoneId": "z12",
    "x": -477.84,
    "y": 911.56,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1273",
    "name": "Boss - Moorwing",
    "category": "jefe",
    "zoneId": "z7",
    "x": -583.42,
    "y": 621.78,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1274",
    "name": "Boss - Moorwing #2",
    "category": "jefe",
    "zoneId": "z14",
    "x": -563.47,
    "y": 694.39,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1275",
    "name": "Boss - Widow",
    "category": "jefe",
    "zoneId": "z20",
    "x": -558.83,
    "y": 549.38,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1276",
    "name": "Boss - Sister Splinter",
    "category": "jefe",
    "zoneId": "z21",
    "x": -515.23,
    "y": 428.19,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1277",
    "name": "Boss - Father of the Flame",
    "category": "jefe",
    "zoneId": "z30",
    "x": -475.04,
    "y": 539.18,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1278",
    "name": "Boss - Phantom",
    "category": "jefe",
    "zoneId": "z41",
    "x": -360.86,
    "y": 803.37,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1279",
    "name": "Boss - Groal the Great",
    "category": "jefe",
    "zoneId": "z19",
    "x": -272.08,
    "y": 984.75,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1280",
    "name": "Boss - Great Conchflies",
    "category": "jefe",
    "zoneId": "z22",
    "x": -478.44,
    "y": 204.81,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1281",
    "name": "Boss - Last Judge",
    "category": "jefe",
    "zoneId": "z42",
    "x": -410.65,
    "y": 340.2,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1282",
    "name": "Boss - Lost Garmond",
    "category": "jefe",
    "zoneId": "z22",
    "x": -448.65,
    "y": 145.41,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1283",
    "name": "Mini-Boss - Roof Crab",
    "category": "jefe",
    "zoneId": "z4",
    "x": -644.08,
    "y": 196.63,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1284",
    "name": "Mini-Boss - Rosary Pilgrim",
    "category": "jefe",
    "zoneId": "z1",
    "x": -702.63,
    "y": 141.5,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1285",
    "name": "Mini-Boss - Roachkeeper",
    "category": "jefe",
    "zoneId": "z18",
    "x": -420.02,
    "y": 926.5,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1286",
    "name": "Mini-Boss - Skarrgard",
    "category": "jefe",
    "zoneId": "z20",
    "x": -664.35,
    "y": 553.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1287",
    "name": "Mini-Boss - Rosary Pilgrim",
    "category": "jefe",
    "zoneId": "z21",
    "x": -567.77,
    "y": 326.44,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1288",
    "name": "Battle - Save Plinney",
    "category": "jefe",
    "zoneId": "z21",
    "x": -567.7,
    "y": 329.32,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1289",
    "name": "Battle - For Vintage Nectar",
    "category": "jefe",
    "zoneId": "z13",
    "x": -579.66,
    "y": 758.29,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1290",
    "name": "Battle - Free Sherma",
    "category": "jefe",
    "zoneId": "z32",
    "x": -337.58,
    "y": 661.04,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1291",
    "name": "Battle - Cogwork Core",
    "category": "jefe",
    "zoneId": "z31",
    "x": -254.04,
    "y": 604.25,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1292",
    "name": "Battle - For Pristine Core",
    "category": "jefe",
    "zoneId": "z33",
    "x": -273.11,
    "y": 671.04,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1293",
    "name": "Battle - ???",
    "category": "jefe",
    "zoneId": "z28",
    "x": -297.86,
    "y": 459.81,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1294",
    "name": "Battle - The Slab",
    "category": "jefe",
    "zoneId": "z25",
    "x": -262.66,
    "y": 383.56,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1295",
    "name": "Battle - Whiteward",
    "category": "jefe",
    "zoneId": "z29",
    "x": -410.91,
    "y": 691.48,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1296",
    "name": "Battle - For Voltvessels",
    "category": "jefe",
    "zoneId": "z35",
    "x": -161.36,
    "y": 768.57,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1297",
    "name": "Battle - The Slab #2",
    "category": "jefe",
    "zoneId": "z25",
    "x": -226.42,
    "y": 316.15,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1298",
    "name": "Battle - Lost Verdania",
    "category": "jefe",
    "zoneId": "z46",
    "x": -495.78,
    "y": 1103.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1299",
    "name": "Battle - Vaultborn",
    "category": "jefe",
    "zoneId": "z49",
    "x": -239.45,
    "y": 753.31,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1300",
    "name": "Battle - High Halls",
    "category": "jefe",
    "zoneId": "z27",
    "x": -215.17,
    "y": 548.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1301",
    "name": "Battle - High Halls #2",
    "category": "jefe",
    "zoneId": "z27",
    "x": -215.17,
    "y": 548.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1302",
    "name": "Battle - From Cradle",
    "category": "jefe",
    "zoneId": "z34",
    "x": -186.82,
    "y": 672.16,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1303",
    "name": "Battle - Underworks #2",
    "category": "jefe",
    "zoneId": "z29",
    "x": -431.6,
    "y": 610.56,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1304",
    "name": "Battle - Wanderer's Chapel",
    "category": "jefe",
    "zoneId": "z1",
    "x": -694,
    "y": 78.42,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1305",
    "name": "Battle - Marrow #1",
    "category": "jefe",
    "zoneId": "z6",
    "x": -695.4,
    "y": 357.6,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1306",
    "name": "Battle - Marrow #2",
    "category": "jefe",
    "zoneId": "z6",
    "x": -623.61,
    "y": 431.99,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1307",
    "name": "Battle - Deep Docks #1",
    "category": "jefe",
    "zoneId": "z8",
    "x": -697.6,
    "y": 592.78,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1308",
    "name": "Battle - Deep Docks #2",
    "category": "jefe",
    "zoneId": "z8",
    "x": -733.59,
    "y": 690.37,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1309",
    "name": "Battle - Deep Docks #3",
    "category": "jefe",
    "zoneId": "z9",
    "x": -749.59,
    "y": 818.57,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1310",
    "name": "Battle - Hunter's March #1",
    "category": "jefe",
    "zoneId": "z7",
    "x": -651.81,
    "y": 730.57,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1311",
    "name": "Battle - Hunter's March #2",
    "category": "jefe",
    "zoneId": "z7",
    "x": -643.01,
    "y": 683.18,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1312",
    "name": "Battle - Hunter's March #3",
    "category": "jefe",
    "zoneId": "z13",
    "x": -608.62,
    "y": 749.37,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1313",
    "name": "Battle - Hunter's March #4",
    "category": "jefe",
    "zoneId": "z13",
    "x": -608.62,
    "y": 749.37,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1314",
    "name": "Battle - Crow Battle",
    "category": "jefe",
    "zoneId": "z11",
    "x": -557.6,
    "y": 1034.19,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1315",
    "name": "Battle - Greymoor #1",
    "category": "jefe",
    "zoneId": "z13",
    "x": -547.83,
    "y": 726.77,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1316",
    "name": "Battle - Shellwood",
    "category": "jefe",
    "zoneId": "z20",
    "x": -560.03,
    "y": 457.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1317",
    "name": "Battle - Underworks",
    "category": "jefe",
    "zoneId": "z30",
    "x": -405.02,
    "y": 503.63,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1318",
    "name": "Battle - Reaper's Chapel",
    "category": "jefe",
    "zoneId": "z20",
    "x": -556.23,
    "y": 600.38,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "jefe"
    ]
  },
  {
    "id": "i1319",
    "name": "Memory for Verdania #1",
    "category": "info",
    "zoneId": "z46",
    "x": -526.84,
    "y": 1144.81,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1320",
    "name": "Memory for Verdania #2",
    "category": "info",
    "zoneId": "z11",
    "x": -506.03,
    "y": 1022.13,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1321",
    "name": "Memory for Verdania #3",
    "category": "info",
    "zoneId": "z11",
    "x": -485.61,
    "y": 1029.41,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1322",
    "name": "Memory for Verdania #4",
    "category": "info",
    "zoneId": "z46",
    "x": -479.1,
    "y": 1074.64,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1323",
    "name": "Memory for Verdania #5",
    "category": "info",
    "zoneId": "z18",
    "x": -460.28,
    "y": 1035.14,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1324",
    "name": "Memory for Verdania #6",
    "category": "info",
    "zoneId": "z46",
    "x": -474.22,
    "y": 1182.08,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1325",
    "name": "Memory for Verdania #7",
    "category": "info",
    "zoneId": "z46",
    "x": -490.03,
    "y": 1117.39,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1326",
    "name": "Plate",
    "category": "info",
    "zoneId": "z46",
    "x": -510.32,
    "y": 1261.55,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1327",
    "name": "Plate",
    "category": "info",
    "zoneId": "z46",
    "x": -486.44,
    "y": 1213.92,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1328",
    "name": "Plate",
    "category": "info",
    "zoneId": "z46",
    "x": -494.44,
    "y": 1247.05,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1329",
    "name": "Plate",
    "category": "info",
    "zoneId": "z46",
    "x": -510.32,
    "y": 1234.54,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1330",
    "name": "Lever",
    "category": "info",
    "zoneId": "z30",
    "x": -416.91,
    "y": 471.31,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1331",
    "name": "Lever",
    "category": "info",
    "zoneId": "z8",
    "x": -746.99,
    "y": 708.67,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1332",
    "name": "Lever",
    "category": "info",
    "zoneId": "z12",
    "x": -474.03,
    "y": 839.63,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1333",
    "name": "Lever",
    "category": "info",
    "zoneId": "z8",
    "x": -693.4,
    "y": 642.58,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1334",
    "name": "Lever",
    "category": "info",
    "zoneId": "z7",
    "x": -672.71,
    "y": 646.38,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1335",
    "name": "Lever",
    "category": "info",
    "zoneId": "z14",
    "x": -512.55,
    "y": 705.66,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1336",
    "name": "Lever",
    "category": "info",
    "zoneId": "z14",
    "x": -514.85,
    "y": 693.69,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1337",
    "name": "Enter Spa (for 10 Rosaries)",
    "category": "info",
    "zoneId": "z39",
    "x": -240.08,
    "y": 1136.03,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1338",
    "name": "Examine - Void Tendrills",
    "category": "info",
    "zoneId": "z47",
    "x": -888.03,
    "y": 700.45,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1339",
    "name": "Break - Floor",
    "category": "info",
    "zoneId": "z42",
    "x": -458.16,
    "y": 414.44,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1340",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z39",
    "x": -228.41,
    "y": 1077.39,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1341",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z42",
    "x": -389.66,
    "y": 425.19,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1342",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z28",
    "x": -370.11,
    "y": 438.38,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1343",
    "name": "Break - Tube",
    "category": "info",
    "zoneId": "z31",
    "x": -241.24,
    "y": 631.17,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1344",
    "name": "Break - Silk",
    "category": "info",
    "zoneId": "z27",
    "x": -199.54,
    "y": 544.78,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1345",
    "name": "Break - Confessional Machine",
    "category": "info",
    "zoneId": "z30",
    "x": -398.02,
    "y": 566.81,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1346",
    "name": "Break - Stalactite",
    "category": "info",
    "zoneId": "z44",
    "x": -374.91,
    "y": 200.88,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1347",
    "name": "Break - Spike",
    "category": "info",
    "zoneId": "z44",
    "x": -358.22,
    "y": 190.75,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1348",
    "name": "Break - Spike",
    "category": "info",
    "zoneId": "z37",
    "x": -171.28,
    "y": 735.02,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1349",
    "name": "Break - Hive",
    "category": "info",
    "zoneId": "z21",
    "x": -562.66,
    "y": 425.11,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1350",
    "name": "Break - Trap",
    "category": "info",
    "zoneId": "z19",
    "x": -329.12,
    "y": 976.9,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1351",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z17",
    "x": -426.39,
    "y": 857.62,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1352",
    "name": "Break - Platform",
    "category": "info",
    "zoneId": "z49",
    "x": -270.05,
    "y": 826.94,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1353",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z47",
    "x": -805.64,
    "y": 700.56,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1354",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z41",
    "x": -319.16,
    "y": 856.88,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1355",
    "name": "Awake Statue",
    "category": "info",
    "zoneId": "z41",
    "x": -317.66,
    "y": 873.94,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1356",
    "name": "Break - Platform",
    "category": "info",
    "zoneId": "z25",
    "x": -274.52,
    "y": 321.13,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1357",
    "name": "Break - Platform",
    "category": "info",
    "zoneId": "z30",
    "x": -434.52,
    "y": 528.16,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1358",
    "name": "Break - Lamp",
    "category": "info",
    "zoneId": "z30",
    "x": -397.28,
    "y": 546,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1359",
    "name": "Break - Rope",
    "category": "info",
    "zoneId": "z20",
    "x": -542.99,
    "y": 593.47,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1360",
    "name": "Break - Rope",
    "category": "info",
    "zoneId": "z14",
    "x": -579.83,
    "y": 699.84,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1361",
    "name": "Activate Light",
    "category": "info",
    "zoneId": "z46",
    "x": -439.94,
    "y": 1119.13,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1362",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z46",
    "x": -440.08,
    "y": 1124.03,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1363",
    "name": "Break - Hive",
    "category": "info",
    "zoneId": "z21",
    "x": -488.1,
    "y": 420.19,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1364",
    "name": "Break - Floor",
    "category": "info",
    "zoneId": "z20",
    "x": -647.24,
    "y": 539.44,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1365",
    "name": "Break - Floor",
    "category": "info",
    "zoneId": "z20",
    "x": -647.55,
    "y": 552.72,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1366",
    "name": "Break - Floor",
    "category": "info",
    "zoneId": "z20",
    "x": -652.61,
    "y": 546.47,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1367",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -699.33,
    "y": 937.59,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1368",
    "name": "Lever",
    "category": "info",
    "zoneId": "z14",
    "x": -539.74,
    "y": 725,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1369",
    "name": "Lever",
    "category": "info",
    "zoneId": "z13",
    "x": -527.6,
    "y": 732.31,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1370",
    "name": "Lever",
    "category": "info",
    "zoneId": "z14",
    "x": -519.72,
    "y": 727.81,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1371",
    "name": "Lever",
    "category": "info",
    "zoneId": "z14",
    "x": -509.47,
    "y": 729.44,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1372",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z10",
    "x": -696,
    "y": 828.77,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1373",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z2",
    "x": -671.21,
    "y": 314.2,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1374",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z3",
    "x": -636.91,
    "y": 268.7,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1375",
    "name": "Break - Vine",
    "category": "info",
    "zoneId": "z3",
    "x": -633.91,
    "y": 280.7,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1376",
    "name": "Break - Vine",
    "category": "info",
    "zoneId": "z3",
    "x": -636.71,
    "y": 320.2,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1377",
    "name": "Break Door",
    "category": "info",
    "zoneId": "z20",
    "x": -668.81,
    "y": 542.58,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1378",
    "name": "Enemy",
    "category": "info",
    "zoneId": "z20",
    "x": -669.11,
    "y": 538.68,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1379",
    "name": "Open Door",
    "category": "info",
    "zoneId": "z9",
    "x": -664.31,
    "y": 919.26,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1380",
    "name": "Break Door",
    "category": "info",
    "zoneId": "z9",
    "x": -721.85,
    "y": 861.63,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1381",
    "name": "Break Lava Bomb",
    "category": "info",
    "zoneId": "z9",
    "x": -736.77,
    "y": 1065.34,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1382",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -719.22,
    "y": 969.88,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1383",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -717.97,
    "y": 961.38,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1384",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -713.41,
    "y": 959.5,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1385",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -717.58,
    "y": 930.31,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1386",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -717.45,
    "y": 921.63,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1387",
    "name": "Access Hidden Area",
    "category": "info",
    "zoneId": "z9",
    "x": -724.72,
    "y": 938.94,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1388",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -711.47,
    "y": 884.5,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1389",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z9",
    "x": -675.49,
    "y": 885.22,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1390",
    "name": "Drop Platform",
    "category": "info",
    "zoneId": "z10",
    "x": -655.35,
    "y": 898.56,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1391",
    "name": "Break Wall",
    "category": "info",
    "zoneId": "z10",
    "x": -641.22,
    "y": 878.13,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1392",
    "name": "Break Rock",
    "category": "info",
    "zoneId": "z10",
    "x": -634.22,
    "y": 886,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1393",
    "name": "Lever",
    "category": "info",
    "zoneId": "z10",
    "x": -628.97,
    "y": 881.81,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1394",
    "name": "Lever",
    "category": "info",
    "zoneId": "z11",
    "x": -526.49,
    "y": 984.31,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1395",
    "name": "Break Wind Rock",
    "category": "info",
    "zoneId": "z10",
    "x": -581.28,
    "y": 881.56,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1396",
    "name": "Lever",
    "category": "info",
    "zoneId": "z13",
    "x": -628.36,
    "y": 740.16,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1397",
    "name": "Lever",
    "category": "info",
    "zoneId": "z30",
    "x": -443.99,
    "y": 473.91,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1398",
    "name": "Lever",
    "category": "info",
    "zoneId": "z30",
    "x": -471.86,
    "y": 482.25,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1399",
    "name": "Lever",
    "category": "info",
    "zoneId": "z30",
    "x": -407.02,
    "y": 610.78,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1400",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z30",
    "x": -477.22,
    "y": 518.75,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1401",
    "name": "Break - Floor",
    "category": "info",
    "zoneId": "z28",
    "x": -396.45,
    "y": 479.5,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1402",
    "name": "Break Floor",
    "category": "info",
    "zoneId": "z19",
    "x": -289.41,
    "y": 916.44,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1403",
    "name": "Break - Coral Crust Wall",
    "category": "info",
    "zoneId": "z42",
    "x": -322.78,
    "y": 325.94,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1404",
    "name": "Break - Coral Crust Wall",
    "category": "info",
    "zoneId": "z42",
    "x": -313.24,
    "y": 328.97,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1405",
    "name": "Lever",
    "category": "info",
    "zoneId": "z33",
    "x": -290.41,
    "y": 738.25,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1406",
    "name": "Lever",
    "category": "info",
    "zoneId": "z10",
    "x": -660.03,
    "y": 878.81,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1407",
    "name": "Break - Spike",
    "category": "info",
    "zoneId": "z9",
    "x": -737.36,
    "y": 1088.75,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1408",
    "name": "Break Lava Bomb",
    "category": "info",
    "zoneId": "z9",
    "x": -737.36,
    "y": 1088.75,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1409",
    "name": "Break - Plaftorm",
    "category": "info",
    "zoneId": "z19",
    "x": -323.22,
    "y": 964.31,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1410",
    "name": "Break - Wall",
    "category": "info",
    "zoneId": "z3",
    "x": -579.17,
    "y": 276.38,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1411",
    "name": "Break Vine",
    "category": "info",
    "zoneId": "z12",
    "x": -491.78,
    "y": 822.25,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1412",
    "name": "Break Chain",
    "category": "info",
    "zoneId": "z6",
    "x": -697.8,
    "y": 429.69,
    "description": "Un interruptor o un marcador importante.",
    "search": []
  },
  {
    "id": "i1413",
    "name": "Rosary String Dispenser",
    "category": "info",
    "zoneId": "z26",
    "x": -167.77,
    "y": 502.08,
    "description": "Un punto de información del mapa.",
    "search": []
  },
  {
    "id": "i1414",
    "name": "Rosary String Dispenser",
    "category": "info",
    "zoneId": "z12",
    "x": -548.53,
    "y": 860.86,
    "description": "Un punto de información del mapa.",
    "search": []
  },
  {
    "id": "i1415",
    "name": "Rosary String Dispenser",
    "category": "info",
    "zoneId": "z3",
    "x": -579.32,
    "y": 273,
    "description": "Un punto de información del mapa.",
    "search": []
  }
];

export function getZone(id: string): Zone {
  const zone = ZONES.find((z) => z.id === id);
  if (!zone) throw new Error("Unknown zone " + id);
  return zone;
}

export function getItemsInZone(zoneId: string): Item[] {
  return ITEMS.filter((i) => i.zoneId === zoneId);
}

export function nearestZoneId(pos: [number, number]): string {
  let best = ZONES[0];
  let bestD = Infinity;
  for (const zone of ZONES) {
    const d = (zone.pos[0] - pos[0]) ** 2 + (zone.pos[1] - pos[1]) ** 2;
    if (d < bestD) {
      bestD = d;
      best = zone;
    }
  }
  return best.id;
}
