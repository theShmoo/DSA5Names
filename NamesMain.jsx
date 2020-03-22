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
import {Andergast} from './DSANamesAndergast';
import {Bornland} from './DSANamesBornland';
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
import {Zwoelfgoetter} from './DSANamesZwoelfgoetter';


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
        label: "Mittelreich (Garethi)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "alanfa",
        label: "Al'Anfa & Tiefer Süden (Brabaci, Gatamo)"
      },
      {
        page: <DSANormalNames names={Andergast} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "andergast",
        label: "Andergast (Andergastisch)"
      },
      {
        page: <DSANormalNames names={Aranien} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "aranien",
        label: "Aranien (Aranisch, Aretya, Tulamidya)"
      },
      {
        page: <DSANormalNames names={Bornland} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "bornland",
        label: "Bornland (Bornländisch)"
      },
      {
        page: <DSANormalNames names={Nivesen} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "nivesen",
        label: "Nivesen (Nujuka)"
      },
      {
        page: <DSANormalNames names={Norbaden} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "norbaden",
        label: "Norbaden (Alaani, Gajak, Takellen)"
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
        label: "Horasreich (Horathi)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "uthuria",
        label: "Uthurische Modenamen (Dschuku, Nathani, Uthurisch)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "kemi",
        label: "Kemi"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "maraskan",
        label: "Maraskan (Maraskani, Ruuz)"
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
        label: "Selem (Zelemja)"
      },
      {
        page: <DSANormalNames names={Bukanier} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "meer",
        label: "Südmeer & Bukanier (Brabaci, Bukanisch, Charypto, Gatamo)"
      },
      {
        page: <DSANormalNames names={Svellttal} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "svellttal",
        label: "Svellttal"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "thalusien",
        label: "Thalusien (Tulamidya)"
      },
      {
        page: <DSANormalNames names={Thorwal} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "thorwal",
        label: "Thorwal (Thorwalsch, Hjaldingsch)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "maraskan",
        label: "Maraskan"
      },
      {
        page: <DSANormalNames names={Trollzacker} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "trollzacker",
        label: "Trollzacker (Zhulchammaqra)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "tulamidenlande",
        label: "Tulamidenlande & Kalifat (Mahnadisch, Balashidisch, Tulamidya)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "utulu",
        label: "Waldmenschenstämme (Mohisch) & Utulu (Puka-Puka)"
      },
      {
        page: <DSANormalNames names={Zahori} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "zahori",
        label: "Zahori (Zahorisch)"
      },
      {
        page: <DSANormalNames names={Zyklopeninseln} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "zyklopeninseln",
        label: "Zyklopeninseln (Zyklopäisch)"
      },
      {
        page: <DSANormalNames names={Zwoelfgoetter} onNameChosen={this.addNameToHistory} />,
        path: ROOT_PATH + "zwoelfgoetter",
        label: "Zwölfgötternamen"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "echsen",
        label: "Echsenmenschen (Rssah)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "elfen",
        label: "Elfen (Asdharia, Isdira)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "goblins",
        label: "Golbins (Goblinisch)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "oger",
        label: "Oger (Ogrisch)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "grolme",
        label: "Grolme (Grolmisch)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "orks",
        label: "Orks (Oloark, Ologhaijan)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "trolle",
        label: "Trolle (Trollisch)"
      },
      {
        page: <div>not yet implemented</div>,
        path: ROOT_PATH + "zwerge",
        label: "Zwerge (Angram)"
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
