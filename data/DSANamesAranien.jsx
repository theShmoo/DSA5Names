const femaleNames = ["Aischanka", "Alisanya", "Arjunna", "Arjuna", "As­hina", "Asleika", "Aylalind", "Ayshira", "Ayshulianne", "Azize­lis", "Banazira", "Banazir", "Belizath", "Damara", "Dassareth", "Dilhabeth", "Dunjanild", "Elaisha", "Eleonora", "Emerbeth", "Farissa", "Fayrie­ke", "Feruja", "Feqzlinde", "Feqzlind", "Gazalinde", "Halimyanis", "Hamide", "Hildebeth", "Iphemia", "Ishannah", "Jashild", "Jasina", "Jushiberta", "Kalashra", "Khedrine", "Khelbara", "Khorena", "Lailalinde", "Leudira", "Leushanya", "Manjula", "Merishja", "Nedimsira", "Ne­ raidane", "Perainibith", "Peranshaya", "Rahjadane", "Rahjana", "Rashpatane", "Rhayadaque", "Rondirai", "Rondrayla", "Shaya", "Shanya", "Sherizeth", "Shilaldara", "Shulamunde", "Shulinai", "Sulaj­maid", "Sulamin", "Sybia", "Tsabine", "Yathila", "Yathilda", "Yullabethild", "Zulhaminai"];

const maleNames = ["Abdulon", "Abdulrik", "Abubrecht", "Aliban", "Amaryd", "Amirwolf", "Arkos", "Arras", "Assaban", "Beyhelm", "Djafardeon", "Djemilassar", "Dschadirfried", "Dscheridan", "Farukol", "Hamarbald", "Harunian", "Hassanfried", "Jashan", "Jikh­bald", "Kashban", "Korwan", "Leomar", "Leuhalla", "Machmud", "Marwamir", "Melekhelm", "Merkan", "Muhalla", "Mukarribald", "Nabur", "Narbold", "Narebold", "Nezahet", "Omjaralf", "Peranjador", "Rah­jabert", "Rahjadan", "Rashdan", "Rassan", "Rasulan", "Retoban", "Rohaldor", "Rondrador", "Rondramir", "Selimdor", "Selimwar", "Shabobert", "Shafirio", "Shamar", "Sharondrio", "Sulhamid", "Sul­tanor", "Taref", "Tariq", "Tuleffried", "Wulftan", "Yadail", "Yassir­man", "Yorlak", "Yussufried"];

export const Aranien = {
  "nobility": {
    "name": "Adel",
    "post": {
      "prefix": {
        "x": [" von", " ay", " ai"]
      },
      "names": {
        "x": ["al'Nabab", "Ankrabad", "Awallakand", "Bak­ rachal", "Barbrück", "Bensunni Dassareth", "Farukand", "Na­ siradbad", "Ras Abris", "Ras Surya", "Revennis", "Tasilimpfort", "Tebahan", "Tebanfurt", "Terchabbrück", "Untersternheim", "Veharis", "Yakshabar", "Yasirabad", "Yerkesh"]
      }
    }
  },
  "normal": {
    "name": "Bürger",
    "post": {
      "prefix": {"x": [" "]},
      "names": {
        "x": ["Aimaristani", "ak'Shahbra", "Alahjan", "al'Akhdar", "al'Awan", "al'Barad", "Alhazir", "al'Keshal'Kharash", "al'Kitab", "as'Ahlan", "as'Najaras", "as'Sarjabaran", "as'Sher­chem", "as'Tahan", "Bishar", "Elburumi", "Elyeshinnah", "Kahraman", "Terekandi", "Tiltenbrugger", "Turshem", "Zorgahani"]
      }
    },
    "pre": {
      "names": {
        "m": maleNames,
        "w": femaleNames
      },
    },
    "second": {
      "names": {
        "sep": [""],
        "m": maleNames,
        "w": femaleNames
      },
      "suffix": {
        "m": [["prefix", "names"]],
        "w": [["prefix", "names"], ["names", "postfix"]]
      },
      "postfix": {
        "w": ["suni", "sunni", "sunya"]
      },
      "prefix": {
        "w": ["saba"],
        "m": ["ibn"]
      },
    }
  }
}
