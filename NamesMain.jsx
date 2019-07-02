import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route } from "react-router-dom";

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';
import DSAItemList from '../controls/DSAItemList';
import DSAButton from '../controls/DSAButton';

import DSANameChooser from './DSANameChooser';
import DSAMittelreich from './DSAMittelreich';


const styles = {
  root: {
    flexGrow: 1,
  }
};

const ROOT_PATH = "/names/"

function NameHistory(props) {
  const {history, onClear} = props;
    if(history.length > 0) {
      const items = history.map((n) => {
        return { value: n }});
      return <DSAGridRow>
          <DSAInfoBox title="Ausgewählte Namen">
            <DSAButton size="small" onClick={onClear}>löschen</DSAButton>
            <DSAItemList items={items}/>
          </DSAInfoBox>
        </DSAGridRow>;
    }
    else {
      return "";
    }
  }

class NamesMain extends React.Component {

  state = {
    history: []
  }

  addNameToHistory = (name) => {
    this.setState(state => {
      const history = [...state.history, name];
      return {
        history: history
      };
    });
  }

  clearHistory = () => {
    this.setState({
        history: []
      });
  }

  render() {
    const { classes } = this.props;

    const NAMES = [
      {
        page: <DSAMittelreich onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "mittelreich",
        label: "Mittelreich"
      },
      {
        page: <div>lol 2</div>,
        path: ROOT_PATH + "tulamidenlande",
        label: "Tulamidenlande"
      }
    ];

    const OPTIONS = NAMES.map(a => {
      return {value: a.path, label: a.label};
    });

    return <main className={classes.root}>
        <DSAGrid>
          <DSAGridRow>
            <DSAInfoBox title="Namen">
              <DSANameChooser names={OPTIONS}/>
              <Switch>
                {NAMES.map((p, i) => <Route key={i} path={p.path} render={
                  (a) => p.page
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

export default withStyles(styles)(NamesMain);
