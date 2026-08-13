import fs from "node:fs";
import path from "node:path";

const URL_SSMAP =
  "https://scripterswar.com/compiled/hollowknight/ssMap/ssMap.js?cd093883e5edbd79d11a";

const CATEGORY_MAP = {
  benches: "bench",
  bellway: "bench",
  ventrica: "bench",
  ability: "habilidad",
  tool: "habilidad",
  crest: "habilidad",
  key: "habilidad",
  mask: "mejora",
  spool: "mejora",
  locket: "mejora",
  heart: "mejora",
  kit: "mejora",
  pouch: "mejora",
  upgnail: "mejora",
  craftmetal: "mejora",
  misc: "mejora",
  rosary: "coleccionable",
  rosaryitem: "coleccionable",
  shard: "coleccionable",
  sharditem: "coleccionable",
  flea: "coleccionable",
  tradable: "coleccionable",
  memento: "coleccionable",
  silkeater: "coleccionable",
  mapitem: "coleccionable",
  npc: "npc",
  vendor: "npc",
  wish: "npc",
  wishitem: "npc",
  boss: "jefe",
  arena: "jefe",
  maps: "info",
  shortcut: "info",
  permFlags: "info",
  info: "info",
};

const DESCRIPTIONS = {
  benches: "Una bencilla para descansar y guardar tu progreso.",
  bellway: "Estación de campanas para viajar rápido por Pharloom.",
  ventrica: "Estación de ventrículos para viajar rápido por Pharloom.",
  ability: "¡Una habilidad nueva para Hornet! Encuéntrala y apréndela.",
  tool: "Una herramienta que Hornet puede equipar.",
  crest: "Un escudo de la seda con un poder especial.",
  key: "Una llave que abre algo muy importante.",
  mask: "¡Un fragmento de máscara! Reúne 4 y sube tu salud.",
  spool: "Un fragmento de carrete para mejorar tu aguja.",
  locket: "Un medallón de recuerdo. Hay que encontrarlos todos.",
  heart: "Un corazón de seda. ¡Aumenta tu vida!",
  kit: "Un kit de creación para hacer herramientas.",
  pouch: "Una bolsa de herramientas. ¡Más espacio para equipar!",
  upgnail: "Aceite pálido para mejorar tu aguja.",
  craftmetal: "Metal de creación para fabricar herramientas.",
  misc: "Una mejora misteriosa.",
  rosary: "Un depósito de rosarios (la moneda de Pharloom).",
  rosaryitem: "Una sarta de rosarios para gastar en las tiendas.",
  shard: "Un depósito de fragmentos de concha.",
  sharditem: "Un puñado de fragmentos de concha.",
  flea: "¡Una pulga perdida! Búscalas todas para un premio.",
  tradable: "Un objeto valioso para cambiar.",
  memento: "Un recuerdo de Pharloom.",
  silkeater: "Un comecera de seda que devuelve algo a cambio.",
  mapitem: "Un objeto relacionado con el mapa.",
  npc: "Un personaje del reino de Pharloom.",
  vendor: "Una tienda donde comprar cosas.",
  wish: "Un deseo. Parte de una misión importante.",
  wishitem: "Un objeto que piden los NPCs.",
  boss: "¡Un jefe! Prepárate para una gran pelea.",
  arena: "Una arena donde hay una pelea.",
  maps: "Shakra o un mapa del reino.",
  shortcut: "Un atajo oculto que conecta dos lugares.",
  permFlags: "Un interruptor o un marcador importante.",
  info: "Un punto de información del mapa.",
};

// ---------- TRADUCCIONES ----------

