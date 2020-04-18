const MaleNames = ["Abdul", "Abu", "Achmad", "Ahmed", "Achmed", "Achtev", "Adil", "Ahmedin", "Akim", "Akram", "Alam", "Alev", "Ali", "Alrik", "Amaryd", "Amir", "Amjad", "Arif", "Arkos", "Asad", "Asim", "Assaf", "Aytan", "Azhar", "Azim", "Baba", "Babur", "Bachtar", "Bahir", "Basir", "Basman", "Benayman", "Bey", "Chadim", "Chaled", "Chamza", "Charef", "Charim", "Chassan", "Cherek", "Chetin", "Dajin", "Dawud", "Deniz", "Dilhaban", "Djamil", "Djuned", "Dschadir", "Dscherid", "Dunchaban", "Erkhaban", "Eslam", "Fahd", "Faiz", "Faizal", "Faramud", "Farid", "Farsid", "Faruk", "Faruq", "Fatih", "Feruzef", "Feyhach", "Ftaihif", "Gaftar", "Ghulam", "Gulshev", "Habib", "Habled", "Hadjiin", "Hahmud", "Haimamud", "Hairan", "Hajar", "Haijar", "Hakim", "Halem", "Harnar", "Hamed", "Hamid", "Hamil", "Harabal", "Hasrabal", "Harun", "Haschnabah", "Hashim", "Hassan", "Hilal", "Hüsseyin", "Ijad", "Ismechan", "Ismeth", "Issam,Jabir,Jachman,Jalif,Jamal,Jassafer", "Jedin", "Jedrech", "Jikhaban", "Jikhbar", "Kadir", "Khadir", "Kalkarib", "Karim", "Karmal", "Kashban", "Kasim", "Kazan", "Kemal", "Khabla", "Khadil", "Khajid", "Khalid", "Khalil", "Khorim", "Khusrau", "Latif", "Madir", "Mahdir", "Machmud", "Mahir", "Mahmud", "Malik", "Mansur", "Marwan", "Mawud", "Melekh", "Mezzek", "Mhadul", "Mhanach", "Mharbal", "Maharbal", "Mhukkadin", "Mordai", "Muammar", "Murad", "Mussad", "Mustafa", "Nadim", "Nadrash", "Najara", "Nareb", "Nasim", "Nasir", "Nasreddin", "Nazir", "Nebahath", "Neriman", "Nezahet", "Omar", "Omjaid", "Pakhizal", "Perhiman", "Rachman", "Rafid", "Rafik", "Rahim", "Rashar", "Rashid", "Rashim", "Rashman", "Rashtul", "Rastafan", "Rasul", "Rasuul", "Raul", "Rahul", "Rechan", "Rezzan", "Rhayad", "Rhukeyef", "Rohal", "Ruban", "Ruchan", "Sadir", "Sahil", "Said", "Saif", "Saiman", "Sali", "Sanshied", "Sedef", "Selim", "Selo", "Seyshaban", "Shabob", "Shafir", "Shahln", "Shakir", "Shanatir", "Sheik", "Sheikh", "Sheranbil", "Sulmahadin", "Sulman", "Surkan", "Tahir", "Tarek", "Thamir", "Tulachim", "Tulef", "Tuleyman", "Ukhraban", "Umar", "Umran", "Wahid", "Yadail", "Yakuban", "Yali", "Yassir", "Yelmiz", "Yerdawan", "Yussuf", "Zachaban", "Zachan", "Zahir", "Zekih", "Zelhiman", "Zuhal", "Zulhamid"];

