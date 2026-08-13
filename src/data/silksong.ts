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
    "name": "Gruta de Musgo",
    "pos": [
      -721.2,
      191.31
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z1",
    "name": "Tumba de Huesos",
    "pos": [
      -705.9,
      124.51
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z2",
    "name": "Fondo de Huesos",
    "pos": [
      -701.1,
      268.4
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z3",
    "name": "Hogar de Musgo",
    "pos": [
      -621.91,
      290.5
    ],
    "color": "rgba(120,157,113,1)"
  },
  {
    "id": "z4",
    "name": "Caminos de Gusano",
    "pos": [
      -649.91,
      181.01
    ],
    "color": "#948A7A"
  },
  {
    "id": "z5",
    "name": "Nidal Atla",
    "pos": [
      -761.19,
      313.3
    ],
    "color": "#8E85B5"
  },
  {
    "id": "z6",
    "name": "La Médula",
    "pos": [
      -708.9,
      435.29
    ],
    "color": "rgba(150,150,150,1)"
  },
  {
    "id": "z7",
    "name": "Marcha del Cazador",
    "pos": [
      -631.71,
      662.78
    ],
    "color": "#B2594A"
  },
  {
    "id": "z8",
    "name": "Muelles Profundos",
    "pos": [
      -725.2,
      608.48
    ],
    "color": "rgba(174,127,73,1)"
  },
  {
    "id": "z9",
    "name": "Descanso del Peregrino",
    "pos": [
      -667.01,
      921.36
    ],
    "color": "#A0AA64"
  },
  {
    "id": "z10",
    "name": "Campos Lejanos",
    "pos": [
      -630.41,
      895.26
    ],
    "color": "#9AA266"
  },
  {
    "id": "z11",
    "name": "Lago Rastrero",
    "pos": [
      -561.93,
      982.76
    ],
    "color": "#92B8B2"
  },
  {
    "id": "z12",
    "name": "Camino del Pecador",
    "pos": [
      -513.23,
      833.77
    ],
    "color": "#CA9E8C"
  },
  {
    "id": "z13",
    "name": "Casa a Mitad de Camino",
    "pos": [
      -557.63,
      765.27
    ],
    "color": "#8DB9AF"
  },
  {
    "id": "z14",
    "name": "Pantano Gris",
    "pos": [
      -526.23,
      684.28
    ],
    "color": "#9AB6B0"
  },
  {
    "id": "z15",
    "name": "Matorral de Cendales",
    "pos": [
      -477.44,
      646.98
    ],
    "color": "#77B98A"
  },
  {
    "id": "z16",
    "name": "Órgano Exhausto",
    "pos": [
      -386.06,
      774.07
    ],
    "color": "#A9B655"
  },
  {
    "id": "z17",
    "name": "La Niebla",
    "pos": [
      -433.25,
      814.27
    ],
    "color": "rgba(150,150,150,1)"
  },
  {
    "id": "z18",
    "name": "Aguas Biliares",
    "pos": [
      -377.16,
      957.96
    ],
    "color": "#B7B25D"
  },
  {
    "id": "z19",
    "name": "Puerto de la Bilis",
    "pos": [
      -278.78,
      975.26
    ],
    "color": "#AFB95A"
  },
  {
    "id": "z20",
    "name": "Corazón de Campana",
    "pos": [
      -590.02,
      535.88
    ],
    "color": "#F5C687"
  },
  {
    "id": "z21",
    "name": "Bosque de Conchas",
    "pos": [
      -543.43,
      330.3
    ],
    "color": "#B0B58E"
  },
  {
    "id": "z22",
    "name": "Escalones Demolidos",
    "pos": [
      -458.24,
      195.01
    ],
    "color": "#B79C76"
  },
  {
    "id": "z23",
    "name": "Monte Fay",
    "pos": [
      -278.38,
      156.75
    ],
    "color": "#7492D7"
  },
  {
    "id": "z24",
    "name": "Vena Brillante",
    "pos": [
      -195.88,
      208
    ],
    "color": "#7E9DDD"
  },
  {
    "id": "z25",
    "name": "La Losa",
    "pos": [
      -175.38,
      324.5
    ],
    "color": "#ACAAAC"
  },
  {
    "id": "z26",
    "name": "Salones Altos",
    "pos": [
      -149.88,
      490.5
    ],
    "color": "#D38A4F"
  },
  {
    "id": "z27",
    "name": "El Foro",
    "pos": [
      -203.13,
      496.5
    ],
    "color": "#D2915E"
  },
  {
    "id": "z28",
    "name": "Balneario de la Ciudadela",
    "pos": [
      -310.53,
      496.63
    ],
    "color": "#F3EAB0"
  },
  {
    "id": "z29",
    "name": "El Caldero",
    "pos": [
      -452.38,
      633.5
    ],
    "color": "#9F9FA4"
  },
  {
    "id": "z30",
    "name": "Subterráneos",
    "pos": [
      -390.63,
      576.75
    ],
    "color": "#908E92"
  },
  {
    "id": "z31",
    "name": "Cámaras del Coro",
    "pos": [
      -311.13,
      596.25
    ],
    "color": "#E5D792"
  },
  {
    "id": "z32",
    "name": "Fuerte Blanco",
    "pos": [
      -362.13,
      614.5
    ],
    "color": "#F0EEF0"
  },
  {
    "id": "z33",
    "name": "El Escenario",
    "pos": [
      -296.57,
      726.88
    ],
    "color": "#EBB36F"
  },
  {
    "id": "z34",
    "name": "Núcleo de Engranajes",
    "pos": [
      -141.57,
      664.13
    ],
    "color": "#B4B898"
  },
  {
    "id": "z35",
    "name": "El Memorial",
    "pos": [
      -181.19,
      780.25
    ],
    "color": "#DECFC1"
  },
  {
    "id": "z36",
    "name": "La Cuna (Acto 2)",
    "pos": [
      -119.57,
      600
    ],
    "color": "#9389BD"
  },
  {
    "id": "z37",
    "name": "La Cuna (Acto 3)",
    "pos": [
      -133.6,
      718.51
    ],
    "color": "#9389BD"
  },
  {
    "id": "z38",
    "name": "La Superficie",
    "pos": [
      10.62,
      797.75
    ],
    "color": "rgba(98,100,150,1)"
  },
  {
    "id": "z39",
    "name": "Pulguilandia",
    "pos": [
      -247.88,
      1129.75
    ],
    "color": "#8AA4B6"
  },
  {
    "id": "z40",
    "name": "Lago Pálido",
    "pos": [
      -246.88,
      1198.75
    ],
    "color": "#8AA4B6"
  },
  {
    "id": "z41",
    "name": "Bóvedas Susurrantes",
    "pos": [
      -334.38,
      791.75
    ],
    "color": "#FCAC60"
  },
  {
    "id": "z42",
    "name": "Gran Puerta",
    "pos": [
      -395.63,
      356.75
    ],
    "color": "#D4D3B6"
  },
  {
    "id": "z43",
    "name": "Arenas de Karak",
    "pos": [
      -385.88,
      114.5
    ],
    "color": "#E989A8"
  },
  {
    "id": "z44",
    "name": "Nidal Voltio",
    "pos": [
      -331.13,
      206
    ],
    "color": "#EA91AA"
  },
  {
    "id": "z45",
    "name": "Torre de Coral",
    "pos": [
      -353.63,
      68
    ],
    "color": "#E385A4"
  },
  {
    "id": "z46",
    "name": "Verdania",
    "pos": [
      -555.88,
      1107.75
    ],
    "color": "#8AE7AA"
  },
  {
    "id": "z47",
    "name": "El Abismo",
    "pos": [
      -845.77,
      653
    ],
    "color": "#838183"
  },
  {
    "id": "z48",
    "name": "Conductos Putrefactos",
    "pos": [
      -186.13,
      919.25
    ],
    "color": "#8BA7B9"
  },
  {
    "id": "z49",
    "name": "Clave del Canto",
    "pos": [
      -219.13,
      806
    ],
    "color": "#E2D798"
  },
  {
    "id": "z50",
    "name": "La Niebla",
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
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z44",
    "x": -305.05,
    "y": 247.86,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i1",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z0",
    "x": -712.4,
    "y": 221.21,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i2",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z2",
    "x": -698.2,
    "y": 274,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i3",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z47",
    "x": -820.6,
    "y": 625.74,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i4",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z3",
    "x": -637.61,
    "y": 333.4,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i5",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z1",
    "x": -723.2,
    "y": 128.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i6",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z6",
    "x": -651.81,
    "y": 401.19,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i7",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z6",
    "x": -703.8,
    "y": 389.59,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i8",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z6",
    "x": -681.2,
    "y": 430.99,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i9",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z3",
    "x": -658.41,
    "y": 319.2,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i10",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z5",
    "x": -755.99,
    "y": 330.4,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i11",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z8",
    "x": -678,
    "y": 542.18,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i12",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z20",
    "x": -586.02,
    "y": 549.38,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i13",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z4",
    "x": -605.62,
    "y": 123.81,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i14",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z8",
    "x": -682.6,
    "y": 634.58,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i15",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z8",
    "x": -725.4,
    "y": 684.18,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i16",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z7",
    "x": -712.2,
    "y": 729.37,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i17",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z8",
    "x": -770.19,
    "y": 666.78,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i18",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z8",
    "x": -771.99,
    "y": 627.98,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i19",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z47",
    "x": -786.58,
    "y": 762.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i20",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z7",
    "x": -678.2,
    "y": 770.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i21",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z13",
    "x": -629.01,
    "y": 747.37,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i22",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z9",
    "x": -670.41,
    "y": 911.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i23",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z9",
    "x": -702.2,
    "y": 908.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i24",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z9",
    "x": -710.8,
    "y": 979.36,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i25",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z46",
    "x": -739.59,
    "y": 1122.35,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i26",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z11",
    "x": -602.35,
    "y": 1005.52,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i27",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z13",
    "x": -554.83,
    "y": 764.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i28",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z11",
    "x": -543.83,
    "y": 911.16,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i29",
    "name": "Bencilla [Temporal]",
    "category": "bench",
    "zoneId": "z11",
    "x": -556.83,
    "y": 930.76,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench [Temporary]",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i30",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z11",
    "x": -489.84,
    "y": 977.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i31",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z12",
    "x": -478.84,
    "y": 821.17,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i32",
    "name": "Bencilla [Temporal]",
    "category": "bench",
    "zoneId": "z7",
    "x": -587.22,
    "y": 614.78,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench [Temporary]",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i33",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z15",
    "x": -489.64,
    "y": 677.18,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i34",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z20",
    "x": -560.43,
    "y": 549.38,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i35",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z20",
    "x": -548.83,
    "y": 455.59,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i36",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z3",
    "x": -619.61,
    "y": 369.2,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i37",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z21",
    "x": -538.03,
    "y": 311.8,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i38",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z3",
    "x": -579.42,
    "y": 266.4,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i39",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z22",
    "x": -520.03,
    "y": 216.21,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i40",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z22",
    "x": -461.24,
    "y": 129.01,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i41",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z22",
    "x": -442.85,
    "y": 226.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i42",
    "name": "Bencilla [Temporal]",
    "category": "bench",
    "zoneId": "z42",
    "x": -412.85,
    "y": 332.8,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench [Temporary]",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i43",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z16",
    "x": -387.86,
    "y": 808.57,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i44",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z18",
    "x": -425.85,
    "y": 895.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i45",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z19",
    "x": -323.87,
    "y": 1061.55,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i46",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z19",
    "x": -274.88,
    "y": 984.55,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i47",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z46",
    "x": -676.2,
    "y": 1116.35,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i48",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z25",
    "x": -213.27,
    "y": 308.81,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i49",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z25",
    "x": -227.57,
    "y": 327.94,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i50",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z25",
    "x": -255.28,
    "y": 367.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i51",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z42",
    "x": -305.75,
    "y": 337.92,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i52",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z27",
    "x": -232.11,
    "y": 473.31,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i53",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z28",
    "x": -291.93,
    "y": 504.13,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i54",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z31",
    "x": -242.19,
    "y": 600.63,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i55",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z31",
    "x": -218.09,
    "y": 604,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i56",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z31",
    "x": -282.97,
    "y": 592.53,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i57",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z28",
    "x": -357.91,
    "y": 501.25,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i58",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z42",
    "x": -457.83,
    "y": 456.94,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i59",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z30",
    "x": -398.75,
    "y": 552.27,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i60",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z29",
    "x": -400.58,
    "y": 660.14,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i61",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z39",
    "x": -240.36,
    "y": 1146.46,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i62",
    "name": "Bencilla (por 60 rosarios)",
    "category": "bench",
    "zoneId": "z19",
    "x": -201.13,
    "y": 1018.72,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench (for 60 Rosaries)",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i63",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z19",
    "x": -253.03,
    "y": 926.53,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i64",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z49",
    "x": -267.75,
    "y": 830.72,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i65",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z41",
    "x": -322.87,
    "y": 861.08,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i66",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z33",
    "x": -322.81,
    "y": 748.57,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i67",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z49",
    "x": -235.52,
    "y": 780.41,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i68",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z49",
    "x": -218.91,
    "y": 793.61,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i69",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z35",
    "x": -208.06,
    "y": 716.38,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i70",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z37",
    "x": -115.29,
    "y": 698.97,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i71",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z23",
    "x": -276.54,
    "y": 81.56,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i72",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z24",
    "x": -212.6,
    "y": 266.8,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i73",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z25",
    "x": -129.6,
    "y": 275.36,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i74",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z44",
    "x": -305.3,
    "y": 261.77,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i75",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z43",
    "x": -346.78,
    "y": 135.69,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i76",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z42",
    "x": -372.07,
    "y": 351.19,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i77",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z31",
    "x": -322.07,
    "y": 609.94,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i78",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z46",
    "x": -544.77,
    "y": 1146.07,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i79",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z47",
    "x": -845.65,
    "y": 757.69,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i80",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z47",
    "x": -911.72,
    "y": 622.99,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i81",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z20",
    "x": -567.7,
    "y": 540.27,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i82",
    "name": "Bencilla",
    "category": "bench",
    "zoneId": "z48",
    "x": -126.89,
    "y": 881.5,
    "description": "Una bencilla para descansar y guardar tu progreso.",
    "search": [
      "Bench",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i83",
    "name": "Campanario: Médula",
    "category": "bench",
    "zoneId": "z3",
    "x": -651.81,
    "y": 357.6,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Marrow",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i84",
    "name": "Campanario: Fondo de Huesos",
    "category": "bench",
    "zoneId": "z2",
    "x": -709.6,
    "y": 300,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Bone Bottom",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i85",
    "name": "Campanario: Muelles Profundos",
    "category": "bench",
    "zoneId": "z8",
    "x": -718.2,
    "y": 626.98,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Deep Docks",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i86",
    "name": "Campanario: Campos Lejanos",
    "category": "bench",
    "zoneId": "z9",
    "x": -702,
    "y": 916.56,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Far Fields",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i87",
    "name": "Campanario: Pantano Gris",
    "category": "bench",
    "zoneId": "z13",
    "x": -568.82,
    "y": 741.57,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Greymoor",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i88",
    "name": "Campanario: Corazón de Campana",
    "category": "bench",
    "zoneId": "z20",
    "x": -599.42,
    "y": 548.58,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Bellhart",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i89",
    "name": "Campanario: Bosque de Conchas",
    "category": "bench",
    "zoneId": "z21",
    "x": -537.83,
    "y": 334,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Shellwood",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i90",
    "name": "Campanario: Escalones Demolidos",
    "category": "bench",
    "zoneId": "z22",
    "x": -442.45,
    "y": 215.61,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Blasted Steps",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i91",
    "name": "Campanario: Aguas Biliares",
    "category": "bench",
    "zoneId": "z18",
    "x": -425.85,
    "y": 901.36,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Bilewater",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i92",
    "name": "Campanario: La Losa",
    "category": "bench",
    "zoneId": "z42",
    "x": -306.32,
    "y": 318.81,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - The Slab",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i93",
    "name": "Campanario: Gran Campanario",
    "category": "bench",
    "zoneId": "z33",
    "x": -322.27,
    "y": 737.63,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Grand Bellway",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i94",
    "name": "Campanario: Conductos Putrefactos",
    "category": "bench",
    "zoneId": "z19",
    "x": -200.8,
    "y": 1006.6,
    "description": "Estación de campanas para viajar rápido por Pharloom.",
    "search": [
      "Bellway - Putrified Ducts",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i95",
    "name": "Ventrículo: Cámaras del Coro (por 80 rosarios)",
    "category": "bench",
    "zoneId": "z28",
    "x": -322.11,
    "y": 462.44,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - Choral Chambers (for 80 Rosaries)",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i96",
    "name": "Ventrículo: Subterráneos",
    "category": "bench",
    "zoneId": "z29",
    "x": -414.55,
    "y": 618.13,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - Underworks",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i97",
    "name": "Ventrículo: Gran Campanario por 80 rosarios",
    "category": "bench",
    "zoneId": "z33",
    "x": -321.96,
    "y": 754,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - Grand Bellway for 80 Rosaries",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i98",
    "name": "Ventrículo: Primero santuario",
    "category": "bench",
    "zoneId": "z49",
    "x": -222.52,
    "y": 771.94,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - First Shrine",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i99",
    "name": "Ventrículo: Salones Altos (por 80 rosarios)",
    "category": "bench",
    "zoneId": "z34",
    "x": -217.16,
    "y": 611.38,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - High Halls (for 80 Rosaries)",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i100",
    "name": "Ventrículo: El Memorial (por 80 rosarios)",
    "category": "bench",
    "zoneId": "z34",
    "x": -165.1,
    "y": 693.88,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - Memorium (for 80 Rosaries)",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i101",
    "name": "Ventrículo: Término",
    "category": "bench",
    "zoneId": "z37",
    "x": -114.93,
    "y": 688.44,
    "description": "Estación de ventrículos para viajar rápido por Pharloom.",
    "search": [
      "Ventrica - Terminus",
      "bencilla",
      "descanso"
    ]
  },
  {
    "id": "i102",
    "name": "Vendedora de mapas: Shakra",
    "category": "info",
    "zoneId": "z2",
    "x": -691.4,
    "y": 297.4,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map Vendor - Shakra"
    ]
  },
  {
    "id": "i103",
    "name": "Vendedora de mapas: Shakra",
    "category": "info",
    "zoneId": "z20",
    "x": -579.94,
    "y": 562.3,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map Vendor - Shakra"
    ]
  },
  {
    "id": "i104",
    "name": "Mapa: musgolands",
    "category": "info",
    "zoneId": "z3",
    "x": -658.81,
    "y": 339.2,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Mosslands"
    ]
  },
  {
    "id": "i105",
    "name": "Mapa: El Memorial",
    "category": "info",
    "zoneId": "z35",
    "x": -207.07,
    "y": 780.63,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Memorium"
    ]
  },
  {
    "id": "i106",
    "name": "Mapa: Médula",
    "category": "info",
    "zoneId": "z3",
    "x": -659.51,
    "y": 339.2,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Marrow"
    ]
  },
  {
    "id": "i107",
    "name": "Mapa: Caminos de Gusano",
    "category": "info",
    "zoneId": "z4",
    "x": -611.02,
    "y": 181.61,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Wormways"
    ]
  },
  {
    "id": "i108",
    "name": "Mapa: cazador's March",
    "category": "info",
    "zoneId": "z10",
    "x": -651.51,
    "y": 800.97,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Hunter's March"
    ]
  },
  {
    "id": "i109",
    "name": "Mapa: Muelles Profundos",
    "category": "info",
    "zoneId": "z8",
    "x": -711.7,
    "y": 647.58,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Deep Docks"
    ]
  },
  {
    "id": "i110",
    "name": "Mapa: Campos Lejanos",
    "category": "info",
    "zoneId": "z9",
    "x": -715.1,
    "y": 896.16,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Far Fields"
    ]
  },
  {
    "id": "i111",
    "name": "Mapa: Pantano Gris",
    "category": "info",
    "zoneId": "z11",
    "x": -555.93,
    "y": 932.56,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Greymoor"
    ]
  },
  {
    "id": "i112",
    "name": "Mapa: Camino del Pecador",
    "category": "info",
    "zoneId": "z12",
    "x": -478.64,
    "y": 817.97,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Sinner's Road"
    ]
  },
  {
    "id": "i113",
    "name": "Mapa: Aguas Biliares",
    "category": "info",
    "zoneId": "z18",
    "x": -386.86,
    "y": 973.06,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Bilewater"
    ]
  },
  {
    "id": "i114",
    "name": "Mapa: Corazón de Campana",
    "category": "info",
    "zoneId": "z20",
    "x": -579.62,
    "y": 562.18,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Bellhart"
    ]
  },
  {
    "id": "i115",
    "name": "Mapa: Bosque de Conchas",
    "category": "info",
    "zoneId": "z21",
    "x": -581.72,
    "y": 396.99,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Shellwood"
    ]
  },
  {
    "id": "i116",
    "name": "Mapa: Escalones Demolidos",
    "category": "info",
    "zoneId": "z21",
    "x": -498.74,
    "y": 289.2,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Blasted Steps"
    ]
  },
  {
    "id": "i117",
    "name": "Mapa: Nidal Atla",
    "category": "info",
    "zoneId": "z5",
    "x": -726.9,
    "y": 366,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Weavenest Atla"
    ]
  },
  {
    "id": "i118",
    "name": "Mapa: engranajes Core",
    "category": "info",
    "zoneId": "z31",
    "x": -233.53,
    "y": 601.38,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Cogwork Core"
    ]
  },
  {
    "id": "i119",
    "name": "Mapa: El Abismo",
    "category": "info",
    "zoneId": "z47",
    "x": -903.77,
    "y": 621.56,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - The Abyss"
    ]
  },
  {
    "id": "i120",
    "name": "Mapa: Verdania",
    "category": "info",
    "zoneId": "z46",
    "x": -544.77,
    "y": 1148.41,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Verdania"
    ]
  },
  {
    "id": "i121",
    "name": "Mapa: Sand of Karak",
    "category": "info",
    "zoneId": "z44",
    "x": -381.68,
    "y": 176.56,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Sand of Karak"
    ]
  },
  {
    "id": "i122",
    "name": "Mapa: Monte Fay",
    "category": "info",
    "zoneId": "z44",
    "x": -305.23,
    "y": 246.94,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Mount Fay"
    ]
  },
  {
    "id": "i123",
    "name": "Mapa: La Losa",
    "category": "info",
    "zoneId": "z25",
    "x": -253.6,
    "y": 386.7,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - The Slab"
    ]
  },
  {
    "id": "i124",
    "name": "Mapa: Cámaras del Coro #1 (por 70 rosarios)",
    "category": "info",
    "zoneId": "z28",
    "x": -322.62,
    "y": 483.94,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Choral Chambers #1 (for 70 Rosaries)"
    ]
  },
  {
    "id": "i125",
    "name": "Mapa: Gran Gate",
    "category": "info",
    "zoneId": "z42",
    "x": -411.75,
    "y": 413.25,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Grand Gate"
    ]
  },
  {
    "id": "i126",
    "name": "Mapa: Subterráneos",
    "category": "info",
    "zoneId": "z42",
    "x": -423.24,
    "y": 462.72,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Underworks"
    ]
  },
  {
    "id": "i127",
    "name": "Mapa: Fuerte Blanco por 70 rosarios",
    "category": "info",
    "zoneId": "z32",
    "x": -352.38,
    "y": 607.27,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Whiteward for 70 Rosaries"
    ]
  },
  {
    "id": "i128",
    "name": "Mapa: Cámaras del Coro #2 (por 70 rosarios)",
    "category": "info",
    "zoneId": "z41",
    "x": -322.62,
    "y": 762.38,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Choral Chambers #2 (for 70 Rosaries)"
    ]
  },
  {
    "id": "i129",
    "name": "Mapa: Bóvedas Susurrantes",
    "category": "info",
    "zoneId": "z49",
    "x": -245.67,
    "y": 798.55,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Whispering Vaults"
    ]
  },
  {
    "id": "i130",
    "name": "Mapa: Salones Altos (por 70 rosarios)",
    "category": "info",
    "zoneId": "z34",
    "x": -217.83,
    "y": 619.28,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - High Halls (for 70 Rosaries)"
    ]
  },
  {
    "id": "i131",
    "name": "Mapa: La Cuna",
    "category": "info",
    "zoneId": "z36",
    "x": -87.45,
    "y": 621,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - The Cradle"
    ]
  },
  {
    "id": "i132",
    "name": "Mapa: Conductos Putrefactos",
    "category": "info",
    "zoneId": "z19",
    "x": -214.84,
    "y": 984.41,
    "description": "Shakra o un mapa del reino.",
    "search": [
      "Map - Putrified Ducts"
    ]
  },
  {
    "id": "i133",
    "name": "Requiere Elegía de las Profundidades",
    "category": "info",
    "zoneId": "z11",
    "x": -531.66,
    "y": 1032.39,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Elegy of the Deep"
    ]
  },
  {
    "id": "i134",
    "name": "Requiere Craw Summons",
    "category": "info",
    "zoneId": "z11",
    "x": -573.58,
    "y": 1043.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Craw Summons"
    ]
  },
  {
    "id": "i135",
    "name": "Requiere Campanario Key",
    "category": "info",
    "zoneId": "z20",
    "x": -572.79,
    "y": 546.14,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Bellhome Key"
    ]
  },
  {
    "id": "i136",
    "name": "Requiere Key of Apóstata",
    "category": "info",
    "zoneId": "z42",
    "x": -292.02,
    "y": 341.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Apostate"
    ]
  },
  {
    "id": "i137",
    "name": "Requiere Key of Hereje",
    "category": "info",
    "zoneId": "z25",
    "x": -265.95,
    "y": 347.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Heretic"
    ]
  },
  {
    "id": "i138",
    "name": "Requiere Key of Hereje",
    "category": "info",
    "zoneId": "z25",
    "x": -227.2,
    "y": 334.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Heretic"
    ]
  },
  {
    "id": "i139",
    "name": "Requiere Key of Hereje",
    "category": "info",
    "zoneId": "z42",
    "x": -304.92,
    "y": 352.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Heretic"
    ]
  },
  {
    "id": "i140",
    "name": "Requiere Key of Apóstata",
    "category": "info",
    "zoneId": "z25",
    "x": -227.14,
    "y": 353.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Apostate"
    ]
  },
  {
    "id": "i141",
    "name": "Requiere Key of Indolente",
    "category": "info",
    "zoneId": "z25",
    "x": -263.8,
    "y": 371.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Indolent"
    ]
  },
  {
    "id": "i142",
    "name": "Requiere Key of Indolente",
    "category": "info",
    "zoneId": "z25",
    "x": -255.1,
    "y": 334.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Indolent"
    ]
  },
  {
    "id": "i143",
    "name": "Requiere Key of Indolente",
    "category": "info",
    "zoneId": "z25",
    "x": -243.7,
    "y": 334.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Key of Indolent"
    ]
  },
  {
    "id": "i144",
    "name": "Requiere Arquitecto's Key",
    "category": "info",
    "zoneId": "z32",
    "x": -391.6,
    "y": 656.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Architect's Key"
    ]
  },
  {
    "id": "i145",
    "name": "Requiere White Key",
    "category": "info",
    "zoneId": "z31",
    "x": -321.82,
    "y": 599.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires White Key"
    ]
  },
  {
    "id": "i146",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z13",
    "x": -541.03,
    "y": 772.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i147",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z36",
    "x": -202.7,
    "y": 582.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i148",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z32",
    "x": -336.24,
    "y": 611.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i149",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z24",
    "x": -231.97,
    "y": 230.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i150",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z45",
    "x": -267.24,
    "y": 61.64,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i151",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z42",
    "x": -301.49,
    "y": 337.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i152",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z27",
    "x": -245.95,
    "y": 524.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i153",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z22",
    "x": -425.6,
    "y": 188.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i154",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z33",
    "x": -225.89,
    "y": 705.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i155",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z13",
    "x": -554.05,
    "y": 754.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i156",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z18",
    "x": -403.02,
    "y": 935.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i157",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z12",
    "x": -502.69,
    "y": 905.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i158",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z1",
    "x": -717.6,
    "y": 138.95,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i159",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z33",
    "x": -277.84,
    "y": 671.21,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i160",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z47",
    "x": -843.7,
    "y": 750.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i161",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z43",
    "x": -398.22,
    "y": 107.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i162",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z37",
    "x": -74.78,
    "y": 732.27,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i163",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z42",
    "x": -405.53,
    "y": 434.67,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i164",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z42",
    "x": -440.58,
    "y": 430.71,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i165",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z20",
    "x": -566.53,
    "y": 550.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i166",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z40",
    "x": -221.02,
    "y": 1204.6,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i167",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z5",
    "x": -743.92,
    "y": 328.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i168",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z12",
    "x": -479.77,
    "y": 901.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i169",
    "name": "Requiere Bebida de Pulgas y Tobilleras de Seda Veloz",
    "category": "info",
    "zoneId": "z46",
    "x": -742.47,
    "y": 1154.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Flea Brew and Silkspeed Anklets"
    ]
  },
  {
    "id": "i170",
    "name": "Requiere maldito Crest",
    "category": "info",
    "zoneId": "z15",
    "x": -534.24,
    "y": 608.42,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cursed Crest"
    ]
  },
  {
    "id": "i171",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -557.35,
    "y": 490.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i172",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -543.67,
    "y": 448.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i173",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z21",
    "x": -528.64,
    "y": 403.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i174",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z0",
    "x": -690.6,
    "y": 184.21,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i175",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z6",
    "x": -697.1,
    "y": 504.79,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i176",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z6",
    "x": -627.91,
    "y": 421.99,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i177",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z10",
    "x": -702.3,
    "y": 794.27,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i178",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z1",
    "x": -654.41,
    "y": 127.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i179",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z9",
    "x": -693.67,
    "y": 928.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i180",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z13",
    "x": -611.02,
    "y": 767.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i181",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z21",
    "x": -506.16,
    "y": 399.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i182",
    "name": "Requiere el ataque Lanza de Seda",
    "category": "info",
    "zoneId": "z3",
    "x": -651.91,
    "y": 343.2,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silkspear Attack"
    ]
  },
  {
    "id": "i183",
    "name": "Requiere el ataque Lanza de Seda",
    "category": "info",
    "zoneId": "z3",
    "x": -630.31,
    "y": 280.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silkspear Attack"
    ]
  },
  {
    "id": "i184",
    "name": "Requiere el ataque Lanza de Seda",
    "category": "info",
    "zoneId": "z3",
    "x": -636.61,
    "y": 317.9,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silkspear Attack"
    ]
  },
  {
    "id": "i185",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z32",
    "x": -337.91,
    "y": 655.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i186",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z19",
    "x": -277.11,
    "y": 883.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i187",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z44",
    "x": -305.16,
    "y": 274.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i188",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z29",
    "x": -412.85,
    "y": 661.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i189",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z29",
    "x": -411.22,
    "y": 684.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i190",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z16",
    "x": -388.8,
    "y": 727.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i191",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z32",
    "x": -396.27,
    "y": 666.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i192",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z9",
    "x": -733.09,
    "y": 1059.45,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i193",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z43",
    "x": -459.42,
    "y": 110.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i194",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z9",
    "x": -732.6,
    "y": 844.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i195",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z12",
    "x": -472.74,
    "y": 851.71,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i196",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z11",
    "x": -617.22,
    "y": 992.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i197",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z9",
    "x": -644.41,
    "y": 992.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i198",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z46",
    "x": -496.58,
    "y": 1093.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i199",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z42",
    "x": -430.68,
    "y": 438.16,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i200",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z27",
    "x": -192.66,
    "y": 549.8,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i201",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z37",
    "x": -156.6,
    "y": 710.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i202",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z33",
    "x": -288.45,
    "y": 666.26,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i203",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z31",
    "x": -246.79,
    "y": 579.95,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i204",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z11",
    "x": -581.39,
    "y": 1032.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i205",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z27",
    "x": -215.17,
    "y": 548.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i206",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z42",
    "x": -463.14,
    "y": 408.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i207",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z34",
    "x": -184.77,
    "y": 648.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i208",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z41",
    "x": -315.74,
    "y": 809.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i209",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z41",
    "x": -283.61,
    "y": 801.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i210",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z41",
    "x": -354.47,
    "y": 838.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i211",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z19",
    "x": -242.41,
    "y": 936.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i212",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z25",
    "x": -199.13,
    "y": 316.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i213",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z32",
    "x": -339.72,
    "y": 600.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i214",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z19",
    "x": -304.32,
    "y": 935.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i215",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z34",
    "x": -114.78,
    "y": 672.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i216",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z28",
    "x": -322.28,
    "y": 467.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i217",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z30",
    "x": -457.69,
    "y": 470.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i218",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z11",
    "x": -484.67,
    "y": 954.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i219",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z42",
    "x": -411.53,
    "y": 397.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i220",
    "name": "Requiere el Aguijón y tocar 5 campanas",
    "category": "info",
    "zoneId": "z42",
    "x": -411.92,
    "y": 350.41,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Needolin and activating 5 bells"
    ]
  },
  {
    "id": "i221",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z9",
    "x": -762.22,
    "y": 801.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i222",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z47",
    "x": -786.77,
    "y": 702.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i223",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z19",
    "x": -237.85,
    "y": 989.63,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i224",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z44",
    "x": -378.53,
    "y": 253.16,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i225",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z33",
    "x": -252.7,
    "y": 759.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i226",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z31",
    "x": -258.8,
    "y": 646.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i227",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z31",
    "x": -235.95,
    "y": 652.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i228",
    "name": "Cruce: arriba/abajo o izquierda/derecha",
    "category": "info",
    "zoneId": "z29",
    "x": -413.03,
    "y": 634,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Intersection - Up/Down or Left/Right"
    ]
  },
  {
    "id": "i229",
    "name": "Cruce: arriba/abajo o izquierda/derecha",
    "category": "info",
    "zoneId": "z33",
    "x": -251.77,
    "y": 713.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Intersection - Up/Down or Left/Right"
    ]
  },
  {
    "id": "i230",
    "name": "Cruce: arriba/abajo o izquierda/derecha",
    "category": "info",
    "zoneId": "z47",
    "x": -751.89,
    "y": 740.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Intersection - Up/Down or Left/Right"
    ]
  },
  {
    "id": "i231",
    "name": "Cruce: arriba/abajo o izquierda/derecha",
    "category": "info",
    "zoneId": "z28",
    "x": -288.88,
    "y": 480.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Intersection - Up/Down or Left/Right"
    ]
  },
  {
    "id": "i232",
    "name": "Cruce: arriba/abajo o izquierda/derecha",
    "category": "info",
    "zoneId": "z41",
    "x": -317.03,
    "y": 775.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Intersection - Up/Down or Left/Right"
    ]
  },
  {
    "id": "i233",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z19",
    "x": -324.03,
    "y": 1053.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i234",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z16",
    "x": -396.24,
    "y": 699.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i235",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z25",
    "x": -279.08,
    "y": 353.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i236",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z42",
    "x": -404.16,
    "y": 311.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i237",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z33",
    "x": -307.52,
    "y": 722.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i238",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z18",
    "x": -452.67,
    "y": 934.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i239",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z18",
    "x": -450.69,
    "y": 919.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i240",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z8",
    "x": -699.92,
    "y": 607,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i241",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z11",
    "x": -501.96,
    "y": 933.26,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i242",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z11",
    "x": -489.34,
    "y": 964.55,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i243",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z14",
    "x": -564.83,
    "y": 654.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i244",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z13",
    "x": -579.86,
    "y": 721.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i245",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z13",
    "x": -569.02,
    "y": 730.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i246",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z0",
    "x": -697.03,
    "y": 174.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i247",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z20",
    "x": -582.27,
    "y": 441.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i248",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z21",
    "x": -537.41,
    "y": 316.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i249",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z7",
    "x": -678.8,
    "y": 735.27,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i250",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z10",
    "x": -614.69,
    "y": 875.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i251",
    "name": "Requiere romper desde arriba",
    "category": "info",
    "zoneId": "z30",
    "x": -460.82,
    "y": 478.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires breaking from above"
    ]
  },
  {
    "id": "i252",
    "name": "Requiere llegar desde el oeste (necesita Vuelo de Seda)",
    "category": "info",
    "zoneId": "z10",
    "x": -614.69,
    "y": 888.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires coming from the west side, which requires Silk Soar"
    ]
  },
  {
    "id": "i253",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z26",
    "x": -159.77,
    "y": 543.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i254",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z22",
    "x": -523.97,
    "y": 124,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i255",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z29",
    "x": -432.23,
    "y": 597.08,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i256",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z31",
    "x": -302.3,
    "y": 587.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i257",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z30",
    "x": -390.96,
    "y": 562.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i258",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z9",
    "x": -661.81,
    "y": 940.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i259",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z46",
    "x": -440.67,
    "y": 1092.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i260",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z12",
    "x": -482.17,
    "y": 892.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i261",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z18",
    "x": -430.95,
    "y": 925.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i262",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z17",
    "x": -448.85,
    "y": 793.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i263",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z20",
    "x": -543.6,
    "y": 517.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i264",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z20",
    "x": -539.82,
    "y": 465,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i265",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z20",
    "x": -634.16,
    "y": 548.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i266",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z9",
    "x": -654.74,
    "y": 934.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i267",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z7",
    "x": -653.71,
    "y": 753.57,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i268",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z11",
    "x": -495.05,
    "y": 1009,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i269",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z11",
    "x": -536.35,
    "y": 964.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i270",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z12",
    "x": -543.41,
    "y": 904.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i271",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z11",
    "x": -556.15,
    "y": 999.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i272",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z13",
    "x": -678,
    "y": 774.67,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i273",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z8",
    "x": -724.8,
    "y": 679.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i274",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z6",
    "x": -676.9,
    "y": 463.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i275",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z6",
    "x": -702,
    "y": 471.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i276",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z46",
    "x": -522.95,
    "y": 1099.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i277",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z48",
    "x": -191.42,
    "y": 1006.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i278",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z47",
    "x": -848.54,
    "y": 631.6,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i279",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z34",
    "x": -223.38,
    "y": 680.8,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i280",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z34",
    "x": -89.89,
    "y": 669.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i281",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z27",
    "x": -219.24,
    "y": 576.07,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i282",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z34",
    "x": -202.61,
    "y": 683.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i283",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z37",
    "x": -191.05,
    "y": 710.04,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i284",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z39",
    "x": -337.82,
    "y": 1069.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i285",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z23",
    "x": -292.63,
    "y": 154.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i286",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z44",
    "x": -349.78,
    "y": 198.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i287",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z30",
    "x": -443.64,
    "y": 573.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i288",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z41",
    "x": -318.32,
    "y": 758.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i289",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z30",
    "x": -440.35,
    "y": 583.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i290",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z41",
    "x": -298.91,
    "y": 817.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i291",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z42",
    "x": -315.05,
    "y": 334.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i292",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z49",
    "x": -264.83,
    "y": 816.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i293",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z25",
    "x": -275.99,
    "y": 347.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i294",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z19",
    "x": -274.53,
    "y": 943.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i295",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z24",
    "x": -192.08,
    "y": 144.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i296",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z24",
    "x": -231.29,
    "y": 264.14,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i297",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z31",
    "x": -275.33,
    "y": 550.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i298",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z31",
    "x": -270.86,
    "y": 569.59,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i299",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z31",
    "x": -271.14,
    "y": 601.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i300",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z44",
    "x": -391.07,
    "y": 200,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i301",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z33",
    "x": -269.53,
    "y": 729.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i302",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z30",
    "x": -417.47,
    "y": 477.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i303",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z6",
    "x": -652.81,
    "y": 421.99,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i304",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z42",
    "x": -416.94,
    "y": 435,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i305",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z22",
    "x": -474.85,
    "y": 248.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i306",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z22",
    "x": -508.47,
    "y": 193.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i307",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z18",
    "x": -390.27,
    "y": 896.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i308",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z12",
    "x": -483.74,
    "y": 840.03,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i309",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z11",
    "x": -544.72,
    "y": 928.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i310",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z14",
    "x": -525.06,
    "y": 664.63,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i311",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z20",
    "x": -526.91,
    "y": 460.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i312",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z7",
    "x": -577.55,
    "y": 650.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i313",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z30",
    "x": -434.57,
    "y": 586.63,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i314",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z41",
    "x": -351.05,
    "y": 797.97,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i315",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z8",
    "x": -740.26,
    "y": 721.2,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i316",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z9",
    "x": -741.41,
    "y": 789.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i317",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z33",
    "x": -303.77,
    "y": 763.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i318",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z41",
    "x": -291.39,
    "y": 798.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i319",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z29",
    "x": -402.53,
    "y": 691,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i320",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z41",
    "x": -291.11,
    "y": 831.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i321",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z25",
    "x": -239.28,
    "y": 336.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i322",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z25",
    "x": -245.14,
    "y": 349.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i323",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z19",
    "x": -244.37,
    "y": 943.98,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i324",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z25",
    "x": -265.03,
    "y": 356.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i325",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z23",
    "x": -268.86,
    "y": 81.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i326",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z25",
    "x": -281.2,
    "y": 347.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i327",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z28",
    "x": -359.02,
    "y": 506.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i328",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z1",
    "x": -688.53,
    "y": 70.31,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i329",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z17",
    "x": -473.72,
    "y": 800.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i330",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z20",
    "x": -642.24,
    "y": 557.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i331",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z28",
    "x": -352.68,
    "y": 470.33,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i332",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z13",
    "x": -534.14,
    "y": 746.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i333",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z15",
    "x": -494.2,
    "y": 658.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i334",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z31",
    "x": -251.61,
    "y": 618.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i335",
    "name": "Requiere Capa de Plumón",
    "category": "info",
    "zoneId": "z44",
    "x": -339.33,
    "y": 201.66,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Faydown Cloak"
    ]
  },
  {
    "id": "i336",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z11",
    "x": -534.7,
    "y": 927.84,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i337",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z21",
    "x": -583.85,
    "y": 371.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i338",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z20",
    "x": -622.14,
    "y": 558.34,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i339",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z20",
    "x": -581.02,
    "y": 576.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i340",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z21",
    "x": -551.19,
    "y": 430,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i341",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z12",
    "x": -550.69,
    "y": 881.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i342",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z9",
    "x": -719.85,
    "y": 1033.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i343",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z20",
    "x": -656.31,
    "y": 524.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i344",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z10",
    "x": -661.71,
    "y": 848.56,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i345",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z3",
    "x": -666.21,
    "y": 296.4,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i346",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z20",
    "x": -554.95,
    "y": 536.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i347",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z9",
    "x": -685.66,
    "y": 882.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i348",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z42",
    "x": -313.41,
    "y": 338.94,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i349",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z34",
    "x": -207.55,
    "y": 700.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i350",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z42",
    "x": -456.28,
    "y": 427.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i351",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z33",
    "x": -233.79,
    "y": 711.2,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i352",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z3",
    "x": -656.11,
    "y": 323.4,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i353",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z4",
    "x": -611.28,
    "y": 157.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i354",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z13",
    "x": -605.82,
    "y": 816.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i355",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z4",
    "x": -676.6,
    "y": 159.21,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i356",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z9",
    "x": -722.7,
    "y": 829.09,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i357",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z9",
    "x": -739.8,
    "y": 996,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i358",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z2",
    "x": -677.9,
    "y": 259.3,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i359",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z6",
    "x": -672.01,
    "y": 359.9,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i360",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z19",
    "x": -222.95,
    "y": 998.74,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i361",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z9",
    "x": -743.55,
    "y": 850.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i362",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z5",
    "x": -696.8,
    "y": 350.1,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i363",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z6",
    "x": -698.8,
    "y": 359.1,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i364",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z3",
    "x": -652.91,
    "y": 267.9,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i365",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z20",
    "x": -654.31,
    "y": 540.18,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i366",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z7",
    "x": -678.6,
    "y": 643.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i367",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z4",
    "x": -641.91,
    "y": 163.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i368",
    "name": "Atajo de una vía: Down",
    "category": "info",
    "zoneId": "z9",
    "x": -703.85,
    "y": 962.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Down"
    ]
  },
  {
    "id": "i369",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z25",
    "x": -243.58,
    "y": 352.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i370",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z49",
    "x": -252.8,
    "y": 820.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i371",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z16",
    "x": -386.47,
    "y": 755.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i372",
    "name": "Atajo de una vía: Left",
    "category": "info",
    "zoneId": "z8",
    "x": -769.59,
    "y": 659.58,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Left"
    ]
  },
  {
    "id": "i373",
    "name": "Requiere Aguijón",
    "category": "info",
    "zoneId": "z46",
    "x": -738.89,
    "y": 1110.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Needolin"
    ]
  },
  {
    "id": "i374",
    "name": "Requiere Aguijón",
    "category": "info",
    "zoneId": "z46",
    "x": -440.55,
    "y": 1067,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Needolin"
    ]
  },
  {
    "id": "i375",
    "name": "Requiere Surgeon's Key",
    "category": "info",
    "zoneId": "z30",
    "x": -354.69,
    "y": 547.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Surgeon's Key"
    ]
  },
  {
    "id": "i376",
    "name": "Se desbloquea durante el deseo Fin del Camino",
    "category": "info",
    "zoneId": "z39",
    "x": -264.86,
    "y": 1108.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Unlocked during Trail's End wish"
    ]
  },
  {
    "id": "i377",
    "name": "Se desbloquea durante el deseo Audiencia Final",
    "category": "info",
    "zoneId": "z36",
    "x": -206.11,
    "y": 599.82,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Unlocked during Final Audience wish"
    ]
  },
  {
    "id": "i378",
    "name": "Se desbloquea tras conocer al Príncipe Verde en el Núcleo de Engranajes",
    "category": "info",
    "zoneId": "z11",
    "x": -551.02,
    "y": 1023.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Unlocked after meeting Green Prince in Cogwork Core"
    ]
  },
  {
    "id": "i379",
    "name": "Requisito desconocido",
    "category": "info",
    "zoneId": "z21",
    "x": -488.28,
    "y": 307.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requirement Unknown"
    ]
  },
  {
    "id": "i380",
    "name": "Se desbloquea durante el deseo Un Vasallo Perdido (solo Alma de Acero)",
    "category": "info",
    "zoneId": "z1",
    "x": -702.44,
    "y": 109.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Unlocked during A Vassal Lost wish (Steel Soul only)"
    ]
  },
  {
    "id": "i381",
    "name": "Requiere Acto 3",
    "category": "info",
    "zoneId": "z0",
    "x": -706.49,
    "y": 189.97,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Act 3"
    ]
  },
  {
    "id": "i382",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z9",
    "x": -750.92,
    "y": 825.78,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i383",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z0",
    "x": -741.55,
    "y": 180.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i384",
    "name": "Requisito desconocido",
    "category": "info",
    "zoneId": "z11",
    "x": -489.58,
    "y": 979.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requirement Unknown"
    ]
  },
  {
    "id": "i385",
    "name": "Requiere completar la Pelea de Cuervos",
    "category": "info",
    "zoneId": "z11",
    "x": -548.16,
    "y": 995.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires completing Crow Battle"
    ]
  },
  {
    "id": "i386",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z13",
    "x": -625.67,
    "y": 798,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i387",
    "name": "Requiere Vuelo de Seda",
    "category": "info",
    "zoneId": "z24",
    "x": -221.53,
    "y": 192.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Silk Soar"
    ]
  },
  {
    "id": "i388",
    "name": "Atajo de una vía: Right",
    "category": "info",
    "zoneId": "z3",
    "x": -629.21,
    "y": 377.3,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Right"
    ]
  },
  {
    "id": "i389",
    "name": "Requiere Aguijón",
    "category": "info",
    "zoneId": "z5",
    "x": -726.7,
    "y": 299.3,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Needolin"
    ]
  },
  {
    "id": "i390",
    "name": "Requiere Garras de Escalada",
    "category": "info",
    "zoneId": "z1",
    "x": -633.41,
    "y": 92.01,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Clawline"
    ]
  },
  {
    "id": "i391",
    "name": "Atajo de una vía: Up",
    "category": "info",
    "zoneId": "z8",
    "x": -766.29,
    "y": 632.48,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "One-Way Shortcut - Up"
    ]
  },
  {
    "id": "i392",
    "name": "Requiere Paso Veloz",
    "category": "info",
    "zoneId": "z8",
    "x": -733.89,
    "y": 708.57,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Swift Step",
      "dash",
      "esprint",
      "swift step"
    ]
  },
  {
    "id": "i393",
    "name": "Requiere Paso Veloz",
    "category": "info",
    "zoneId": "z1",
    "x": -641.21,
    "y": 111.11,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Swift Step",
      "dash",
      "esprint",
      "swift step"
    ]
  },
  {
    "id": "i394",
    "name": "Requiere Simple Key",
    "category": "info",
    "zoneId": "z8",
    "x": -733.09,
    "y": 714.97,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Simple Key"
    ]
  },
  {
    "id": "i395",
    "name": "Requiere Simple Key",
    "category": "info",
    "zoneId": "z4",
    "x": -644.83,
    "y": 158.28,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Simple Key"
    ]
  },
  {
    "id": "i396",
    "name": "Requiere Simple Key",
    "category": "info",
    "zoneId": "z12",
    "x": -499.66,
    "y": 843.86,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Simple Key"
    ]
  },
  {
    "id": "i397",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z0",
    "x": -682.47,
    "y": 220.02,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i398",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z32",
    "x": -400.7,
    "y": 648.44,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i399",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z31",
    "x": -247.62,
    "y": 558.61,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i400",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z10",
    "x": -643.41,
    "y": 819.47,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i401",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z10",
    "x": -682.28,
    "y": 794.13,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i402",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z9",
    "x": -711.2,
    "y": 954.26,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i403",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z9",
    "x": -700.16,
    "y": 928.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i404",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z9",
    "x": -729.72,
    "y": 907.75,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i405",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z9",
    "x": -727.24,
    "y": 980.41,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i406",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z9",
    "x": -730.33,
    "y": 1007.06,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i407",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z10",
    "x": -609.57,
    "y": 881.38,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i408",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z10",
    "x": -649.78,
    "y": 882.81,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i409",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z2",
    "x": -672.97,
    "y": 244.19,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i410",
    "name": "Requiere Capa del Errante",
    "category": "info",
    "zoneId": "z11",
    "x": -553.28,
    "y": 944.69,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Drifter's Cloak"
    ]
  },
  {
    "id": "i411",
    "name": "Requiere Paso Veloz",
    "category": "info",
    "zoneId": "z8",
    "x": -708.1,
    "y": 677.08,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Swift Step",
      "dash",
      "esprint",
      "swift step"
    ]
  },
  {
    "id": "i412",
    "name": "Requiere Paso Veloz",
    "category": "info",
    "zoneId": "z8",
    "x": -711.9,
    "y": 687.67,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Swift Step",
      "dash",
      "esprint",
      "swift step"
    ]
  },
  {
    "id": "i413",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z7",
    "x": -665.01,
    "y": 748.77,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i414",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z8",
    "x": -693.9,
    "y": 546.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i415",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z4",
    "x": -605.32,
    "y": 160.61,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i416",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z3",
    "x": -571.92,
    "y": 282.7,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i417",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z4",
    "x": -620.51,
    "y": 133.91,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i418",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z14",
    "x": -535.33,
    "y": 668.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i419",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z4",
    "x": -643.61,
    "y": 163.72,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i420",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z21",
    "x": -577.7,
    "y": 415.53,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i421",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -617.8,
    "y": 558.22,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i422",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -583.02,
    "y": 518,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i423",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -550.1,
    "y": 461.88,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i424",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -509.66,
    "y": 493.25,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i425",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -515.85,
    "y": 499,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i426",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z20",
    "x": -513.6,
    "y": 453.5,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i427",
    "name": "Requiere Agarre Firme",
    "category": "info",
    "zoneId": "z4",
    "x": -613.12,
    "y": 145.01,
    "description": "Un atajo oculto que conecta dos lugares.",
    "search": [
      "Requires Cling Grip"
    ]
  },
  {
    "id": "i428",
    "name": "Habilidad: Aguijón",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -559.03,
    "y": 549.38,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Needolin"
    ]
  },
  {
    "id": "i429",
    "name": "Habilidad: Canto de Silfo",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -763.19,
    "y": 378.6,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Sylphsong"
    ]
  },
  {
    "id": "i430",
    "name": "Habilidad: Agarre Firme",
    "category": "habilidad",
    "zoneId": "z21",
    "x": -510.43,
    "y": 392.99,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Cling Grip"
    ]
  },
  {
    "id": "i431",
    "name": "Habilidad: Paso Veloz",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -676,
    "y": 683.18,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Swift Step",
      "dash",
      "esprint",
      "swift step"
    ]
  },
  {
    "id": "i432",
    "name": "Habilidad: Elegía de las Profundidades",
    "category": "habilidad",
    "zoneId": "z1",
    "x": -721.8,
    "y": 128.41,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Elegy of the Deep"
    ]
  },
  {
    "id": "i433",
    "name": "Habilidad: Golpe de Aguja",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -459.24,
    "y": 132.01,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Needle Strike"
    ]
  },
  {
    "id": "i434",
    "name": "Habilidad: Dardo Afilado",
    "category": "habilidad",
    "zoneId": "z1",
    "x": -632.41,
    "y": 12.02,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Sharpdart"
    ]
  },
  {
    "id": "i435",
    "name": "Habilidad: Lanza de Seda",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -628.81,
    "y": 299.4,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Silkspear"
    ]
  },
  {
    "id": "i436",
    "name": "Habilidad: Tormenta de Hilo",
    "category": "habilidad",
    "zoneId": "z11",
    "x": -490.04,
    "y": 998.35,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Thread Storm"
    ]
  },
  {
    "id": "i437",
    "name": "Habilidad: Punto de Cruz",
    "category": "habilidad",
    "zoneId": "z41",
    "x": -360.56,
    "y": 803.37,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Cross Stitch"
    ]
  },
  {
    "id": "i438",
    "name": "Habilidad: Capa del Errante",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -709.6,
    "y": 982.16,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Drifter's Cloak"
    ]
  },
  {
    "id": "i439",
    "name": "Habilidad: Vuelo de Seda",
    "category": "habilidad",
    "zoneId": "z47",
    "x": -911.86,
    "y": 728.22,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Silk Soar"
    ]
  },
  {
    "id": "i440",
    "name": "Habilidad: Capa de Plumón",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -114.36,
    "y": 280.38,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Faydown Cloak"
    ]
  },
  {
    "id": "i441",
    "name": "Habilidad: Llamado de Cachorro",
    "category": "habilidad",
    "zoneId": "z33",
    "x": -329.4,
    "y": 750.5,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Beastling Call"
    ]
  },
  {
    "id": "i442",
    "name": "Habilidad: Garras de Escalada",
    "category": "habilidad",
    "zoneId": "z29",
    "x": -421.42,
    "y": 655.16,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Clawline"
    ]
  },
  {
    "id": "i443",
    "name": "Habilidad: Furia Rúnica",
    "category": "habilidad",
    "zoneId": "z42",
    "x": -314.11,
    "y": 394.56,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Rune Rage"
    ]
  },
  {
    "id": "i444",
    "name": "Habilidad: Agujas Pálidas",
    "category": "habilidad",
    "zoneId": "z38",
    "x": -19.45,
    "y": 729.13,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Pale Nails"
    ]
  },
  {
    "id": "i445",
    "name": "Habilidad: Melodía del Director",
    "category": "habilidad",
    "zoneId": "z27",
    "x": -215.14,
    "y": 517.33,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Conductor's Melody"
    ]
  },
  {
    "id": "i446",
    "name": "Habilidad: Melodía del Guardián de la Bóveda",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -274.35,
    "y": 830.34,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Vaultkeeper's Melody"
    ]
  },
  {
    "id": "i447",
    "name": "Habilidad: Melodía del Arquitecto",
    "category": "habilidad",
    "zoneId": "z34",
    "x": -140.64,
    "y": 647.19,
    "description": "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
    "search": [
      "Ability - Architect's Melody"
    ]
  },
  {
    "id": "i448",
    "name": "Herramienta: insignia de alfiler",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -178.72,
    "y": 274.82,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Pin Badge"
    ]
  },
  {
    "id": "i449",
    "name": "Herramienta: filamento de voltio",
    "category": "habilidad",
    "zoneId": "z23",
    "x": -314.23,
    "y": 143.41,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Volt Filament"
    ]
  },
  {
    "id": "i450",
    "name": "Herramienta: cortaconcha",
    "category": "habilidad",
    "zoneId": "z43",
    "x": -348.02,
    "y": 117.56,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Conchcutter"
    ]
  },
  {
    "id": "i451",
    "name": "Herramienta: recipientes de voltio",
    "category": "habilidad",
    "zoneId": "z35",
    "x": -162.46,
    "y": 773.02,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Voltvessels"
    ]
  },
  {
    "id": "i452",
    "name": "Herramienta: agarre del ascendente (por 350 rosarios)",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -234.64,
    "y": 798.35,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Ascendant's Grip (for 350 Rosaries)"
    ]
  },
  {
    "id": "i453",
    "name": "Herramienta: extensor de carrete (por 720 rosarios)",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -234.64,
    "y": 798.35,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Spool Extender (for 720 Rosaries)"
    ]
  },
  {
    "id": "i454",
    "name": "Herramienta: cuerdas de araña (por 320 rosarios)",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -234.64,
    "y": 798.35,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Spider Strings (for 320 Rosaries)"
    ]
  },
  {
    "id": "i455",
    "name": "Herramienta: tiro de seda (Twelfth Arquitecto)",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -391.4,
    "y": 676.19,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Silkshot (Twelfth Architect)"
    ]
  },
  {
    "id": "i456",
    "name": "Herramienta: banda inyectora",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -346.13,
    "y": 654.25,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Injector Band"
    ]
  },
  {
    "id": "i457",
    "name": "Herramienta: garra larga",
    "category": "habilidad",
    "zoneId": "z19",
    "x": -252.89,
    "y": 928.14,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Longclaw"
    ]
  },
  {
    "id": "i458",
    "name": "Herramienta: Wreath of Purity",
    "category": "habilidad",
    "zoneId": "z39",
    "x": -221.92,
    "y": 1071.41,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Wreath of Purity"
    ]
  },
  {
    "id": "i459",
    "name": "Herramienta: huevo de Flealia (requires finding all pulgas perdidas)",
    "category": "habilidad",
    "zoneId": "z39",
    "x": -239.7,
    "y": 1157.85,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Egg of Flealia (requires finding all Lost Fleas)"
    ]
  },
  {
    "id": "i460",
    "name": "Herramienta: anillo arrojadizo",
    "category": "habilidad",
    "zoneId": "z40",
    "x": -269.86,
    "y": 1177.95,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Throwing Ring"
    ]
  },
  {
    "id": "i461",
    "name": "Herramienta: brazal de escapada",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -393.07,
    "y": 676.26,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Scuttlebrace"
    ]
  },
  {
    "id": "i462",
    "name": "Herramienta: rueda de engranajes",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -394.09,
    "y": 676.28,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Cogwork Wheel"
    ]
  },
  {
    "id": "i463",
    "name": "Herramienta: espejo de garras",
    "category": "habilidad",
    "zoneId": "z33",
    "x": -306.57,
    "y": 749.78,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Claw Mirror"
    ]
  },
  {
    "id": "i464",
    "name": "Herramienta: espejo oscuro (espejo de garrass)",
    "category": "habilidad",
    "zoneId": "z33",
    "x": -306.57,
    "y": 749.78,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Dark Mirror (Claw Mirrors)"
    ]
  },
  {
    "id": "i465",
    "name": "Herramienta: diadema de sierra",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -393.61,
    "y": 676.27,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Sawtooth Circlet"
    ]
  },
  {
    "id": "i466",
    "name": "Herramienta: recuerdo Crystal",
    "category": "habilidad",
    "zoneId": "z23",
    "x": -283.63,
    "y": 125.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Memory Crystal"
    ]
  },
  {
    "id": "i467",
    "name": "Herramienta: tiro de seda (Original)",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -129.07,
    "y": 272.59,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Silkshot (Original)"
    ]
  },
  {
    "id": "i468",
    "name": "Herramienta: moscarrón",
    "category": "habilidad",
    "zoneId": "z36",
    "x": -171.09,
    "y": 569.38,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Cogfly"
    ]
  },
  {
    "id": "i469",
    "name": "Herramienta: rosario Cannon",
    "category": "habilidad",
    "zoneId": "z26",
    "x": -171.07,
    "y": 502.34,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Rosary Cannon"
    ]
  },
  {
    "id": "i470",
    "name": "Herramienta: vínculo de reserva",
    "category": "habilidad",
    "zoneId": "z34",
    "x": -205.14,
    "y": 615.2,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Reserve Bind"
    ]
  },
  {
    "id": "i471",
    "name": "Herramienta: alfiler recto",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -668.81,
    "y": 551.18,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Straight Pin"
    ]
  },
  {
    "id": "i472",
    "name": "Herramienta: alfiler triple",
    "category": "habilidad",
    "zoneId": "z11",
    "x": -521.95,
    "y": 1014.09,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Threefold Pin"
    ]
  },
  {
    "id": "i473",
    "name": "Herramienta: Sting fragmento",
    "category": "habilidad",
    "zoneId": "z8",
    "x": -723.6,
    "y": 706.17,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Sting Shard"
    ]
  },
  {
    "id": "i474",
    "name": "Herramienta: chinchetas",
    "category": "habilidad",
    "zoneId": "z12",
    "x": -471.24,
    "y": 891.56,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Tacks"
    ]
  },
  {
    "id": "i475",
    "name": "Herramienta: alfiler largo",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -571.22,
    "y": 511.59,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Longpin"
    ]
  },
  {
    "id": "i476",
    "name": "Herramienta: garra curva",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -616.02,
    "y": 705.57,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Curveclaw"
    ]
  },
  {
    "id": "i477",
    "name": "Herramienta: garra curva",
    "category": "habilidad",
    "zoneId": "z13",
    "x": -608.95,
    "y": 737.06,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Curveclaw"
    ]
  },
  {
    "id": "i478",
    "name": "Herramienta: pimpillo",
    "category": "habilidad",
    "zoneId": "z15",
    "x": -517.63,
    "y": 612.38,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Pimpillo"
    ]
  },
  {
    "id": "i479",
    "name": "Herramienta: pizarra de pedernal",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -723.8,
    "y": 775.77,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Flintslate"
    ]
  },
  {
    "id": "i480",
    "name": "Herramienta: Snare Setter",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -736.59,
    "y": 337.8,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Snare Setter"
    ]
  },
  {
    "id": "i481",
    "name": "Herramienta: brújula",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -658.11,
    "y": 339.2,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Compass"
    ]
  },
  {
    "id": "i482",
    "name": "Herramienta: fragmento Pendant",
    "category": "habilidad",
    "zoneId": "z6",
    "x": -673.4,
    "y": 398.39,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Shard Pendant"
    ]
  },
  {
    "id": "i483",
    "name": "Herramienta: broche de magnetita",
    "category": "habilidad",
    "zoneId": "z2",
    "x": -695.5,
    "y": 289.4,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Magnetite Brooch"
    ]
  },
  {
    "id": "i484",
    "name": "Herramienta: cinturón con peso",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -668.81,
    "y": 907.96,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Weighted Belt"
    ]
  },
  {
    "id": "i485",
    "name": "Herramienta: brazalete de púas",
    "category": "habilidad",
    "zoneId": "z12",
    "x": -519.23,
    "y": 903.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Barbed Bracelet"
    ]
  },
  {
    "id": "i486",
    "name": "Herramienta: bolso del bicho muerto",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -600.22,
    "y": 190.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Dead Bug's Purse"
    ]
  },
  {
    "id": "i487",
    "name": "Herramienta: mortal de conchas",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -600.22,
    "y": 191.61,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Shell Satchel"
    ]
  },
  {
    "id": "i488",
    "name": "Herramienta: dados de magnetita",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -449.85,
    "y": 138.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Magnetite Dice"
    ]
  },
  {
    "id": "i489",
    "name": "Herramienta: taladro del excavador",
    "category": "habilidad",
    "zoneId": "z30",
    "x": -478.04,
    "y": 514.29,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Delver's Drill"
    ]
  },
  {
    "id": "i490",
    "name": "Herramienta: tobilleras de seda veloz",
    "category": "habilidad",
    "zoneId": "z46",
    "x": -740.39,
    "y": 1156.34,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Silkspeed Anklets"
    ]
  },
  {
    "id": "i491",
    "name": "Herramienta: marca del ladrón",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -421.05,
    "y": 179.21,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Thief's Mark"
    ]
  },
  {
    "id": "i492",
    "name": "Herramienta: plasmio Phial",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Plasmium Phial"
    ]
  },
  {
    "id": "i493",
    "name": "Herramienta: frasco de aguja",
    "category": "habilidad",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.81,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Needle Phial"
    ]
  },
  {
    "id": "i494",
    "name": "Herramienta: Polip bolsa",
    "category": "habilidad",
    "zoneId": "z21",
    "x": -556.03,
    "y": 407.99,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Polip Pouch"
    ]
  },
  {
    "id": "i495",
    "name": "Herramienta: luz de tejedora",
    "category": "habilidad",
    "zoneId": "z0",
    "x": -756.79,
    "y": 211.41,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Weavelight"
    ]
  },
  {
    "id": "i496",
    "name": "Herramienta: ojo del druida",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -635.21,
    "y": 346.4,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Druid's Eye"
    ]
  },
  {
    "id": "i497",
    "name": "Herramienta: campana de magma",
    "category": "habilidad",
    "zoneId": "z8",
    "x": -723,
    "y": 706.17,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Magma Bell"
    ]
  },
  {
    "id": "i498",
    "name": "Herramienta: tiro de seda (Forja Hija)",
    "category": "habilidad",
    "zoneId": "z8",
    "x": -722.4,
    "y": 706.17,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Silkshot (Forge Daughter)"
    ]
  },
  {
    "id": "i499",
    "name": "Herramienta: campana protectora",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -718.6,
    "y": 868.76,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Warding Bell"
    ]
  },
  {
    "id": "i500",
    "name": "Herramienta: máscara quebrada",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -616.82,
    "y": 705.57,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Fractured Mask"
    ]
  },
  {
    "id": "i501",
    "name": "Herramienta: bebida de pulgas",
    "category": "habilidad",
    "zoneId": "z7",
    "x": -586.82,
    "y": 609.18,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Flea Brew"
    ]
  },
  {
    "id": "i502",
    "name": "Herramienta: multiunidor",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -585.02,
    "y": 544.18,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Multibinder"
    ]
  },
  {
    "id": "i503",
    "name": "Herramienta: linterna de fuego fatuo",
    "category": "habilidad",
    "zoneId": "z30",
    "x": -479.44,
    "y": 538.98,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Wispfire Lantern"
    ]
  },
  {
    "id": "i504",
    "name": "Herramienta: honda rápida",
    "category": "habilidad",
    "zoneId": "z18",
    "x": -336.67,
    "y": 975.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Quick Sling"
    ]
  },
  {
    "id": "i505",
    "name": "Herramienta: púa delatora",
    "category": "habilidad",
    "zoneId": "z22",
    "x": -420.25,
    "y": 179.21,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Snitch Pick"
    ]
  },
  {
    "id": "i506",
    "name": "Herramienta: ojo del druidas",
    "category": "habilidad",
    "zoneId": "z3",
    "x": -634.61,
    "y": 346.4,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Druid's Eyes"
    ]
  },
  {
    "id": "i507",
    "name": "Herramienta: hoz curva",
    "category": "habilidad",
    "zoneId": "z9",
    "x": -683,
    "y": 906.16,
    "description": "Una herramienta que Hornet puede equipar.",
    "search": [
      "Tool - Curvesickle"
    ]
  },
  {
    "id": "i508",
    "name": "Crest of the Chamán",
    "category": "habilidad",
    "zoneId": "z0",
    "x": -745.99,
    "y": 167.81,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest of the Shaman"
    ]
  },
  {
    "id": "i509",
    "name": "Crest of the Errante",
    "category": "habilidad",
    "zoneId": "z1",
    "x": -703.8,
    "y": 77.82,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest of the Wanderer"
    ]
  },
  {
    "id": "i510",
    "name": "Crest of the Bestia",
    "category": "habilidad",
    "zoneId": "z13",
    "x": -605.02,
    "y": 789.27,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest of the Beast"
    ]
  },
  {
    "id": "i511",
    "name": "Crest of the Segador",
    "category": "habilidad",
    "zoneId": "z15",
    "x": -540.63,
    "y": 600.58,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest of the Reaper"
    ]
  },
  {
    "id": "i512",
    "name": "Crest of the Bruja",
    "category": "habilidad",
    "zoneId": "z15",
    "x": -538.83,
    "y": 610.78,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest of the Witch"
    ]
  },
  {
    "id": "i513",
    "name": "Crest of Arquitecto",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -379.47,
    "y": 668.69,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest of Architect"
    ]
  },
  {
    "id": "i514",
    "name": "Mejora de escudo: Crest of the cazador",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -762.59,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest Upgrade - Crest of the Hunter"
    ]
  },
  {
    "id": "i515",
    "name": "Mejora de escudo: Crest of the cazador #2",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -760.79,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest Upgrade - Crest of the Hunter #2"
    ]
  },
  {
    "id": "i516",
    "name": "Mejora de escudo: Yellow vesticrest (requires 12 crest slots)",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -761.99,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest Upgrade - Yellow Vesticrest (requires 12 crest slots)"
    ]
  },
  {
    "id": "i517",
    "name": "Mejora de escudo: Blue vesticrest",
    "category": "habilidad",
    "zoneId": "z5",
    "x": -761.39,
    "y": 378.6,
    "description": "Un escudo de la seda con un poder especial.",
    "search": [
      "Crest Upgrade - Blue Vesticrest"
    ]
  },
  {
    "id": "i518",
    "name": "Llave sencilla #1",
    "category": "habilidad",
    "zoneId": "z2",
    "x": -693.5,
    "y": 289.4,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Simple Key #1"
    ]
  },
  {
    "id": "i519",
    "name": "Llave sencilla #2",
    "category": "habilidad",
    "zoneId": "z18",
    "x": -420.45,
    "y": 929.36,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Simple Key #2"
    ]
  },
  {
    "id": "i520",
    "name": "Llave sencilla #3",
    "category": "habilidad",
    "zoneId": "z42",
    "x": -370.84,
    "y": 351.36,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Simple Key #3"
    ]
  },
  {
    "id": "i521",
    "name": "Llave sencilla #4",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -232.91,
    "y": 799.94,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Simple Key #4"
    ]
  },
  {
    "id": "i522",
    "name": "Key of Indolente",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -253.5,
    "y": 308,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Key of Indolent"
    ]
  },
  {
    "id": "i523",
    "name": "Key of Hereje",
    "category": "habilidad",
    "zoneId": "z25",
    "x": -227.64,
    "y": 314.77,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Key of Heretic"
    ]
  },
  {
    "id": "i524",
    "name": "Key of Apóstata",
    "category": "habilidad",
    "zoneId": "z48",
    "x": -232.86,
    "y": 888.61,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Key of Apostate"
    ]
  },
  {
    "id": "i525",
    "name": "Llave del Cirujano",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -338.44,
    "y": 651.29,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Surgeon's Key"
    ]
  },
  {
    "id": "i526",
    "name": "Invocación de cras",
    "category": "habilidad",
    "zoneId": "z2",
    "x": -698.08,
    "y": 271.69,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Craw Summons"
    ]
  },
  {
    "id": "i527",
    "name": "Llave Blanca",
    "category": "habilidad",
    "zoneId": "z49",
    "x": -235.3,
    "y": 805.94,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "White Key"
    ]
  },
  {
    "id": "i528",
    "name": "Llave del Arquitecto",
    "category": "habilidad",
    "zoneId": "z32",
    "x": -392.49,
    "y": 676.26,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Architect's Key"
    ]
  },
  {
    "id": "i529",
    "name": "Llave de Campana de Buceo",
    "category": "habilidad",
    "zoneId": "z47",
    "x": -776.99,
    "y": 752.57,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Diving Bell Key"
    ]
  },
  {
    "id": "i530",
    "name": "Llave del Campanario",
    "category": "habilidad",
    "zoneId": "z20",
    "x": -585.02,
    "y": 551.78,
    "description": "Una llave que abre algo muy importante.",
    "search": [
      "Bellhome Key"
    ]
  },
  {
    "id": "i531",
    "name": "Fragmento de máscara #1",
    "category": "mejora",
    "zoneId": "z4",
    "x": -654.01,
    "y": 166.21,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #1"
    ]
  },
  {
    "id": "i532",
    "name": "Fragmento de máscara #2",
    "category": "mejora",
    "zoneId": "z2",
    "x": -691.5,
    "y": 289.4,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #2"
    ]
  },
  {
    "id": "i533",
    "name": "Fragmento de máscara #3",
    "category": "mejora",
    "zoneId": "z6",
    "x": -734.99,
    "y": 425.19,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #3"
    ]
  },
  {
    "id": "i534",
    "name": "Fragmento de máscara #4",
    "category": "mejora",
    "zoneId": "z8",
    "x": -699,
    "y": 603.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #4"
    ]
  },
  {
    "id": "i535",
    "name": "Fragmento de máscara #5",
    "category": "mejora",
    "zoneId": "z9",
    "x": -714.2,
    "y": 926.96,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #5"
    ]
  },
  {
    "id": "i536",
    "name": "Fragmento de máscara #6",
    "category": "mejora",
    "zoneId": "z9",
    "x": -749.99,
    "y": 1067.95,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #6"
    ]
  },
  {
    "id": "i537",
    "name": "Fragmento de máscara #7",
    "category": "mejora",
    "zoneId": "z46",
    "x": -677.6,
    "y": 1122.25,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #7"
    ]
  },
  {
    "id": "i538",
    "name": "Fragmento de máscara #8",
    "category": "mejora",
    "zoneId": "z17",
    "x": -470.64,
    "y": 761.57,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #8"
    ]
  },
  {
    "id": "i539",
    "name": "Fragmento de máscara #9 (oculto cazador wish reward)",
    "category": "mejora",
    "zoneId": "z20",
    "x": -581.22,
    "y": 542.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #9 (Hidden Hunter wish reward)"
    ]
  },
  {
    "id": "i540",
    "name": "Fragmento de máscara #10 (oscuro corazóns wish reward)",
    "category": "mejora",
    "zoneId": "z20",
    "x": -578.22,
    "y": 542.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #10 (Dark Hearts wish reward)"
    ]
  },
  {
    "id": "i541",
    "name": "Fragmento de máscara #11",
    "category": "mejora",
    "zoneId": "z20",
    "x": -577.62,
    "y": 542.18,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #11"
    ]
  },
  {
    "id": "i542",
    "name": "Fragmento de máscara #12",
    "category": "mejora",
    "zoneId": "z21",
    "x": -543.63,
    "y": 427.19,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #12"
    ]
  },
  {
    "id": "i543",
    "name": "Fragmento de máscara #13",
    "category": "mejora",
    "zoneId": "z22",
    "x": -492.64,
    "y": 128.01,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #13"
    ]
  },
  {
    "id": "i544",
    "name": "Fragmento de máscara #14",
    "category": "mejora",
    "zoneId": "z39",
    "x": -334.07,
    "y": 1107.75,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #14"
    ]
  },
  {
    "id": "i545",
    "name": "Fragmento de máscara #15",
    "category": "mejora",
    "zoneId": "z45",
    "x": -265.51,
    "y": 61.56,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #15"
    ]
  },
  {
    "id": "i546",
    "name": "Fragmento de máscara #16",
    "category": "mejora",
    "zoneId": "z25",
    "x": -206.21,
    "y": 360.39,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #16"
    ]
  },
  {
    "id": "i547",
    "name": "Fragmento de máscara #17",
    "category": "mejora",
    "zoneId": "z31",
    "x": -246.51,
    "y": 582.47,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #17"
    ]
  },
  {
    "id": "i548",
    "name": "Fragmento de máscara #18",
    "category": "mejora",
    "zoneId": "z49",
    "x": -235.3,
    "y": 788.88,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #18"
    ]
  },
  {
    "id": "i549",
    "name": "Fragmento de máscara #19",
    "category": "mejora",
    "zoneId": "z41",
    "x": -281.23,
    "y": 828.41,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #19"
    ]
  },
  {
    "id": "i550",
    "name": "Fragmento de máscara #20",
    "category": "mejora",
    "zoneId": "z24",
    "x": -131.71,
    "y": 242.16,
    "description": "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
    "search": [
      "Mask Shard #20"
    ]
  },
  {
    "id": "i551",
    "name": "Fragmento de carrete #1",
    "category": "mejora",
    "zoneId": "z5",
    "x": -744.19,
    "y": 295.4,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #1"
    ]
  },
  {
    "id": "i552",
    "name": "Fragmento de carrete #2",
    "category": "mejora",
    "zoneId": "z2",
    "x": -670.61,
    "y": 305.2,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #2"
    ]
  },
  {
    "id": "i553",
    "name": "Fragmento de carrete #3",
    "category": "mejora",
    "zoneId": "z8",
    "x": -744.99,
    "y": 677.38,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #3"
    ]
  },
  {
    "id": "i554",
    "name": "Fragmento de carrete #4",
    "category": "mejora",
    "zoneId": "z9",
    "x": -743.59,
    "y": 853.36,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #4"
    ]
  },
  {
    "id": "i555",
    "name": "Fragmento de carrete #5",
    "category": "mejora",
    "zoneId": "z12",
    "x": -504.24,
    "y": 917.96,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #5"
    ]
  },
  {
    "id": "i556",
    "name": "Fragmento de carrete #6",
    "category": "mejora",
    "zoneId": "z20",
    "x": -584.22,
    "y": 542.18,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #6"
    ]
  },
  {
    "id": "i557",
    "name": "Fragmento de carrete #7",
    "category": "mejora",
    "zoneId": "z22",
    "x": -418.65,
    "y": 179.21,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #7"
    ]
  },
  {
    "id": "i558",
    "name": "Fragmento de carrete #8",
    "category": "mejora",
    "zoneId": "z42",
    "x": -411.65,
    "y": 334,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #8"
    ]
  },
  {
    "id": "i559",
    "name": "Fragmento de carrete #9",
    "category": "mejora",
    "zoneId": "z25",
    "x": -256.77,
    "y": 294.8,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #9"
    ]
  },
  {
    "id": "i560",
    "name": "Fragmento de carrete #10",
    "category": "mejora",
    "zoneId": "z36",
    "x": -119.48,
    "y": 544.63,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #10"
    ]
  },
  {
    "id": "i561",
    "name": "Fragmento de carrete #11",
    "category": "mejora",
    "zoneId": "z33",
    "x": -293.64,
    "y": 687.59,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #11"
    ]
  },
  {
    "id": "i562",
    "name": "Fragmento de carrete #12",
    "category": "mejora",
    "zoneId": "z42",
    "x": -367.16,
    "y": 405.88,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #12"
    ]
  },
  {
    "id": "i563",
    "name": "Fragmento de carrete #13",
    "category": "mejora",
    "zoneId": "z16",
    "x": -437.34,
    "y": 719.69,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #13"
    ]
  },
  {
    "id": "i564",
    "name": "Fragmento de carrete #14",
    "category": "mejora",
    "zoneId": "z29",
    "x": -430.98,
    "y": 601.1,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #14"
    ]
  },
  {
    "id": "i565",
    "name": "Fragmento de carrete #15",
    "category": "mejora",
    "zoneId": "z32",
    "x": -358.33,
    "y": 597.45,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #15"
    ]
  },
  {
    "id": "i566",
    "name": "Fragmento de carrete #16",
    "category": "mejora",
    "zoneId": "z32",
    "x": -345.9,
    "y": 654.26,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #16"
    ]
  },
  {
    "id": "i567",
    "name": "Fragmento de carrete #17",
    "category": "mejora",
    "zoneId": "z34",
    "x": -199.7,
    "y": 682.19,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #17"
    ]
  },
  {
    "id": "i568",
    "name": "Fragmento de carrete #18",
    "category": "mejora",
    "zoneId": "z49",
    "x": -230.98,
    "y": 798.32,
    "description": "Un fragmento de carrete para mejorar tu aguja.",
    "search": [
      "Spool Fragment #18"
    ]
  },
  {
    "id": "i569",
    "name": "Medallón de recuerdo #1",
    "category": "mejora",
    "zoneId": "z1",
    "x": -669.41,
    "y": 118.01,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #1"
    ]
  },
  {
    "id": "i570",
    "name": "Medallón de recuerdo #2",
    "category": "mejora",
    "zoneId": "z2",
    "x": -694.6,
    "y": 293.4,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #2"
    ]
  },
  {
    "id": "i571",
    "name": "Medallón de recuerdo #3",
    "category": "mejora",
    "zoneId": "z6",
    "x": -625.01,
    "y": 433.59,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #3"
    ]
  },
  {
    "id": "i572",
    "name": "Medallón de recuerdo #4",
    "category": "mejora",
    "zoneId": "z47",
    "x": -802.38,
    "y": 665.18,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #4"
    ]
  },
  {
    "id": "i573",
    "name": "Medallón de recuerdo #5",
    "category": "mejora",
    "zoneId": "z10",
    "x": -650.21,
    "y": 829.57,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #5"
    ]
  },
  {
    "id": "i574",
    "name": "Medallón de recuerdo #6",
    "category": "mejora",
    "zoneId": "z9",
    "x": -667.61,
    "y": 907.96,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #6"
    ]
  },
  {
    "id": "i575",
    "name": "Medallón de recuerdo #7",
    "category": "mejora",
    "zoneId": "z46",
    "x": -618.42,
    "y": 1078.55,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #7"
    ]
  },
  {
    "id": "i576",
    "name": "Medallón de recuerdo #8",
    "category": "mejora",
    "zoneId": "z13",
    "x": -553.83,
    "y": 751.77,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #8"
    ]
  },
  {
    "id": "i577",
    "name": "Medallón de recuerdo #9",
    "category": "mejora",
    "zoneId": "z13",
    "x": -576.22,
    "y": 712.97,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #9"
    ]
  },
  {
    "id": "i578",
    "name": "Medallón de recuerdo #10",
    "category": "mejora",
    "zoneId": "z20",
    "x": -584.42,
    "y": 544.18,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #10"
    ]
  },
  {
    "id": "i579",
    "name": "Medallón de recuerdo #11",
    "category": "mejora",
    "zoneId": "z20",
    "x": -564.42,
    "y": 545.78,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #11"
    ]
  },
  {
    "id": "i580",
    "name": "Medallón de recuerdo #12",
    "category": "mejora",
    "zoneId": "z22",
    "x": -504.64,
    "y": 218.61,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #12"
    ]
  },
  {
    "id": "i581",
    "name": "Medallón de recuerdo #13",
    "category": "mejora",
    "zoneId": "z17",
    "x": -384.86,
    "y": 839.36,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #13"
    ]
  },
  {
    "id": "i582",
    "name": "Medallón de recuerdo #14",
    "category": "mejora",
    "zoneId": "z19",
    "x": -320.87,
    "y": 1049.35,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #14"
    ]
  },
  {
    "id": "i583",
    "name": "Medallón de recuerdo #15",
    "category": "mejora",
    "zoneId": "z43",
    "x": -405.01,
    "y": 105.41,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #15"
    ]
  },
  {
    "id": "i584",
    "name": "Medallón de recuerdo #16",
    "category": "mejora",
    "zoneId": "z28",
    "x": -292.73,
    "y": 410.38,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #16"
    ]
  },
  {
    "id": "i585",
    "name": "Medallón de recuerdo #17",
    "category": "mejora",
    "zoneId": "z30",
    "x": -399.01,
    "y": 543.52,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #17"
    ]
  },
  {
    "id": "i586",
    "name": "Medallón de recuerdo #18",
    "category": "mejora",
    "zoneId": "z33",
    "x": -317.3,
    "y": 748.72,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #18"
    ]
  },
  {
    "id": "i587",
    "name": "Medallón de recuerdo #19",
    "category": "mejora",
    "zoneId": "z49",
    "x": -265.25,
    "y": 863,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #19"
    ]
  },
  {
    "id": "i588",
    "name": "Medallón de recuerdo #20",
    "category": "mejora",
    "zoneId": "z37",
    "x": -186.07,
    "y": 713.16,
    "description": "Un medallón de recuerdo. Hay que encontrarlos todos.",
    "search": [
      "Memory Locket #20"
    ]
  },
  {
    "id": "i589",
    "name": "Corazón de seda #1",
    "category": "mejora",
    "zoneId": "z3",
    "x": -651.01,
    "y": 350.2,
    "description": "Un corazón de seda. ¡Aumenta tu vida!",
    "search": [
      "Silk Heart #1"
    ]
  },
  {
    "id": "i590",
    "name": "Corazón de seda #2",
    "category": "mejora",
    "zoneId": "z30",
    "x": -372.62,
    "y": 547.9,
    "description": "Un corazón de seda. ¡Aumenta tu vida!",
    "search": [
      "Silk Heart #2"
    ]
  },
  {
    "id": "i591",
    "name": "Corazón de seda #3",
    "category": "mejora",
    "zoneId": "z34",
    "x": -117.22,
    "y": 647.38,
    "description": "Un corazón de seda. ¡Aumenta tu vida!",
    "search": [
      "Silk Heart #3"
    ]
  },
  {
    "id": "i592",
    "name": "Mejora de kit de creación #1",
    "category": "mejora",
    "zoneId": "z8",
    "x": -721.8,
    "y": 706.17,
    "description": "Un kit de creación para hacer herramientas.",
    "search": [
      "Crafting Kit Upgrade #1"
    ]
  },
  {
    "id": "i593",
    "name": "Mejora de kit de creación #2",
    "category": "mejora",
    "zoneId": "z13",
    "x": -557.41,
    "y": 759.26,
    "description": "Un kit de creación para hacer herramientas.",
    "search": [
      "Crafting Kit Upgrade #2"
    ]
  },
  {
    "id": "i594",
    "name": "Mejora de kit de creación #3",
    "category": "mejora",
    "zoneId": "z22",
    "x": -419.85,
    "y": 179.21,
    "description": "Un kit de creación para hacer herramientas.",
    "search": [
      "Crafting Kit Upgrade #3"
    ]
  },
  {
    "id": "i595",
    "name": "Mejora de kit de creación #4",
    "category": "mejora",
    "zoneId": "z32",
    "x": -395.75,
    "y": 676.28,
    "description": "Un kit de creación para hacer herramientas.",
    "search": [
      "Crafting Kit Upgrade #4"
    ]
  },
  {
    "id": "i596",
    "name": "Mejora de bolsa de herramientas #1",
    "category": "mejora",
    "zoneId": "z8",
    "x": -677.2,
    "y": 544.58,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": [
      "Tool Pouch Upgrade #1"
    ]
  },
  {
    "id": "i597",
    "name": "Mejora de bolsa de herramientas #2",
    "category": "mejora",
    "zoneId": "z9",
    "x": -668.21,
    "y": 907.96,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": [
      "Tool Pouch Upgrade #2"
    ]
  },
  {
    "id": "i598",
    "name": "Mejora de bolsa de herramientas #3",
    "category": "mejora",
    "zoneId": "z13",
    "x": -550.03,
    "y": 756.97,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": [
      "Tool Pouch Upgrade #3"
    ]
  },
  {
    "id": "i599",
    "name": "Mejora de bolsa de herramientas #4 (requires 20 pulgas perdidas)",
    "category": "mejora",
    "zoneId": "z39",
    "x": -237.51,
    "y": 1157.85,
    "description": "Una bolsa de herramientas. ¡Más espacio para equipar!",
    "search": [
      "Tool Pouch Upgrade #4 (requires 20 Lost Fleas)"
    ]
  },
  {
    "id": "i600",
    "name": "Mejora: pálido Oil",
    "category": "mejora",
    "zoneId": "z33",
    "x": -267.92,
    "y": 727.31,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Upgrade - Pale Oil"
    ]
  },
  {
    "id": "i601",
    "name": "Mejora: pálido Oil",
    "category": "mejora",
    "zoneId": "z31",
    "x": -268.55,
    "y": 611.89,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Upgrade - Pale Oil"
    ]
  },
  {
    "id": "i602",
    "name": "Mejora: pálido Oil (requires completing Ectasy of the End wish)",
    "category": "mejora",
    "zoneId": "z39",
    "x": -238.57,
    "y": 1162.32,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Upgrade - Pale Oil (requires completing Ectasy of the End wish)"
    ]
  },
  {
    "id": "i603",
    "name": "Mejora de aguja #1",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Nail Upgrade #1"
    ]
  },
  {
    "id": "i604",
    "name": "Mejora de aguja #2",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Nail Upgrade #2"
    ]
  },
  {
    "id": "i605",
    "name": "Mejora de aguja #3",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Nail Upgrade #3"
    ]
  },
  {
    "id": "i606",
    "name": "Mejora de aguja #4",
    "category": "mejora",
    "zoneId": "z20",
    "x": -573.62,
    "y": 561.98,
    "description": "Aceite pálido para mejorar tu aguja.",
    "search": [
      "Nail Upgrade #4"
    ]
  },
  {
    "id": "i607",
    "name": "Metal de creación #1",
    "category": "mejora",
    "zoneId": "z2",
    "x": -697.5,
    "y": 289.4,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #1"
    ]
  },
  {
    "id": "i608",
    "name": "Metal de creación #2",
    "category": "mejora",
    "zoneId": "z6",
    "x": -661.01,
    "y": 498.39,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #2"
    ]
  },
  {
    "id": "i609",
    "name": "Metal de creación #3",
    "category": "mejora",
    "zoneId": "z9",
    "x": -732.79,
    "y": 804.37,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #3"
    ]
  },
  {
    "id": "i610",
    "name": "Metal de creación #4",
    "category": "mejora",
    "zoneId": "z29",
    "x": -453.65,
    "y": 621.58,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #4"
    ]
  },
  {
    "id": "i611",
    "name": "Metal de creación #5",
    "category": "mejora",
    "zoneId": "z42",
    "x": -443.45,
    "y": 290.4,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #5"
    ]
  },
  {
    "id": "i612",
    "name": "Metal de creación #6",
    "category": "mejora",
    "zoneId": "z40",
    "x": -237.14,
    "y": 1226.35,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #6"
    ]
  },
  {
    "id": "i613",
    "name": "Metal de creación #7",
    "category": "mejora",
    "zoneId": "z49",
    "x": -232.8,
    "y": 795.3,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #7"
    ]
  },
  {
    "id": "i614",
    "name": "Metal de creación #8",
    "category": "mejora",
    "zoneId": "z29",
    "x": -431.46,
    "y": 647.7,
    "description": "Metal de creación para fabricar herramientas.",
    "search": [
      "Craftmetal #8"
    ]
  },
  {
    "id": "i615",
    "name": "Mejora: plasmio glándula",
    "category": "mejora",
    "zoneId": "z4",
    "x": -605.32,
    "y": 133.16,
    "description": "Una mejora misteriosa.",
    "search": [
      "Upgrade - Plasmium Gland"
    ]
  },
  {
    "id": "i616",
    "name": "Mejora: Flor Eterna",
    "category": "mejora",
    "zoneId": "z1",
    "x": -720.8,
    "y": 126.78,
    "description": "Una mejora misteriosa.",
    "search": [
      "Upgrade - Everbloom"
    ]
  },
  {
    "id": "i617",
    "name": "Mejora de Campanario: Materium",
    "category": "mejora",
    "zoneId": "z35",
    "x": -162.03,
    "y": 752.89,
    "description": "Una mejora misteriosa.",
    "search": [
      "Bellhome Upgrade - Materium"
    ]
  },
  {
    "id": "i618",
    "name": "Mejora de Campanario: Farsight",
    "category": "mejora",
    "zoneId": "z47",
    "x": -878.72,
    "y": 755.75,
    "description": "Una mejora misteriosa.",
    "search": [
      "Bellhome Upgrade - Farsight"
    ]
  },
  {
    "id": "i619",
    "name": "Mejora de Campanario: Crawbell",
    "category": "mejora",
    "zoneId": "z11",
    "x": -593.95,
    "y": 1029.81,
    "description": "Una mejora misteriosa.",
    "search": [
      "Bellhome Upgrade - Crawbell"
    ]
  },
  {
    "id": "i620",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -189.1,
    "y": 314.01,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i621",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -238.59,
    "y": 359.33,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i622",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -416.21,
    "y": 605.53,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i623",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -203.87,
    "y": 984.82,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i624",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -273.98,
    "y": 374.53,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i625",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -204.98,
    "y": 572.9,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i626",
    "name": "Collar de rosarios pálido",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -163.68,
    "y": 515.27,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Pale Rosary Necklace"
    ]
  },
  {
    "id": "i627",
    "name": "Collar de rosarios pesado",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -234.46,
    "y": 794.16,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Heavy Rosary Necklace"
    ]
  },
  {
    "id": "i628",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -743.39,
    "y": 251.3,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i629",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -634.31,
    "y": 279,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i630",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -599.52,
    "y": 158.91,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i631",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -671.11,
    "y": 459.49,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i632",
    "name": "Collar de rosarios pesado",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -676.6,
    "y": 544.58,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Heavy Rosary Necklace"
    ]
  },
  {
    "id": "i633",
    "name": "Collar de rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -582.87,
    "y": 546.06,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary Necklace"
    ]
  },
  {
    "id": "i634",
    "name": "Collar de rosarios",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -639.11,
    "y": 637.68,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary Necklace"
    ]
  },
  {
    "id": "i635",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -379.02,
    "y": 515.21,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i636",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -662.51,
    "y": 721.57,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i637",
    "name": "Sarta de rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -740.2,
    "y": 992.13,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary String"
    ]
  },
  {
    "id": "i638",
    "name": "Collar de rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -667.01,
    "y": 907.96,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary Necklace"
    ]
  },
  {
    "id": "i639",
    "name": "Collar de rosarios pálido",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -606.22,
    "y": 992.35,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Pale Rosary Necklace"
    ]
  },
  {
    "id": "i640",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -551.33,
    "y": 965.06,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i641",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -547.53,
    "y": 979.56,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i642",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -508.44,
    "y": 804.47,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i643",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z15",
    "x": -522.93,
    "y": 611.68,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i644",
    "name": "Collar de rosarios",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -480.34,
    "y": 606.98,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary Necklace"
    ]
  },
  {
    "id": "i645",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -578.12,
    "y": 468.79,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i646",
    "name": "Sarta de rosarios",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -592.82,
    "y": 411.99,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary String"
    ]
  },
  {
    "id": "i647",
    "name": "Sarta de rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -534.43,
    "y": 458.99,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary String"
    ]
  },
  {
    "id": "i648",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -520.63,
    "y": 251.8,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i649",
    "name": "Sarta de rosarios",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -260.58,
    "y": 581.66,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary String"
    ]
  },
  {
    "id": "i650",
    "name": "Collar de rosarios",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -675.27,
    "y": 1119.94,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary Necklace"
    ]
  },
  {
    "id": "i651",
    "name": "Collar de rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -304.09,
    "y": 537.55,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Rosary Necklace"
    ]
  },
  {
    "id": "i652",
    "name": "Collar de rosarios pesado",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -285.82,
    "y": 485.5,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Heavy Rosary Necklace"
    ]
  },
  {
    "id": "i653",
    "name": "Sarta de rosarios gastada",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -351.76,
    "y": 951.56,
    "description": "Una sarta de rosarios para gastar en las tiendas.",
    "search": [
      "Frayed Rosary String"
    ]
  },
  {
    "id": "i654",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -670.49,
    "y": 914.04,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i655",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -580.45,
    "y": 1025.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i656",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -301.83,
    "y": 537.47,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i657",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -175.4,
    "y": 515.14,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i658",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -173.05,
    "y": 501.96,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i659",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -236.95,
    "y": 358.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i660",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -450.51,
    "y": 532.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i661",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -362.68,
    "y": 688.74,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i662",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -224.48,
    "y": 1013.41,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i663",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -224.34,
    "y": 1016.96,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i664",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -270.38,
    "y": 883.17,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i665",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -297.23,
    "y": 814.75,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i666",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -321.34,
    "y": 448.93,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i667",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z23",
    "x": -263.32,
    "y": 79.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i668",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z23",
    "x": -276.02,
    "y": 97.21,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i669",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -275.35,
    "y": 294.71,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i670",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z36",
    "x": -130.21,
    "y": 594.94,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i671",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -167.92,
    "y": 521.54,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i672",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -171.96,
    "y": 520.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i673",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -722.01,
    "y": 115.1,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i674",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -165.63,
    "y": 522.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i675",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -163.68,
    "y": 522.98,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i676",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -162.28,
    "y": 522.58,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i677",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z26",
    "x": -162.1,
    "y": 518.55,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i678",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -304.91,
    "y": 359.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i679",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -303.3,
    "y": 361.84,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i680",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -213.55,
    "y": 501.03,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i681",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -240.63,
    "y": 570.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i682",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -249.9,
    "y": 510.63,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i683",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -264.99,
    "y": 864.25,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i684",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -280.14,
    "y": 559.45,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i685",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -283.69,
    "y": 856.47,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i686",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -303.69,
    "y": 452.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i687",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -314.96,
    "y": 488.29,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i688",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -331.57,
    "y": 472.2,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i689",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -702.8,
    "y": 120.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i690",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -673.2,
    "y": 240.2,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i691",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -546.99,
    "y": 976.53,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i692",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -686.67,
    "y": 65.78,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i693",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -661.41,
    "y": 235.61,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i694",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -526.19,
    "y": 201.75,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i695",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -350.59,
    "y": 436.53,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i696",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -661.81,
    "y": 267.7,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i697",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -667.81,
    "y": 269.1,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i698",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -720.7,
    "y": 243.7,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i699",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -627.11,
    "y": 325.9,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i700",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -401.47,
    "y": 516.25,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i701",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -381.01,
    "y": 492.64,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i702",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -643.91,
    "y": 276.3,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i703",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -668.71,
    "y": 318.6,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i704",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -669.21,
    "y": 315.9,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i705",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -663.51,
    "y": 395.69,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i706",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -683.5,
    "y": 391.39,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i707",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -683.5,
    "y": 389.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i708",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -702,
    "y": 365.6,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i709",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -702.2,
    "y": 378,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i710",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -670.31,
    "y": 423.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i711",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -690.8,
    "y": 476.59,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i712",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -682.4,
    "y": 508.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i713",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -693.6,
    "y": 519.89,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i714",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -657.11,
    "y": 480.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i715",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -625.71,
    "y": 501.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i716",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -632.71,
    "y": 464.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i717",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -627.31,
    "y": 466.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i718",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -668.81,
    "y": 530.79,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i719",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -668.81,
    "y": 531.99,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i720",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -659.21,
    "y": 541.68,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i721",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -635.11,
    "y": 557.78,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i722",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -615.02,
    "y": 542.48,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i723",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -637.51,
    "y": 606.68,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i724",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -609.22,
    "y": 734.77,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i725",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -689,
    "y": 719.77,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i726",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -762.29,
    "y": 629.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i727",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -762.29,
    "y": 635.68,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i728",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -742.49,
    "y": 755.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i729",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -696.1,
    "y": 775.27,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i730",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -693.9,
    "y": 811.47,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i731",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -688.3,
    "y": 830.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i732",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -665.51,
    "y": 829.67,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i733",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -660.71,
    "y": 842.86,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i734",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -670.71,
    "y": 877.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i735",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -730.09,
    "y": 912.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i736",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -686.1,
    "y": 976.86,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i737",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -726.8,
    "y": 1023.45,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i738",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -720.2,
    "y": 1089.35,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i739",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -605.82,
    "y": 991.55,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i740",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -643.91,
    "y": 999.25,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i741",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -513.97,
    "y": 911.81,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i742",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -508.28,
    "y": 909,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i743",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -544.03,
    "y": 857.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i744",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -521.53,
    "y": 926.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i745",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -531.63,
    "y": 963.96,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i746",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -563.8,
    "y": 1032.22,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i747",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -563.49,
    "y": 1041,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i748",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -573.74,
    "y": 1023.97,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i749",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -568.14,
    "y": 1045.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i750",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -562.77,
    "y": 1036.5,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i751",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -568.3,
    "y": 1032.16,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i752",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -568.39,
    "y": 1035.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i753",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -563.78,
    "y": 1025.06,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i754",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -544.03,
    "y": 1021.45,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i755",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -534.63,
    "y": 1024.35,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i756",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -508.51,
    "y": 998.41,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i757",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -520.48,
    "y": 1013.66,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i758",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -492.56,
    "y": 1022.02,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i759",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -493.87,
    "y": 1015.64,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i760",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -458.34,
    "y": 926.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i761",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -448.75,
    "y": 947.56,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i762",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -442.65,
    "y": 974.16,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i763",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -392.76,
    "y": 901.46,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i764",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -316.27,
    "y": 929.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i765",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -264.98,
    "y": 1105.95,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i766",
    "name": "Cofre de rosarios",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -450.55,
    "y": 842.26,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosary Chest"
    ]
  },
  {
    "id": "i767",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -481.54,
    "y": 845.46,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i768",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -475.14,
    "y": 830.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i769",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -541.42,
    "y": 964.34,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i770",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -506.54,
    "y": 837.86,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i771",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -500.14,
    "y": 879.36,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i772",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -514.53,
    "y": 771.07,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i773",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -540.23,
    "y": 732.07,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i774",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -506.84,
    "y": 700.97,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i775",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -505.14,
    "y": 685.37,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i776",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -544.2,
    "y": 721.72,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i777",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -542.23,
    "y": 712.77,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i778",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -557.43,
    "y": 678.18,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i779",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -548.33,
    "y": 661.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i780",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -545.63,
    "y": 654.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i781",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -576.32,
    "y": 653.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i782",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -569.42,
    "y": 638.78,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i783",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -587.02,
    "y": 725.07,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i784",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -580.62,
    "y": 512.29,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i785",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -539.93,
    "y": 548.88,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i786",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -529.54,
    "y": 555.22,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i787",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -498.14,
    "y": 454.39,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i788",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -515.53,
    "y": 359,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i789",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -567.82,
    "y": 318.7,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i790",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -488.74,
    "y": 296.2,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i791",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -668.81,
    "y": 457.69,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i792",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -664.51,
    "y": 319.4,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i793",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -675.48,
    "y": 161.41,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i794",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -685.16,
    "y": 93.38,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i795",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z1",
    "x": -679.07,
    "y": 77.67,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i796",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -426.64,
    "y": 450.19,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i797",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -297.71,
    "y": 339.28,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i798",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -591.61,
    "y": 1029.56,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i799",
    "name": "Rosarios",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -645.11,
    "y": 308.4,
    "description": "Un depósito de rosarios (la moneda de Pharloom).",
    "search": [
      "Rosaries"
    ]
  },
  {
    "id": "i800",
    "name": "Núcleo prístino",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -394.85,
    "y": 674.82,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Pristine Core"
    ]
  },
  {
    "id": "i801",
    "name": "Núcleo prístino",
    "category": "coleccionable",
    "zoneId": "z33",
    "x": -272.89,
    "y": 667.79,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Pristine Core"
    ]
  },
  {
    "id": "i802",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -241.95,
    "y": 609,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i803",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z35",
    "x": -197.17,
    "y": 753.6,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i804",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -675.27,
    "y": 1123.94,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i805",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -562.95,
    "y": 699.19,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i806",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -208.42,
    "y": 879.41,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i807",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -276.01,
    "y": 305.52,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i808",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -412.85,
    "y": 658.2,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i809",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -641.91,
    "y": 196.81,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i810",
    "name": "Estatua de Hornet",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -697.3,
    "y": 294.6,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Hornet Statuette"
    ]
  },
  {
    "id": "i811",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z5",
    "x": -744.79,
    "y": 273.8,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i812",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -723.5,
    "y": 662.98,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i813",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -721.2,
    "y": 706.17,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i814",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -763.99,
    "y": 729.57,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i815",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -809.68,
    "y": 724.07,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i816",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -663.71,
    "y": 948.16,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i817",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -534.53,
    "y": 807.17,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i818",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -453.25,
    "y": 931.86,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i819",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -542.03,
    "y": 699.07,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i820",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -505.14,
    "y": 497.79,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i821",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -434.3,
    "y": 500.03,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i822",
    "name": "Lote de fragmentos",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -377.35,
    "y": 836.88,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Shard Bundle"
    ]
  },
  {
    "id": "i823",
    "name": "Fragmento de bestia",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -415.25,
    "y": 210.21,
    "description": "Un puñado de fragmentos de concha.",
    "search": [
      "Beast Shard"
    ]
  },
  {
    "id": "i824",
    "name": "Fragmentos de concha (sin usar trucos)",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -498.02,
    "y": 368.38,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards (Outreachable without glitches)"
    ]
  },
  {
    "id": "i825",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -892.88,
    "y": 645.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i826",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -894.51,
    "y": 679.7,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i827",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -857.7,
    "y": 758.68,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i828",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -469.38,
    "y": 382.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i829",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -385.29,
    "y": 316.41,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i830",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -381.38,
    "y": 256.16,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i831",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -377.88,
    "y": 179.81,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i832",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -353.27,
    "y": 190.21,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i833",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z43",
    "x": -340.73,
    "y": 138.11,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i834",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z24",
    "x": -202.29,
    "y": 235.19,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i835",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -325.43,
    "y": 363.44,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i836",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -218.45,
    "y": 385.55,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i837",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -456.43,
    "y": 570.19,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i838",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -463.94,
    "y": 594.86,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i839",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -428.33,
    "y": 536.6,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i840",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -404.69,
    "y": 667.79,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i841",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -384.32,
    "y": 726.71,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i842",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -382.01,
    "y": 802.72,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i843",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -345.89,
    "y": 804.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i844",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -361.73,
    "y": 862.88,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i845",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -364.79,
    "y": 972.24,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i846",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -287.23,
    "y": 1123.66,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i847",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z40",
    "x": -228.08,
    "y": 1199.91,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i848",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -275.51,
    "y": 889.92,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i849",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -242.21,
    "y": 892.28,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i850",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -226.84,
    "y": 916.71,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i851",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -202.17,
    "y": 968.16,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i852",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z37",
    "x": -171.38,
    "y": 713.39,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i853",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z35",
    "x": -169.24,
    "y": 741.14,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i854",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z34",
    "x": -68.09,
    "y": 661.14,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i855",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -393.99,
    "y": 559.42,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i856",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -284.62,
    "y": 322.2,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i857",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -289.38,
    "y": 298.05,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i858",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -193.8,
    "y": 531.52,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i859",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z36",
    "x": -178.07,
    "y": 582.63,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i860",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -415.05,
    "y": 212.5,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i861",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -339.58,
    "y": 457.09,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i862",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z33",
    "x": -302.37,
    "y": 731.22,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i863",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -404.96,
    "y": 720.2,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i864",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z0",
    "x": -737.59,
    "y": 179.71,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i865",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -747.59,
    "y": 265.4,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i866",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -733.79,
    "y": 276.5,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i867",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z5",
    "x": -730.39,
    "y": 299.6,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i868",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -677.6,
    "y": 337.6,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i869",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -662.91,
    "y": 333.4,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i870",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -646.61,
    "y": 470.59,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i871",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -646.81,
    "y": 502.99,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i872",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -383.87,
    "y": 503.89,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i873",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -608.02,
    "y": 367.5,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i874",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -660.11,
    "y": 560.88,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i875",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -641.51,
    "y": 740.07,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i876",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -617.52,
    "y": 753.27,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i877",
    "name": "Fragmentos de concha (estatua de Hornet)",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -697.56,
    "y": 264.57,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards (Hornet Statue)"
    ]
  },
  {
    "id": "i878",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -693.8,
    "y": 638.98,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i879",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -764.99,
    "y": 621.98,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i880",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -730.29,
    "y": 662.58,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i881",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -753.49,
    "y": 691.07,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i882",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -733.49,
    "y": 761.77,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i883",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -752.49,
    "y": 776.47,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i884",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -707.2,
    "y": 858.36,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i885",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -732.79,
    "y": 887.76,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i886",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -724.4,
    "y": 1040.65,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i887",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -784.28,
    "y": 1064.25,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i888",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -643.91,
    "y": 997.75,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i889",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -629.51,
    "y": 970.16,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i890",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -612.82,
    "y": 935.56,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i891",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z10",
    "x": -624.81,
    "y": 900.96,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i892",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -509.14,
    "y": 947.06,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i893",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -422.98,
    "y": 486.67,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i894",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -497.14,
    "y": 892.66,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i895",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -474.54,
    "y": 883.56,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i896",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -454.55,
    "y": 789.57,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i897",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -591.82,
    "y": 696.97,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i898",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -577.52,
    "y": 492.79,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i899",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -570.52,
    "y": 469.99,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i900",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -568.62,
    "y": 451.69,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i901",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -481.34,
    "y": 435.89,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i902",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -194.1,
    "y": 274.44,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i903",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -303.43,
    "y": 1072.89,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i904",
    "name": "Fragmentos de concha",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -517.63,
    "y": 160.01,
    "description": "Un depósito de fragmentos de concha.",
    "search": [
      "Shell Shards"
    ]
  },
  {
    "id": "i905",
    "name": "Pulga perdida #1",
    "category": "coleccionable",
    "zoneId": "z4",
    "x": -635.01,
    "y": 194.01,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #1"
    ]
  },
  {
    "id": "i906",
    "name": "Pulga perdida #2",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -624.21,
    "y": 415.99,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #2"
    ]
  },
  {
    "id": "i907",
    "name": "Pulga perdida #3",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -567.42,
    "y": 370.8,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #3"
    ]
  },
  {
    "id": "i908",
    "name": "Pulga perdida #4",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -638.01,
    "y": 601.18,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #4"
    ]
  },
  {
    "id": "i909",
    "name": "Pulga perdida #5",
    "category": "coleccionable",
    "zoneId": "z8",
    "x": -714.6,
    "y": 603.98,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #5"
    ]
  },
  {
    "id": "i910",
    "name": "Pulga perdida #6",
    "category": "coleccionable",
    "zoneId": "z7",
    "x": -666.81,
    "y": 655.78,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #6"
    ]
  },
  {
    "id": "i911",
    "name": "Pulga perdida #7",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -738.39,
    "y": 841.56,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #7"
    ]
  },
  {
    "id": "i912",
    "name": "Pulga perdida #8",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -688.8,
    "y": 859.76,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #8"
    ]
  },
  {
    "id": "i913",
    "name": "Pulga perdida #9",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -659.01,
    "y": 962.56,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #9"
    ]
  },
  {
    "id": "i914",
    "name": "Pulga perdida #10",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -539.83,
    "y": 1014.15,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #10"
    ]
  },
  {
    "id": "i915",
    "name": "Pulga perdida #11 (Kratt)",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -522.23,
    "y": 812.77,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #11 (Kratt)"
    ]
  },
  {
    "id": "i916",
    "name": "Pulga perdida #12",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -524.03,
    "y": 669.38,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #12"
    ]
  },
  {
    "id": "i917",
    "name": "Pulga perdida #13",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -469.04,
    "y": 943.96,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #13"
    ]
  },
  {
    "id": "i918",
    "name": "Pulga perdida #14",
    "category": "coleccionable",
    "zoneId": "z18",
    "x": -421.65,
    "y": 1005.55,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #14"
    ]
  },
  {
    "id": "i919",
    "name": "Pulga perdida #15",
    "category": "coleccionable",
    "zoneId": "z16",
    "x": -406.45,
    "y": 790.77,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #15"
    ]
  },
  {
    "id": "i920",
    "name": "Pulga perdida #16",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -513.63,
    "y": 527.39,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #16"
    ]
  },
  {
    "id": "i921",
    "name": "Pulga perdida #17",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -396.06,
    "y": 195.81,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #17"
    ]
  },
  {
    "id": "i922",
    "name": "Pulga perdida #18",
    "category": "coleccionable",
    "zoneId": "z19",
    "x": -289.88,
    "y": 1039.95,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #18"
    ]
  },
  {
    "id": "i923",
    "name": "Pulga perdida #19",
    "category": "coleccionable",
    "zoneId": "z24",
    "x": -214.79,
    "y": 169.19,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #19"
    ]
  },
  {
    "id": "i924",
    "name": "Pulga perdida #20",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -297.45,
    "y": 336.78,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #20"
    ]
  },
  {
    "id": "i925",
    "name": "Pulga perdida #21 (Vog)",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -187.57,
    "y": 1015.75,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #21 (Vog)"
    ]
  },
  {
    "id": "i926",
    "name": "Pulga perdida #22",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -234.65,
    "y": 561.53,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #22"
    ]
  },
  {
    "id": "i927",
    "name": "Pulga perdida #23",
    "category": "coleccionable",
    "zoneId": "z28",
    "x": -263.1,
    "y": 532.31,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #23"
    ]
  },
  {
    "id": "i928",
    "name": "Pulga perdida #24",
    "category": "coleccionable",
    "zoneId": "z37",
    "x": -145.65,
    "y": 725.25,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #24"
    ]
  },
  {
    "id": "i929",
    "name": "Pulga perdida #25",
    "category": "coleccionable",
    "zoneId": "z48",
    "x": -218.74,
    "y": 870.97,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #25"
    ]
  },
  {
    "id": "i930",
    "name": "Pulga perdida #26",
    "category": "coleccionable",
    "zoneId": "z44",
    "x": -372.14,
    "y": 220.75,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #26"
    ]
  },
  {
    "id": "i931",
    "name": "Pulga perdida #27",
    "category": "coleccionable",
    "zoneId": "z25",
    "x": -260.26,
    "y": 311.72,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #27"
    ]
  },
  {
    "id": "i932",
    "name": "Pulga perdida #28",
    "category": "coleccionable",
    "zoneId": "z29",
    "x": -439.87,
    "y": 592.92,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #28"
    ]
  },
  {
    "id": "i933",
    "name": "Pulga perdida #29",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -256.24,
    "y": 789.77,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #29"
    ]
  },
  {
    "id": "i934",
    "name": "Pulga perdida #30",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -442.68,
    "y": 524.5,
    "description": "¡Una pulga perdida! Búscalas todas para un premio.",
    "search": [
      "Lost Flea #30"
    ]
  },
  {
    "id": "i935",
    "name": "Objeto: mandamiento coral #1",
    "category": "coleccionable",
    "zoneId": "z3",
    "x": -639.41,
    "y": 257,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Choral Commandment #1"
    ]
  },
  {
    "id": "i936",
    "name": "Objeto: mandamiento coral #2",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -340.75,
    "y": 547.38,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Choral Commandment #2"
    ]
  },
  {
    "id": "i937",
    "name": "Objeto: mandamiento coral #3",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -330.57,
    "y": 667.59,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Choral Commandment #3"
    ]
  },
  {
    "id": "i938",
    "name": "Objeto: mandamiento coral #4",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -235.33,
    "y": 799.97,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Choral Commandment #4"
    ]
  },
  {
    "id": "i939",
    "name": "Objeto: efigie de tejedora #1",
    "category": "coleccionable",
    "zoneId": "z20",
    "x": -591.82,
    "y": 490.59,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Weaver Effigy #1"
    ]
  },
  {
    "id": "i940",
    "name": "Objeto: efigie de tejedora #2",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -675.8,
    "y": 235.01,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Weaver Effigy #2"
    ]
  },
  {
    "id": "i941",
    "name": "Objeto: efigie de tejedora #2",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -321.8,
    "y": 392.63,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Weaver Effigy #2"
    ]
  },
  {
    "id": "i942",
    "name": "Objeto: pergamino de hueso #1",
    "category": "coleccionable",
    "zoneId": "z9",
    "x": -727.2,
    "y": 1005.15,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Bone Scroll #1"
    ]
  },
  {
    "id": "i943",
    "name": "Objeto: pergamino de hueso #2",
    "category": "coleccionable",
    "zoneId": "z12",
    "x": -557.23,
    "y": 836.16,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Bone Scroll #2"
    ]
  },
  {
    "id": "i944",
    "name": "Objeto: pergamino de hueso #3",
    "category": "coleccionable",
    "zoneId": "z15",
    "x": -446.45,
    "y": 689.57,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Bone Scroll #3"
    ]
  },
  {
    "id": "i945",
    "name": "Objeto: pergamino de hueso #4",
    "category": "coleccionable",
    "zoneId": "z42",
    "x": -431.82,
    "y": 463.79,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Bone Scroll #4"
    ]
  },
  {
    "id": "i946",
    "name": "Objeto: arpa rúnica #1",
    "category": "coleccionable",
    "zoneId": "z6",
    "x": -728.19,
    "y": 387.79,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Rune Harp #1"
    ]
  },
  {
    "id": "i947",
    "name": "Objeto: arpa rúnica #2",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -751.39,
    "y": 1127.15,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Rune Harp #2"
    ]
  },
  {
    "id": "i948",
    "name": "Objeto: arpa rúnica #3",
    "category": "coleccionable",
    "zoneId": "z27",
    "x": -216.48,
    "y": 519.91,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Rune Harp #3"
    ]
  },
  {
    "id": "i949",
    "name": "Objeto: cilindro de salmo #1",
    "category": "coleccionable",
    "zoneId": "z36",
    "x": -189.42,
    "y": 578.41,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Psalm Cylinder #1"
    ]
  },
  {
    "id": "i950",
    "name": "Objeto: cilindro de salmo #2",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -264.96,
    "y": 857.06,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Psalm Cylinder #2"
    ]
  },
  {
    "id": "i951",
    "name": "Objeto: cilindro de salmo #3",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -419.25,
    "y": 179.21,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Psalm Cylinder #3"
    ]
  },
  {
    "id": "i952",
    "name": "Objeto: cilindro de salmo #4",
    "category": "coleccionable",
    "zoneId": "z30",
    "x": -386.64,
    "y": 545.97,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Psalm Cylinder #4"
    ]
  },
  {
    "id": "i953",
    "name": "Objeto: cilindro de salmo #5",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -252.89,
    "y": 829.81,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Psalm Cylinder #5"
    ]
  },
  {
    "id": "i954",
    "name": "Objeto: sagrado Cylinder",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -322.74,
    "y": 827.58,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Sacred Cylinder"
    ]
  },
  {
    "id": "i955",
    "name": "Objeto: huevo arcano",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -881.09,
    "y": 603.14,
    "description": "Un objeto valioso para cambiar.",
    "search": [
      "Item - Arcane Egg"
    ]
  },
  {
    "id": "i956",
    "name": "Recuerdo: Guardian's recuerdo",
    "category": "coleccionable",
    "zoneId": "z39",
    "x": -239.81,
    "y": 1139.08,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Guardian's Memento"
    ]
  },
  {
    "id": "i957",
    "name": "Recuerdo: Grey recuerdo",
    "category": "coleccionable",
    "zoneId": "z45",
    "x": -390.75,
    "y": 75,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Grey Memento"
    ]
  },
  {
    "id": "i958",
    "name": "Recuerdo: Surface recuerdo",
    "category": "coleccionable",
    "zoneId": "z38",
    "x": -10.8,
    "y": 908.21,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Surface Memento"
    ]
  },
  {
    "id": "i959",
    "name": "Recuerdo: cazador's recuerdo",
    "category": "coleccionable",
    "zoneId": "z13",
    "x": -548.83,
    "y": 756.97,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Hunter's Memento"
    ]
  },
  {
    "id": "i960",
    "name": "Recuerdo: Sprintmaster recuerdo",
    "category": "coleccionable",
    "zoneId": "z46",
    "x": -677.3,
    "y": 1121.95,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Sprintmaster Memento"
    ]
  },
  {
    "id": "i961",
    "name": "Recuerdo: Craw recuerdo",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -602.39,
    "y": 1032.72,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Craw Memento"
    ]
  },
  {
    "id": "i962",
    "name": "Recuerdo: Hero's recuerdo",
    "category": "coleccionable",
    "zoneId": "z22",
    "x": -447.45,
    "y": 145.41,
    "description": "Un recuerdo de Pharloom.",
    "search": [
      "Memento - Hero's Memento"
    ]
  },
  {
    "id": "i963",
    "name": "Comecera #1",
    "category": "coleccionable",
    "zoneId": "z47",
    "x": -772.99,
    "y": 693.37,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #1"
    ]
  },
  {
    "id": "i964",
    "name": "Comecera #2",
    "category": "coleccionable",
    "zoneId": "z11",
    "x": -488.24,
    "y": 976.16,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #2"
    ]
  },
  {
    "id": "i965",
    "name": "Comecera #3",
    "category": "coleccionable",
    "zoneId": "z14",
    "x": -496.64,
    "y": 726.77,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #3"
    ]
  },
  {
    "id": "i966",
    "name": "Comecera #4",
    "category": "coleccionable",
    "zoneId": "z17",
    "x": -387.66,
    "y": 823.87,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #4"
    ]
  },
  {
    "id": "i967",
    "name": "Comecera #5",
    "category": "coleccionable",
    "zoneId": "z21",
    "x": -485.84,
    "y": 304.2,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #5"
    ]
  },
  {
    "id": "i968",
    "name": "Comecera #6",
    "category": "coleccionable",
    "zoneId": "z49",
    "x": -257.24,
    "y": 842.44,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #6"
    ]
  },
  {
    "id": "i969",
    "name": "Comecera #7",
    "category": "coleccionable",
    "zoneId": "z31",
    "x": -267.04,
    "y": 627.05,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #7"
    ]
  },
  {
    "id": "i970",
    "name": "Comecera #8",
    "category": "coleccionable",
    "zoneId": "z34",
    "x": -127.66,
    "y": 666.38,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #8"
    ]
  },
  {
    "id": "i971",
    "name": "Comecera #9",
    "category": "coleccionable",
    "zoneId": "z33",
    "x": -323.02,
    "y": 701.11,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #9"
    ]
  },
  {
    "id": "i972",
    "name": "Comecera #10",
    "category": "coleccionable",
    "zoneId": "z32",
    "x": -334.7,
    "y": 623.72,
    "description": "Un comecera de seda que devuelve algo a cambio.",
    "search": [
      "Silkeater #10"
    ]
  },
  {
    "id": "i973",
    "name": "Objeto de mapa: pluma",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Quill"
    ]
  },
  {
    "id": "i974",
    "name": "Objeto de mapa: pluma (Red)",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -295.54,
    "y": 778.38,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Quill (Red)"
    ]
  },
  {
    "id": "i975",
    "name": "Objeto de mapa: pluma (Purple)",
    "category": "coleccionable",
    "zoneId": "z41",
    "x": -295.54,
    "y": 778.38,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Quill (Purple)"
    ]
  },
  {
    "id": "i976",
    "name": "Objeto de mapa: bencilla alfileres",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Bench Pins"
    ]
  },
  {
    "id": "i977",
    "name": "Objeto de mapa: Campanarios alfileres",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Bellways Pins"
    ]
  },
  {
    "id": "i978",
    "name": "Objeto de mapa: Ventrica alfileres",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Ventrica Pins"
    ]
  },
  {
    "id": "i979",
    "name": "Objeto de mapa: vendedor alfileres",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Vendor Pins"
    ]
  },
  {
    "id": "i980",
    "name": "Objeto de mapa: Shell marcador",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Shell Marker"
    ]
  },
  {
    "id": "i981",
    "name": "Objeto de mapa: Hunt marcador",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Hunt Marker"
    ]
  },
  {
    "id": "i982",
    "name": "Objeto de mapa: oscuro marcador",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Dark Marker"
    ]
  },
  {
    "id": "i983",
    "name": "Objeto de mapa: bronce marcador",
    "category": "coleccionable",
    "zoneId": "z2",
    "x": -688.41,
    "y": 297.25,
    "description": "Un objeto relacionado con el mapa.",
    "search": [
      "Map Item - Bronze Marker"
    ]
  },
  {
    "id": "i984",
    "name": "NPC: Shakra",
    "category": "npc",
    "zoneId": "z44",
    "x": -305.71,
    "y": 246.95,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Shakra",
      "personaje"
    ]
  },
  {
    "id": "i985",
    "name": "NPC: Mask Maker",
    "category": "npc",
    "zoneId": "z24",
    "x": -137.19,
    "y": 101.84,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Mask Maker",
      "personaje"
    ]
  },
  {
    "id": "i986",
    "name": "NPC: Conductor Ballador",
    "category": "npc",
    "zoneId": "z27",
    "x": -215.25,
    "y": 516.52,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Conductor Ballador",
      "personaje"
    ]
  },
  {
    "id": "i987",
    "name": "NPC: Garmond and Zaza",
    "category": "npc",
    "zoneId": "z27",
    "x": -230.9,
    "y": 513.91,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond and Zaza",
      "personaje"
    ]
  },
  {
    "id": "i988",
    "name": "NPC: Loyal Mergwin",
    "category": "npc",
    "zoneId": "z31",
    "x": -269.43,
    "y": 610.53,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Loyal Mergwin",
      "personaje"
    ]
  },
  {
    "id": "i989",
    "name": "NPC: Sherma",
    "category": "npc",
    "zoneId": "z28",
    "x": -287.71,
    "y": 527.86,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sherma",
      "personaje"
    ]
  },
  {
    "id": "i990",
    "name": "NPC: Garmond And Zaza",
    "category": "npc",
    "zoneId": "z28",
    "x": -279.01,
    "y": 523.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond And Zaza",
      "personaje"
    ]
  },
  {
    "id": "i991",
    "name": "NPC: Grindle",
    "category": "npc",
    "zoneId": "z27",
    "x": -244.95,
    "y": 480.34,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Grindle",
      "personaje"
    ]
  },
  {
    "id": "i992",
    "name": "NPC: Sula",
    "category": "npc",
    "zoneId": "z1",
    "x": -712.2,
    "y": 66.22,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sula",
      "personaje"
    ]
  },
  {
    "id": "i993",
    "name": "NPC: Snail Chamáns",
    "category": "npc",
    "zoneId": "z1",
    "x": -723,
    "y": 127.01,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Snail Shamans",
      "personaje"
    ]
  },
  {
    "id": "i994",
    "name": "NPC: Chapel Maid",
    "category": "npc",
    "zoneId": "z0",
    "x": -697.6,
    "y": 208.01,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Chapel Maid",
      "personaje"
    ]
  },
  {
    "id": "i995",
    "name": "NPC: Flick the Fixer",
    "category": "npc",
    "zoneId": "z2",
    "x": -698,
    "y": 294.6,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Flick the Fixer",
      "personaje"
    ]
  },
  {
    "id": "i996",
    "name": "NPC: Little peregrino",
    "category": "npc",
    "zoneId": "z2",
    "x": -698.2,
    "y": 277,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Little Pilgrim",
      "personaje"
    ]
  },
  {
    "id": "i997",
    "name": "NPC: Fearful peregrino",
    "category": "npc",
    "zoneId": "z2",
    "x": -698.2,
    "y": 282.8,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Fearful Pilgrim",
      "personaje"
    ]
  },
  {
    "id": "i998",
    "name": "NPC: Mr. Mushroom #2",
    "category": "npc",
    "zoneId": "z2",
    "x": -690.8,
    "y": 297.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Mr. Mushroom #2",
      "personaje"
    ]
  },
  {
    "id": "i999",
    "name": "NPC: Sherma",
    "category": "npc",
    "zoneId": "z5",
    "x": -704,
    "y": 346.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sherma",
      "personaje"
    ]
  },
  {
    "id": "i1000",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z3",
    "x": -658.81,
    "y": 295.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1001",
    "name": "NPC: Courier Tipp",
    "category": "npc",
    "zoneId": "z3",
    "x": -621.01,
    "y": 242.6,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Courier Tipp",
      "personaje"
    ]
  },
  {
    "id": "i1002",
    "name": "NPC: Alchemist Zylotol",
    "category": "npc",
    "zoneId": "z4",
    "x": -605.42,
    "y": 130.81,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Alchemist Zylotol",
      "personaje"
    ]
  },
  {
    "id": "i1003",
    "name": "NPC: Sherma",
    "category": "npc",
    "zoneId": "z3",
    "x": -653.21,
    "y": 348.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sherma",
      "personaje"
    ]
  },
  {
    "id": "i1004",
    "name": "NPC: musgo Druid",
    "category": "npc",
    "zoneId": "z3",
    "x": -636.41,
    "y": 346.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Moss Druid",
      "personaje"
    ]
  },
  {
    "id": "i1005",
    "name": "NPC: Flick the Fixer",
    "category": "npc",
    "zoneId": "z6",
    "x": -681.2,
    "y": 432.99,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Flick the Fixer",
      "personaje"
    ]
  },
  {
    "id": "i1006",
    "name": "NPC: Flea Caravan",
    "category": "npc",
    "zoneId": "z6",
    "x": -681.2,
    "y": 437.59,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Flea Caravan",
      "personaje"
    ]
  },
  {
    "id": "i1007",
    "name": "NPC: Nuu #3",
    "category": "npc",
    "zoneId": "z6",
    "x": -673.4,
    "y": 493.79,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Nuu #3",
      "personaje"
    ]
  },
  {
    "id": "i1008",
    "name": "NPC: Grindle",
    "category": "npc",
    "zoneId": "z8",
    "x": -671.81,
    "y": 550.38,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Grindle",
      "personaje"
    ]
  },
  {
    "id": "i1009",
    "name": "NPC: Loddie",
    "category": "npc",
    "zoneId": "z8",
    "x": -678,
    "y": 544.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Loddie",
      "personaje"
    ]
  },
  {
    "id": "i1010",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z8",
    "x": -705,
    "y": 571.98,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1011",
    "name": "NPC: Bell ermitaño",
    "category": "npc",
    "zoneId": "z20",
    "x": -620.01,
    "y": 551.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Bell Hermit",
      "personaje"
    ]
  },
  {
    "id": "i1012",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z7",
    "x": -678.2,
    "y": 695.77,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1013",
    "name": "NPC: Ballow",
    "category": "npc",
    "zoneId": "z8",
    "x": -726.4,
    "y": 711.57,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Ballow",
      "personaje"
    ]
  },
  {
    "id": "i1014",
    "name": "NPC: Ballow",
    "category": "npc",
    "zoneId": "z8",
    "x": -769.99,
    "y": 668.98,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Ballow",
      "personaje"
    ]
  },
  {
    "id": "i1015",
    "name": "NPC: Ballow",
    "category": "npc",
    "zoneId": "z47",
    "x": -777.59,
    "y": 752.57,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Ballow",
      "personaje"
    ]
  },
  {
    "id": "i1016",
    "name": "NPC: Gilly",
    "category": "npc",
    "zoneId": "z13",
    "x": -665.61,
    "y": 774.37,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Gilly",
      "personaje"
    ]
  },
  {
    "id": "i1017",
    "name": "NPC: Gilly",
    "category": "npc",
    "zoneId": "z13",
    "x": -631.81,
    "y": 799.97,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Gilly",
      "personaje"
    ]
  },
  {
    "id": "i1018",
    "name": "NPC: Gilly #2",
    "category": "npc",
    "zoneId": "z13",
    "x": -628.81,
    "y": 745.57,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Gilly #2",
      "personaje"
    ]
  },
  {
    "id": "i1019",
    "name": "NPC: Pillby #2",
    "category": "npc",
    "zoneId": "z9",
    "x": -664.41,
    "y": 914.36,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Pillby #2",
      "personaje"
    ]
  },
  {
    "id": "i1020",
    "name": "NPC: Sherma",
    "category": "npc",
    "zoneId": "z9",
    "x": -664.41,
    "y": 915.36,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sherma",
      "personaje"
    ]
  },
  {
    "id": "i1021",
    "name": "NPC: Weary peregrino",
    "category": "npc",
    "zoneId": "z9",
    "x": -664.41,
    "y": 916.36,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Weary Pilgrim",
      "personaje"
    ]
  },
  {
    "id": "i1022",
    "name": "NPC: Seamstress",
    "category": "npc",
    "zoneId": "z9",
    "x": -710.4,
    "y": 982.16,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Seamstress",
      "personaje"
    ]
  },
  {
    "id": "i1023",
    "name": "NPC: Mr. Mushroom #3",
    "category": "npc",
    "zoneId": "z9",
    "x": -735.19,
    "y": 1087.75,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Mr. Mushroom #3",
      "personaje"
    ]
  },
  {
    "id": "i1024",
    "name": "NPC: Sprintmaster Swift",
    "category": "npc",
    "zoneId": "z46",
    "x": -678.2,
    "y": 1121.95,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sprintmaster Swift",
      "personaje"
    ]
  },
  {
    "id": "i1025",
    "name": "NPC: Gilly #5",
    "category": "npc",
    "zoneId": "z46",
    "x": -608.82,
    "y": 1049.75,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Gilly #5",
      "personaje"
    ]
  },
  {
    "id": "i1026",
    "name": "NPC: Gilly #3",
    "category": "npc",
    "zoneId": "z11",
    "x": -644.81,
    "y": 1010.55,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Gilly #3",
      "personaje"
    ]
  },
  {
    "id": "i1027",
    "name": "NPC: Gilly #4",
    "category": "npc",
    "zoneId": "z10",
    "x": -613.62,
    "y": 935.16,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Gilly #4",
      "personaje"
    ]
  },
  {
    "id": "i1028",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z9",
    "x": -740.19,
    "y": 1027.55,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1029",
    "name": "NPC: Seth",
    "category": "npc",
    "zoneId": "z11",
    "x": -556.03,
    "y": 930.76,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Seth",
      "personaje"
    ]
  },
  {
    "id": "i1030",
    "name": "NPC: Nuu",
    "category": "npc",
    "zoneId": "z13",
    "x": -550.83,
    "y": 756.97,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Nuu",
      "personaje"
    ]
  },
  {
    "id": "i1031",
    "name": "NPC: Creige",
    "category": "npc",
    "zoneId": "z13",
    "x": -556.63,
    "y": 759.17,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Creige",
      "personaje"
    ]
  },
  {
    "id": "i1032",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z14",
    "x": -545.83,
    "y": 680.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1033",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z14",
    "x": -564.42,
    "y": 694.37,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1034",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z14",
    "x": -572.62,
    "y": 648.18,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1035",
    "name": "NPC: Flea Caravan",
    "category": "npc",
    "zoneId": "z7",
    "x": -586.62,
    "y": 617.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Flea Caravan",
      "personaje"
    ]
  },
  {
    "id": "i1036",
    "name": "NPC: Yarnaby",
    "category": "npc",
    "zoneId": "z15",
    "x": -539.43,
    "y": 610.18,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Yarnaby",
      "personaje"
    ]
  },
  {
    "id": "i1037",
    "name": "NPC: Lace",
    "category": "npc",
    "zoneId": "z12",
    "x": -505.24,
    "y": 785.97,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Lace",
      "personaje"
    ]
  },
  {
    "id": "i1038",
    "name": "NPC: Príncipe Verde",
    "category": "npc",
    "zoneId": "z12",
    "x": -499.64,
    "y": 845.56,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Green Prince",
      "personaje"
    ]
  },
  {
    "id": "i1039",
    "name": "NPC: Courier Pill",
    "category": "npc",
    "zoneId": "z12",
    "x": -468.84,
    "y": 861.16,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Courier Pill",
      "personaje"
    ]
  },
  {
    "id": "i1040",
    "name": "NPC: Crull & Benjin",
    "category": "npc",
    "zoneId": "z12",
    "x": -471.84,
    "y": 891.56,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Crull & Benjin",
      "personaje"
    ]
  },
  {
    "id": "i1041",
    "name": "NPC: Garmond & Zaza #2",
    "category": "npc",
    "zoneId": "z17",
    "x": -452.45,
    "y": 902.76,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza #2",
      "personaje"
    ]
  },
  {
    "id": "i1042",
    "name": "NPC: Styx",
    "category": "npc",
    "zoneId": "z11",
    "x": -488.04,
    "y": 974.56,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Styx",
      "personaje"
    ]
  },
  {
    "id": "i1043",
    "name": "NPC: Skynx",
    "category": "npc",
    "zoneId": "z11",
    "x": -489.44,
    "y": 984.95,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Skynx",
      "personaje"
    ]
  },
  {
    "id": "i1044",
    "name": "NPC: Pavo",
    "category": "npc",
    "zoneId": "z20",
    "x": -585.82,
    "y": 551.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Pavo",
      "personaje"
    ]
  },
  {
    "id": "i1045",
    "name": "NPC: Sherma",
    "category": "npc",
    "zoneId": "z20",
    "x": -586.02,
    "y": 557.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sherma",
      "personaje"
    ]
  },
  {
    "id": "i1046",
    "name": "NPC: Relic buscador Scrounge",
    "category": "npc",
    "zoneId": "z20",
    "x": -573.82,
    "y": 537.58,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Relic Seeker Scrounge",
      "personaje"
    ]
  },
  {
    "id": "i1047",
    "name": "NPC: Couriers Tipp & Pill",
    "category": "npc",
    "zoneId": "z20",
    "x": -580.42,
    "y": 540.38,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Couriers Tipp & Pill",
      "personaje"
    ]
  },
  {
    "id": "i1048",
    "name": "NPC: Pinmaster Plinney",
    "category": "npc",
    "zoneId": "z20",
    "x": -574.62,
    "y": 561.98,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Pinmaster Plinney",
      "personaje"
    ]
  },
  {
    "id": "i1049",
    "name": "NPC: Pondcatcher Reed",
    "category": "npc",
    "zoneId": "z20",
    "x": -586.02,
    "y": 536.78,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Pondcatcher Reed",
      "personaje"
    ]
  },
  {
    "id": "i1050",
    "name": "NPC: Shakra",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 494.99,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Shakra",
      "personaje"
    ]
  },
  {
    "id": "i1051",
    "name": "NPC: Shakra",
    "category": "npc",
    "zoneId": "z7",
    "x": -644.41,
    "y": 683.18,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Shakra",
      "personaje"
    ]
  },
  {
    "id": "i1052",
    "name": "NPC: Greyroot",
    "category": "npc",
    "zoneId": "z21",
    "x": -556.83,
    "y": 407.39,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Greyroot",
      "personaje"
    ]
  },
  {
    "id": "i1053",
    "name": "NPC: Seth",
    "category": "npc",
    "zoneId": "z21",
    "x": -531.83,
    "y": 424.79,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Seth",
      "personaje"
    ]
  },
  {
    "id": "i1054",
    "name": "NPC: Nuu #2",
    "category": "npc",
    "zoneId": "z21",
    "x": -517.03,
    "y": 430.19,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Nuu #2",
      "personaje"
    ]
  },
  {
    "id": "i1055",
    "name": "NPC: Pinmaster Plinney",
    "category": "npc",
    "zoneId": "z21",
    "x": -568.42,
    "y": 322.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Pinmaster Plinney",
      "personaje"
    ]
  },
  {
    "id": "i1056",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z3",
    "x": -580.62,
    "y": 298.2,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1057",
    "name": "NPC: Lace",
    "category": "npc",
    "zoneId": "z21",
    "x": -537.63,
    "y": 248.4,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Lace",
      "personaje"
    ]
  },
  {
    "id": "i1058",
    "name": "NPC: Garmond & Zaza",
    "category": "npc",
    "zoneId": "z22",
    "x": -509.83,
    "y": 174.61,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Garmond & Zaza",
      "personaje"
    ]
  },
  {
    "id": "i1059",
    "name": "NPC: Acero Seer Zi",
    "category": "npc",
    "zoneId": "z21",
    "x": -488.04,
    "y": 319.8,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Steel Seer Zi",
      "personaje"
    ]
  },
  {
    "id": "i1060",
    "name": "NPC: Nuu #4",
    "category": "npc",
    "zoneId": "z22",
    "x": -479.64,
    "y": 204.21,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Nuu #4",
      "personaje"
    ]
  },
  {
    "id": "i1061",
    "name": "NPC: alfilerestress",
    "category": "npc",
    "zoneId": "z22",
    "x": -460.44,
    "y": 132.01,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Pinstress",
      "personaje"
    ]
  },
  {
    "id": "i1062",
    "name": "NPC: Lumble the Lucky",
    "category": "npc",
    "zoneId": "z22",
    "x": -450.45,
    "y": 138.81,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Lumble the Lucky",
      "personaje"
    ]
  },
  {
    "id": "i1063",
    "name": "NPC: Sherma",
    "category": "npc",
    "zoneId": "z22",
    "x": -442.85,
    "y": 225.41,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Sherma",
      "personaje"
    ]
  },
  {
    "id": "i1064",
    "name": "NPC: Tall peregrino",
    "category": "npc",
    "zoneId": "z42",
    "x": -412.65,
    "y": 345.8,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Tall Pilgrim",
      "personaje"
    ]
  },
  {
    "id": "i1065",
    "name": "NPC: Vog",
    "category": "npc",
    "zoneId": "z42",
    "x": -412.65,
    "y": 347,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Vog",
      "personaje"
    ]
  },
  {
    "id": "i1066",
    "name": "NPC: Flea Caravan",
    "category": "npc",
    "zoneId": "z42",
    "x": -412.65,
    "y": 334,
    "description": "Un personaje del reino de Pharloom.",
    "search": [
      "NPC - Flea Caravan",
      "personaje"
    ]
  },
  {
    "id": "i1067",
    "name": "Vendedor: Twelfth Arquitecto",
    "category": "npc",
    "zoneId": "z32",
    "x": -395.1,
    "y": 676.29,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Twelfth Architect",
      "personaje"
    ]
  },
  {
    "id": "i1068",
    "name": "Vendedor: Guardián de la Bóveda Cardinius",
    "category": "npc",
    "zoneId": "z49",
    "x": -273.68,
    "y": 830.34,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Vaultkeeper Cardinius",
      "personaje"
    ]
  },
  {
    "id": "i1069",
    "name": "Vendedor: Pebb",
    "category": "npc",
    "zoneId": "z2",
    "x": -698.2,
    "y": 289.4,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Pebb",
      "personaje"
    ]
  },
  {
    "id": "i1070",
    "name": "Vendedor: Frey",
    "category": "npc",
    "zoneId": "z20",
    "x": -585.62,
    "y": 544.18,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Frey",
      "personaje"
    ]
  },
  {
    "id": "i1071",
    "name": "Vendedor: Skarr moteado",
    "category": "npc",
    "zoneId": "z7",
    "x": -617.82,
    "y": 705.37,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Mottled Skarr",
      "personaje"
    ]
  },
  {
    "id": "i1072",
    "name": "Vendedor: Forja Hija",
    "category": "npc",
    "zoneId": "z8",
    "x": -724.6,
    "y": 706.17,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Forge Daughter",
      "personaje"
    ]
  },
  {
    "id": "i1073",
    "name": "Vendedor: Mort",
    "category": "npc",
    "zoneId": "z9",
    "x": -670.01,
    "y": 907.96,
    "description": "Una tienda donde comprar cosas.",
    "search": [
      "Vendor - Mort",
      "personaje"
    ]
  },
  {
    "id": "i1074",
    "name": "Deseo: Suministros de Fondo de Huesos",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Bone Bottom Supplies",
      "personaje"
    ]
  },
  {
    "id": "i1075",
    "name": "Deseo: Audiencia Final",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Final Audience",
      "personaje"
    ]
  },
  {
    "id": "i1076",
    "name": "Deseo: Suministros de Pulguilandia",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Fleatopia Supplies",
      "personaje"
    ]
  },
  {
    "id": "i1077",
    "name": "Deseo: Dolor, Angustia y Misería",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Pain, Anguish and Misery",
      "personaje"
    ]
  },
  {
    "id": "i1078",
    "name": "Deseo: Suministros del Descanso del Peregrino",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Pilgrim's Rest Supplies",
      "personaje"
    ]
  },
  {
    "id": "i1079",
    "name": "Deseo: Festín de los Pequeños",
    "category": "npc",
    "zoneId": "z19",
    "x": -252.47,
    "y": 930.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Runtfeast",
      "personaje"
    ]
  },
  {
    "id": "i1080",
    "name": "Deseo: Seda y Alma",
    "category": "npc",
    "zoneId": "z1",
    "x": -723.06,
    "y": 128.91,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Silk and Soul",
      "personaje"
    ]
  },
  {
    "id": "i1081",
    "name": "Deseo: Suministros de Clave del Canto",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Songclave Supplies",
      "personaje"
    ]
  },
  {
    "id": "i1082",
    "name": "Deseo: Suministros del Campamento del Superviviente",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Survivor's Camp Supplies",
      "personaje"
    ]
  },
  {
    "id": "i1083",
    "name": "Deseo: El Mercader Perdido",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - The Lost Merchant",
      "personaje"
    ]
  },
  {
    "id": "i1084",
    "name": "Deseo: La Madre Llorosa",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - The Wailing Mother",
      "personaje"
    ]
  },
  {
    "id": "i1085",
    "name": "Deseo: El Paso de la Era",
    "category": "npc",
    "zoneId": "z40",
    "x": -210.3,
    "y": 1191.91,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Passing of the Age",
      "personaje"
    ]
  },
  {
    "id": "i1086",
    "name": "Deseo: Alfileres Finos",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Fine Pins",
      "personaje"
    ]
  },
  {
    "id": "i1087",
    "name": "Deseo: Levantando Clave del Canto",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Building Up Songclave",
      "personaje"
    ]
  },
  {
    "id": "i1088",
    "name": "Deseo: Capas del Coro",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Cloaks of the Choir",
      "personaje"
    ]
  },
  {
    "id": "i1089",
    "name": "Deseo: Bálsamo para los Heridos",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Balm for the Wounded",
      "personaje"
    ]
  },
  {
    "id": "i1090",
    "name": "Deseo: Fortaleciendo Clave del Canto",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Strengthening Songclave",
      "personaje"
    ]
  },
  {
    "id": "i1091",
    "name": "Deseo: El Mercader Errante",
    "category": "npc",
    "zoneId": "z49",
    "x": -235.07,
    "y": 793.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - The Wandering Merchant",
      "personaje"
    ]
  },
  {
    "id": "i1092",
    "name": "Deseo: El Gran Sabor de Pharloom",
    "category": "npc",
    "zoneId": "z31",
    "x": -269.43,
    "y": 609.96,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Great Taste of Pharloom",
      "personaje"
    ]
  },
  {
    "id": "i1093",
    "name": "Deseo: Reparaciones en Fondo de Huesos",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Bone Bottom Repairs",
      "personaje"
    ]
  },
  {
    "id": "i1094",
    "name": "Deseo: Atuendo de los Peregrinos",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Garb of the Pilgrims",
      "personaje"
    ]
  },
  {
    "id": "i1095",
    "name": "Deseo: Un Puente Que Salva",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - A Lifesaving Bridge",
      "personaje"
    ]
  },
  {
    "id": "i1096",
    "name": "Deseo: Escarabajos de Pedernal Volátiles",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Volatile Flintbeetles",
      "personaje"
    ]
  },
  {
    "id": "i1097",
    "name": "Deseo: El Tirano Terrible",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - The Terrible Tyrant",
      "personaje"
    ]
  },
  {
    "id": "i1098",
    "name": "Deseo: Un Icono de Esperanza",
    "category": "npc",
    "zoneId": "z2",
    "x": -696.4,
    "y": 292.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - An Icon of Hope",
      "personaje"
    ]
  },
  {
    "id": "i1099",
    "name": "Deseo: El Huevo de la Reina",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Queen's Egg",
      "personaje"
    ]
  },
  {
    "id": "i1100",
    "name": "Deseo: Laca Líquida",
    "category": "npc",
    "zoneId": "z20",
    "x": -579.62,
    "y": 540.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Liquid Lacquer",
      "personaje"
    ]
  },
  {
    "id": "i1101",
    "name": "Deseo: Campanas de Plata",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Silver Bells",
      "personaje"
    ]
  },
  {
    "id": "i1102",
    "name": "Deseo: Mi Mensajero Perdido",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - My Missing Courier",
      "personaje"
    ]
  },
  {
    "id": "i1103",
    "name": "Deseo: Limpiando los Cras",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Crawbug Clearing",
      "personaje"
    ]
  },
  {
    "id": "i1104",
    "name": "Deseo: Restauración de Corazón de Campana",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Restoration of Bellhart",
      "personaje"
    ]
  },
  {
    "id": "i1105",
    "name": "Deseo: La Gloria de Corazón de Campana",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Bellhart's Glory",
      "personaje"
    ]
  },
  {
    "id": "i1106",
    "name": "Deseo: Mi Hermano Perdido",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - My Missing Brother",
      "personaje"
    ]
  },
  {
    "id": "i1107",
    "name": "Deseo: Moscabestia Salvaje",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Savage Beastfly",
      "personaje"
    ]
  },
  {
    "id": "i1108",
    "name": "Deseo: Fin del Camino",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Trail's End",
      "personaje"
    ]
  },
  {
    "id": "i1109",
    "name": "Deseo: Resolución Fatal",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Fatal Resolve",
      "personaje"
    ]
  },
  {
    "id": "i1110",
    "name": "Deseo: Éxtasis del Final",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Ecstasy of the End",
      "personaje"
    ]
  },
  {
    "id": "i1111",
    "name": "Deseo: Llamado del Héroe",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Hero's Call",
      "personaje"
    ]
  },
  {
    "id": "i1112",
    "name": "Deseo: La Cazadora Oculta",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - The Hidden Hunter",
      "personaje"
    ]
  },
  {
    "id": "i1113",
    "name": "Deseo: Corazones Oscuros",
    "category": "npc",
    "zoneId": "z20",
    "x": -584.82,
    "y": 541.58,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Dark Hearts",
      "personaje"
    ]
  },
  {
    "id": "i1114",
    "name": "Deseo: Recogiendo Bayas",
    "category": "npc",
    "zoneId": "z3",
    "x": -635.21,
    "y": 345.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Berry Picking",
      "personaje"
    ]
  },
  {
    "id": "i1115",
    "name": "Deseo: Asistente de la Alquimista",
    "category": "npc",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.21,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Alchemist's Assistant",
      "personaje"
    ]
  },
  {
    "id": "i1116",
    "name": "Deseo: Alquimia Avanzada",
    "category": "npc",
    "zoneId": "z4",
    "x": -604.02,
    "y": 130.21,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Advanced Alchemy",
      "personaje"
    ]
  },
  {
    "id": "i1117",
    "name": "Deseo: Las Pulgas Perdidas",
    "category": "npc",
    "zoneId": "z6",
    "x": -680.4,
    "y": 437.59,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - The Lost Fleas",
      "personaje"
    ]
  },
  {
    "id": "i1118",
    "name": "Deseo: Púas Flexibles",
    "category": "npc",
    "zoneId": "z9",
    "x": -709.6,
    "y": 981.56,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Flexile Spines",
      "personaje"
    ]
  },
  {
    "id": "i1119",
    "name": "Deseo: El Más Rápido de Pharloom",
    "category": "npc",
    "zoneId": "z46",
    "x": -677.6,
    "y": 1121.95,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Fastest in Pharloom",
      "personaje"
    ]
  },
  {
    "id": "i1120",
    "name": "Deseo: Tripas de Cucaracha",
    "category": "npc",
    "zoneId": "z12",
    "x": -471.24,
    "y": 890.96,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Roach Guts",
      "personaje"
    ]
  },
  {
    "id": "i1121",
    "name": "Deseo: Bichos de Pharloom",
    "category": "npc",
    "zoneId": "z13",
    "x": -550.03,
    "y": 756.37,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Bugs of Pharloom",
      "personaje"
    ]
  },
  {
    "id": "i1122",
    "name": "Deseo: Operación Plaga",
    "category": "npc",
    "zoneId": "z15",
    "x": -538.83,
    "y": 610.18,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Infestation Operation",
      "personaje"
    ]
  },
  {
    "id": "i1123",
    "name": "Deseo: Aceite del Maestro de Alfileres",
    "category": "npc",
    "zoneId": "z20",
    "x": -573.02,
    "y": 561.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Pinmaster's Oil",
      "personaje"
    ]
  },
  {
    "id": "i1124",
    "name": "Deseo: Rito del Pólipo",
    "category": "npc",
    "zoneId": "z21",
    "x": -556.03,
    "y": 407.39,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Rite of the Pollip",
      "personaje"
    ]
  },
  {
    "id": "i1125",
    "name": "Deseo: Rito de Renacimiento",
    "category": "npc",
    "zoneId": "z21",
    "x": -556.03,
    "y": 407.39,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Rite of Rebirth",
      "personaje"
    ]
  },
  {
    "id": "i1126",
    "name": "Deseo: Festín de la Camada",
    "category": "npc",
    "zoneId": "z19",
    "x": -252.47,
    "y": 930.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - Broodfeast",
      "personaje"
    ]
  },
  {
    "id": "i1127",
    "name": "Progreso del deseo: Fatal Resolve wish",
    "category": "npc",
    "zoneId": "z22",
    "x": -461.91,
    "y": 133.26,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Fatal Resolve wish",
      "personaje"
    ]
  },
  {
    "id": "i1128",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z22",
    "x": -477.35,
    "y": 202.75,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1129",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z3",
    "x": -577.67,
    "y": 296.6,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1130",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z31",
    "x": -278.86,
    "y": 658.69,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1131",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z42",
    "x": -461.91,
    "y": 392.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1132",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z11",
    "x": -628.07,
    "y": 1041.13,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1133",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z6",
    "x": -691.1,
    "y": 407.23,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1134",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z3",
    "x": -657.27,
    "y": 341.25,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1135",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z3",
    "x": -626.47,
    "y": 322.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1136",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z5",
    "x": -754.15,
    "y": 265.65,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1137",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z20",
    "x": -636.32,
    "y": 504.91,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1138",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z8",
    "x": -693.32,
    "y": 571.03,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1139",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z8",
    "x": -738.38,
    "y": 651,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1140",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z9",
    "x": -748.6,
    "y": 823.72,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1141",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z9",
    "x": -702.51,
    "y": 858.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1142",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z10",
    "x": -663.15,
    "y": 842.88,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1143",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -671.28,
    "y": 705.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1144",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -684.96,
    "y": 733.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1145",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -650.09,
    "y": 732.31,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1146",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z42",
    "x": -483.28,
    "y": 440.5,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1147",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z20",
    "x": -539.1,
    "y": 481.94,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1148",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z20",
    "x": -558.51,
    "y": 459.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1149",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z21",
    "x": -548.51,
    "y": 427.31,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1150",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z22",
    "x": -481.64,
    "y": 265.25,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1151",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z42",
    "x": -418.65,
    "y": 301.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1152",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z7",
    "x": -637.27,
    "y": 615.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1153",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z14",
    "x": -575.7,
    "y": 691.06,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1154",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z14",
    "x": -568.2,
    "y": 647.06,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1155",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z14",
    "x": -501.76,
    "y": 687.28,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1156",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z12",
    "x": -528.76,
    "y": 813.13,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1157",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z12",
    "x": -497.58,
    "y": 889.56,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1158",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z11",
    "x": -500.96,
    "y": 926.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1159",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z11",
    "x": -482.33,
    "y": 961.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1160",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z18",
    "x": -443.55,
    "y": 965.75,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1161",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z30",
    "x": -449.73,
    "y": 473.53,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1162",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z28",
    "x": -347.99,
    "y": 446.22,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1163",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z28",
    "x": -295.83,
    "y": 457.22,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1164",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z30",
    "x": -414.54,
    "y": 586.63,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1165",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z29",
    "x": -411.58,
    "y": 666.69,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1166",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z27",
    "x": -247.71,
    "y": 518.13,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1167",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z27",
    "x": -227.52,
    "y": 517.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1168",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z27",
    "x": -186.93,
    "y": 541.22,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1169",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z36",
    "x": -150.43,
    "y": 568.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1170",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z31",
    "x": -313.21,
    "y": 583.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1171",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z31",
    "x": -300.34,
    "y": 609.25,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1172",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z49",
    "x": -265.84,
    "y": 800.44,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1173",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z41",
    "x": -285.84,
    "y": 819.38,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1174",
    "name": "Progreso del deseo: oscuro corazóns wish - Void Mass",
    "category": "npc",
    "zoneId": "z41",
    "x": -292.65,
    "y": 845.19,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish Progress for Dark Hearts wish - Void Mass",
      "personaje"
    ]
  },
  {
    "id": "i1175",
    "name": "Deseo: Un Vasallo Perdido",
    "category": "npc",
    "zoneId": "z21",
    "x": -487.04,
    "y": 319.8,
    "description": "Un deseo. Parte de una misión importante.",
    "search": [
      "Wish - A Vassal Lost",
      "personaje"
    ]
  },
  {
    "id": "i1176",
    "name": "Objeto de deseo: Pollen corazón",
    "category": "npc",
    "zoneId": "z21",
    "x": -471.8,
    "y": 300.57,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Pollen Heart",
      "personaje"
    ]
  },
  {
    "id": "i1177",
    "name": "Objeto de deseo: Encursted corazón",
    "category": "npc",
    "zoneId": "z43",
    "x": -345.49,
    "y": 114.49,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Encursted Heart",
      "personaje"
    ]
  },
  {
    "id": "i1178",
    "name": "Objeto de deseo: sangre plasmiada",
    "category": "npc",
    "zoneId": "z4",
    "x": -622.89,
    "y": 148.16,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmified Blood",
      "personaje"
    ]
  },
  {
    "id": "i1179",
    "name": "Objeto de deseo: sangre plasmiada",
    "category": "npc",
    "zoneId": "z4",
    "x": -636.49,
    "y": 122.35,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmified Blood",
      "personaje"
    ]
  },
  {
    "id": "i1180",
    "name": "Objeto de deseo: sangre plasmiada",
    "category": "npc",
    "zoneId": "z1",
    "x": -637.49,
    "y": 99.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmified Blood",
      "personaje"
    ]
  },
  {
    "id": "i1181",
    "name": "Objeto de deseo: nuez de concha",
    "category": "npc",
    "zoneId": "z43",
    "x": -361.21,
    "y": 136.69,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Crustnut",
      "personaje"
    ]
  },
  {
    "id": "i1182",
    "name": "Objeto de deseo: ojo de la Madre de la Camada",
    "category": "npc",
    "zoneId": "z25",
    "x": -224.86,
    "y": 313.22,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Broodmother's Eye",
      "personaje"
    ]
  },
  {
    "id": "i1183",
    "name": "Objeto de deseo: Cogheart Piece #1",
    "category": "npc",
    "zoneId": "z27",
    "x": -255.57,
    "y": 486.13,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Cogheart Piece #1",
      "personaje"
    ]
  },
  {
    "id": "i1184",
    "name": "Objeto de deseo: Cogheart Piece #2",
    "category": "npc",
    "zoneId": "z41",
    "x": -311.19,
    "y": 787.5,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Cogheart Piece #2",
      "personaje"
    ]
  },
  {
    "id": "i1185",
    "name": "Objeto de deseo: Cogheart Piece #3",
    "category": "npc",
    "zoneId": "z35",
    "x": -196.21,
    "y": 782.72,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Cogheart Piece #3",
      "personaje"
    ]
  },
  {
    "id": "i1186",
    "name": "Objeto de deseo: plasmio #1",
    "category": "npc",
    "zoneId": "z1",
    "x": -660.81,
    "y": 76.02,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmium #1",
      "personaje"
    ]
  },
  {
    "id": "i1187",
    "name": "Objeto de deseo: plasmio #2",
    "category": "npc",
    "zoneId": "z4",
    "x": -662.81,
    "y": 156.21,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmium #2",
      "personaje"
    ]
  },
  {
    "id": "i1188",
    "name": "Objeto de deseo: plasmio #3",
    "category": "npc",
    "zoneId": "z4",
    "x": -628.41,
    "y": 135.21,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmium #3",
      "personaje"
    ]
  },
  {
    "id": "i1189",
    "name": "Objeto de deseo: plasmio glándula",
    "category": "npc",
    "zoneId": "z4",
    "x": -603.42,
    "y": 130.21,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Plasmium Gland",
      "personaje"
    ]
  },
  {
    "id": "i1190",
    "name": "Objeto de deseo: doncella's alma",
    "category": "npc",
    "zoneId": "z0",
    "x": -696.6,
    "y": 208.01,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Maiden's Soul",
      "personaje"
    ]
  },
  {
    "id": "i1191",
    "name": "Objeto de deseo: gema de pedernal #1",
    "category": "npc",
    "zoneId": "z3",
    "x": -678.4,
    "y": 348,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Flintgem #1",
      "personaje"
    ]
  },
  {
    "id": "i1192",
    "name": "Objeto de deseo: gema de pedernal #2",
    "category": "npc",
    "zoneId": "z6",
    "x": -619.81,
    "y": 403.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Flintgem #2",
      "personaje"
    ]
  },
  {
    "id": "i1193",
    "name": "Objeto de deseo: gema de pedernal #3",
    "category": "npc",
    "zoneId": "z20",
    "x": -653.01,
    "y": 507.19,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Flintgem #3",
      "personaje"
    ]
  },
  {
    "id": "i1194",
    "name": "Objeto de deseo: mora de musgo #1",
    "category": "npc",
    "zoneId": "z1",
    "x": -688.6,
    "y": 153.01,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #1",
      "personaje"
    ]
  },
  {
    "id": "i1195",
    "name": "Objeto de deseo: mora de musgo #2",
    "category": "npc",
    "zoneId": "z0",
    "x": -730.59,
    "y": 229.61,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #2",
      "personaje"
    ]
  },
  {
    "id": "i1196",
    "name": "Objeto de deseo: mora de musgo #3",
    "category": "npc",
    "zoneId": "z5",
    "x": -754.39,
    "y": 272.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #3",
      "personaje"
    ]
  },
  {
    "id": "i1197",
    "name": "Objeto de deseo: mora de musgo #4",
    "category": "npc",
    "zoneId": "z2",
    "x": -714.4,
    "y": 276.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #4",
      "personaje"
    ]
  },
  {
    "id": "i1198",
    "name": "Objeto de deseo: mora de musgo #5",
    "category": "npc",
    "zoneId": "z2",
    "x": -680.2,
    "y": 280.4,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #5",
      "personaje"
    ]
  },
  {
    "id": "i1199",
    "name": "Objeto de deseo: mora de musgo #6",
    "category": "npc",
    "zoneId": "z3",
    "x": -646.41,
    "y": 338.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #6",
      "personaje"
    ]
  },
  {
    "id": "i1200",
    "name": "Objeto de deseo: mora de musgo #7",
    "category": "npc",
    "zoneId": "z35",
    "x": -204.83,
    "y": 740.44,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry #7",
      "personaje"
    ]
  },
  {
    "id": "i1201",
    "name": "Objeto de deseo: mora de musgo Stew",
    "category": "npc",
    "zoneId": "z3",
    "x": -634.01,
    "y": 346.4,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Mossberry Stew",
      "personaje"
    ]
  },
  {
    "id": "i1202",
    "name": "Objeto de deseo: corona fragmento",
    "category": "npc",
    "zoneId": "z6",
    "x": -671.61,
    "y": 493.79,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Crown Fragment",
      "personaje"
    ]
  },
  {
    "id": "i1203",
    "name": "Objeto de deseo: Horn fragmento",
    "category": "npc",
    "zoneId": "z9",
    "x": -730.59,
    "y": 921.56,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Horn Fragment",
      "personaje"
    ]
  },
  {
    "id": "i1204",
    "name": "Objeto de deseo: muñeca de hierba",
    "category": "npc",
    "zoneId": "z46",
    "x": -675.2,
    "y": 1056.95,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Grass Doll",
      "personaje"
    ]
  },
  {
    "id": "i1205",
    "name": "Objeto de deseo: añejo néctar",
    "category": "npc",
    "zoneId": "z13",
    "x": -583.42,
    "y": 758.37,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Vintage Nectar",
      "personaje"
    ]
  },
  {
    "id": "i1206",
    "name": "Objeto de deseo: cazador's diario",
    "category": "npc",
    "zoneId": "z13",
    "x": -549.43,
    "y": 756.97,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Hunter's Journal",
      "personaje"
    ]
  },
  {
    "id": "i1207",
    "name": "Objeto de deseo: Acero Spines",
    "category": "npc",
    "zoneId": "z12",
    "x": -470.64,
    "y": 891.56,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Steel Spines",
      "personaje"
    ]
  },
  {
    "id": "i1208",
    "name": "Objeto de deseo: gusarajo de barro en escabeche",
    "category": "npc",
    "zoneId": "z12",
    "x": -477.24,
    "y": 911.56,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Pickled Muckmaggot",
      "personaje"
    ]
  },
  {
    "id": "i1209",
    "name": "Objeto de deseo: herramienta arruinada",
    "category": "npc",
    "zoneId": "z46",
    "x": -440.45,
    "y": 1101.75,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Ruined Tool",
      "personaje"
    ]
  },
  {
    "id": "i1210",
    "name": "Objeto de deseo: brote retorcido",
    "category": "npc",
    "zoneId": "z18",
    "x": -374.46,
    "y": 876.96,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Twisted Bud",
      "personaje"
    ]
  },
  {
    "id": "i1211",
    "name": "Objeto de deseo: buscador's alma",
    "category": "npc",
    "zoneId": "z19",
    "x": -266.08,
    "y": 979.96,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Seeker's Soul",
      "personaje"
    ]
  },
  {
    "id": "i1212",
    "name": "Objeto de deseo: ermitaño's alma",
    "category": "npc",
    "zoneId": "z20",
    "x": -619.21,
    "y": 551.78,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Hermit's Soul",
      "personaje"
    ]
  },
  {
    "id": "i1213",
    "name": "Objeto de deseo: Courier's loncha",
    "category": "npc",
    "zoneId": "z20",
    "x": -578.42,
    "y": 540.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Courier's Rasher",
      "personaje"
    ]
  },
  {
    "id": "i1214",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #1",
    "category": "npc",
    "zoneId": "z20",
    "x": -547.43,
    "y": 548.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #1",
      "personaje"
    ]
  },
  {
    "id": "i1215",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #2",
    "category": "npc",
    "zoneId": "z20",
    "x": -541.43,
    "y": 551.78,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #2",
      "personaje"
    ]
  },
  {
    "id": "i1216",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #3",
    "category": "npc",
    "zoneId": "z20",
    "x": -536.63,
    "y": 537.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #3",
      "personaje"
    ]
  },
  {
    "id": "i1217",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #4",
    "category": "npc",
    "zoneId": "z20",
    "x": -529.83,
    "y": 553.98,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #4",
      "personaje"
    ]
  },
  {
    "id": "i1218",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #5",
    "category": "npc",
    "zoneId": "z20",
    "x": -519.83,
    "y": 528.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #5",
      "personaje"
    ]
  },
  {
    "id": "i1219",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #6",
    "category": "npc",
    "zoneId": "z20",
    "x": -615.22,
    "y": 552.18,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #6",
      "personaje"
    ]
  },
  {
    "id": "i1220",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #7",
    "category": "npc",
    "zoneId": "z20",
    "x": -625.21,
    "y": 548.78,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #7",
      "personaje"
    ]
  },
  {
    "id": "i1221",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #8",
    "category": "npc",
    "zoneId": "z20",
    "x": -629.12,
    "y": 543.2,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #8",
      "personaje"
    ]
  },
  {
    "id": "i1222",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #9",
    "category": "npc",
    "zoneId": "z20",
    "x": -640.81,
    "y": 555.38,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #9",
      "personaje"
    ]
  },
  {
    "id": "i1223",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #10",
    "category": "npc",
    "zoneId": "z20",
    "x": -646.41,
    "y": 544.18,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #10",
      "personaje"
    ]
  },
  {
    "id": "i1224",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #11",
    "category": "npc",
    "zoneId": "z20",
    "x": -651.41,
    "y": 551.98,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #11",
      "personaje"
    ]
  },
  {
    "id": "i1225",
    "name": "Objeto de deseo: campana de plata (ubicación aleatoria) #12",
    "category": "npc",
    "zoneId": "z20",
    "x": -629.47,
    "y": 552.64,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Silver Bell (Random Spawn Location) #12",
      "personaje"
    ]
  },
  {
    "id": "i1226",
    "name": "Objeto de deseo: Polip corazón #1",
    "category": "npc",
    "zoneId": "z20",
    "x": -555.43,
    "y": 486.19,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Polip Heart #1",
      "personaje"
    ]
  },
  {
    "id": "i1227",
    "name": "Objeto de deseo: Polip corazón #2",
    "category": "npc",
    "zoneId": "z20",
    "x": -545.03,
    "y": 470.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Polip Heart #2",
      "personaje"
    ]
  },
  {
    "id": "i1228",
    "name": "Objeto de deseo: Polip corazón #3",
    "category": "npc",
    "zoneId": "z21",
    "x": -522.03,
    "y": 425.59,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Polip Heart #3",
      "personaje"
    ]
  },
  {
    "id": "i1229",
    "name": "Objeto de deseo: Polip corazón #4",
    "category": "npc",
    "zoneId": "z21",
    "x": -494.44,
    "y": 427.59,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Polip Heart #4",
      "personaje"
    ]
  },
  {
    "id": "i1230",
    "name": "Objeto de deseo: Polip corazón #5",
    "category": "npc",
    "zoneId": "z21",
    "x": -531.83,
    "y": 380.8,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Polip Heart #5",
      "personaje"
    ]
  },
  {
    "id": "i1231",
    "name": "Objeto de deseo: Polip corazón #6",
    "category": "npc",
    "zoneId": "z20",
    "x": -556.03,
    "y": 441.99,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Polip Heart #6",
      "personaje"
    ]
  },
  {
    "id": "i1232",
    "name": "Objeto de deseo: cazador's corazón",
    "category": "npc",
    "zoneId": "z46",
    "x": -607.22,
    "y": 1053.35,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Hunter's Heart",
      "personaje"
    ]
  },
  {
    "id": "i1233",
    "name": "Objeto de deseo: Conjoined corazón",
    "category": "npc",
    "zoneId": "z46",
    "x": -547.6,
    "y": 1074.5,
    "description": "Un objeto que piden los NPCs.",
    "search": [
      "Wish Item - Conjoined Heart",
      "personaje"
    ]
  },
  {
    "id": "i1234",
    "name": "Jefe: Garmond & Zaza",
    "category": "jefe",
    "zoneId": "z49",
    "x": -251.89,
    "y": 850.66,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Garmond & Zaza",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1235",
    "name": "Jefe: Shakra",
    "category": "jefe",
    "zoneId": "z7",
    "x": -587.2,
    "y": 629.73,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Shakra",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1236",
    "name": "Jefe: Comecampanas",
    "category": "jefe",
    "zoneId": "z41",
    "x": -329.51,
    "y": 751.63,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Bell Eater",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1237",
    "name": "Jefe: Nyleth",
    "category": "jefe",
    "zoneId": "z21",
    "x": -471.98,
    "y": 297.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Nyleth",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1238",
    "name": "Jefe: santuario Guardian Seth",
    "category": "jefe",
    "zoneId": "z42",
    "x": -463.27,
    "y": 352.19,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Shrine Guardian Seth",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1239",
    "name": "Jefe: Lace #2",
    "category": "jefe",
    "zoneId": "z34",
    "x": -118.18,
    "y": 647.41,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Lace #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1240",
    "name": "Jefe: musgo madre #2",
    "category": "jefe",
    "zoneId": "z0",
    "x": -736.74,
    "y": 227.31,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Moss Mother #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1241",
    "name": "Jefe: Lost Lace",
    "category": "jefe",
    "zoneId": "z47",
    "x": -928.67,
    "y": 642.13,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Lost Lace",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1242",
    "name": "Jefe: pálidostag",
    "category": "jefe",
    "zoneId": "z46",
    "x": -473.44,
    "y": 1105.94,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Palestag",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1243",
    "name": "Jefe: Clover bailarinas",
    "category": "jefe",
    "zoneId": "z46",
    "x": -452.95,
    "y": 1171.39,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Clover Dancers",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1244",
    "name": "Jefe: The Unravelled",
    "category": "jefe",
    "zoneId": "z30",
    "x": -372.53,
    "y": 547,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - The Unravelled",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1245",
    "name": "Jefe: Second Sentinel",
    "category": "jefe",
    "zoneId": "z34",
    "x": -204.14,
    "y": 614.41,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Second Sentinel",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1246",
    "name": "Jefe: alfilerestress",
    "category": "jefe",
    "zoneId": "z25",
    "x": -177.69,
    "y": 275.44,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Pinstress",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1247",
    "name": "Jefe: Primero Sinner",
    "category": "jefe",
    "zoneId": "z42",
    "x": -313.52,
    "y": 394.5,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - First Sinner",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1248",
    "name": "Jefe: Madre de la Camada",
    "category": "jefe",
    "zoneId": "z25",
    "x": -226.37,
    "y": 313.19,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Broodmother",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1249",
    "name": "Jefe: Voltvyrm",
    "category": "jefe",
    "zoneId": "z23",
    "x": -314.01,
    "y": 141.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Voltvyrm",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1250",
    "name": "Jefe: Raging Vonchfly",
    "category": "jefe",
    "zoneId": "z43",
    "x": -336.14,
    "y": 121.97,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Raging Vonchfly",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1251",
    "name": "Jefe: Watcher at the Edge",
    "category": "jefe",
    "zoneId": "z45",
    "x": -388.77,
    "y": 74.75,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Watcher at the Edge",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1252",
    "name": "Jefe: Crust King Khann",
    "category": "jefe",
    "zoneId": "z43",
    "x": -345.41,
    "y": 117.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Crust King Khann",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1253",
    "name": "Jefe: Gran madre Seda",
    "category": "jefe",
    "zoneId": "z36",
    "x": -45.45,
    "y": 647.31,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Grand Mother Silk",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1254",
    "name": "Jefe: engranajes bailarinas",
    "category": "jefe",
    "zoneId": "z34",
    "x": -228.52,
    "y": 646.14,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Cogwork Dancers",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1255",
    "name": "Jefe: Trobbio",
    "category": "jefe",
    "zoneId": "z33",
    "x": -307.23,
    "y": 749.78,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Trobbio",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1256",
    "name": "Jefe: Tormented Trobbio (Pain, Anguish and Misery wish)",
    "category": "jefe",
    "zoneId": "z33",
    "x": -307.23,
    "y": 749.78,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Tormented Trobbio (Pain, Anguish and Misery wish)",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1257",
    "name": "Jefe: musgo madre",
    "category": "jefe",
    "zoneId": "z0",
    "x": -705.8,
    "y": 207.21,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Moss Mother",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1258",
    "name": "Jefe: musgo madres",
    "category": "jefe",
    "zoneId": "z0",
    "x": -756.59,
    "y": 211.61,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Moss Mothers",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1259",
    "name": "Jefe: Summoned Saviour",
    "category": "jefe",
    "zoneId": "z1",
    "x": -710.2,
    "y": 67.82,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Summoned Saviour",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1260",
    "name": "Jefe: plasmiado Zango",
    "category": "jefe",
    "zoneId": "z1",
    "x": -657.81,
    "y": 60.42,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Plasmified Zango",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1261",
    "name": "Jefe: Skull Tyrant #2",
    "category": "jefe",
    "zoneId": "z2",
    "x": -697.8,
    "y": 282,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Skull Tyrant #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1262",
    "name": "Jefe: Bestia Campana",
    "category": "jefe",
    "zoneId": "z3",
    "x": -651.61,
    "y": 350.2,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Bell Beast",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1263",
    "name": "Jefe: Skull Tyrant",
    "category": "jefe",
    "zoneId": "z6",
    "x": -672.21,
    "y": 493.79,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Skull Tyrant",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1264",
    "name": "Jefe: Lace",
    "category": "jefe",
    "zoneId": "z7",
    "x": -711.4,
    "y": 694.57,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Lace",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1265",
    "name": "Jefe: Forebrothers Signis & Gron",
    "category": "jefe",
    "zoneId": "z47",
    "x": -763.99,
    "y": 696.97,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Forebrothers Signis & Gron",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1266",
    "name": "Jefe: Savage Bestiafly",
    "category": "jefe",
    "zoneId": "z13",
    "x": -604.42,
    "y": 801.87,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Savage Beastfly",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1267",
    "name": "Jefe: Fourth Chorus",
    "category": "jefe",
    "zoneId": "z9",
    "x": -732.59,
    "y": 921.56,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Fourth Chorus",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1268",
    "name": "Jefe: Savage Bestiafly #2",
    "category": "jefe",
    "zoneId": "z9",
    "x": -731.19,
    "y": 921.56,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Savage Beastfly #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1269",
    "name": "Jefe: Gurr the Outcast",
    "category": "jefe",
    "zoneId": "z46",
    "x": -678.4,
    "y": 1082.75,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Gurr the Outcast",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1270",
    "name": "Jefe: Skarrsinger Karmelita",
    "category": "jefe",
    "zoneId": "z46",
    "x": -608.42,
    "y": 1053.35,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Skarrsinger Karmelita",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1271",
    "name": "Jefe: Crawfather",
    "category": "jefe",
    "zoneId": "z11",
    "x": -599.7,
    "y": 1035.66,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Crawfather",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1272",
    "name": "Jefe: Disgraced Chef Lugoli",
    "category": "jefe",
    "zoneId": "z12",
    "x": -477.84,
    "y": 911.56,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Disgraced Chef Lugoli",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1273",
    "name": "Jefe: Ala de Brezal",
    "category": "jefe",
    "zoneId": "z7",
    "x": -583.42,
    "y": 621.78,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Moorwing",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1274",
    "name": "Jefe: Ala de Brezal #2",
    "category": "jefe",
    "zoneId": "z14",
    "x": -563.47,
    "y": 694.39,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Moorwing #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1275",
    "name": "Jefe: Viuda",
    "category": "jefe",
    "zoneId": "z20",
    "x": -558.83,
    "y": 549.38,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Widow",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1276",
    "name": "Jefe: Sister Splinter",
    "category": "jefe",
    "zoneId": "z21",
    "x": -515.23,
    "y": 428.19,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Sister Splinter",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1277",
    "name": "Jefe: Father of the Flame",
    "category": "jefe",
    "zoneId": "z30",
    "x": -475.04,
    "y": 539.18,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Father of the Flame",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1278",
    "name": "Jefe: Fantasmas",
    "category": "jefe",
    "zoneId": "z41",
    "x": -360.86,
    "y": 803.37,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Phantom",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1279",
    "name": "Jefe: Groal the Great",
    "category": "jefe",
    "zoneId": "z19",
    "x": -272.08,
    "y": 984.75,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Groal the Great",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1280",
    "name": "Jefe: Great Conchflies",
    "category": "jefe",
    "zoneId": "z22",
    "x": -478.44,
    "y": 204.81,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Great Conchflies",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1281",
    "name": "Jefe: Last Judge",
    "category": "jefe",
    "zoneId": "z42",
    "x": -410.65,
    "y": 340.2,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Last Judge",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1282",
    "name": "Jefe: Lost Garmond",
    "category": "jefe",
    "zoneId": "z22",
    "x": -448.65,
    "y": 145.41,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Boss - Lost Garmond",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1283",
    "name": "Mini-jefe: Roof Crab",
    "category": "jefe",
    "zoneId": "z4",
    "x": -644.08,
    "y": 196.63,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Mini-Boss - Roof Crab",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1284",
    "name": "Mini-jefe: rosario peregrino",
    "category": "jefe",
    "zoneId": "z1",
    "x": -702.63,
    "y": 141.5,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Mini-Boss - Rosary Pilgrim",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1285",
    "name": "Mini-jefe: Roachkeeper",
    "category": "jefe",
    "zoneId": "z18",
    "x": -420.02,
    "y": 926.5,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Mini-Boss - Roachkeeper",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1286",
    "name": "Mini-jefe: Skarrgard",
    "category": "jefe",
    "zoneId": "z20",
    "x": -664.35,
    "y": 553.69,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Mini-Boss - Skarrgard",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1287",
    "name": "Mini-jefe: rosario peregrino",
    "category": "jefe",
    "zoneId": "z21",
    "x": -567.77,
    "y": 326.44,
    "description": "¡Un jefe! Prepárate para una gran pelea.",
    "search": [
      "Mini-Boss - Rosary Pilgrim",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1288",
    "name": "Pelea: Save Plinney",
    "category": "jefe",
    "zoneId": "z21",
    "x": -567.7,
    "y": 329.32,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Save Plinney",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1289",
    "name": "Pelea: For añejo néctar",
    "category": "jefe",
    "zoneId": "z13",
    "x": -579.66,
    "y": 758.29,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - For Vintage Nectar",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1290",
    "name": "Pelea: Free Sherma",
    "category": "jefe",
    "zoneId": "z32",
    "x": -337.58,
    "y": 661.04,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Free Sherma",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1291",
    "name": "Pelea: engranajes Core",
    "category": "jefe",
    "zoneId": "z31",
    "x": -254.04,
    "y": 604.25,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Cogwork Core",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1292",
    "name": "Pelea: For Pristine Core",
    "category": "jefe",
    "zoneId": "z33",
    "x": -273.11,
    "y": 671.04,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - For Pristine Core",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1293",
    "name": "Pelea: ???",
    "category": "jefe",
    "zoneId": "z28",
    "x": -297.86,
    "y": 459.81,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - ???",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1294",
    "name": "Pelea: La Losa",
    "category": "jefe",
    "zoneId": "z25",
    "x": -262.66,
    "y": 383.56,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - The Slab",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1295",
    "name": "Pelea: Fuerte Blanco",
    "category": "jefe",
    "zoneId": "z29",
    "x": -410.91,
    "y": 691.48,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Whiteward",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1296",
    "name": "Pelea: For recipientes de voltio",
    "category": "jefe",
    "zoneId": "z35",
    "x": -161.36,
    "y": 768.57,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - For Voltvessels",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1297",
    "name": "Pelea: La Losa #2",
    "category": "jefe",
    "zoneId": "z25",
    "x": -226.42,
    "y": 316.15,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - The Slab #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1298",
    "name": "Pelea: Lost Verdania",
    "category": "jefe",
    "zoneId": "z46",
    "x": -495.78,
    "y": 1103.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Lost Verdania",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1299",
    "name": "Pelea: bóvedaborn",
    "category": "jefe",
    "zoneId": "z49",
    "x": -239.45,
    "y": 753.31,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Vaultborn",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1300",
    "name": "Pelea: Salones Altos",
    "category": "jefe",
    "zoneId": "z27",
    "x": -215.17,
    "y": 548.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - High Halls",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1301",
    "name": "Pelea: Salones Altos #2",
    "category": "jefe",
    "zoneId": "z27",
    "x": -215.17,
    "y": 548.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - High Halls #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1302",
    "name": "Pelea: From Cuna",
    "category": "jefe",
    "zoneId": "z34",
    "x": -186.82,
    "y": 672.16,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - From Cradle",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1303",
    "name": "Pelea: Subterráneos #2",
    "category": "jefe",
    "zoneId": "z29",
    "x": -431.6,
    "y": 610.56,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Underworks #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1304",
    "name": "Pelea: Errante's Chapel",
    "category": "jefe",
    "zoneId": "z1",
    "x": -694,
    "y": 78.42,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Wanderer's Chapel",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1305",
    "name": "Pelea: Médula #1",
    "category": "jefe",
    "zoneId": "z6",
    "x": -695.4,
    "y": 357.6,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Marrow #1",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1306",
    "name": "Pelea: Médula #2",
    "category": "jefe",
    "zoneId": "z6",
    "x": -623.61,
    "y": 431.99,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Marrow #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1307",
    "name": "Pelea: Muelles Profundos #1",
    "category": "jefe",
    "zoneId": "z8",
    "x": -697.6,
    "y": 592.78,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Deep Docks #1",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1308",
    "name": "Pelea: Muelles Profundos #2",
    "category": "jefe",
    "zoneId": "z8",
    "x": -733.59,
    "y": 690.37,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Deep Docks #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1309",
    "name": "Pelea: Muelles Profundos #3",
    "category": "jefe",
    "zoneId": "z9",
    "x": -749.59,
    "y": 818.57,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Deep Docks #3",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1310",
    "name": "Pelea: cazador's March #1",
    "category": "jefe",
    "zoneId": "z7",
    "x": -651.81,
    "y": 730.57,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Hunter's March #1",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1311",
    "name": "Pelea: cazador's March #2",
    "category": "jefe",
    "zoneId": "z7",
    "x": -643.01,
    "y": 683.18,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Hunter's March #2",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1312",
    "name": "Pelea: cazador's March #3",
    "category": "jefe",
    "zoneId": "z13",
    "x": -608.62,
    "y": 749.37,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Hunter's March #3",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1313",
    "name": "Pelea: cazador's March #4",
    "category": "jefe",
    "zoneId": "z13",
    "x": -608.62,
    "y": 749.37,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Hunter's March #4",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1314",
    "name": "Pelea: Pelea de Cuervos",
    "category": "jefe",
    "zoneId": "z11",
    "x": -557.6,
    "y": 1034.19,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Crow Battle",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1315",
    "name": "Pelea: Pantano Gris #1",
    "category": "jefe",
    "zoneId": "z13",
    "x": -547.83,
    "y": 726.77,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Greymoor #1",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1316",
    "name": "Pelea: Bosque de Conchas",
    "category": "jefe",
    "zoneId": "z20",
    "x": -560.03,
    "y": 457.59,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Shellwood",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1317",
    "name": "Pelea: Subterráneos",
    "category": "jefe",
    "zoneId": "z30",
    "x": -405.02,
    "y": 503.63,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Underworks",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1318",
    "name": "Pelea: Segador's Chapel",
    "category": "jefe",
    "zoneId": "z20",
    "x": -556.23,
    "y": 600.38,
    "description": "Una arena donde hay una pelea.",
    "search": [
      "Battle - Reaper's Chapel",
      "jefe",
      "jefes"
    ]
  },
  {
    "id": "i1319",
    "name": "Recuerdo de Verdania #1",
    "category": "info",
    "zoneId": "z46",
    "x": -526.84,
    "y": 1144.81,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #1"
    ]
  },
  {
    "id": "i1320",
    "name": "Recuerdo de Verdania #2",
    "category": "info",
    "zoneId": "z11",
    "x": -506.03,
    "y": 1022.13,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #2"
    ]
  },
  {
    "id": "i1321",
    "name": "Recuerdo de Verdania #3",
    "category": "info",
    "zoneId": "z11",
    "x": -485.61,
    "y": 1029.41,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #3"
    ]
  },
  {
    "id": "i1322",
    "name": "Recuerdo de Verdania #4",
    "category": "info",
    "zoneId": "z46",
    "x": -479.1,
    "y": 1074.64,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #4"
    ]
  },
  {
    "id": "i1323",
    "name": "Recuerdo de Verdania #5",
    "category": "info",
    "zoneId": "z18",
    "x": -460.28,
    "y": 1035.14,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #5"
    ]
  },
  {
    "id": "i1324",
    "name": "Recuerdo de Verdania #6",
    "category": "info",
    "zoneId": "z46",
    "x": -474.22,
    "y": 1182.08,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #6"
    ]
  },
  {
    "id": "i1325",
    "name": "Recuerdo de Verdania #7",
    "category": "info",
    "zoneId": "z46",
    "x": -490.03,
    "y": 1117.39,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Memory for Verdania #7"
    ]
  },
  {
    "id": "i1326",
    "name": "Placa",
    "category": "info",
    "zoneId": "z46",
    "x": -510.32,
    "y": 1261.55,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Plate"
    ]
  },
  {
    "id": "i1327",
    "name": "Placa",
    "category": "info",
    "zoneId": "z46",
    "x": -486.44,
    "y": 1213.92,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Plate"
    ]
  },
  {
    "id": "i1328",
    "name": "Placa",
    "category": "info",
    "zoneId": "z46",
    "x": -494.44,
    "y": 1247.05,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Plate"
    ]
  },
  {
    "id": "i1329",
    "name": "Placa",
    "category": "info",
    "zoneId": "z46",
    "x": -510.32,
    "y": 1234.54,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Plate"
    ]
  },
  {
    "id": "i1330",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z30",
    "x": -416.91,
    "y": 471.31,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1331",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z8",
    "x": -746.99,
    "y": 708.67,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1332",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z12",
    "x": -474.03,
    "y": 839.63,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1333",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z8",
    "x": -693.4,
    "y": 642.58,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1334",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z7",
    "x": -672.71,
    "y": 646.38,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1335",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z14",
    "x": -512.55,
    "y": 705.66,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1336",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z14",
    "x": -514.85,
    "y": 693.69,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1337",
    "name": "Entrar al balneario (por 10 rosarios)",
    "category": "info",
    "zoneId": "z39",
    "x": -240.08,
    "y": 1136.03,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Enter Spa (for 10 Rosaries)"
    ]
  },
  {
    "id": "i1338",
    "name": "Examinar: zarcillos del Vacío",
    "category": "info",
    "zoneId": "z47",
    "x": -888.03,
    "y": 700.45,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Examine - Void Tendrills"
    ]
  },
  {
    "id": "i1339",
    "name": "Rompible: suelo",
    "category": "info",
    "zoneId": "z42",
    "x": -458.16,
    "y": 414.44,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Floor"
    ]
  },
  {
    "id": "i1340",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z39",
    "x": -228.41,
    "y": 1077.39,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1341",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z42",
    "x": -389.66,
    "y": 425.19,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1342",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z28",
    "x": -370.11,
    "y": 438.38,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1343",
    "name": "Rompible: tubo",
    "category": "info",
    "zoneId": "z31",
    "x": -241.24,
    "y": 631.17,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Tube"
    ]
  },
  {
    "id": "i1344",
    "name": "Rompible: seda",
    "category": "info",
    "zoneId": "z27",
    "x": -199.54,
    "y": 544.78,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Silk"
    ]
  },
  {
    "id": "i1345",
    "name": "Rompible: máquina de confesión",
    "category": "info",
    "zoneId": "z30",
    "x": -398.02,
    "y": 566.81,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Confessional Machine"
    ]
  },
  {
    "id": "i1346",
    "name": "Rompible: estalactita",
    "category": "info",
    "zoneId": "z44",
    "x": -374.91,
    "y": 200.88,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Stalactite"
    ]
  },
  {
    "id": "i1347",
    "name": "Rompible: pincho",
    "category": "info",
    "zoneId": "z44",
    "x": -358.22,
    "y": 190.75,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Spike"
    ]
  },
  {
    "id": "i1348",
    "name": "Rompible: pincho",
    "category": "info",
    "zoneId": "z37",
    "x": -171.28,
    "y": 735.02,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Spike"
    ]
  },
  {
    "id": "i1349",
    "name": "Rompible: colmena",
    "category": "info",
    "zoneId": "z21",
    "x": -562.66,
    "y": 425.11,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Hive"
    ]
  },
  {
    "id": "i1350",
    "name": "Rompible: trampa",
    "category": "info",
    "zoneId": "z19",
    "x": -329.12,
    "y": 976.9,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Trap"
    ]
  },
  {
    "id": "i1351",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z17",
    "x": -426.39,
    "y": 857.62,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1352",
    "name": "Rompible: plataforma",
    "category": "info",
    "zoneId": "z49",
    "x": -270.05,
    "y": 826.94,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Platform"
    ]
  },
  {
    "id": "i1353",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z47",
    "x": -805.64,
    "y": 700.56,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1354",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z41",
    "x": -319.16,
    "y": 856.88,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1355",
    "name": "Despertar estatua",
    "category": "info",
    "zoneId": "z41",
    "x": -317.66,
    "y": 873.94,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Awake Statue"
    ]
  },
  {
    "id": "i1356",
    "name": "Rompible: plataforma",
    "category": "info",
    "zoneId": "z25",
    "x": -274.52,
    "y": 321.13,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Platform"
    ]
  },
  {
    "id": "i1357",
    "name": "Rompible: plataforma",
    "category": "info",
    "zoneId": "z30",
    "x": -434.52,
    "y": 528.16,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Platform"
    ]
  },
  {
    "id": "i1358",
    "name": "Rompible: lámpara",
    "category": "info",
    "zoneId": "z30",
    "x": -397.28,
    "y": 546,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Lamp"
    ]
  },
  {
    "id": "i1359",
    "name": "Rompible: cuerda",
    "category": "info",
    "zoneId": "z20",
    "x": -542.99,
    "y": 593.47,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Rope"
    ]
  },
  {
    "id": "i1360",
    "name": "Rompible: cuerda",
    "category": "info",
    "zoneId": "z14",
    "x": -579.83,
    "y": 699.84,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Rope"
    ]
  },
  {
    "id": "i1361",
    "name": "Activar luz",
    "category": "info",
    "zoneId": "z46",
    "x": -439.94,
    "y": 1119.13,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Activate Light"
    ]
  },
  {
    "id": "i1362",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z46",
    "x": -440.08,
    "y": 1124.03,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1363",
    "name": "Rompible: colmena",
    "category": "info",
    "zoneId": "z21",
    "x": -488.1,
    "y": 420.19,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Hive"
    ]
  },
  {
    "id": "i1364",
    "name": "Rompible: suelo",
    "category": "info",
    "zoneId": "z20",
    "x": -647.24,
    "y": 539.44,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Floor"
    ]
  },
  {
    "id": "i1365",
    "name": "Rompible: suelo",
    "category": "info",
    "zoneId": "z20",
    "x": -647.55,
    "y": 552.72,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Floor"
    ]
  },
  {
    "id": "i1366",
    "name": "Rompible: suelo",
    "category": "info",
    "zoneId": "z20",
    "x": -652.61,
    "y": 546.47,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Floor"
    ]
  },
  {
    "id": "i1367",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -699.33,
    "y": 937.59,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1368",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z14",
    "x": -539.74,
    "y": 725,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1369",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z13",
    "x": -527.6,
    "y": 732.31,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1370",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z14",
    "x": -519.72,
    "y": 727.81,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1371",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z14",
    "x": -509.47,
    "y": 729.44,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1372",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z10",
    "x": -696,
    "y": 828.77,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1373",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z2",
    "x": -671.21,
    "y": 314.2,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1374",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z3",
    "x": -636.91,
    "y": 268.7,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1375",
    "name": "Rompible: enredadera",
    "category": "info",
    "zoneId": "z3",
    "x": -633.91,
    "y": 280.7,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Vine"
    ]
  },
  {
    "id": "i1376",
    "name": "Rompible: enredadera",
    "category": "info",
    "zoneId": "z3",
    "x": -636.71,
    "y": 320.2,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Vine"
    ]
  },
  {
    "id": "i1377",
    "name": "Romper puerta",
    "category": "info",
    "zoneId": "z20",
    "x": -668.81,
    "y": 542.58,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Door"
    ]
  },
  {
    "id": "i1378",
    "name": "Enemigo",
    "category": "info",
    "zoneId": "z20",
    "x": -669.11,
    "y": 538.68,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Enemy"
    ]
  },
  {
    "id": "i1379",
    "name": "Abrir puerta",
    "category": "info",
    "zoneId": "z9",
    "x": -664.31,
    "y": 919.26,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Open Door"
    ]
  },
  {
    "id": "i1380",
    "name": "Romper puerta",
    "category": "info",
    "zoneId": "z9",
    "x": -721.85,
    "y": 861.63,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Door"
    ]
  },
  {
    "id": "i1381",
    "name": "Romper bomba de lava",
    "category": "info",
    "zoneId": "z9",
    "x": -736.77,
    "y": 1065.34,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Lava Bomb"
    ]
  },
  {
    "id": "i1382",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -719.22,
    "y": 969.88,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1383",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -717.97,
    "y": 961.38,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1384",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -713.41,
    "y": 959.5,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1385",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -717.58,
    "y": 930.31,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1386",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -717.45,
    "y": 921.63,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1387",
    "name": "Acceso a zona oculta",
    "category": "info",
    "zoneId": "z9",
    "x": -724.72,
    "y": 938.94,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Access Hidden Area"
    ]
  },
  {
    "id": "i1388",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -711.47,
    "y": 884.5,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1389",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z9",
    "x": -675.49,
    "y": 885.22,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1390",
    "name": "Plataforma que cae",
    "category": "info",
    "zoneId": "z10",
    "x": -655.35,
    "y": 898.56,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Drop Platform"
    ]
  },
  {
    "id": "i1391",
    "name": "Romper pared",
    "category": "info",
    "zoneId": "z10",
    "x": -641.22,
    "y": 878.13,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wall"
    ]
  },
  {
    "id": "i1392",
    "name": "Romper roca",
    "category": "info",
    "zoneId": "z10",
    "x": -634.22,
    "y": 886,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Rock"
    ]
  },
  {
    "id": "i1393",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z10",
    "x": -628.97,
    "y": 881.81,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1394",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z11",
    "x": -526.49,
    "y": 984.31,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1395",
    "name": "Romper roca de viento",
    "category": "info",
    "zoneId": "z10",
    "x": -581.28,
    "y": 881.56,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Wind Rock"
    ]
  },
  {
    "id": "i1396",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z13",
    "x": -628.36,
    "y": 740.16,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1397",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z30",
    "x": -443.99,
    "y": 473.91,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1398",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z30",
    "x": -471.86,
    "y": 482.25,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1399",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z30",
    "x": -407.02,
    "y": 610.78,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1400",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z30",
    "x": -477.22,
    "y": 518.75,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1401",
    "name": "Rompible: suelo",
    "category": "info",
    "zoneId": "z28",
    "x": -396.45,
    "y": 479.5,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Floor"
    ]
  },
  {
    "id": "i1402",
    "name": "Romper suelo",
    "category": "info",
    "zoneId": "z19",
    "x": -289.41,
    "y": 916.44,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Floor"
    ]
  },
  {
    "id": "i1403",
    "name": "Rompible: pared de coral",
    "category": "info",
    "zoneId": "z42",
    "x": -322.78,
    "y": 325.94,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Coral Crust Wall"
    ]
  },
  {
    "id": "i1404",
    "name": "Rompible: pared de coral",
    "category": "info",
    "zoneId": "z42",
    "x": -313.24,
    "y": 328.97,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Coral Crust Wall"
    ]
  },
  {
    "id": "i1405",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z33",
    "x": -290.41,
    "y": 738.25,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1406",
    "name": "Palanca",
    "category": "info",
    "zoneId": "z10",
    "x": -660.03,
    "y": 878.81,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Lever"
    ]
  },
  {
    "id": "i1407",
    "name": "Rompible: pincho",
    "category": "info",
    "zoneId": "z9",
    "x": -737.36,
    "y": 1088.75,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Spike"
    ]
  },
  {
    "id": "i1408",
    "name": "Romper bomba de lava",
    "category": "info",
    "zoneId": "z9",
    "x": -737.36,
    "y": 1088.75,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Lava Bomb"
    ]
  },
  {
    "id": "i1409",
    "name": "Rompible: plataforma",
    "category": "info",
    "zoneId": "z19",
    "x": -323.22,
    "y": 964.31,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Plaftorm"
    ]
  },
  {
    "id": "i1410",
    "name": "Rompible: pared",
    "category": "info",
    "zoneId": "z3",
    "x": -579.17,
    "y": 276.38,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break - Wall"
    ]
  },
  {
    "id": "i1411",
    "name": "Romper enredadera",
    "category": "info",
    "zoneId": "z12",
    "x": -491.78,
    "y": 822.25,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Vine"
    ]
  },
  {
    "id": "i1412",
    "name": "Romper cadena",
    "category": "info",
    "zoneId": "z6",
    "x": -697.8,
    "y": 429.69,
    "description": "Un interruptor o un marcador importante.",
    "search": [
      "Break Chain"
    ]
  },
  {
    "id": "i1413",
    "name": "Dispensador de sartas de rosarios",
    "category": "info",
    "zoneId": "z26",
    "x": -167.77,
    "y": 502.08,
    "description": "Un punto de información del mapa.",
    "search": [
      "Rosary String Dispenser"
    ]
  },
  {
    "id": "i1414",
    "name": "Dispensador de sartas de rosarios",
    "category": "info",
    "zoneId": "z12",
    "x": -548.53,
    "y": 860.86,
    "description": "Un punto de información del mapa.",
    "search": [
      "Rosary String Dispenser"
    ]
  },
  {
    "id": "i1415",
    "name": "Dispensador de sartas de rosarios",
    "category": "info",
    "zoneId": "z3",
    "x": -579.32,
    "y": 273,
    "description": "Un punto de información del mapa.",
    "search": [
      "Rosary String Dispenser"
    ]
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
