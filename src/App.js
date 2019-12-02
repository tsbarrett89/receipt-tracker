import React from 'react';
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import FormikLogin from './components/Login'
import FormikRegistration from './components/Registration'
import FormikCreateNewReceipt from './components/CreateNewReceipt'
import SavedReceipts from './components/SavedReceipts'

function App() {
  return (
    <div>
      <Navigation />

      <Route exact path='/' />
      <Route path='/login' component={FormikLogin} />
      <Route path='/register' component={FormikRegistration} />
      <Route path='/saved-receipts' component={SavedReceipts} />
      <Route path='/create-receipt' component={FormikCreateNewReceipt} />
    </div>
  );
}

export default App;
