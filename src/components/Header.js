import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';


const HeaderDiv = styled.div`
    position: fixed; 
    top: 0;
    width: 100vw;
    height: 75px;
    border-bottom: 3px solid #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #707070;
    box-shadow: 0px 5px 10px #707070;
    background: white;
    z-index: 1000;


  }
`
const Logo = styled.div`
    font-size: 24px;
    font-weight: 1000;
    cursor: pointer;
    position: fixed;
    left: 10%;


`

const Link = styled.div`
    margin: 0 20px 0 20px;
    cursor: pointer;
`

const DropdownLink = styled.div`
    margin: 20px;
    cursor: pointer;
`

const Nav = styled.div`

position: fixed;
right: 0;
height: 75px;
width: 50vw;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 800px) {
    display: none;
}


`

const Hamburger = styled.button`

position: fixed;
right: 50px;
background: none;
border: none;
color: #707070;
cursor: pointer;

&:focus{
    outline: none;
}

@media (min-width: 800px) {
    display: none;
}

@media (max-width: 800px) {
    display: flex;
}

`

const Dropdown = styled.div`
    position: fixed;
    top: 75px;
    background: white;
  
    flex-direction: column;
    width: 100vw;
    border: 3px solid #707070;
    box-shadow: 0px 5px 10px grey;


`


export const Header = () => {

    const [dropdown, setDropdown] = useState(false)

    const toggleDrowdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <HeaderDiv>

        <Logo>upfleet</Logo>
      

        <Nav>
            <Link>dashboard</Link>
            <Link>start a fleet</Link>
            <Link>messages</Link>
            <Link>sign in</Link>
        </Nav>

        <Hamburger onClick={toggleDrowdown}><MenuIcon /></Hamburger>

        <Dropdown style={{ display: dropdown ? 'flex' : 'none' }}>
            <DropdownLink onClick={toggleDrowdown} >dashboard</DropdownLink>
            <DropdownLink onClick={toggleDrowdown} >start a fleet</DropdownLink>
            <DropdownLink onClick={toggleDrowdown} >messages</DropdownLink>
            <DropdownLink onClick={toggleDrowdown} >sign in</DropdownLink>
        </Dropdown>

        </HeaderDiv>
    )

}