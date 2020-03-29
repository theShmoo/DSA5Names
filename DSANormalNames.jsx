import React from 'react';
import PropTypes from 'prop-types';

import {mapObject} from '../utils/MapUtils';
import { DSAGrid, DSAGridItem } from '../controls/DSAGrid';
import DSAButton from '../controls/DSAButton';

import {OptionChooser, Genders, sanitize} from './DSANameUtils';
import RandomNameGenerator from './RandomNameGenerator';

const DSANormalNames = ({
  onNameChosen,
  onParameterChange,
  onRandomize,
  names,
  seed,
  values,
  region}) => {

  const options = mapObject(names, (k) => {
    return {label: names[k].name, value: k}
  });
  const {gender, option} = values;
  const fallback = "normal";
  const safe_option= sanitize(option, Object.keys(names), fallback);
  const gender_values = Genders.map(g => g.value)
  const safe_gender= sanitize(gender, gender_values, gender_values[0]);

  return (
    <DSAGrid>
      <DSAGridItem lg={3} md={6} sm={12}>
        <DSAGrid>
          <OptionChooser
            option={safe_gender}
            options={Genders}
            label="Geschlecht"
            onChange={e => onParameterChange("gender", e)} />
          <OptionChooser
            option={safe_option}
            options={options}
            onChange={e => onParameterChange("option", e)} />

          <DSAGridItem lg={9} md={6} sm={12}>
            <DSAButton onClick={onRandomize}>generiere neue Namen</DSAButton>
          </DSAGridItem>
        </DSAGrid>
      </DSAGridItem>
      <DSAGridItem lg={9} md={6} sm={12}>
        <RandomNameGenerator
          names={names}
          seed={seed}
          region={region}
          gender={safe_gender}
          option={safe_option}
          onNameChosen={onNameChosen}/>
      </DSAGridItem>
    </DSAGrid>
  );
};

DSANormalNames.propTypes = {
  onNameChosen: PropTypes.func,
  onParameterChange: PropTypes.func,
  names: PropTypes.object.isRequired,
  seed: PropTypes.func.isRequired
};

export default DSANormalNames;
