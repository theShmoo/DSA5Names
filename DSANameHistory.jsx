import React from 'react';

import { DSAGridRow } from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';
import DSAItemList from '../controls/DSAItemList';
import DSAButton from '../controls/DSAButton';

const NameHistory = (props) => {
  const {history, onClear} = props;
  if(history.length > 0) {
    const items = history.map((n) => {
      return { value: n }
    });
    return (
      <DSAGridRow>
        <DSAInfoBox title="Ausgewählte Namen">
          <DSAButton size="small" onClick={onClear}>löschen</DSAButton>
          <DSAItemList items={items}/>
        </DSAInfoBox>
      </DSAGridRow>
    );
  }
  else {
    return "";
  }
};

export default NameHistory;
