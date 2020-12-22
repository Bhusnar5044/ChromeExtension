/* global chrome */
import * as handle from './handlersActions'

chrome.browserAction.onClicked.addListener(handle.browserAction)
