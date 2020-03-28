const names = {
  "m": ["Agalosch", "Allerbatsch", "Bagsch", "Banderatsch", "Berkhold", "Bombatsch", "Bomborosch", "Bompeldatsch", "Bortosch", "Brototaksch", "Drollgomp", "Durlatsch", "Forkhold", "Gneiserich", "Gnorix", "Gramumpf", "Graugdasch", "Grimdasch", "Grollombotsch", "Grumatsch", "Gumbalodsch", "Ilkhold", "Katathmarr", "Kerbhold", "Knopphold", "Knorzer", "Krallerwatsch", "Krallulatsch", "Kraschtonn", "Kroppgomp", "Krumpelratsch", "Latsch", "Luderdotsch", "Murdlatsch", "Römpeldasch", "Ronkhold", "Rumpold", "Rurak", "Straumpff", "Strock", "Strotromm", "Struzz", "Stubben", "Tarbasch", "Tarkampf", "Tartzilman", "Torfkompf", "Tralluschampf", "Troddsch", "Trolltatsch", "Tubolosch", "Tumpatsch", "Wungwatsch", "Ylkholt"],
  "w": ["Aldascha", "Amakscha", "Bagoscha", "Bartoscha", "Borrcke", "Doscha", "Dotscha", "Draschpatscha", "Durschanna", "Ellermudd", "Garlescha", "Gnoschda", "Goscha", "Graschda", "Grauramcke", "Grollcke", "Grollgascha", "Gumuncke", "Horoschka", "Illkscha", "Knopphild", "Knorralka", "Knorrholde", "Knoschpanke", "Krallschka", "Kraschta", "Kraschtar", "Kullamenke", "Latschka", "Manscha", "Moschgrimma", "Murscha", "Orrda", "Pompffe", "Roschara", "Ruppicke", "Schmorka", "Schtemmke", "Silberhaar", "Tromprancke", "Trumpke", "Urte", "Wamruncke", "Wantascha"]
}

export const Trolle = {
  "normal": {
    "name": "Trolle",
    "pre": {
      "names": names
    },
    "post": {
      "prefix": {
        "m": ["Sohn"],
        "w": ["Tochter"],
      },
      "names": {
        "x": names["m"].map(n => "der " + n).concat(
          names["w"].map(n => "des " + n))
      }
    }
  },
  "nobility": {
    "name": "Trolle (Ehrenhafte Beinahmen)",
    "second": {
      "names": {
        "x": ["Ahnensänger", "Blutsänger", "der Frevler", "der Ketzer", "der Traumspötter", "die Ausgestoßene", "die Verlorene", "Einarm", "Mondfelsenlauscher", "Mondmachtweber", "Orkhauer", "Orkstumpfhauer", "Silberhaar", "Stumpfhauer", "Trollfaust", "Trollhau", "Wimmelkriegerfreund", "Zottelhaar", "Zweigesicht"]
      }
    }
  }
}
