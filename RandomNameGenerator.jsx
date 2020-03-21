import React from 'react';

import DSAItemList from '../controls/DSAItemList';

import {getRandomElement} from '../utils/RandomUtils';

const NUM_NAMES_TO_GENEREATE = 10;

function generateNames(args) {
    let names = []
    for(let i = 0; i < NUM_NAMES_TO_GENEREATE; ++i) {
      const name = args.reduce((sum, a) => {
        sum += getRandomElement(a.names) + a.sep;
        return sum;
      }, "");
      names.push(name);
    }
    return names;
}

function getGender(part, gender) {
  if(part.x) {
    return part.x;
  }
  if(!gender || gender === "x") {
    return part.w.concat(part.m);
  }
  else {
    return part[gender];
  }
}

function generatePart(part, gender) {
  if(part)
  {
    let parts = []
    if(part.prefix) {
      parts.push({sep: "", names: getGender(part.prefix, gender)});
    }
    parts.push({sep: " ", names: getGender(part, gender)});
    if(part.postfix) {
      parts.push({sep: "", names: getGender(part.postfix, gender)});
    }
    return parts;
  }
  return undefined;
}

export default function RandomNameGenerator(props) {
  const {gender, nobility, region, onNameChosen, names} = props;
  const nameRedirection = (n) => (e) => {
    onNameChosen(n);
  }
  let n = [];
  if(!nobility) {
    let parts = []
    const pre = generatePart(names.normal.pre, gender);
    if(pre) parts.push(...pre)
    const second = generatePart(names.normal.second, gender);
    if(second) parts.push(...second)
    const post = generatePart(names.normal.post, gender);
    if(post) parts.push(...post)
    n = generateNames(parts);
  }
  else {
    let parts = []
    const pre = names.nobility.pre ?
      generatePart(names.nobility.pre, gender) :
      generatePart(names.normal.pre, gender);
    if(pre) parts.push(...pre)
    const second = generatePart(names.nobility.second, gender);
    if(second) parts.push(...second)
    const post = generatePart(names.nobility.post, gender);
    if(post) parts.push(...post)
    n = generateNames(parts);
  }
  const items = n.map(n => { return {value: n, action: nameRedirection(n)}});
  return <DSAItemList items={[ {title: region, items: items}]} />
}
