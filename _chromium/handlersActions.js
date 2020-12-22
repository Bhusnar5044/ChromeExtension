/* global chrome */
import { SAVE_TO_POCKET_REQUEST } from '../src/store/actionTypes'

/* Browser Action - Toolbar Icon Clicked
–––––––––––––––––––––––––––––––––––––––––––––––––– */
export function browserAction(tab) {
  // if (isSystemPage(tab)) return openPocket() // open list on non-standard pages
  
  const { id: tabId, title, url: pageUrl } = tab
  const tabInfo = { id: tabId, title, url: pageUrl }
  chrome.tabs.sendMessage(tabId, { action: SAVE_TO_POCKET_REQUEST ,'tabInfo':tabInfo})
  // save({ pageUrl, title, tabId })
}
