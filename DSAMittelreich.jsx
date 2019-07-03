import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import { DSAGrid, DSAGridItem, DSAGridRow } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect'

import {GenderChooser, NobilitySwitch} from './DSANameUtils';
import RandomNameGenerator from './RandomNameGenerator';

const styles = theme => ({
  root: {}
});

const REGIONS = [
  "Albernia",
  "Almada",
  "Garethien",
  "Greifenfurt",
  "Kosch",
  "Nordmarken",
  "Perricum",
  "Rabenmark",
  "Rommilyser Mark",
  "Sonnenmark",
  "Tobrien",
  "Warunk",
  "Weiden",
  "Windhag"
].sort();

const Q_STR_FMT = {
  parseNumbers: true,
  parseBooleans: true,
}

function RegionChooser(props) {
  const {region, onChange} = props;
  const options = REGIONS.map(a => {return {value: a, label: a}})
  return <DSAGridRow>
    <DSASelect options={options}
      label="Region"
      value={region}
      onChange={(e) => onChange(e.value)} />
    </DSAGridRow>
}

export class DSAMittelreich extends React.Component {

  onParameterChange = (name, value) => {
    let values = queryString.parse(
      this.props.location.search,
      Q_STR_FMT);
    values[name] = value;
    this.props.history.push({
      search: queryString.stringify(values)
    });
  }

  render() {
    const {classes, location, onNameChosen} = this.props;
    const values = queryString.parse(location.search, Q_STR_FMT);
    const {gender, nobility, region} = values;
    return <div className={classes.root}>
      <DSAGrid className={classes.root}>
        <DSAGridItem lg={3} md={6} sm={12}>
          <DSAGrid>
            <RegionChooser
              region={region ? region : REGIONS[0]}
              onChange={e => this.onParameterChange("region", e)} />
            <GenderChooser
              gender={gender ? gender : "x"}
              onChange={e => this.onParameterChange("gender", e)} />
            <NobilitySwitch
              nobility={nobility ? nobility : false}
              onChange={e => this.onParameterChange("nobility", e)} />
          </DSAGrid>
        </DSAGridItem>
        <DSAGridItem lg={9} md={6} sm={12}>
          <RandomNameGenerator
            {...values}
            onNameChosen={onNameChosen}/>
        </DSAGridItem>
      </DSAGrid>
    </div>
  }
}

DSAMittelreich.propTypes = {
  classes: PropTypes.object.isRequired,
  onNameChosen: PropTypes.func
};

export default withRouter(withStyles(styles)(DSAMittelreich));
