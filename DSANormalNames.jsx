import React from 'react';
import PropTypes from 'prop-types';

import {mapObject} from '../utils/MapUtils';
import { DSAGrid, DSAGridItem } from '../controls/DSAGrid';
import DSAButton from '../controls/DSAButton';

import {GenderChooser, OptionChooser} from './DSANameUtils';
import RandomNameGenerator from './RandomNameGenerator';

const DSANormalNames = (props) => {
  const {onNameChosen, onParameterChange, onRandomize, names, seed, values} = props;

  const options = mapObject(names, (k) => {
    return {label: names[k].name, value: k}});
  const {gender, option} = values;

  return (
    <DSAGrid>
      <DSAGridItem lg={3} md={6} sm={12}>
        <DSAGrid>
          <GenderChooser
            gender={gender ? gender : "x"}
            onChange={e => onParameterChange("gender", e)} />
          <OptionChooser
            options={options}
            option={option ? option : "normal"}
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
          {...values}
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
