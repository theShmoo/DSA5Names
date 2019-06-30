import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import { DSAGrid, DSAGridItem, DSAGridRow } from '../controls/DSAGrid';
import DSAItemList from '../controls/DSAItemList';
import DSASelect from '../controls/DSASelect'

import {GenderChooser, NobilitySwitch} from './DSANameUtils';

const styles = theme => ({
  root: {}
});

const REGIONS = [
  {value: "garethien", label: "Garethien"},
  {value: "horasreich", label: "Horasreich"},
]

const Q_STR_FMT = {
  parseNumbers: true,
  parseBooleans: true,
}

function RegionChooser(props) {
  const {region, onChange} = props;
  return <DSAGridRow>
    <DSASelect options={REGIONS}
      label="Region"
      value={region}
      onChange={(e) => onChange(e.value)} />
    </DSAGridRow>
}

export class DSAMittelreich extends React.Component {

  onGenderChange = (g) => {
    this.props.history.push({
      search: '?gender=' + g
    })
  }

  onNobilityChange = (n) => {
    this.props.history.push({
      search: '?nobility=' + n
    })
  }

  onRegionChange = (r) => {
    this.props.history.push({
      search: '?region=' + r
    })
  }

  render() {
    const {classes, location, onNameChosen} = this.props;
    const values = queryString.parse(location.search, Q_STR_FMT);
    const {gender, nobility, region} = values;
    const NAMES = ["A","B","C"];
    const names = NAMES.map(n => { return {value: n};});
    return <div className={classes.root}>
      <DSAGrid className={classes.root}>
        <DSAGridItem lg={3} md={6} sm={12}>
          <DSAGrid>
            <RegionChooser
              region={region ? region : REGIONS[0].value}
              onChange={this.onRegionChange} />
            <GenderChooser
              gender={gender ? gender : "x"}
              onChange={this.onGenderChange} />
            <NobilitySwitch
              nobility={nobility ? nobility : false}
              onChange={this.onNobilityChange} />
          </DSAGrid>
        </DSAGridItem>
        <DSAGridItem lg={9} md={6} sm={12}>
          <DSAItemList items={[ {title: "Mittelreich", items: names}]} />
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
