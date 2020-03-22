import React from 'react';
import queryString from 'query-string'

import DSASelect from '../controls/DSASelect'
import {DSAGridRow} from '../controls/DSAGrid'

const GENDERS = [
  {value: "m", label: "männlich"},
  {value: "w", label: "weiblich"},
  {value: "x", label: "egal"},
]

export const GenderChooser = (props) => {
  const {gender, onChange} = props;
  return(
    <DSAGridRow>
      <DSASelect options={GENDERS}
        label="Geschlecht"
        value={gender}
        onChange={(e) => onChange(e.value)} />
    </DSAGridRow>
  );
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