const ZONE_TRANS = {
  "MOSS GROTTO": "Gruta de Musgo",
  Bonegrave: "Tumba de Huesos",
  "Bone Bottom": "Fondo de Huesos",
  Mosshome: "Hogar de Musgo",
  WORMWAYS: "Caminos de Gusano",
  "Weavenest Atla": "Nidal Atla",
  "THE MARROW": "La Médula",
  "HUNTER'S MARCH": "Marcha del Cazador",
  "DEEP DOCKS": "Muelles Profundos",
  "Pilgrim's Rest": "Descanso del Peregrino",
  "FAR FIELDS": "Campos Lejanos",
  "Craw Lake": "Lago Rastrero",
  "SINNER'S ROAD": "Camino del Pecador",
  "Halfway Home": "Casa a Mitad de Camino",
  GREYMOOR: "Pantano Gris",
  "Wisp Thicket": "Matorral de Cendales",
  "Exhaust Organ": "Órgano Exhausto",
  "The Mist": "La Niebla",
  BILEWATER: "Aguas Biliares",
  Bilehaven: "Puerto de la Bilis",
  Bellhart: "Corazón de Campana",
  SHELLWOOD: "Bosque de Conchas",
  "Blasted Steps": "Escalones Demolidos",
  "MOUNT FAY": "Monte Fay",
  Brightvein: "Vena Brillante",
  "THE SLAB": "La Losa",
  "HIGH HALLS": "Salones Altos",
  "The Forum": "El Foro",
  "Citadel Spa": "Balneario de la Ciudadela",
  "The Cauldron": "El Caldero",
  Underworks: "Subterráneos",
  "CHORAL CHAMBERS": "Cámaras del Coro",
  WHITEWARD: "Fuerte Blanco",
  "The Stage": "El Escenario",
  "COGWORK CORE": "Núcleo de Engranajes",
  MEMORIUM: "El Memorial",
  "THE CRADLE (ACT 2)": "La Cuna (Acto 2)",
  "THE CRADLE (ACT 3)": "La Cuna (Acto 3)",
  "The Surface": "La Superficie",
  Fleatopia: "Pulguilandia",
  "Pale Lake": "Lago Pálido",
  "WHISPERING VAULTS": "Bóvedas Susurrantes",
  "GRAND GATE": "Gran Puerta",
  "SANDS OF KARAK": "Arenas de Karak",
  Voltnest: "Nidal Voltio",
  "Coral Tower": "Torre de Coral",
  VERDANIA: "Verdania",
  "THE ABYSS": "El Abismo",
  "PUTRIFIED DUCTS": "Conductos Putrefactos",
  Songclave: "Clave del Canto",
};

const OVERRIDES = {
  Bench: "Bencilla",
  "Bench (for 60 Rosaries)": "Bencilla (por 60 rosarios)",
  "Bench [Temporary]": "Bencilla [Temporal]",
  Rosaries: "Rosarios",
  "Rosary Deposit": "Depósito de rosarios",
  "Rosary Chest": "Cofre de rosarios",
  "Rosary Necklace": "Collar de rosarios",
  "Rosary String": "Sarta de rosarios",
  "Frayed Rosary String": "Sarta de rosarios gastada",
  "Heavy Rosary Necklace": "Collar de rosarios pesado",
  "Pale Rosary Necklace": "Collar de rosarios pálido",
  "Rosary String Dispenser": "Dispensador de sartas de rosarios",
  "Shell Shards": "Fragmentos de concha",
  "Shell Shards (Hornet Statue)": "Fragmentos de concha (estatua de Hornet)",
  "Shell Shards (Outreachable without glitches)":
    "Fragmentos de concha (sin usar trucos)",
  "Shard Bundle": "Lote de fragmentos",
  "Beast Shard": "Fragmento de bestia",
  Lever: "Palanca",
  Plate: "Placa",
  Enemy: "Enemigo",
  "Hornet Statuette": "Estatua de Hornet",
  "Activate Light": "Activar luz",
  "Awake Statue": "Despertar estatua",
  "Open Door": "Abrir puerta",
  "Drop Platform": "Plataforma que cae",
  "Access Hidden Area": "Acceso a zona oculta",
  "Requirement Unknown": "Requisito desconocido",
  "White Key": "Llave Blanca",
  "Surgeon's Key": "Llave del Cirujano",
  "Diving Bell Key": "Llave de Campana de Buceo",
  "Architect's Key": "Llave del Arquitecto",
  "Bellhome Key": "Llave del Campanario",
  "Simple Key #1": "Llave sencilla #1",
  "Simple Key #2": "Llave sencilla #2",
  "Simple Key #3": "Llave sencilla #3",
  "Simple Key #4": "Llave sencilla #4",
  "Pristine Core": "Núcleo prístino",
  "Break Chain": "Romper cadena",
  "Break Door": "Romper puerta",
  "Break Floor": "Romper suelo",
  "Break Lava Bomb": "Romper bomba de lava",
  "Break Rock": "Romper roca",
  "Break Vine": "Romper enredadera",
  "Break Wall": "Romper pared",
  "Break Wind Rock": "Romper roca de viento",
  "Break - Confessional Machine": "Rompible: máquina de confesión",
  "Break - Coral Crust Wall": "Rompible: pared de coral",
  "Break - Floor": "Rompible: suelo",
  "Break - Hive": "Rompible: colmena",
  "Break - Lamp": "Rompible: lámpara",
  "Break - Plaftorm": "Rompible: plataforma",
  "Break - Platform": "Rompible: plataforma",
  "Break - Rope": "Rompible: cuerda",
  "Break - Silk": "Rompible: seda",
  "Break - Spike": "Rompible: pincho",
  "Break - Stalactite": "Rompible: estalactita",
  "Break - Trap": "Rompible: trampa",
  "Break - Tube": "Rompible: tubo",
  "Break - Vine": "Rompible: enredadera",
  "Break - Wall": "Rompible: pared",
  "Intersection - Up/Down or Left/Right":
    "Cruce: arriba/abajo o izquierda/derecha",
  "Enter Spa (for 10 Rosaries)": "Entrar al balneario (por 10 rosarios)",
  "Examine - Void Tendrills": "Examinar: zarcillos del Vacío",
  "Craw Summons": "Invocación de cras",
  "Requires Act 3": "Requiere Acto 3",
  "Requires breaking from above": "Requiere romper desde arriba",
  "Requires coming from the west side, which requires Silk Soar":
    "Requiere llegar desde el oeste (necesita Vuelo de Seda)",
  "Requires completing Crow Battle":
    "Requiere completar la Pelea de Cuervos",
  "Requires Flea Brew and Silkspeed Anklets":
    "Requiere Bebida de Pulgas y Tobilleras de Seda Veloz",
  "Requires Needolin and activating 5 bells":
    "Requiere el Aguijón y tocar 5 campanas",
  "Requires Silkspear Attack": "Requiere el ataque Lanza de Seda",
  "Unlocked after meeting Green Prince in Cogwork Core":
    "Se desbloquea tras conocer al Príncipe Verde en el Núcleo de Engranajes",
  "Unlocked during A Vassal Lost wish (Steel Soul only)":
    "Se desbloquea durante el deseo Un Vasallo Perdido (solo Alma de Acero)",
  "Unlocked during Final Audience wish":
    "Se desbloquea durante el deseo Audiencia Final",
  "Unlocked during Trail's End wish":
    "Se desbloquea durante el deseo Fin del Camino",
};

