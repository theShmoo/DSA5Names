import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import {mapObject} from '../utils/MapUtils';
import { DSAGrid, DSAGridItem } from '../controls/DSAGrid';

import {GenderChooser, OptionChooser, parse, stringify} from './DSANameUtils';
import RandomNameGenerator from './RandomNameGenerator';

const DSANormalNames = (props) => {
  const {classes, onNameChosen, location, names, history} = props;

  const onParameterChange = (name, value) => {
    let values = parse(location.search);
    values[name] = value;
    history.push({
      search: stringify(values)
    });
  }
  const options = mapObject(names, (k) => {
    return {label: names[k].name, value: k}});
  const values = parse(location.search);
  const {gender, option} = values;

  return (
    <DSAGrid className={classes.root}>
      <DSAGridItem lg={3} md={6} sm={12}>
        <DSAGrid>
          <GenderChooser
            gender={gender ? gender : "x"}
            onChange={e => onParameterChange("gender", e)} />
          <OptionChooser
            options={options}
            option={option ? option : "normal"}
            onChange={e => onParameterChange("option", e)} />
        </DSAGrid>
      </DSAGridItem>
      <DSAGridItem lg={9} md={6} sm={12}>
        <RandomNameGenerator
          names={names}
          {...values}
          onNameChosen={onNameChosen}/>
      </DSAGridItem>
    </DSAGrid>
  );
};

DSANormalNames.propTypes = {
  classes: PropTypes.object.isRequired,
  onNameChosen: PropTypes.func
};

const styles = theme => ({root: {}});
export default withRouter(withStyles(styles)(DSANormalNames));
