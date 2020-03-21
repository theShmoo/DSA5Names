import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import { DSAGrid, DSAGridItem, DSAGridRow } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect'

import {GenderChooser, NobilitySwitch} from './DSANameUtils';
import RandomNameGenerator from './RandomNameGenerator';
import {Garethien} from './DSANamesGarethien';
import {Albernia} from './DSANamesAlbernia';
import {Almada} from './DSANamesAlmada';
import {Greifenfurt} from './DSANamesGreifenfurt';
import {Kosch} from './DSANamesKosch';
import {Nordmarken} from './DSANamesNordmarken';
import {Perricum} from './DSANamesPerricum';
import {Rabenmark} from './DSANamesRabenmark';
import {RommilyserMark} from './DSANamesRommilyserMark';
import {Sonnenmark} from './DSANamesSonnenmark';
import {Tobrien} from './DSANamesTobrien';
import {Warunk} from './DSANamesWarunk';
import {Weiden} from './DSANamesWeiden';
import {Windhag} from './DSANamesWindhag';

const styles = theme => ({
  root: {}
});

const REGIONS = [
  {name: "Albernia", names: Albernia},
  {name: "Almada", names: Almada},
  {name: "Garethien", names: Garethien},
  {name: "Greifenfurt", names: Greifenfurt},
  {name: "Kosch", names: Kosch},
  {name: "Nordmarken", names: Nordmarken},
  {name: "Perricum", names: Perricum},
  {name: "Rabenmark", names: Rabenmark},
  {name: "Rommilyser Mark", names: RommilyserMark},
  {name: "Sonnenmark", names: Sonnenmark},
  {name: "Tobrien", names: Tobrien},
  {name: "Warunk", names: Warunk},
  {name: "Weiden", names: Weiden},
  {name: "Windhag", names: Windhag},
].sort((a,b) => a.name.localeCompare(b.name));

const Q_STR_FMT = {
  parseNumbers: true,
  parseBooleans: true,
}

function RegionChooser(props) {
  const {region, onChange} = props;
  const options = REGIONS.map(a => {return {value: a.name, label: a.name}})
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
    const r = region ? region : REGIONS[2].name;
    return <div className={classes.root}>
      <DSAGrid className={classes.root}>
        <DSAGridItem lg={3} md={6} sm={12}>
          <DSAGrid>
            <RegionChooser
              region={r}
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
            names={REGIONS.find(a => a.name === r).names}
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