const FemaleNames = ["Abla", "Abrizah", "Afra", "Aicha", "Aischa", "Aishulibeth", "Alhina", "Alima", "Amina", "Amira", "Amirah", "Arika", "Ashaybith", "Asifa", "Asra", "Ayda", "Aydina", "Ayla", "Ayrina", "Ayshal", "Azina", "Aziza", "Bedia", "Bediya", "Belima", "Belizeth", "Beychaliban", "Birshen", "Byalabeth", "Chadijah", "Chalibah", "Chandra", "Chaneefa", "Chanisa", "Chanya", "Dassareth", "Delilah", "Demeya", "Dilhabeth", "Dimah", "Dimiona", "Djamila", "Djamilla", "Dunja", "Emira", "Emiramis", "Erzibeth", "Eshila", "Esmalda", "Ezra", "Fadime", "Fahimja", "Faiza", "Farah", "Fatime", "Fayrishe", "Ferushan", "Hadiya", "Hakima", "Halima", "Hanan", "Harani", "äennah", "Heyeshan", "Hidaybeth", "Isha", "Ishara", "Izmaban", "Jamila", "Jamilha", "Jaouna", "Jehmina", "Josmabith", "Jushibi", "Karhima", "Kemillja", "Kerime", "Khadifa", "Khadija", "Khalila", "Laana", "Laila", "Lamia", "Layan", "Layla", "Leila", "Manjula", "Maram", "Marwa", "Meriban", "Milhibeth", "Mirhiban", "Mirshan", "Moqtah", "Nada", "Nadia", "Nadiya", "Nahda", "Nahema", "Naima", "Nasira", "Nassiban", "Nayla", "Nazmeya", "Nedime", "Neraida", "Nesliha", "Niobara", "Nishat", "Nurhan", "Onchabeth", "Oyan", "Oymira", "Palmeya", "Peribeth", "Perishan", "Perizel", "Rabia", "Rabiya", "Rajiha", "Ranchel", "Raniya", "Rasha", "Reem", "Renahban", "Reshemin", "Riftah", "Sabia", "Sabiya", "Sadia", "Sahar", "Sajida", "Salma", "Sarjaban", "Sefira", "Selima", "Selime", "Semirhija", "Shabra", "Shahane", "Shanhazadra", "Shanja", "Sharisad", "Shenny", "Sherizeth", "Sheydan", "Shila", "Shuhelja", "Shulam", "Sulibeth", "Tulameth", "Tulmyrja", "Yalisa", "Yamira", "Yashima", "Yasine", "Yasmin", "Yeshinna", "Yessamin", "Yezemin", "Yilbalis", "Ymrai", "Yosmabith", "Yullabeth", "Zahia", "Zahina", "Zahira", "Zahrabeth", "Zamira", "Zechiban", "Zuleika", "Zuleikha", "Zulhamin"];

export const Tulamidenlande = {
  "normal": {
    "name": "Tulamide",
    "pre": {
      "names": {
        "m": MaleNames,
        "w": FemaleNames}
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
        "m": ["ibn"],
        "x": ["sal"]
      },
      "postfix": {
        "w": ["suni", "sunni", "sunya"]
      }
    }
  },
  "novadi": {
    "name": "Novadi",
    "second": {
      "prefix": {
        "w": ["saba"],
        "m": ["ben"],
        "x": ["sâl"]
      }
    }
  },
  "nobility": {
    "name": "Bei-& Ehrennamen",
    "post": {
      "names": {
        "m": ["abu'l Aram", "abu'l Ketab", "abu'l Buchâre", "abu'l Ifriit", "abu'l Zul", "abu'l Leila", "abu'l Sulef", "ibn'el Kachelaq"],
        "w": ["bint el' Aram", "bint el' Ketab", "bint el'Buchâre", "bint el'Ifriit", "bint el'Zul", "bint el'Leila", "bint el'Sulef", "umm'el Kachelaq"],
        "x": ["al'Ahjan", "al'Ahmad", "al'Alam", "al'Amar", "al'Ankhra", "al'Azila", "al'Azizel", "al'Chadid", "al'Djinn", "al'Fessir", "al'Haimamud", "al'Hakim", "al'Jamila", "al'Kebîr", "al'Kira", "al'Raschtul", "al'Rashid", "al'Rik", "al'Saher", "al'Sarjaban", "al'Shabra", "al'Sharisad", "al'Shaya", "al'Yalla", "al'Yeshinna", "al'Zahra", "al'Fenneq", "el'Schaddai", "el'Zitaqi"]
      }
    }
  }
}
