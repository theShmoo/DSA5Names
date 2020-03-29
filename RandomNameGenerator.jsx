import React from 'react';

import DSAItemList from '../controls/DSAItemList';

import {getRandomElement, getRandomIntInclusive} from '../utils/RandomUtils';

const NUM_NAMES_TO_GENEREATE = 10;

function getGender(part, gender) {
  let retval = [];
  if(part[gender]) {
    retval.push(...part[gender]);
  }
  if(part.x){
    retval.push(...part.x);
  }
  return retval;
}

function fixateGender(gender, seed) {
  if(!gender || gender === 'x')
    return getRandomElement(["m", "w"], seed);
  else
    return gender;
}

function generateNames(parts, gender, seed) {
    let names = []
    for(let i = 0; i < NUM_NAMES_TO_GENEREATE; ++i) {
      const fixGender = fixateGender(gender, seed);
      const name = parts.reduce((sum, a) => {
        if(!a) return sum;
        const names = getGender(a.names, fixGender);
        if(names.length > 0) {
          const repeat = getRandomIntInclusive(a.repeat.from, a.repeat.to, seed);
          for (let i = 0; i < repeat; ++i) {
            sum += getRandomElement(names, seed) + getRandomElement(a.sep, seed);
          }
          if(a.capitalize) {
            sum = sum.charAt(0).toUpperCase() + sum.slice(1);
          }
        }
        return sum;
      }, "");
      names.push(name);
    }
    return names;
}

function sanitizePart(part) {
  const separator = part.sep ? part.sep : [" "];
  const repeat = part.repeat ? part.repeat : {"from": 1, "to": 1};
  const capitalize = part.capitalize ? part.capitalize : false;
  return {sep: separator, names: part, repeat: repeat, capitalize: capitalize};
}

function generatePart(part, fallback, suffix) {
  if(part && part[suffix]) {
    return sanitizePart(part[suffix]);
  }
  else if(fallback && fallback[suffix]){
    return sanitizePart(fallback[suffix]);
  }
  return undefined;
}

function generatePartWithSuffix(part, fallback) {
  return [
    generatePart(part, fallback, "prefix"),
    generatePart(part, fallback, "names"),
    generatePart(part, fallback, "postfix")
  ];
}

const PARTS = ["pre", "second", "post"];
const FALLBACK = "normal";

const RandomNameGenerator = (props) => {
  const {gender, region, onNameChosen, names, option, seed} = props;
  const nameRedirection = (n) => (e) => {
    onNameChosen(n);
  }
  const parts = PARTS.map(part =>
    generatePartWithSuffix(names[option][part],
      names[FALLBACK][part])
  ).flat(1);
  const generatedNames = generateNames(parts, gender, seed);
  const items = generatedNames.map(n => {
    return {value: n, action: nameRedirection(n)}
  });
  return <DSAItemList items={[ {title: region, items: items}]} />
};

export default RandomNameGenerator;
