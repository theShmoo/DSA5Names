const names = {
  "m": ["Anargh", "Anchas", "Artach", "Balfoch", "Bartakh", "Barwad", "Bearach", "Bradruch", "Braighdan", "Branchan", "Branduch", "Breac", "Brein", "Caerfynh", "Cainnoch", "Cammru", "Cammrur", "Cianu", "Cormach", "Daragh", "Derwech", "Druan", "Donnachadh", "Dundoch", "Etzel", "Firnwâr", "Friedû", "Friedûr", "Gabran", "Gaschnig", "Gedwed", "Hagwar", "Haru", "Harveg", "Hjalldûr", "Ifrunndoch", "Islogh", "Kazan", "Lannach", "Lurasch", "Madadhskoth", "Madhru", "Marzagh", "Meku", "Mjesgold", "Morghinach", "Morro", "Morved", "Murchad", "Murdoch", "Ohdru", "Orunu", "Partach", "Rastar", "Roslagh", "Siegmoch", "Struan", "Strunlog", "Strunlogh", "Tormud", "Turdoch", "Tsharbak", "Ulf", "Ulraigh", "Wartech", "Wladuch", "Wuran", "Yahrrad", "Yarrodh", "Yorged", "Yuchdan", "Yurrgold"],
  "w": ["Aesa", "Andraga", "Aruleyd", "Bebann", "Bôtlind", "Bôtulind", "Borrgach", "Brona", "Brucha", "Caltha", "Cirnach", "Corrja", "Dairdra", "Dundana", "Dunyabra", "Durrcha", "Eirni", "Eirnird", "Frunira", "Froya", "Gardrha", "Gharya", "Gjayka", "Grainne", "Griadhra", "Grimheyd", "Griwer", "Hachwa", "Hagwa", "Harrwa", "Hasda", "Hasdar", "Hiltû", "Hjalbeth", "Hjurrgat", "Hulgä", "Ifnar", "Ifrunna", "Irdath", "Irfraid", "Keirnath", "Lurga", "Madhreth", "Margraidh", "Marthai", "Marrwen", "Marzagh", "Megrim", "Milbeth", "Miharra", "Moirya", "Mordag", "Morrga", "Murraya", "Oighred", "Rachnaid", "Saryja", "Savai", "Sidheag", "Shindarr", "Shinnath", "Skrayana", "Sorcha", "Thorhalla", "Thorra", "Thron", "Throna", "Uthra", "Yrrwa", "Yuchgard", "Yurrgira", "Ywen", "Zurakka"]
};

export const Gjalsker = {
  "normal": {
    "name": "Gjalsker",
    "pre": {
      names: names
    },
    "second": {
      "prefix": {
        "m": ["bren"],
        "w": ["brai"]
      },
      "names": {
        "x": names.w.concat(names.m),
      }
    },
    "post": {
      "prefix": {"x": ["vom Haerad der"]},
      "names": {
        "x": ["Alrudh", "Dhartaech", "Lyrgach", "Mortakh", "Niellyn", "Rayyadh", "Arryach Mûr", "Benbhâlur", "Benskôth", "Cregg-Yôlir", "Ishtar-Barr", "Oshthar-Sloch"]
      }
    }
  },
  "nobility": {
    "name": "Ehrentitel",
    "pre": {
      "prefix": {
        "x": ["Gon"]
      }
    }
  },
  "schamanen": {
    "name": "Schamanen",
    "second": {
      "prefix": {
        "x": ["dur"]
      }
    }
  }
};
