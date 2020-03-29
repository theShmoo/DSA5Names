const names = {
  "m": ["Adamantosch", "Agam", "Albrax", "Ambrosch", "Andrasch", "Angrax", "Arbosch", "Ardorag", "Arombolosch", "Arthag", "Auralm", "Aurelosch", "Ballasch", "Berosch", "Bolrosch", "Brimosch", "Cendrasch", "Cobaltosch", "Drogosch", "Duglim", "Dungobalosch", "Duratosch", "Dwarusch", "Eratosch", "Fergolosch", "Ferolax", "Fobosch", "Forrax", "Gandrasch", "Gantrak", "Gramosch", "Greifax", "Grubosch", "Gundar", "Gurthar", "Hangor", "Harmalosch", "Himbi", "Ibralosch", "Ingramosch", "Jandrim", "Kalamox", "Kirgam", "Korgrim", "Kurax", "Marnax", "Mokel", "Muragolosch", "Narax", "Nortgram", "Nugrod", "Obolosch", "Ombrosch", "Ordamon", "Pogolosch", "Rambosch", "Roglom", "Rugrim", "Sogrim", "Sordolax", "Surgosch", "Torgrim", "Thorgrim", "Tlutasch", "Tordim", "Turim", "Tuwar", "Ugosch", "Vargasch", "Worgrimm", "Worhak", "Xandresch", "Xenos", "Xerbosch", "Xoldarim", "Xotosch"],
  "w": ["Agescha", "Aghira", "Agrescha", "Angraxa", "Angrella", "Angrescha", "Argloscha", "Aurescha", "Borascha", "Borgime", "Branda", "Curima", "Darisch", "Darischna", "Diamante", "Draxnescha", "Durga", "Dwarmasche", "Elnaxa", "Ferrascha", "Gandla", "Gandrescha", "Garxa", "Grescha", "Grischka", "Gubara", "Hogescha", "Ibra", "Ibrascha", "Ilgrimma", "Ingrala", "Ingrascha", "Irasch", "Iraschna", "Irgascha", "Jalla", "Jandrascha", "Lavascha", "Lorescha", "Malmascha", "Mogdascha", "Muraxa", "Narescha", "Norgalda", "Ogelne", "Ombroscha", "Raraxe", "Rogoscha", "Roschka", "Salgrima", "Saphira", "Schatoscha", "Sorscha", "Taloscha", "Theruka", "Torgima", "Thorgima", "Turescha", "Thurescha", "Tortoscha", "Turda", "Turdascha", "Turmaline", "Ugrilne", "Varnascha", "Xorda", "Zarescha"]
};

const brobim_names = {
  "m": ["Aska", "Baska", "Brafka", "Curon", "Fafka", "Fruron", "Gafka", "Graska", "Graka", "Grimrik", "Ingrik", "Jafka", "Lafka", "Rafka", "Raska", "Safka", "Staska", "Trafka", "Zafka", "Zaron"],
  "w": ["Agri", "Argre", "Broge", "Cere", "Fruri", "Grime", "Gure", "Ingre", "Miri", "Nogri", "Rafe", "Sore", "Stari", "Ugri", "Zure"]
}

const rote_names = {
  "m": ["Agmascha", "Angrmosch", "Brimba", "Fentscha", "Grimxa", "Grimxe", "Groscha", "Ingbre", "Krimbe", "Lagtba", "Linscha", "Mascha", "Mokma", "Norgte", "Olbra", "Pertscha", "Schroba", "Tlaxa", "Ubraxa", "Xetsche"],
"w": ["Abralm", "Angrim", "Armax", "Arngm", "Balgschmox", "Cobtasch", "Dragnx", "Esbatsch", "Dragnax", "Esbatosch", "Fratschax", "Garx", "Grosch", "Harxmasch", "Korgsch", "Narax", "Schrax", "Ubrasch", "Xetschag", "Xomosch"]
}

export const Zwerge = {
  "normal": {
    "name": "Amboss-, Brillant- und Erzzwerge",
    "pre": {
      names: names
    },
    "post": {
      "prefix": {
        "m": ["groscho"],
        "w": ["groschna"]
      },
      "names": names
    }
  },
  "nobility": {
    "name": "Ehrentitel",
    "second": {
      "names": {
        "x": ["Bierschlucker", "Donnerhau", "Donnerstein", "Doppelaxt", "Drachenfeuer", "Drachenglut", "Drachenjäger", "Drachenschreck", "Eidbrecher", "Eisenbart", "Eisenfaust", "Eisenfinder", "Eisenruf", "Eisenschlag", "Eisenschmelzer", "Elfenfreund", "Erzbrecher", "Felsenschulter", "Felsspalter", "Feuerbart", "Flammenseher", "Flinkfinger", "Funkenschläger", "Gemmenschneider", "Gluttrinker", "Goldhand", "Hammerschlag", "Orkhasser", "Runendeuter", "Schlagtreu", "Schmiedetreu", "Silberhelm", "Stahlblut", "Steinhau", "Steinhaut", "Steinspalter"]
      }
    }
  },
  "huegel": {
    "name": "Hügelzwerge",
    "post": {
      "names": {
        "x": ["Angroschlob", "Angroschslob", "Apfelhalm", "Beutelsaum", "Bösfold", "Breitenklein", "Breitpfann", "Dumpfbrodt", "Eisenbart", "Eisenhütt", "Eisenpfann", "Flinkfuß", "Funkenflug", "Glimmherd", "Grambax", "Grimsbart", "Grumling", "Hopfenwart", "Hüglinger", "Klappertopf", "Kleinenbreit", "Köchelbart", "Kupferblatt", "Labkraudt", "Meckerhas", "Sandsteiner", "Sauerklos", "Schmiedefreund", "Schotterkies", "Siebenrüb", "Silberhaar", "Sirbensack", "Sternhagel", "Wackerstrunk", "Zwiebelbock"]
      }
    }
  },
  "brobim": {
    "name": "Brobim",
    "pre": {
      "names": brobim_names
    },
    "post": {
      "names": brobim_names
    }
  },
  "rote": {
    "name": "Rote Zwerge",
    "pre": {
      "names": rote_names
    },
    "post": {
      "names": rote_names
    }
  },
  "tiefe": {
    "name": "Tiefe Zwerge",
    "pre": {
      "names": {
        "w": ["Aghira", "Agrab", "Agschar", "Aruu", "Brogta", "Brugha", "Drugha", "Druup", "Haarta", "Huuschar", "Looga", "Luute", "Maagra", "Moghra", "Murfu", "Muufa", "Noork", "Roschar", "Ruupla", "Slaag", "Spuug", "Trochta", "Tuurh", "Ungre", "Uxaa", "Xoop", "Zapuul"],
        "m": ["Adroch", "Albrik", "Alberik", "Agsch", "Ardorag", "Aroom", "Bincht", "Blaak", "Braatz", "Drurghi", "Druup", "Dulf", "Gashrix", "Grasosch", "Grook", "Horg", "Kinkel", "Kraghtosch", "Lamsch", "Mumpf", "Murgusch", "Naark", "Nogh", "Orkosch", "Puul", "Raax", "Roscho", "Truum", "Uschg", "Uxmox", "Xaandrog", "Zaag"]
      }
    },
    "post": {
      "names": {"x": []},
      "prefix": {"x": []}
    }
  }
};
