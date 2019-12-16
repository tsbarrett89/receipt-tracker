import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import { CredentialContext } from './contexts/CredentialsContext'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Login from './components/Login'
import FormikRegistration from './components/Registration'
import Dashboard from './components/Dashboard'
import FormikCreateNewReceipt from './components/CreateNewReceipt'
import SavedReceipts from './components/SavedReceipts'
import PrivateRoute from './utils/PrivateRoute'

import { BodyStyled } from './components/styling'

function App() {
  const [currentUsername, setCurrentUsername] = useState('')

  const changeUsername = (username) => {
    setCurrentUsername(username)
  }

  return (
    <div>
      <CredentialContext.Provider value={{ currentUsername, changeUsername }}>
        <Header />
        <BodyStyled>
          <Navigation />

          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={FormikRegistration} />
          <PrivateRoute path='/user-dashboard' component={Dashboard} />
          <PrivateRoute path='/saved-receipts' component={SavedReceipts} />
          <PrivateRoute path='/create-receipt' component={FormikCreateNewReceipt} />
        </BodyStyled>
      </CredentialContext.Provider>
    </div>
  );
}

export default App;
