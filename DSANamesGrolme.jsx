const names = {
  "m": ["Bahte'g", "Bohkg", "Chonk", "Djiank", "D'mahg", "E'Rrong", "G'Noskpel", "G'Wang", "Kyatak", "Lk'Tpel", "Luak", "Luyx", "Mukg", "Nak'Kelock", "Nuok", "G'Olek", "Paraxai", "Peek", "Prak", "Prakmak", "Quok", "Rik", "Röang", "Spog", "Tak", "Tbong", "Truok", "Tug", "Tuwog", "Xarkel", "Yenx", "Yook"],
  "w": ["Gax", "G'Djak", "G'Lek", "Fran'G", "K'nok", "Mogl", "M'para", "Müng", "Neakx", "Nok'g", "Norpel", "Pakel", "Pitla", "Ring'Gx", "Ropaxl", "Tglaix", "Thaokg", "Tlik", "Weangx", "Xil", "Yungk", "Zlaklel"]
}

export const Grolme = {
  "wichtig": {
    "name": "Wichtig, Wichtigtuer, Ausgestoßener",
    "second": { "names": [] },
    "post": { "names": [] }
  },
  "normal": {
    "name": "Diener",
    "pre": {
      "prefix": {"x": names.m.concat(names.w)},
      "names": {"x": ["s"]}
    },
    "second": {
      "names": {
        "m": ["Ehemann", "Alchimieassistent", "Buchprüfer", "Geldleiher", "Gläubiger", "Goldaufwieger", "Handelsvermittler", "Handelsvertreter", "Haushofmeister", "Kolbenreiniger", "Liquiditätsprüfer", "Meisterschüler", "Münzprüfer", "Oberberater", "Schuldner", "Schüler", "Sklave", "Sonderbeauftragter", "Trankprüfer", "Verhandler", "Verhandlungsführer", "Vorsprecher", "Zahlmeister"],
        "w": ["Ehefrau", "Alchimieassistentin", "Buchprüfer", "Geldleiherin", "Gläubige", "Goldaufwiegerin", "Handelsvermittlerin", "Handelsvertreterin", "Haushofmeisterin", "Kolbenreinigerin", "Liquiditätsprüferin", "Meisterschülerin", "Münzprüferin", "Oberberaterin", "Schuldnerin", "Schülerin", "Sklavin", "Sonderbeauftragte", "Trankprüferin", "Verhandlerin", "Verhandlungsführerin", "Vorsprecherin", "Zahlmeisterin"],
        "x": ["Lehrling", "Testsubjekt"]
      }
    },
    "post": { "names": names }
  }
}
