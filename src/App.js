import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation />

      <Route exact path='/' />
      <Route path='/login' />
      <Route path='/register' />
      <Route path='/saved-receipts' />
      <Route path='/create-receipt' />
    </div>
  );
}

export default App;
