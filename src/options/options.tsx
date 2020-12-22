import ReactDOM from 'react-dom'
import React from 'react'
import { PopUpWindow } from '../components/PopUpWindow'

const OptionsApp = () =>{
    return(
        <div>
            <PopUpWindow />
        </div>
    )
}

const root = document.getElementById('pocket-extension-anchor')

ReactDOM.render(<OptionsApp />, root)
