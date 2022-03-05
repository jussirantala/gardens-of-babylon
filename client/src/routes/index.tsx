//------------------------------------------------------------------------------
// This is the main app router notice it contains a welcome component ?
// This component is a boilerplate just to welcome you !
// You can remove the component and its directory to start a blank project
// welcome directory at: 'src/elements/structures/welcome'
//------------------------------------------------------------------------------

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Gardens from 'routes/Gardens';


//------------------------------------------------------------------------------

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Gardens />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

//------------------------------------------------------------------------------

export default Router;
