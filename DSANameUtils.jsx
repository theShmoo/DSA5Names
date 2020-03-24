import React from 'react';
import queryString from 'query-string'

import DSASelect from '../controls/DSASelect'
import {DSAGridRow} from '../controls/DSAGrid'

const Genders = [
  {value: "m", label: "männlich"},
  {value: "w", label: "weiblich"},
  {value: "x", label: "egal"},
]

export const GenderChooser = (props) => {
  const {gender, onChange} = props;
  return(
    <DSAGridRow>
      <DSASelect options={Genders}
        label="Geschlecht"
        value={gender}
        onChange={(e) => onChange(e.value)} />
    </DSAGridRow>
  );
}

export function sanitize(option, options, fallback) {
  if(options.includes(option))
    return option;
  else
    return fallback;
}

export function sanitizeGenders(gender) {
  return sanitize(gender, Genders.map(g => g.value), "x");
}


export const OptionChooser = (props) => {
  const {options, option, onChange} = props;
  if(options.length === 1) {
    return "";
  }
  return(
    <DSAGridRow>
      <DSASelect options={options}
        label="Wähle"
        value={option}
        onChange={(e) => onChange(e.value)} />
    </DSAGridRow>
  );
}

const Q_STR_FMT = {
  parseNumbers: true,
  parseBooleans: true,
}

export function parse(search) {
  return queryString.parse(search, Q_STR_FMT)
}

export function stringify(values) {
  return queryString.stringify(values)
}
