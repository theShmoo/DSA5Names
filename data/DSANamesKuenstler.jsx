import {GarethienPreNames} from './DSANamesGarethien';

const KuenstlerAttributes = ["arkane", "athletische", "außerordentliche", "beachtliche", "beispiellose", "berühmte", "blendende", "bombastische", "brillante", "ehrenhafte", "ehrwürdige", "einmalige", "exzellente", "glorreiche", "grandiose", "große", "großartige", "hesindiale", "imposante", "kolossale", "laute", "legendäre", "leibhaftige", "magische", "märchenhafte", "meisterliche", "mysteriöse", "nebulöse", "originelle", "phantasmagorische", "phantastische", "prächtige", "ruhmvolle", "sphärenhafte", "starke", "stimmgewaltige", "talentierte", "traumhafte", "unbezwingbare", "unerreichte", "unglaubliche", "untadelige", "unvergleichliche", "vortreffliche", "wundersame", "zauberhafte"];

const KuenstlerAttributesCap = KuenstlerAttributes.map(k => k.charAt(0).toUpperCase() + k.slice(1));

export const Kuenstler = {
  "gaukler": {
    "name": "Bühnen- & Künstlernamen",
    "pre": {
      "suffix": {
        "x": [["prefix", "names"], ["names", "postfix"]],
      },
      "prefix": {
        "m": KuenstlerAttributes.map(k => "der " + k),
        "w": KuenstlerAttributes.map(k => "die " + k)
      },
      "names": GarethienPreNames,
      "postfix": {
        "m": KuenstlerAttributesCap.map(k => "der " + k),
        "w": KuenstlerAttributesCap.map(k => "die " + k)
      },
    },
    "post": {
      "names": {"x": []}
    }
  },
  "normal": {
    "name": "Gaukler & Possenreißer",
    "pre": {
      "names": {
        "m": ["Amir", "Bjarni", "Eisenhard", "Graciano", "Gunnar", "Phexario", "Phexarion", "Starkward", "Torxes", "Wilbur"],
        "w": ["Aliria", "Brumberta", "Esmeralda", "Grimgund", "Kladdis", "Mirja", "Nuntia", "Phexlin", "Phexlind", "Thissa", "Zarpa"]
      }
    },
    "post": {
      "names": {
        "x": ["Bärenführer", "Boltanass", "Donnerhau", "Feenfreund", "Flinkfinger", "Gaukelei", "Immerpfeil", "Inrahleger", "Kinderschreck", "Koboldkind", "Lächerlich", "Langenase", "Lautstimm", "Nimmerfehl", "Nimmertot", "Phexensglück", "Possenreißer", "Schaumschläger", "Schreckensfratz", "Starkarm", "Sternfänger", "Taschenspieler", "Tausendsassa", "Tausendmesser", "Tigertanz", "Witzbold", "Zweigesicht"]
      }
    }
  },
  "quacksalber": {
    "name": "Quacksalber",
    "pre": {
      "names": {
        "m": ["Alchimico", "Hakima", "Hexander", "Laborix", "Perainfried", "Tincturos", "Zurbaran"],
        "w": ["Brauberta", "Hakim", "Heidrun", "Heilgrit", "Hexlind", "Tinctura", "Tsalind", "Wehfriede"]
      }
    },
    "post": {
      "names": {
        "x": ["Agricola", "Alchimicus", "al'Hakim", "al'Hakima", "al'Kimiya", "Antidot", "Balsam", "Balsamo", "Giftmischer", "Goldregen", "Guttrunk", "Heilarius", "Heilmacher", "Heilsalb", "Horuschenkern", "Koschbasalt", "Kupfertrunck", "Lotoshauch,Nothelfer", "Olginsud", "Perainehilf", "Perainetreu", "Pestspor", "Quecksilber", "Salbarius", "Schmerz", "Schmerzstiller", "Tarneles", "Tausendwasser", "Tiefschluck", "Tonicum", "Tsahilf", "Warzenfein", "Warzenfeind", "Wehmacher", "Wirselgruber", "Wunderlich", "Wundersam", "Wundheiler", "Zauberhand"]
      }
    }
  },
  "gladiatoren": {
    "name": "Gladiatoren & Schaukämpfer",
    "pre": {
      "names": {
        "m": ["Baltrunos", "Blutbart", "Boronides", "Boronsson", "Coragon", "Khalid", "Korrenio", "Mengbilar", "Omar", "Spektakulos", "Takate", "Tridon", "Utharion", "Viktor"],
        "w": ["Arva", "Azila", "Barbaria", "Boronike", "Boronaike", "Korianna", "Taka-He", "Venenia", "Victoria", "Zylva"]
      }
    },
    "post": {
      "names": {
        "m": ["der Angroscho", "der Barbar", "Elfenschlächter", "der Geisterrufer", "der Ketzer", "der Koloss", "der Mercenario", "der Norbade", "der Stier", "der almadanische Stier"],
        "w": ["die Flinke", "die Hetfrau", "die Listige", "die Schwarze", "die Wudu"],
        "x": ["al'Kira", "al'Sayif", "al'Zuul", "die Bestie", "Blutaxt", "Blutsäufer", "der Basilisk", "der Berg", "Dreizack", "die Echse", "Eisherz", "die Geißel", "Gifthauch", "Hammerfaust", "Ingerimmhammer", "Jaguarklaue", "die Khoramsbestie", "Menschenfresser", "der Oger", "Ogerklinge", "Pantherkralle", "der Schlinger", "die Schlange", "der Troll", "Wildfang", "Zwergentot"]
      }
    }
  }
}
