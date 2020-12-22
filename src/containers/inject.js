import { dispatchInit } from './dispatch'
import React from 'react'
import ReactDOM from 'react-dom'
import {PopUpWindow} from '../components/PopUpWindow'
import { Provider } from 'react-redux'
import { store } from '../store/store'

  // const existingRoot = document.getElementById('pocket-extension-root')
  // if (existingRoot) return

const rootElement = document.createElement('div')
rootElement.id = 'pocket-extension-root'
const root = document.body.appendChild(rootElement)


const stylesElement = document.createElement('div')
stylesElement.id = 'pocket-extension-styles'
// const styles = document.body.appendChild(stylesElement)

// const myCache = createCache({
//   key: 'pocket',
//   container: styles
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PopUpWindow />
    </Provider>
  </React.StrictMode>,
  root
)

//inner div for toggle and animation
const existingRoot = document.getElementById('extension_Pocket_App')
existingRoot.style = 'opacity: 0;transform: translateY(-100%);margin-bottom: -999em;transition: all 1s linear, margin 0s linear 1s;'

export function toggle(){
  if(existingRoot.style.opacity === '0'){
    existingRoot.style = 'opacity: 1;transform: translateY(0);margin: 0;transition: all 1s linear, margin 0s linear 0s;'
  }else{
    existingRoot.style = 'opacity: 0;transform: translateY(-100%);margin-bottom: -999em;transition: all 1s linear, margin 0s linear 1s;'
  }
}

//outside window click listener
window.addEventListener('click', function(e){   
  if (!document.getElementById('extension_Pocket_App').contains(e.target)){
    existingRoot.style = 'opacity: 0;transform: translateY(-100%);margin-bottom: -999em;transition: all 1s linear, margin 0s linear 1s;'
  } 
})

;(function() {
  if (window.top === window) {
    function setLoaded() {
      dispatchInit()
    }

    // Check page has loaded and if not add listener for it
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setLoaded)
    } else {
      setLoaded()
    }
  }
})()