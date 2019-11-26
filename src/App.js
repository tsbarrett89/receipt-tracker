import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import FormikLogin from './components/Login'
import FormikRegistration from './components/Registration'

function App() {
  return (
    <div>
      <Navigation />

      <Route exact path='/' />
      <Route path='/login' component={FormikLogin} />
      <Route path='/register' component={FormikRegistration} />
      <Route path='/saved-receipts' />
      <Route path='/create-receipt' />
    </div>
  );
}

export default App;
