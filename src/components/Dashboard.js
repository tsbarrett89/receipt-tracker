import React, {useContext} from 'react'

import { CredentialContext } from '../contexts/CredentialsContext'

const Dashboard = () => {
    const { currentUsername } = useContext(CredentialContext)
    
    return (
        <div>
            <h1>{currentUsername}</h1>
        </div>
    )
}

export default Dashboard