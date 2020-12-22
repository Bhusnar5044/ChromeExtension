import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position:fixed;
  top:0;
  z-index:100000;
  right:10px;
  height:auto;
`

export const StyledModal = styled.div`
  width:300px;
  z-index: 100;
  background: white;
  /* position: relative; */
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 19px rgba(0, 74, 215, 0.45), inset 0px 0px 6px rgba(0, 0, 0, 0.15);
`

export const Content = styled.div`
  /* padding: 10px; */
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
`