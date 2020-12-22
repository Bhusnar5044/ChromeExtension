import React from 'react'
import {
  Content,

  StyledModal
} from './style'

// export interface ModalProps {
//   modalContent: JSX.Element;
// }
export const Modal = ({
  modalContent,
}) => {
  return(
    <React.Fragment>
        <StyledModal>
          <Content>{modalContent}</Content>
        </StyledModal>
    </React.Fragment>
  )
}
// return isShown ? ReactDOM.createPortal(modal, document.body) : null;