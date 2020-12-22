/* eslint-disable no-unused-expressions */
import React, { useEffect} from 'react'
import Header from '../Header'
import { Modal } from '../Modal'
import { AppState } from '../../store/store'
import { ModalWrapper } from './styled'
import { useSelector } from 'react-redux'
import TagInput from '../TagInput'
import LoginIndicator from '../LoginIndicator'


export const PopUpWindow:React.FC =() => {
  
  const tabReducer = useSelector((state: AppState) => state.tabReducer)

  const content = <div><Header headerText="Page Saving"/><TagInput/></div>

  const posts = <div style={{color:'black',fontSize:'16px'}}>{tabReducer.tabInfo!==undefined && tabReducer.tabInfo.title}</div>
  
  const signIn = <LoginIndicator/>
  useEffect(()=>{

  },[])

  return(
        <ModalWrapper id="extension_Pocket_App">
            <Modal modalContent={content} />
            <Modal modalContent={posts} />
            <Modal modalContent={signIn} />
        </ModalWrapper>   
    )
}

export default PopUpWindow