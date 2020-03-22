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
import DSANormalNames from './DSANormalNames';

import {Aranien} from './DSANamesAranien';
import {Nivesen} from './DSANamesNivesen';
import {Norbaden} from './DSANamesNorbaden';
import {Nostria} from './DSANamesNostria';
import {Schattenlande} from './DSANamesSchattenlande';
import {Selem} from './DSANamesSelem';
import {Bukanier} from './DSANamesBukanier';
import {Svellttal} from './DSANamesSvellttal';
import {Thorwal} from './DSANamesThorwal';
import {Trollzacker} from './DSANamesTrollzacker';
import {Zahori} from './DSANamesZahori';
import {Zyklopeninseln} from './DSANamesZyklopeninseln';


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
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "alanfa",
        label: "Al'Anfa & Tiefer Süden"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "andergast",
        label: "Andergast"
      },
      {
        page: <DSANormalNames names={Aranien} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "aranien",
        label: "Aranien"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "bornland",
        label: "Bornland"
      },
      {
        page: <DSANormalNames names={Nivesen} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "nivesen",
        label: "Nivesen"
      },
      {
        page: <DSANormalNames names={Norbaden} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "norbaden",
        label: "Norbaden"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "ferkina",
        label: "Ferkinas"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "gjasker",
        label: "Gjasker"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "horasreich",
        label: "Horasreich"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "uthuria",
        label: "Uthurische Modenamen"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "kemi",
        label: "Kemi"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "maraskan",
        label: "Maraskan"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "history",
        label: "Historische Namen"
      },
      {
        page: <DSANormalNames names={Nostria} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "nostria",
        label: "Nostria"
      },
      {
        page: <DSANormalNames names={Schattenlande} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "schattenlande",
        label: "Schattenlande"
      },
      {
        page: <DSANormalNames names={Selem} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "selem",
        label: "Selem"
      },
      {
        page: <DSANormalNames names={Bukanier} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "meer",
        label: "Südmeer & Bukanier"
      },
      {
        page: <DSANormalNames names={Svellttal} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "svellttal",
        label: "Svellttal"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "thalusien",
        label: "Thalusien"
      },
      {
        page: <DSANormalNames names={Thorwal} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "thorwal",
        label: "Thorwal"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "maraskan",
        label: "Maraskan"
      },
      {
        page: <DSANormalNames names={Trollzacker} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "trollzacker",
        label: "Trollzacker"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "tulamidenlande",
        label: "Tulamidenlande & Kalifat"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "utulu",
        label: "Waldmenschenstämme & Utulu"
      },
      {
        page: <DSANormalNames names={Zahori} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "zahori",
        label: "Zahori"
      },
      {
        page: <DSANormalNames names={Zyklopeninseln} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "zyklopeninseln",
        label: "Zyklopeninseln"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "zwoelfgoetter",
        label: "Zwölfgötternamen"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "echsen",
        label: "Echsenmenschen"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "elfen",
        label: "Elfen"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "goblins",
        label: "Golbins"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "oger",
        label: "Oger"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "grolme",
        label: "Grolme"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "orks",
        label: "Orks"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "trolle",
        label: "Trolle"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "zwerge",
        label: "Zwerge"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "kuenstler",
        label: "Bühnen- & Künstlernamen"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "magier",
        label: "Magier- & Weihennamen"
      }
    ];

    const OPTIONS = NAMES.map(a => {
      return {value: a.path, label: a.label};
    }).sort((l,r) => l.label.localeCompare(r.label));

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
