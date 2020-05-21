import React from 'react';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import Item from './item';

function Mosaico(){
    return( 
<div className="ui two column grid">
  <Item titulo="Palacio Portales123" rank="12"/>
  <Item titulo="Palacio Portales123" rank="12"/>
  <Item titulo="Palacio Portales123" rank="12"/>
  <Item titulo="Palacio Portales123" rank="12"/>
</div>
    )
}
export default Mosaico;
