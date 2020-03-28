import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import { Switch, Route } from "react-router-dom";

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';
import {createSeed, createAutoSeed} from '../utils/RandomUtils';

import {parse, stringify} from './DSANameUtils';
import NameHistory from './DSANameHistory';
import NameFilter from './DSANameFilter';
import NormalNames from './DSANormalNames';
import {Namen} from './DSANameObject';

const ROOT_PATH = "/names/"

function filterNames(namen, filter) {
  return namen.filter((n) => {
    if(filter.region.length > 0) {
      if(n.region && !filter.region.includes(n.region)) {
        return false;
      }
    }

    if(filter.area.length > 0) {
      if(n.area && !filter.area.includes(n.area)) {
        return false;
      }
    }

    if(filter.race.length > 0) {
      if(n.race && !filter.race.includes(n.race)) {
        return false;
      }
    }

    return true;
  });
}

class NamesMain extends React.Component {

  state = {
    history: [],
    filter: {
      region: [],
      area: [],
      race: []
    }
  };

  componentDidMount() {
    const values = parse(this.props.location.search);
    if(values === undefined || values.h === undefined) {
      this.randomize();
    }
  }

  addNameToHistory = (name) => {
    this.setState(state => {
      const history = [...state.history, name];
      return {
        history: history
      };
    });
  }

  onParameterChange = (name, value) => {
    const {location, history} = this.props;
    let values = parse(location.search);
    values[name] = value;
    history.push({
      search: stringify(values)
    });
  }

  randomize = () => {
    this.onParameterChange("h", createAutoSeed());
  }

  onFilterChanged = (prop, val) => {
    this.setState(prevState => {
      let newFilter = prevState.filter;
      newFilter[prop] = val;
      return {
        filter: newFilter
      };
    });
  }

  clearHistory = () => {
    this.setState({
        history: []
      });
  };

  render() {
    const { classes, location } = this.props;
    const {filter} = this.state
    const values = parse(location.search);
    let seed = createSeed(values.h);
    const filteredNames = filterNames(Namen, filter);

    return <main className={classes.root}>
        <DSAGrid>
          <DSAGridRow>
            <DSAInfoBox title="Namen">
              <NameFilter filteredNames={filteredNames} filter={filter} onFilterChanged={this.onFilterChanged}/>
              <Switch>
                {filteredNames.map((p, i) => <Route key={i}
                  path={ROOT_PATH + p.path}
                  location={location}
                  render={
                    (a) => <NormalNames names={p.names}
                              onParameterChange={this.onParameterChange}
                              onNameChosen={this.addNameToHistory}
                              onRandomize={this.randomize}
                              values={values}
                              region={p.label}
                              seed={seed} />
                } />)}
              </Switch>
            </DSAInfoBox>
          </DSAGridRow>
          <NameHistory history={this.state.history} onClear={this.clearHistory} />
        </DSAGrid>
      </main>;
  }
};

NamesMain.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    flexGrow: 1,
  }
};
export default withRouter(withStyles(styles)(NamesMain));
