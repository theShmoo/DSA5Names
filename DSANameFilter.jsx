import React from 'react';

import { DSAGrid, DSAGridItem } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';

import NameChooser from './DSANameChooser';
import {Namen} from './DSANameObject';

const ROOT_PATH = "/names/";

function filterBy(names, filter, by) {
  if(filter[by].length > 0)
    return names.filter(n => !(n[by] && !filter[by].includes(n[by])))
  else
    return names;
}

function getFilteredBy(names, search, toFilter, filter) {

  let lastRemainig = names;
  for(let n = 0; n < toFilter.length; ++n) {
    lastRemainig = filterBy(lastRemainig, filter, toFilter[n]);
  }
  return lastRemainig
      .map(n => n[search])
      // only use unique values
      .filter((val, id, array) => val && array.indexOf(val) === id)
      // sort it
      .sort();
}

const DSANameFilter = (props) => {
  const {filteredNames, filter, onFilterChanged} = props;

  const onfilterResultToFilter = (prop, values) => {
    if(values) {
      onFilterChanged(prop, values.map(v => v.value));
    }
    else {
      onFilterChanged(prop, []);
    }
  }

  const regionOptions = getFilteredBy(Namen, "region", ["area"], filter).map(r => {
    return {value: r, "label": r}
  })

  const areaOptions = getFilteredBy(Namen, "area", ["region"], filter).map(r => {
    return {value: r, "label": r}
  })

  const options = filteredNames.map(a => {
    return {value: ROOT_PATH + a.path, label: a.label};
  }).sort((l,r) => l.label.localeCompare(r.label));

  return <DSAGrid>
        <DSAGridItem xs={12} sm={12} md={6}>
          <DSASelect options={regionOptions}
            label="Regionen"
            value={filter.region}
            multi={true}
            onChange={e => onfilterResultToFilter("region", e)}
            helperText="z.B.: Nördliches, Zentrales oder Südliches Aventurien" />
        </DSAGridItem>
        <DSAGridItem xs={12} sm={12} md={6}>
          <DSASelect options={areaOptions}
            label="Kultur"
            value={filter.area}
            multi={true}
            onChange={e => onfilterResultToFilter("area", e)}
            helperText="z.B.: Mittelreich" />
        </DSAGridItem>
      <NameChooser names={options}/>
    </DSAGrid>;
}

export default DSANameFilter
