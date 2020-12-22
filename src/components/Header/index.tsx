/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
// import { Content } from '../OutsideClick';
import {
    HeaderText,
    Menu, MenuButton, StyledHeader
} from './style'

// export interface ModalProps {
//   headerText: string;
// }
// export interface IDialogProps {
//     onClose: () => void
//   }
  
const Header = ({
  headerText,
}) => {
    const [showDropdown,setShowDropdown]=useState(false)
    // const ref = useRef(null);
    
    return(
          <StyledHeader>
            <HeaderText>{headerText}</HeaderText>
            <MenuButton onClick={()=>setShowDropdown(!showDropdown)}>
                <div></div>
                <div></div>
                <div></div>
            </MenuButton>
            {showDropdown?
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <Menu>
                <a href="#">Archive Page</a>
                <a href="">Remove Page</a>
                <hr/>
                <a href="">Open MyList</a>
                <a href="">Log Out</a>
            </Menu>:''}
          </StyledHeader>
        )
}

export default Header