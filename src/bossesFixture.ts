import { Boss } from "./Boss";
import { Minutes } from "./Minutes";

export const bosses: Boss[] = [
  {
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
