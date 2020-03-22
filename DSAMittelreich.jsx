import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';

import {parse, stringify} from './DSANameUtils';

import DSANormalNames from "./DSANormalNames";
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
  {name: "Albernia (Alberned)", names: Albernia},
  {name: "Almada (Almadanisch)", names: Almada},
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

const DSAMittelreich = (props) => {
  const {classes, location, history, onNameChosen} = props;

  const onParameterChange = (name, value) => {
    let values = parse(location.search);
    values[name] = value;
    history.push({
      search: stringify(values)
    });
  }

  const values = parse(location.search);
  const {region} = values;
  const r = region ? region : REGIONS[2].name;
  const names = REGIONS.find(a => a.name === r).names;
  return (
    <DSAGrid className={classes.root}>
      <RegionChooser
        region={r}
        onChange={e => onParameterChange("region", e)} />
      <DSANormalNames names={names} onNameChosen={onNameChosen}/>
    </DSAGrid>
  );
}

DSAMittelreich.propTypes = {
  classes: PropTypes.object.isRequired,
  onNameChosen: PropTypes.func
};

export default withRouter(withStyles(styles)(DSAMittelreich));
