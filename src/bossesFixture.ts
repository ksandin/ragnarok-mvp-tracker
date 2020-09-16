import { Boss } from "./Boss";
import { Minutes } from "./Minutes";

export const bosses: Boss[] = [
  {
    id: 1511,
    icon: require("./assets/mobs/1511.gif"),
    name: "Amon Ra",
    tombstone: true,
    map: {
      name: "moc_pryd06",
      imageUrl: require("./assets/maps/moc_pryd06.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: [0.5, 0.6226],
  },
  {
    id: 1852,
    icon: require("./assets/mobs/1852.gif"),
    name: "Angeling",
    tombstone: false,
    map: {
      name: "pay_fild04",
      imageUrl: require("./assets/maps/pay_fild04.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1852,
    icon: require("./assets/mobs/1852.gif"),
    name: "Angeling",
    tombstone: false,
    map: {
      name: "xmas_dun01",
      imageUrl: require("./assets/maps/xmas_dun01.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1852,
    icon: require("./assets/mobs/1852.gif"),
    name: "Angeling",
    tombstone: false,
    map: {
      name: "yuno_fild03",
      imageUrl: require("./assets/maps/yuno_fild03.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2249,
    icon: require("./assets/mobs/2249.gif"),
    name: "Angry Student Pyuriel",
    tombstone: true,
    map: {
      name: "gld2_prt",
      imageUrl: require("./assets/maps/gld2_prt.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1388,
    icon: require("./assets/mobs/1388.gif"),
    name: "Archangeling",
    tombstone: false,
    map: {
      name: "yuno_fild04",
      imageUrl: require("./assets/maps/yuno_fild04.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 3 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1785,
    icon: require("./assets/mobs/1785.gif"),
    name: "Atroce",
    tombstone: true,
    map: {
      name: "gld_dun03_2",
      imageUrl: require("./assets/maps/gld_dun03_2.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1785,
    icon: require("./assets/mobs/1785.gif"),
    name: "Atroce",
    tombstone: true,
    map: {
      name: "ra_fild03",
      imageUrl: require("./assets/maps/ra_fild03.jpg"),
    },
    spawnCooldown: 180 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1785,
    icon: require("./assets/mobs/1785.gif"),
    name: "Atroce",
    tombstone: true,
    map: {
      name: "ra_fild04",
      imageUrl: require("./assets/maps/ra_fild04.jpg"),
    },
    spawnCooldown: 300 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1785,
    icon: require("./assets/mobs/1785.gif"),
    name: "Atroce",
    tombstone: true,
    map: {
      name: "ve_fild01",
      imageUrl: require("./assets/maps/ve_fild01.jpg"),
    },
    spawnCooldown: 180 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1785,
    icon: require("./assets/mobs/1785.gif"),
    name: "Atroce",
    tombstone: true,
    map: {
      name: "ve_fild02",
      imageUrl: require("./assets/maps/ve_fild02.jpg"),
    },
    spawnCooldown: 360 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1630,
    icon: require("./assets/mobs/1630.gif"),
    name: "Bacsojin",
    tombstone: true,
    map: {
      name: "lou_dun03",
      imageUrl: require("./assets/maps/lou_dun03.jpg"),
    },
    spawnCooldown: 117 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1399,
    icon: require("./assets/mobs/1399.gif"),
    name: "Baphomet",
    tombstone: true,
    map: {
      name: "gld_dun03",
      imageUrl: require("./assets/maps/gld_dun03.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1399,
    icon: require("./assets/mobs/1399.gif"),
    name: "Baphomet",
    tombstone: true,
    map: {
      name: "prt_maze03",
      imageUrl: require("./assets/maps/prt_maze03.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1874,
    icon: require("./assets/mobs/1874.gif"),
    name: "Beelzebub",
    tombstone: true,
    map: {
      name: "abbey03",
      imageUrl: require("./assets/maps/abbey03.jpg"),
    },
    spawnCooldown: 720 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: -1,
    name: "Bio3 MVP",
    tombstone: true,
    map: {
      name: "lhz_dun03",
      imageUrl: require("./assets/maps/lhz_dun03.jpg"),
    },
    spawnCooldown: 100 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: -1,
    name: "Bio4 MVP",
    tombstone: true,
    map: {
      name: "lhz_dun04",
      imageUrl: require("./assets/maps/lhz_dun04.jpg"),
    },
    spawnCooldown: 100 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2068,
    icon: require("./assets/mobs/2068.gif"),
    name: "Boitata",
    tombstone: true,
    map: {
      name: "bra_dun02",
      imageUrl: require("./assets/maps/bra_dun02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2255,
    icon: require("./assets/mobs/2255.gif"),
    name: "Dark Guardian Kades",
    tombstone: true,
    map: {
      name: "gld2_gef",
      imageUrl: require("./assets/maps/gld2_gef.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1272,
    icon: require("./assets/mobs/1272.gif"),
    name: "Dark Lord",
    tombstone: true,
    map: {
      name: "gld_dun04_2",
      imageUrl: require("./assets/maps/gld_dun04_2.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1272,
    icon: require("./assets/mobs/1272.gif"),
    name: "Dark Lord",
    tombstone: true,
    map: {
      name: "gl_chyard",
      imageUrl: require("./assets/maps/gl_chyard.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1817,
    icon: require("./assets/mobs/1817.gif"),
    name: "Detale",
    tombstone: true,
    map: {
      name: "abyss_03",
      imageUrl: require("./assets/maps/abyss_03.jpg"),
    },
    spawnCooldown: 180 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1767,
    icon: require("./assets/mobs/1767.gif"),
    name: "Deviling",
    tombstone: false,
    map: {
      name: "pay_fild04",
      imageUrl: require("./assets/maps/pay_fild04.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 60 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1767,
    icon: require("./assets/mobs/1767.gif"),
    name: "Deviling",
    tombstone: false,
    map: {
      name: "yuno_fild03",
      imageUrl: require("./assets/maps/yuno_fild03.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1731,
    icon: require("./assets/mobs/1731.gif"),
    name: "Doppelganger",
    tombstone: true,
    map: {
      name: "gef_dun02",
      imageUrl: require("./assets/maps/gef_dun02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1731,
    icon: require("./assets/mobs/1731.gif"),
    name: "Doppelganger",
    tombstone: true,
    map: {
      name: "gld_dun04",
      imageUrl: require("./assets/maps/gld_dun04.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1530,
    icon: require("./assets/mobs/1530.gif"),
    name: "Dracula",
    tombstone: true,
    map: {
      name: "gef_dun01",
      imageUrl: require("./assets/maps/gef_dun01.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1112,
    icon: require("./assets/mobs/1112.gif"),
    name: "Drake",
    tombstone: true,
    map: {
      name: "treasure02",
      imageUrl: require("./assets/maps/treasure02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1115,
    icon: require("./assets/mobs/1115.gif"),
    name: "Eddga",
    tombstone: true,
    map: {
      name: "gld_dun01_2",
      imageUrl: require("./assets/maps/gld_dun01_2.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1115,
    icon: require("./assets/mobs/1115.gif"),
    name: "Eddga",
    tombstone: true,
    map: {
      name: "pay_fild10",
      imageUrl: require("./assets/maps/pay_fild10.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1967,
    icon: require("./assets/mobs/1967.gif"),
    name: "Egnigem Cenia",
    tombstone: true,
    map: {
      name: "lhz_dun02",
      imageUrl: require("./assets/maps/lhz_dun02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1529,
    icon: require("./assets/mobs/1529.gif"),
    name: "Evil Snake Lord",
    tombstone: true,
    map: {
      name: "gon_dun03",
      imageUrl: require("./assets/maps/gon_dun03.jpg"),
    },
    spawnCooldown: 94 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1871,
    icon: require("./assets/mobs/1871.gif"),
    name: "Fallen Bishop Hibram",
    tombstone: true,
    map: {
      name: "abbey02",
      imageUrl: require("./assets/maps/abbey02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1252,
    icon: require("./assets/mobs/1252.gif"),
    name: "Garm",
    tombstone: true,
    map: {
      name: "xmas_fild01",
      imageUrl: require("./assets/maps/xmas_fild01.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2253,
    icon: require("./assets/mobs/2253.gif"),
    name: "General Daehyun",
    tombstone: true,
    map: {
      name: "gld2_pay",
      imageUrl: require("./assets/maps/gld2_pay.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1576,
    icon: require("./assets/mobs/1576.gif"),
    name: "Ghostring",
    tombstone: false,
    map: {
      name: "gld_dun04",
      imageUrl: require("./assets/maps/gld_dun04.jpg"),
    },
    spawnCooldown: 240 as Minutes,
    spawnWindow: 120 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1576,
    icon: require("./assets/mobs/1576.gif"),
    name: "Ghostring",
    tombstone: false,
    map: {
      name: "pay_fild04",
      imageUrl: require("./assets/maps/pay_fild04.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1576,
    icon: require("./assets/mobs/1576.gif"),
    name: "Ghostring",
    tombstone: false,
    map: {
      name: "prt_maze03",
      imageUrl: require("./assets/maps/prt_maze03.jpg"),
    },
    spawnCooldown: 113 as Minutes,
    spawnWindow: 57 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1576,
    icon: require("./assets/mobs/1576.gif"),
    name: "Ghostring",
    tombstone: false,
    map: {
      name: "treasure02",
      imageUrl: require("./assets/maps/treasure02.jpg"),
    },
    spawnCooldown: 33 as Minutes,
    spawnWindow: 20 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2251,
    icon: require("./assets/mobs/2251.gif"),
    name: "Gioia",
    tombstone: true,
    map: {
      name: "gld2_ald",
      imageUrl: require("./assets/maps/gld2_ald.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1768,
    icon: require("./assets/mobs/1768.gif"),
    name: "Gloom Under Night",
    tombstone: true,
    map: {
      name: "ra_san05",
      imageUrl: require("./assets/maps/ra_san05.jpg"),
    },
    spawnCooldown: 300 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1086,
    icon: require("./assets/mobs/1086.gif"),
    name: "Golden Thief Bug",
    tombstone: true,
    map: {
      name: "prt_sewb4",
      imageUrl: require("./assets/maps/prt_sewb4.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1885,
    icon: require("./assets/mobs/1885.gif"),
    name: "Gopinich",
    tombstone: true,
    map: {
      name: "mosk_dun03",
      imageUrl: require("./assets/maps/mosk_dun03.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1990,
    icon: require("./assets/mobs/1990.gif"),
    name: "Hardrock Mammoth",
    tombstone: true,
    map: {
      name: "man_fild03",
      imageUrl: require("./assets/maps/man_fild03.jpg"),
    },
    spawnCooldown: 240 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1832,
    icon: require("./assets/mobs/1832.gif"),
    name: "Ifrit",
    tombstone: true,
    map: {
      name: "thor_v03",
      imageUrl: require("./assets/maps/thor_v03.jpg"),
    },
    spawnCooldown: 660 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1542,
    icon: require("./assets/mobs/1542.gif"),
    name: "Incantation Samurai",
    tombstone: true,
    map: {
      name: "ama_dun03",
      imageUrl: require("./assets/maps/ama_dun03.jpg"),
    },
    spawnCooldown: 91 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1734,
    icon: require("./assets/mobs/1734.gif"),
    name: "Kiel D-01",
    tombstone: true,
    map: {
      name: "kh_dun02",
      imageUrl: require("./assets/maps/kh_dun02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 60 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2202,
    icon: require("./assets/mobs/2202.gif"),
    name: "Kraken",
    tombstone: true,
    map: {
      name: "iz_dun05",
      imageUrl: require("./assets/maps/iz_dun05.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 30 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1779,
    icon: require("./assets/mobs/1779.gif"),
    name: "Ktullanux",
    tombstone: true,
    map: {
      name: "ice_dun03",
      imageUrl: require("./assets/maps/ice_dun03.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1688,
    icon: require("./assets/mobs/1688.gif"),
    name: "Lady Tanee",
    tombstone: true,
    map: {
      name: "ayo_dun02",
      imageUrl: require("./assets/maps/ayo_dun02.jpg"),
    },
    spawnCooldown: 420 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2156,
    icon: require("./assets/mobs/2156.gif"),
    name: "Leak",
    tombstone: true,
    map: {
      name: "dew_dun01",
      imageUrl: require("./assets/maps/dew_dun01.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1373,
    icon: require("./assets/mobs/1373.gif"),
    name: "Lord of Death",
    tombstone: true,
    map: {
      name: "niflheim",
      imageUrl: require("./assets/maps/niflheim.jpg"),
    },
    spawnCooldown: 133 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1147,
    icon: require("./assets/mobs/1147.gif"),
    name: "Maya",
    tombstone: true,
    map: {
      name: "anthell02",
      imageUrl: require("./assets/maps/anthell02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1147,
    icon: require("./assets/mobs/1147.gif"),
    name: "Maya",
    tombstone: true,
    map: {
      name: "gld_dun02_2",
      imageUrl: require("./assets/maps/gld_dun02_2.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1289,
    icon: require("./assets/mobs/1289.gif"),
    name: "Maya Purple",
    tombstone: true,
    map: {
      name: "gld2_ald",
      imageUrl: require("./assets/maps/gld2_ald.jpg"),
    },
    spawnCooldown: 20 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1289,
    icon: require("./assets/mobs/1289.gif"),
    name: "Maya Purple",
    tombstone: true,
    map: {
      name: "gld_dun02_2",
      imageUrl: require("./assets/maps/gld_dun02_2.jpg"),
    },
    spawnCooldown: 20 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1059,
    icon: require("./assets/mobs/1059.gif"),
    name: "Mistress",
    tombstone: true,
    map: {
      name: "gld_dun02",
      imageUrl: require("./assets/maps/gld_dun02.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1059,
    icon: require("./assets/mobs/1059.gif"),
    name: "Mistress",
    tombstone: true,
    map: {
      name: "mjolnir_04",
      imageUrl: require("./assets/maps/mjolnir_04.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1814,
    icon: require("./assets/mobs/1814.gif"),
    name: "Moonlight Flower",
    tombstone: true,
    map: {
      name: "gld_dun01",
      imageUrl: require("./assets/maps/gld_dun01.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1814,
    icon: require("./assets/mobs/1814.gif"),
    name: "Moonlight Flower",
    tombstone: true,
    map: {
      name: "pay_dun04",
      imageUrl: require("./assets/maps/pay_dun04.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2362,
    icon: require("./assets/mobs/2362.gif"),
    name: "Nightmare Amon Ra",
    tombstone: true,
    map: {
      name: "moc_prydn2",
      imageUrl: require("./assets/maps/moc_prydn2.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: [0.5, 0.6226],
  },
  {
    id: 1087,
    icon: require("./assets/mobs/1087.gif"),
    name: "Orc Hero",
    tombstone: true,
    map: {
      name: "gef_fild03",
      imageUrl: require("./assets/maps/gef_fild03.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1190,
    icon: require("./assets/mobs/1190.gif"),
    name: "Orc Lord",
    tombstone: true,
    map: {
      name: "gef_fild10",
      imageUrl: require("./assets/maps/gef_fild10.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1038,
    icon: require("./assets/mobs/1038.gif"),
    name: "Osiris",
    tombstone: true,
    map: {
      name: "moc_pryd04",
      imageUrl: require("./assets/maps/moc_pryd04.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1157,
    icon: require("./assets/mobs/1157.gif"),
    name: "Pharaoh",
    tombstone: true,
    map: {
      name: "in_sphinx5",
      imageUrl: require("./assets/maps/in_sphinx5.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1159,
    icon: require("./assets/mobs/1159.gif"),
    name: "Phreeoni",
    tombstone: true,
    map: {
      name: "moc_fild17",
      imageUrl: require("./assets/maps/moc_fild17.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 2165,
    icon: require("./assets/mobs/2165.gif"),
    name: "Queen Scaraba",
    tombstone: true,
    map: {
      name: "dic_dun02",
      imageUrl: require("./assets/maps/dic_dun02.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1623,
    icon: require("./assets/mobs/1623.gif"),
    name: "RSX-0806",
    tombstone: true,
    map: {
      name: "ein_dun02",
      imageUrl: require("./assets/maps/ein_dun02.jpg"),
    },
    spawnCooldown: 125 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1251,
    icon: require("./assets/mobs/1251.gif"),
    name: "Stormy Knight",
    tombstone: true,
    map: {
      name: "xmas_dun02",
      imageUrl: require("./assets/maps/xmas_dun02.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1583,
    icon: require("./assets/mobs/1583.gif"),
    name: "Tao Gunka",
    tombstone: true,
    map: {
      name: "beach_dun",
      imageUrl: require("./assets/maps/beach_dun.jpg"),
    },
    spawnCooldown: 300 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1991,
    icon: require("./assets/mobs/1991.gif"),
    name: "Tendrillion",
    tombstone: true,
    map: {
      name: "spl_fild03",
      imageUrl: require("./assets/maps/spl_fild03.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1708,
    icon: require("./assets/mobs/1708.gif"),
    name: "Thanatos",
    tombstone: true,
    map: {
      name: "thana_boss",
      imageUrl: require("./assets/maps/thana_boss.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 1 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1312,
    icon: require("./assets/mobs/1312.gif"),
    name: "Turtle General",
    tombstone: true,
    map: {
      name: "tur_dun04",
      imageUrl: require("./assets/maps/tur_dun04.jpg"),
    },
    spawnCooldown: 60 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: [0.5, 0.55],
  },
  {
    id: 1751,
    icon: require("./assets/mobs/1751.gif"),
    name: "Valkyrie Randgris",
    tombstone: true,
    map: {
      name: "odin_tem03",
      imageUrl: require("./assets/maps/odin_tem03.jpg"),
    },
    spawnCooldown: 480 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1685,
    icon: require("./assets/mobs/1685.gif"),
    name: "Vesper",
    tombstone: true,
    map: {
      name: "jupe_core",
      imageUrl: require("./assets/maps/jupe_core.jpg"),
    },
    spawnCooldown: 120 as Minutes,
    spawnWindow: 10 as Minutes,
    spawnLocation: undefined,
  },
  {
    id: 1917,
    icon: require("./assets/mobs/1917.gif"),
    name: "Wounded Morroc",
    tombstone: true,
    map: {
      name: "moc_fild22",
      imageUrl: require("./assets/maps/moc_fild22.jpg"),
    },
    spawnCooldown: 720 as Minutes,
    spawnWindow: 60 as Minutes,
    spawnLocation: undefined,
  },
];
