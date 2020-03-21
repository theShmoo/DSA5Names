import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import { DSAGrid, DSAGridItem } from '../controls/DSAGrid';

import {GenderChooser, NobilitySwitch} from './DSANameUtils';
import RandomNameGenerator from './RandomNameGenerator';

const styles = theme => ({
  root: {}
});

const Q_STR_FMT = {
  parseNumbers: true,
  parseBooleans: true,
}

function DSANormalNames(props) {

  const onParameterChange = (name, value) => {
    let values = queryString.parse(props.location.search, Q_STR_FMT);
    values[name] = value;
    props.history.push({
      search: queryString.stringify(values)
    });
  }

  const {classes, onNameChosen, location, names} = props;
  const values = queryString.parse(location.search, Q_STR_FMT);
  const {gender, nobility} = values;
  const has_nobility = names.nobility !== undefined;
  return <DSAGrid className={classes.root}>
      <DSAGridItem lg={3} md={6} sm={12}>
        <DSAGrid>
          <GenderChooser
            gender={gender ? gender : "x"}
            onChange={e => onParameterChange("gender", e)} />
          { has_nobility ?
            <NobilitySwitch
              nobility={nobility ? nobility : false}
              onChange={e => onParameterChange("nobility", e)} /> : ""
          }
        </DSAGrid>
      </DSAGridItem>
      <DSAGridItem lg={9} md={6} sm={12}>
        <RandomNameGenerator
          names={names}
          {...values}
          onNameChosen={onNameChosen}/>
      </DSAGridItem>
    </DSAGrid>
}

DSANormalNames.propTypes = {
  classes: PropTypes.object.isRequired,
  onNameChosen: PropTypes.func
};

export default withRouter(withStyles(styles)(DSANormalNames));
