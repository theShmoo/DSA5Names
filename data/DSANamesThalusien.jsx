const MaleNames = ["Ahjanankhra", "Ajit", "Amar", "Ankhra", "Ashar", "Bahram", "Bharma", "Djaffar", "Dolguruq", "Duwok", "Elkarim", "Erkhaban", "Esam", "Faramud", "Harak", "Haschabna", "Hashin", "Hraban", "Kalkarib", "Karesh", "Kasan", "Kasib", "Khunsha", "Mardhur", "Mhapasha", "Mozaffa", "Mustafa", "Muyanpasha", "Muzaffer", "Najara", "Perhiman", "Rashaman", "Rashamana", "Rhayad", "Rifat", "Sayesh", "Selim", "Shantir", "Sulman", "Surkan", "Tamir", "Waddif", "Yadail", "Yadda", "Yussam", "Zamir"];

const FemaleNames = ["Abrizah", "Amina", "Anupame", "Asha", "Azalee", "Azilabati", "Azizel", "Bastrabeth", "Bastrabati", "Bitharam", "Buhrami", "Dalilah", "Elmandasi", "Halifa", "Jushibi", "Lailatum", "Madayanti", "Manyola", "Mechallabith", "Mellabati", "Meera", "Meribani", "Naranya", "Peraschija", "Peri", "Peribeth", "Raschanti", "Sabaram", "Sabatum", "Sharisad", "Shenny", "Shukurani", "Suriyabati", "Suryabeth", "Yazamin", "Zahrasadja"];

export const Thalusien = {
  "normal": {
    "name": "Bürger",
    "pre": {
      "names": {"m": MaleNames, "w": FemaleNames}
    },
    "second": {
      "suffix": {
        "m": [["prefix", "names"]],
        "w": [["prefix", "names"], ["names", "postfix"]]
      },
      "names": {
        "sep": [""],
        "x": MaleNames
      },
      "prefix": {
        "w": ["saba"],
        "m": ["ibn", "ben"]
      },
      "postfix": {
        "w": ["suni", "sunni", "sunya"]
      }
    },
    "post": {
      "prefix": {"x": [" "]},
      "names": {
        "x": ["Abukhuncha", "Adjani", "Albahram", "Alhashim", "Alkhalim", "Bruckensi", "Brucktal", "Brucktaler", "Elawall", "Elessam", "Elyussam", "Misaryesh", "Nabatili", "Ongalabadi", "Perhimani", "Reistreter", "Ronissagami", "Thalusfurter", "Zulhamidi"]
      }
    }
  }
}
