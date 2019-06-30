import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route } from "react-router-dom";

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';

import DSANameChooser from './DSANameChooser';
import DSAMittelreich from './DSAMittelreich';


const styles = {
  root: {
    flexGrow: 1,
  }
};

const ROOT_PATH = "/names/"

class NamesMain extends React.Component {

  state = {
    history: []
  }

  addNameToHistory = (name) => {

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
        </DSAGrid>
      </main>;
  }
};

NamesMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NamesMain);