const ABILITY_TRANS = {
  Needolin: "Aguijón",
  "Cling Grip": "Agarre Firme",
  "Swift Step": "Paso Veloz",
  Clawline: "Garras de Escalada",
  "Drifter's Cloak": "Capa del Errante",
  "Faydown Cloak": "Capa de Plumón",
  "Silk Soar": "Vuelo de Seda",
  Silkspear: "Lanza de Seda",
  Sharpdart: "Dardo Afilado",
  "Elegy of the Deep": "Elegía de las Profundidades",
  "Cross Stitch": "Punto de Cruz",
  "Thread Storm": "Tormenta de Hilo",
  "Needle Strike": "Golpe de Aguja",
  "Pale Nails": "Agujas Pálidas",
  "Rune Rage": "Furia Rúnica",
  Sylphsong: "Canto de Silfo",
  "Architect's Melody": "Melodía del Arquitecto",
  "Conductor's Melody": "Melodía del Director",
  "Vaultkeeper's Melody": "Melodía del Guardián de la Bóveda",
  "Beastling Call": "Llamado de Cachorro",
  "Wreath of Purity": "Corona de la Pureza",
  "Thread Sphere": "Esfera de Hilo",
  "Ectasy of the End": "Éxtasis del Final",
};

const WORD_MAP = [
  ["Random Spawn Location", "ubicación aleatoria"],
  ["Up/Down or Left/Right", "arriba/abajo o izquierda/derecha"],
  ["for ", "por "],
  ["Rosaries", "rosarios"],
  ["Rosary", "rosario"],
  ["Shell Shards", "fragmentos de concha"],
  ["Shell Shard", "fragmento de concha"],
  ["Beast Shard", "fragmento de bestia"],
  ["Shard", "fragmento"],
  ["Necklace", "collar"],
  ["Chest", "cofre"],
  ["Deposit", "depósito"],
  ["Dispenser", "dispensador"],
  ["Heavy", "pesado"],
  ["Pale", "pálido"],
  ["Bench", "bencilla"],
  ["Hornet Statue", "estatua de Hornet"],
  ["Hornet", "Hornet"],
  ["Statue", "estatua"],
  ["Hidden", "oculto"],
  ["Hunter", "cazador"],
  ["Lost Fleas", "pulgas perdidas"],
  ["Lost Flea", "pulga perdida"],
  ["Silkeater", "comecera"],
  ["Crafting Kit", "kit de creación"],
  ["Tool Pouch", "bolsa de herramientas"],
  ["Pouch", "bolsa"],
  ["Craftmetal", "metal de creación"],
  ["Crafting", "creación"],
  ["Mask Shard", "fragmento de máscara"],
  ["Spool Fragment", "fragmento de carrete"],
  ["Memory Locket", "medallón de recuerdo"],
  ["Memory", "recuerdo"],
  ["Locket", "medallón"],
  ["Silk Heart", "corazón de seda"],
  ["Nail Upgrade", "mejora de aguja"],
  ["Upgrade", "mejora"],
  ["Pale Oil", "aceite pálido"],
  ["Apostate", "Apóstata"],
  ["Heretic", "Hereje"],
  ["Indolent", "Indolente"],
  ["Wish Item", "objeto de deseo"],
  ["Wish Progress", "progreso del deseo"],
  ["Wish", "deseo"],
  ["Memento", "recuerdo"],
  ["Tradable", "intercambiable"],
  ["One-Way Shortcut", "atajo de una vía"],
  ["Shortcut", "atajo"],
  ["Dancers", "bailarinas"],
  ["Mothers", "madres"],
  ["Mother", "madre"],
  ["Mini-Boss", "mini-jefe"],
  ["Boss", "jefe"],
  ["Requires", "Requiere"],
  ["Require", "Requiere"],
  ["Nectar", "néctar"],
  ["Vintage", "añejo"],
  ["Cursed", "maldito"],
  ["Bellhome", "Campanario"],
  ["Grand", "Gran"],
  ["Spa", "balneario"],
  ["Forge", "Forja"],
  ["Daughter", "Hija"],
  ["Architect", "Arquitecto"],
  ["Steel", "Acero"],
  ["Grass Doll", "muñeca de hierba"],
  ["Hermit", "ermitaño"],
  ["Soul", "alma"],
  ["Heart", "corazón"],
  ["Journal", "diario"],
  ["Rasher", "loncha"],
  ["Crown", "corona"],
  ["Fragment", "fragmento"],
  ["Crustnut", "nuez de concha"],
  ["Statuette", "estatuilla"],
  ["Flintgem", "gema de pedernal"],
  ["Silver Bell", "campana de plata"],
  ["Twisted Bud", "brote retorcido"],
  ["Steel Spines", "púas de acero"],
  ["Pickled Muckmaggot", "gusarajo de barro en escabeche"],
  ["Polip Heart", "corazón de pólipo"],
  ["Pollen Heart", "corazón de polen"],
  ["Plasmium", "plasmio"],
  ["Plasmified Blood", "sangre plasmiada"],
  ["Plasmified", "plasmiado"],
  ["Broodmother's Eye", "ojo de la Madre de la Camada"],
  ["Conjoined Heart", "corazón unido"],
  ["Encursted Heart", "corazón incrustado"],
  ["Mossberry", "mora de musgo"],
  ["Mossberry Stew", "guiso de moras de musgo"],
  ["Moss", "musgo"],
  ["Berry", "baya"],
  ["Seeker", "buscador"],
  ["Maiden", "doncella"],
  ["Ruined Tool", "herramienta arruinada"],
  ["Cloak", "capa"],
  ["Warding Bell", "campana protectora"],
  ["Weavelight", "luz de tejedora"],
  ["Weighted Belt", "cinturón con peso"],
  ["Wispfire Lantern", "linterna de fuego fatuo"],
  ["Voltvessels", "recipientes de voltio"],
  ["Volt Filament", "filamento de voltio"],
  ["Throwing Ring", "anillo arrojadizo"],
  ["Threefold Pin", "alfiler triple"],
  ["Thief's Mark", "marca del ladrón"],
  ["Tacks", "chinchetas"],
  ["Straight Pin", "alfiler recto"],
  ["Sting Shard", "fragmento punzante"],
  ["Snitch Pick", "púa delatora"],
  ["Shard Pendant", "colgante de fragmento"],
  ["Shell Satchel", "mortal de conchas"],
  ["Sawtooth Circlet", "diadema de sierra"],
  ["Scuttlebrace", "brazal de escapada"],
  ["Rosary Cannon", "cañón de rosarios"],
  ["Reserve Bind", "vínculo de reserva"],
  ["Quick Sling", "honda rápida"],
  ["Polip Pouch", "bolsa de pólipos"],
  ["Plasmium Phial", "frasco de plasmio"],
  ["Pin Badge", "insignia de alfiler"],
  ["Pimpillo", "pimpillo"],
  ["Needle Phial", "frasco de aguja"],
  ["Multibinder", "multiunidor"],
  ["Memory Crystal", "cristal de memoria"],
  ["Magnetite Dice", "dados de magnetita"],
  ["Magnetite Brooch", "broche de magnetita"],
  ["Magma Bell", "campana de magma"],
  ["Longpin", "alfiler largo"],
  ["Longclaw", "garra larga"],
  ["Injector Band", "banda inyectora"],
  ["Fractured Mask", "máscara quebrada"],
  ["Flintslate", "pizarra de pedernal"],
  ["Flea Brew", "bebida de pulgas"],
  ["Egg of Flealia", "huevo de Flealia"],
  ["Druid's Eye", "ojo del druida"],
  ["Druid's Eyes", "ojos del druida"],
  ["Delver's Drill", "taladro del excavador"],
  ["Dead Bug's Purse", "bolso del bicho muerto"],
  ["Dark Mirror", "espejo oscuro"],
  ["Curvesickle", "hoz curva"],
  ["Curveclaw", "garra curva"],
  ["Compass", "brújula"],
  ["Cogwork Wheel", "rueda de engranajes"],
  ["Cogfly", "moscarrón"],
  ["Claw Mirror", "espejo de garras"],
  ["Barbed Bracelet", "brazalete de púas"],
  ["Ascendant's Grip", "agarre del ascendente"],
  ["Silkspeed Anklets", "tobilleras de seda veloz"],
  ["Silkshot", "tiro de seda"],
  ["Spool Extender", "extensor de carrete"],
  ["Spider Strings", "cuerdas de araña"],
  ["Conchcutter", "cortaconcha"],
  ["Conch Drill", "taladro de concha"],
  ["Zap Imbuement", "imbuición de chispa"],
  ["Lightning Rod", "pararrayos"],
  ["Wallcling", "agarre de pared"],
  ["Musician Charm", "amuleto de músico"],
  ["Pinstress Tool", "herramienta de Pinstress"],
  ["Quickbind", "vínculo rápido"],
  ["Longneedle", "aguja larga"],
  ["Maggot Charm", "amuleto de gusano"],
  ["Flea Charm", "amuleto de pulga"],
  ["Thrown", "lanzado"],
  ["The Twelfth Architect", "El Duodécimo Arquitecto"],
  ["Twelfth Architect", "Duodécimo Arquitecto"],
  ["Forge Daughter", "Hija de la Forja"],
  ["Vaultkeeper", "Guardián de la Bóveda"],
  ["Mottled Skarr", "Skarr moteado"],
  ["Cogwork", "engranajes"],
  ["Underworks", "Subterráneos"],
  ["Verdania", "Verdania"],
  ["Memorium", "El Memorial"],
  ["Whiteward", "Fuerte Blanco"],
  ["The Cradle", "La Cuna"],
  ["The Abyss", "El Abismo"],
  ["Sands of Karak", "Arenas de Karak"],
  ["Grand Gate", "Gran Puerta"],
  ["Whispering Vaults", "Bóvedas Susurrantes"],
  ["Coral Tower", "Torre de Coral"],
  ["Mount Fay", "Monte Fay"],
  ["The Slab", "La Losa"],
  ["High Halls", "Salones Altos"],
  ["Choral Chambers", "Cámaras del Coro"],
  ["Cogwork Core", "Núcleo de Engranajes"],
  ["Hunter's March", "Marcha del Cazador"],
  ["Deep Docks", "Muelles Profundos"],
  ["Bilewater", "Aguas Biliares"],
  ["Far Fields", "Campos Lejanos"],
  ["Greymoor", "Pantano Gris"],
  ["Bellhart", "Corazón de Campana"],
  ["Shellwood", "Bosque de Conchas"],
  ["Blasted Steps", "Escalones Demolidos"],
  ["Wormways", "Caminos de Gusano"],
  ["Weavenest Atla", "Nidal Atla"],
  ["Sinner's Road", "Camino del Pecador"],
  ["Marrow", "Médula"],
  ["Pilgrim", "peregrino"],
  ["Putrified Ducts", "Conductos Putrefactos"],
  ["The Marrow", "La Médula"],
  ["Bone Bottom", "Fondo de Huesos"],
  ["Moss Grotto", "Gruta de Musgo"],
  ["Mosslands", "Tierras de Musgo"],
  ["Verdania", "Verdania"],
  ["Fleatopia", "Pulguilandia"],
  ["Abyss", "Abismo"],
  ["Cradle", "Cuna"],
  ["Vault", "bóveda"],
  ["Shrine", "santuario"],
  ["Terminus", "Término"],
  ["Bellway", "Campanario"],
  ["First", "Primero"],
  ["Silk", "Seda"],
  ["Weaver Effigy", "efigie de tejedora"],
  ["Sacred", "sagrado"],
  ["Psalm Cylinder", "cilindro de salmo"],
  ["Rune Harp", "arpa rúnica"],
  ["Bone Scroll", "pergamino de hueso"],
  ["Arcane Egg", "huevo arcano"],
  ["Choral Commandment", "mandamiento coral"],
  ["Everbloom", "Flor Eterna"],
  ["Gland", "glándula"],
  ["Silk Soar", "Vuelo de Seda"],
  ["Silkspear", "Lanza de Seda"],
  ["Sharpdart", "Dardo Afilado"],
  ["Cling Grip", "Agarre Firme"],
  ["Clawline", "Garras de Escalada"],
  ["Swift Step", "Paso Veloz"],
  ["Drifter's Cloak", "Capa del Errante"],
  ["Faydown Cloak", "Capa de Plumón"],
  ["Needolin", "Aguijón"],
  ["Requires", "Requiere"],
  ["Green Prince", "Príncipe Verde"],
  ["Crow Battle", "Pelea de Cuervos"],
  ["Broodmother", "Madre de la Camada"],
  ["Bell Eater", "Comecampanas"],
  ["Bell Beast", "Bestia Campana"],
  ["Moss Mother", "Madre de Musgo"],
  ["Moorwing", "Ala de Brezal"],
  ["Palestag", "Ciervo Pálido"],
  ["Phantom", "Fantasmas"],
  ["Seth", "Seth"],
  ["Nyleth", "Nyleth"],
  ["Shakra", "Shakra"],
  ["Lace", "Lace"],
  ["Widow", "Viuda"],
  ["Reaper", "Segador"],
  ["Shaman", "Chamán"],
  ["Wanderer", "Errante"],
  ["Beast", "Bestia"],
  ["Witch", "Bruja"],
  ["Vest", "vest"],
  ["Vesticrest", "escudo-vest"],
  ["Pins", "alfileres"],
  ["Quill", "pluma"],
  ["Marker", "marcador"],
  ["Bronze", "bronce"],
  ["Dark", "oscuro"],
  ["Vendor", "vendedor"],
  ["Dispensing", "dispensando"],
  ["Deposit", "depósito"],
];

