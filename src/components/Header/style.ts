import styled from 'styled-components'

export const StyledHeader = styled.div`
  /* border-radius: 8px 8px 0 0; */
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 3px;
  height:50px;
`

export const HeaderText = styled.div`
  color: #435465;
  align-self: center;
  font-size:18px;
  font-weight:bold;
  padding:0 10px;
`

export const Menu = styled.div`
    display: block;
    position: absolute;
    top:55px;
    right:10px;
    background-color: #f1f1f1;
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10000000;
    a {
        color: rgb(34,34,34);
        padding: 5px 16px;
        text-decoration: none;
        display: block;
        &:hover{
            background-color:gray;
        }
    }
    hr{
        margin:0;
        padding:0
    }
`

export const MenuButton = styled.button`
    margin: 0;
    background:none;
    border:none;
    height:auto;
    padding: 0 10px;
    cursor: pointer;
    div {
        width: 20px;
        height: 3px;
        background-color: #717171;;
        margin: 3px 0;
    }
    
    :active{
        border:none;
    }
    /* &:hover{
        ${Menu}{
            display:block;
        }

    } */
`