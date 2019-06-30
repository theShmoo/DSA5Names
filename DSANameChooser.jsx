import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSASelect from '../controls/DSASelect';

const styles = theme => ({
  root: {}
});

function DSANameChooser(props) {
  const {classes, names, history, location} = props;

  const current = names.find(p => p.value === location.pathname);

  return <DSAGrid className={classes.root}>
      <DSAGridRow>
        <DSASelect options={names}
          label="Namen"
          value={current ? current.value : ""}
          onChange={e => history.push(e.value)}
          helperText="z.B.: Mittelreich" />
      </DSAGridRow>
    </DSAGrid>;
}

DSANameChooser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(DSANameChooser));