const PREFIX_RULES = [
  ["Wish Progress for ", "Progreso del deseo: "],
  ["Wish Item - ", "Objeto de deseo: "],
  ["Wish - ", "Deseo: "],
  ["Map Item - ", "Objeto de mapa: "],
  ["Map Vendor - ", "Vendedora de mapas: "],
  ["Map - ", "Mapa: "],
  ["One-Way Shortcut - ", "Atajo de una vía: "],
  ["Crafting Kit Upgrade #", "Mejora de kit de creación #"],
  ["Tool Pouch Upgrade #", "Mejora de bolsa de herramientas #"],
  ["Memory for Verdania #", "Recuerdo de Verdania #"],
  ["Crest Upgrade - ", "Mejora de escudo: "],
  ["Bellhome Upgrade - ", "Mejora de Campanario: "],
  ["Ability - ", "Habilidad: "],
  ["Tool - ", "Herramienta: "],
  ["Mini-Boss - ", "Mini-jefe: "],
  ["Boss - ", "Jefe: "],
  ["NPC - ", "NPC: "],
  ["Vendor - ", "Vendedor: "],
  ["Battle - ", "Pelea: "],
  ["Bellway - ", "Campanario: "],
  ["Ventrica - ", "Ventrículo: "],
  ["Mask Shard #", "Fragmento de máscara #"],
  ["Spool Fragment #", "Fragmento de carrete #"],
  ["Memory Locket #", "Medallón de recuerdo #"],
  ["Silk Heart #", "Corazón de seda #"],
  ["Lost Flea #", "Pulga perdida #"],
  ["Silkeater #", "Comecera #"],
  ["Craftmetal #", "Metal de creación #"],
  ["Nail Upgrade #", "Mejora de aguja #"],
  ["Simple Key #", "Llave sencilla #"],
  ["Requires ", "Requiere "],
  ["Break - ", "Rompible: "],
  ["Item - ", "Objeto: "],
  ["Memento - ", "Recuerdo: "],
  ["Crest - ", "Escudo: "],
  ["Upgrade - ", "Mejora: "],
  ["Access ", "Acceso: "],
  ["Unlocked ", "Se desbloquea "],
];

