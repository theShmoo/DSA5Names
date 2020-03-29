import React from 'react';
import queryString from 'query-string'

import DSASelect from '../controls/DSASelect'
import {DSAGridRow} from '../controls/DSAGrid'

export const Genders = [
  {value: "x", label: "egal"},
  {value: "m", label: "männlich"},
  {value: "w", label: "weiblich"}
]

export function sanitize(option, options, fallback) {
  if(options.includes(option))
    return option;
  else
    return fallback;
}

export const OptionChooser = (props) => {
  const {options, option, label, onChange} = props;
  if(options.length === 1) {
    return "";
  }
  return(
    <DSAGridRow>
      <DSASelect options={options}
        label={label ? label : "Wähle"}
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
