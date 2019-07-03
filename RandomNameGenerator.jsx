import React from 'react';

import DSAItemList from '../controls/DSAItemList';
import {Garethien} from './DSANamesGarethien';

import {getRandomElement} from '../utils/RandomUtils';

const NUM_NAMES_TO_GENEREATE = 10;
const VON_ZU = ["von", "zu"];

function generateNames(...args) {
    let names = []
    for(let i = 0; i < NUM_NAMES_TO_GENEREATE; ++i) {
      const name = args.reduce((sum, a) => {sum += getRandomElement(a) + " "; return sum}, "");
      names.push(name);
    }
    return names;
}

function getGender(a, gender) {
  if(!gender || gender === "x") {
    return a.w.concat(a.m);
  }
  else {
    return a[gender];
  }
}

export default function RandomNameGenerator(props) {
  const {gender, nobility, region, onNameChosen} = props;
  const nameRedirection = (n) => (e) => {
    onNameChosen(n);
  }
  let names = [];
  if(!nobility) {
    const sur = Garethien.normal.post;
    const pre = getGender(Garethien.normal.pre, gender);
    names = generateNames(pre, sur);
  }
  else {
    const pre = getGender(Garethien.nobility.pre, gender);
    const second = getGender(Garethien.nobility.second, gender);
    const sur = Garethien.nobility.post;
    names = generateNames(pre, second, VON_ZU, sur);
  }
  const items = names.map(n => { return {value: n, action: nameRedirection(n)}});
  const title = region ? region : "Garethien"
  return <DSAItemList items={[ {title: title, items: items}]} />
}