const WISH_TRANS = {
  "A Lifesaving Bridge": "Un Puente Que Salva",
  "A Vassal Lost": "Un Vasallo Perdido",
  "Advanced Alchemy": "Alquimia Avanzada",
  "Alchemist's Assistant": "Asistente de la Alquimista",
  "An Icon of Hope": "Un Icono de Esperanza",
  "Balm for the Wounded": "Bálsamo para los Heridos",
  "Bellhart's Glory": "La Gloria de Corazón de Campana",
  "Berry Picking": "Recogiendo Bayas",
  "Bone Bottom Repairs": "Reparaciones en Fondo de Huesos",
  "Bone Bottom Supplies": "Suministros de Fondo de Huesos",
  Broodfeast: "Festín de la Camada",
  "Bugs of Pharloom": "Bichos de Pharloom",
  "Building Up Songclave": "Levantando Clave del Canto",
  "Cloaks of the Choir": "Capas del Coro",
  "Crawbug Clearing": "Limpiando los Cras",
  "Dark Hearts": "Corazones Oscuros",
  "Ecstasy of the End": "Éxtasis del Final",
  "Fastest in Pharloom": "El Más Rápido de Pharloom",
  "Fatal Resolve": "Resolución Fatal",
  "Final Audience": "Audiencia Final",
  "Fine Pins": "Alfileres Finos",
  "Fleatopia Supplies": "Suministros de Pulguilandia",
  "Flexile Spines": "Púas Flexibles",
  "Garb of the Pilgrims": "Atuendo de los Peregrinos",
  "Great Taste of Pharloom": "El Gran Sabor de Pharloom",
  "Hero's Call": "Llamado del Héroe",
  "Infestation Operation": "Operación Plaga",
  "Liquid Lacquer": "Laca Líquida",
  "My Missing Brother": "Mi Hermano Perdido",
  "My Missing Courier": "Mi Mensajero Perdido",
  "Pain, Anguish and Misery": "Dolor, Angustia y Misería",
  "Passing of the Age": "El Paso de la Era",
  "Pilgrim's Rest Supplies": "Suministros del Descanso del Peregrino",
  "Pinmaster's Oil": "Aceite del Maestro de Alfileres",
  "Queen's Egg": "El Huevo de la Reina",
  "Restoration of Bellhart": "Restauración de Corazón de Campana",
  "Rite of Rebirth": "Rito de Renacimiento",
  "Rite of the Pollip": "Rito del Pólipo",
  "Roach Guts": "Tripas de Cucaracha",
  Runtfeast: "Festín de los Pequeños",
  "Savage Beastfly": "Moscabestia Salvaje",
  "Silk and Soul": "Seda y Alma",
  "Silver Bells": "Campanas de Plata",
  "Songclave Supplies": "Suministros de Clave del Canto",
  "Strengthening Songclave": "Fortaleciendo Clave del Canto",
  "Survivor's Camp Supplies": "Suministros del Campamento del Superviviente",
  "The Hidden Hunter": "La Cazadora Oculta",
  "The Lost Fleas": "Las Pulgas Perdidas",
  "The Lost Merchant": "El Mercader Perdido",
  "The Terrible Tyrant": "El Tirano Terrible",
  "The Wailing Mother": "La Madre Llorosa",
  "The Wandering Merchant": "El Mercader Errante",
  "Trail's End": "Fin del Camino",
  "Volatile Flintbeetles": "Escarabajos de Pedernal Volátiles",
};

