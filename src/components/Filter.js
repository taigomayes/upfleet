import React, { useState } from 'react';
import styled from 'styled-components';

const Category = styled.div`
    width: 80%;
    
    background: white;
   
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    @media (min-width: 800px){
        height: 100%;
        margin: 25px;
        
       
      
    }


    @media (max-width: 800px){
        height: 25px;
        width: 100px;
        margin: 0 10px 0 10px;
        
       
      
    }

`

const Title = styled.div`
    color: #707070;
    cursor: pointer;
    width: 100px;
    height: 25px;
    

    @media (min-width: 800px){
        display: flex;
        background: ;
        width: 100%;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50px;        
       
      
    }
`

const Tags = styled.div`
    @media (max-width: 800px){
        display: flex;
        position: fixed;
        background: white;
        width: 100vw;
        top: 125px;
        height: 75px;
        display: flex;
        border-bottom: 3px solid #707070;
        justify-content: center;
        align-items: center;
        
      
    }

`

const Tag = styled.div`
    color: #707070;
    @media (max-width: 800px){
        margin: 10px;
      
    }
`

export const Filter = () => {
    
    const [options, setOptions] = useState(false)
    const showOptions = () => {
        setOptions(!options)

    }

    return(
        <Category>
            <Title onClick={showOptions}>Category</Title>

            <Tags style={{ display: options ? 'flex' : 'none'}}>
                <Tag>Music</Tag>
                <Tag>Website</Tag>
                <Tag>App</Tag>
                <Tag>Art</Tag>
                <Tag>Writing</Tag>
            </Tags>


        </Category>
    )
}