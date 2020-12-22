import {DispatchActionTypes,TabData,SAVE_TAB_INFO} from '../TabAction/actionTypes'

export interface InitialTabActionSate {
    tabInfo?: TabData;
}

const init: InitialTabActionSate = {}
   

export function TabReducer(state: InitialTabActionSate = init, 
    action:DispatchActionTypes): InitialTabActionSate {
    switch (action.type) {
        case SAVE_TAB_INFO:
            return state={
                ...state,
                tabInfo:action.payload
            }

        default:
            return state
    }
}