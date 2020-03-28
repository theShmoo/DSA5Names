const silben = [
  "ai", "ak", "an", "ang", "ao", "au", "ba", "bal", "bi", "bo", "ca", "can", "cat", "da", "di", "do", "du", "eng", "gu", "guo", "ga", "ha", "hah", "he", "ho", "io", "iok", "ja", "je", "jo", "ju", "ka", "jau", "kao", "ko", "la", "le", "li", "lo", "lu", "ma", "mam", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "num", "pa", "pam", "pe", "peh", "pi", "po", "pu", "ra", "re", "ri", "ro", "ru", "scha", "sha", "sche", "she", "scho", "sho", "sa", "san", "se", "si", "so", "su", "sun", "sum", "ta", "tan", "tak", "tam", "te", "teh", "to", "tu", "wa", "wan", "we", "wo", "wu", "ya", "ye", "yu"
]

export const Waldmenschen = {
  "normal": {
    "name": "Waldmensch",
    "pre": {
      "prefix": {
        "repeat": {"from": 1, "to": 3},
        "sep": ["", "-"],
        "capitalize": true,
        "x": silben
      },
      "names": {
        "repeat": {"from": 1, "to": 3},
        "sep": [""],
        "x": silben
      }
    },
    "post": {
      "prefix": { "x": [" vom"] },
      "names": {
        "x": ["Anhepa-Ha", "Anoiha", "Darna", "Ganak-Si", "Haipu", "Keke-Wanaq", "Lupamnu-Wanaq", "Miniwatu", "Mohaha", "Mumbana", "Nape-wanha", "Nimu-Wanaq", "Oijanih", "Panaq-Si", "Para-Pek-Ta-pam", "Piri-Scho", "Potuwa", "Rakwacan", "Rutini", "Sche-la-Nipam", "Tinzameha", "Tschopukikuha", "Yakosh-Dey"]
      },
      "postfix": { "x": ["Stamm"] }
    }
  },
  "chirakah": {
    "name": "Chirakah",
    "pre": {
      "prefix": {"x": []},
      "names": {
        "w": ["Atsanad-Ha", "Tsabinja", "Tsacadia", "Tsadelia", "Tsael-La", "Tsafil-Hia", "Tsaian-Ha", "Tsaing-La", "Tsaio-Peh", "Tsaja", "Tsaja-Na", "Tsale-Ha", "Tsa-Li-Ha", "Tsalissa", "Tsamara", "Tsa-Mi-La", "Tsaodora", "Tsari-Ha", "Tsayani"],
        "m": ["Tsaar-Hon", "Tsadan", "Tsada-Yo", "Tsagidi-Ho", "Tsai-Lo", "Tsajobo", "Tsa-Ma-Ro", "Tsamu", "Tsandro", "Tsara-No", "Tsarel-Lo", "Tsari-Ho", "Tsavasio", "Tsaver-Ho", "Tsa-Yan-Ho"]
      }
    }
  },
  "tucamuyac": {
    "name": "Tocamuyac",
    "pre": {
      "prefix": {"x": []},
      "names": {
        "x": ["Abadu", "Akanea", "Akivi", "Alre-Go", "Alunga", "Am'ima", "Anakena", "Anekka-Ka", "Ariki", "Asmoa", "Ataranga", "Bakiri", "Dasu", "Dawa", "D'pao", "Ekaro", "Esla", "Fekka", "Hahi", "Hoa", "Jaja", "Jemina", "Ka", "Kalu", "Kamali", "Kanuga", "Khaik'hai", "Kiri", "Kohao", "Kp'tanu", "Kum'tani", "Kupe", "Lante", "Lisu", "Lola'e", "Lupao", "Makkika", "Manisa", "Manui", "Manutara", "Mina-Moa", "Minoma", "Miraro", "Miru", "Muna", "Nahimi", "Nim'u", "Ninou", "Niwu", "Nuso-Nu", "Oniga", "Piku", "Pria", "Rangi", "Rano", "Rasuli", "Ratan", "Rawiri", "Riro", "Roniga", "Rotang", "Safu", "Sama", "Sapa", "Satoh", "Simo", "Simu", "Swiha", "Taaro", "Tahai", "Tare", "Temura", "Tipo", "Totora", "Tp'ari", "Tr'ana", "Uluru", "Una", "Uriga", "Wela", "Wipati", "Ya'car", "Yimari", "Yuta"]
      }
    },
    "post": {
      "prefix": { "x": ["vom"] },
      "names": {
        "x": ["Akharu", "Kehata-He", "Khai'taha", "Ko-wana", "K'trak", "Mahapeq", "Mini-Ko", "Paktupetepeq", "Taha-Tawa", "Tota-Raru", "Yumapeq"]
      },
      "postfix": { "x": [" Stamm"] }
    }
  },
  "utulu": {
    "name": "Utulu",
    "pre": {
      "prefix": {"x": []},
      "names": {
        "x": ["Akuma", "Apiye", "Boadi", "Bodongo", "Bolotongo", "Cazembe", "Epamwa", "Hwamba", "Imaro", "Kalalu", "Kalimba", "Kibwa", "Kingombo", "Kirabo", "Kubesi", "Kukula", "Kweli", "Labiwasene", "Lutu", "Mangabe", "Monebu", "Mopane", "Mpemba", "Mulga", "Mwasego", "Nutombi", "Obada", "Ombawa", "Oweso", "P(e)tani", "Ranabo", "Rumari", "Schegabe", "Schenumba", "Shasiwatu", "Shimenege", "Takate", "Tangawizi", "Tauu", "Tenkile", "Tuhemba", "Udonka", "Umbele", "Umpaba", "Unabo", "Usuthu", "Zainabu"]
      }
    },
    "post": {
      "prefix": { "x": ["vom"] },
      "names": {
        "x": ["Angwasi", "Bewange", "Bujonapi-Hu", "Ibonkosi", "Kwahabunga", "Mawambe", "Ongbasi", "Rololo", "Ruwangi", "Sagambu", "Shokubunga", "Tepebe-Ha", "Tscholuq", "Vodunga", "Yoru-He", "Zamango"]
      },
      "postfix": { "x": ["Stamm"] }
    }
  }
}
