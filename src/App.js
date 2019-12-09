import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import { CredentialContext } from './contexts/CredentialsContext'

import Header from './components/Header'
import Navigation from './components/Navigation'
import FormikLogin from './components/Login'
import FormikRegistration from './components/Registration'
import FormikCreateNewReceipt from './components/CreateNewReceipt'
import SavedReceipts from './components/SavedReceipts'

import { BodyStyled } from './components/styling'

function App() {
  const [currentUsername, setcurrentUsername] = useState('')

  return (
    <div>
      <CredentialContext.Provider value={{ currentUsername, setcurrentUsername }}>
        <Header />
        <BodyStyled>
          <Navigation />

          <Route exact path='/' component={FormikLogin} />
          <Route path='/login' component={FormikLogin} />
          <Route path='/register' component={FormikRegistration} />
          <Route path='/saved-receipts' component={SavedReceipts} />
          <Route path='/create-receipt' component={FormikCreateNewReceipt} />
        </BodyStyled>
      </CredentialContext.Provider>
    </div>
  );
}

export default App;
