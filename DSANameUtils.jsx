import React from 'react';

import DSASelect from '../controls/DSASelect'
import DSASwitch from '../controls/DSASwitch'
import {DSAGridRow} from '../controls/DSAGrid'

export const GENDERS = [
  {value: "m", label: "männlich"},
  {value: "w", label: "weiblich"},
  {value: "x", label: "egal"},
]

export function GenderChooser(props) {
  const {gender, onChange} = props;
  return <DSAGridRow>
    <DSASelect options={GENDERS}
      label="Geschlecht"
      value={gender}
      onChange={(e) => onChange(e.value)} />
    </DSAGridRow>
}

export function NobilitySwitch(props) {
  const {nobility, onChange} = props;
  return <DSAGridRow>
    <DSASwitch
      label="Adel"
      checked={nobility}
      name="nobility"
      onChange={(n, e) => onChange(e)} />
    </DSAGridRow>
}
