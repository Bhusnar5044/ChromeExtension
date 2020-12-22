import React from 'react'
import { ButtonWrapper, Button, P } from './styled'

const LoginIndicator:React.FC = () =>{

    return(
        <ButtonWrapper>
            <P>You are not Logged-In</P>
            <Button>Please Login</Button>
        </ButtonWrapper>
    )
}

export default LoginIndicator