function translateBase(text) {
  let t = text;
  for (const [en, es] of WORD_MAP) {
    t = t.split(en).join(es);
  }
  return t;
}

function translateWishName(name) {
  const after = name.startsWith("Wish - ") ? name.slice(7) : name;
  return WISH_TRANS[after] || translateBase(after);
}

function translateItemName(raw) {
  if (OVERRIDES[raw]) return OVERRIDES[raw];
  for (const [prefix, trans] of PREFIX_RULES) {
    if (raw.startsWith(prefix)) {
      const rest = raw.slice(prefix.length);
      if (prefix === "Wish - ") return trans + translateWishName(rest);
      if (prefix === "Requires ") {
        const r = ABILITY_TRANS[rest] || translateBase(rest);
        return trans + r;
      }
      if (prefix === "Ability - ") {
        return trans + (ABILITY_TRANS[rest] || translateBase(rest));
      }
      if (prefix === "Tool - ") {
        return trans + translateBase(rest);
      }
      return trans + translateBase(rest);
    }
  }
  return translateBase(raw);
}

// ---------- EXTRACCION ----------

function extractConfig(js) {
  const marker = "const zr=JSON.parse('";
  const start = js.indexOf(marker) + marker.length;
  if (start < marker.length) throw new Error("config marker not found");
  let end = -1;
  for (let j = start; j < js.length; j++) {
    if (js[j] === "'") {
      let k = j - 1;
      let bs = 0;
      while (k >= 0 && js[k] === "\\") {
        bs++;
        k--;
      }
      if (bs % 2 === 0) {
        end = j;
        break;
      }
    }
  }
  if (end < 0) throw new Error("config end not found");
  const raw = js.slice(start, end).replace(/\\'/g, "'");
  return JSON.parse(raw);
}

const TYPE_DECL = `export type Category =
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
`;

async function main() {
  const tmp = "/var/folders/_p/10tbtdpd2sqfdrnmnxf40dy40000gn/T/opencode/ssmap/ssMap.js";
  let js;
  if (fs.existsSync(tmp)) {
    js = fs.readFileSync(tmp, "utf8");
  } else {
    js = await (await fetch(URL_SSMAP)).text();
  }

  const cfg = extractConfig(js);

  const zones = cfg.locations.map((loc, i) => ({
    id: "z" + i,
    name: ZONE_TRANS[loc.name] || loc.name,
    pos: loc.pos,
    color: loc.color || "#9d8ec9",
  }));

  const items = [];
  let uid = 0;
  for (const cat of cfg.categories) {
    const category = CATEGORY_MAP[cat.id];
    if (!category) continue;
    const desc = DESCRIPTIONS[cat.id] || "Algo que encontrar en Pharloom.";
    for (const it of cat.list || []) {
      const pos = it.pos;
      if (!pos) continue;
      if (pos[0] === 0 && pos[1] === 0) continue;
      const zoneId = nearestZone(pos, zones);
      const raw = it.name || cat.name;
      const name = translateItemName(raw);
      const search = [raw];
      if (category === "bench") search.push("bencilla", "descanso");
      if (category === "jefe") search.push("jefe", "jefes");
      if (category === "npc") search.push("personaje");
      if (name.includes("Paso Veloz") || name.includes("Swift Step"))
        search.push("dash", "esprint", "swift step");
      items.push({
        id: "i" + uid++,
        name,
        category,
        zoneId,
        x: pos[0],
        y: pos[1],
        description: desc,
        search,
      });
    }
  }

  const out = `${TYPE_DECL}
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

export const ZONES: Zone[] = ${JSON.stringify(zones, null, 2)};

export const ITEMS: Item[] = ${JSON.stringify(items, null, 2)};

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
`;

  fs.writeFileSync(path.join(process.cwd(), "src/data/silksong.ts"), out);
  console.log(
    `OK: ${zones.length} zonas, ${items.length} objetos -> src/data/silksong.ts`
  );
}

function nearestZone(pos, zones) {
  let best = zones[0];
  let bestD = Infinity;
  for (const z of zones) {
    const d = (z.pos[0] - pos[0]) ** 2 + (z.pos[1] - pos[1]) ** 2;
    if (d < bestD) {
      bestD = d;
      best = z;
    }
  }
  return best.id;
}

await main();
