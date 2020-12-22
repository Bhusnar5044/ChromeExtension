/*global safari chrome*/
import { store } from '../store/store'
import { toggle } from './inject'

import { SAVE_TO_POCKET_REQUEST, SAVE_TAB_INFO } from '../store/actionTypes'
// import { SAVE_TO_POCKET_SUCCESS } from 'actions'
// import { SAVE_TO_POCKET_FAILURE } from 'actions'
// import { ARCHIVE_ITEM_SUCCESS } from 'actions'
// import { ARCHIVE_ITEM_FAILURE } from 'actions'
// import { REMOVE_ITEM_SUCCESS } from 'actions'
// import { REMOVE_ITEM_FAILURE } from 'actions'
// import { TAGS_ADDED_SUCCESS } from 'actions'
// import { TAGS_ADDED_FAILURE } from 'actions'
// import { SUGGESTED_TAGS_REQUEST } from 'actions'
// import { SUGGESTED_TAGS_SUCCESS } from 'actions'
// import { SUGGESTED_TAGS_FAILURE } from 'actions'

// import { GET_RECS_REQUEST } from 'actions'
// import { GET_RECS_SUCCESS } from 'actions'
// import { GET_RECS_FAILURE } from 'actions'
// import { SAVE_REC_SUCCESS } from 'actions'

// import { USER_LOG_IN_SUCCESS } from 'actions'
// import { USER_LOG_IN_FAILURE } from 'actions'
// import { USER_LOG_OUT_SUCCESS } from 'actions'
// import { USER_LOG_OUT_FAILURE } from 'actions'
// import { COLOR_MODE_CHANGE } from 'actions'
// import { UPDATE_STORED_TAGS } from '../actions'

/* Add Listeners
–––––––––––––––––––––––––––––––––––––––––––––––––– */
export const dispatchInit = () => {
  if (typeof chrome !== 'undefined') {
    chrome.runtime.onMessage.addListener(function(request) {
      const { action: name, payload: message ,'tabInfo':info} = request
      // console.log(info)
      handleMessage({ name, message, info })
    })
  }

  if (typeof safari !== 'undefined') {
    safari.self.addEventListener('message', handleMessage)
    document.addEventListener('contextmenu', handleContextMenu, false)
  }

  // Make sure the toolbar icon is in sync with users light/dark preference
  // window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  //   const darkMode = e.matches
  //   store.dispatch({ type: COLOR_MODE_CHANGE, payload: { darkMode } })
  // })
}

/* Handle incoming messages
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function handleContextMenu(event) {
  const anchor = event.target.closest('a')
  const link = anchor ? anchor.href : false
  const urlToSave = link ? link : 'page'
  safari.extension.setContextMenuEventUserInfo(event, { urlToSave })
}

function handleMessage(event) {
  const { message, name = 'Unknown Action', info } = event || {}

  console.groupCollapsed(`RECEIVE: ${name}`)
  console.log(message,info)
  console.groupEnd(`RECEIVE: ${name}`)

  switch (name) {
    case SAVE_TO_POCKET_REQUEST: {
      // injectDomElements() // Check for DOM elements
      toggle()
      store.dispatch({ type: SAVE_TO_POCKET_REQUEST })
      store.dispatch({type:SAVE_TAB_INFO,payload:info})
      return
    }

    default: {
      return
    }
  }
}
