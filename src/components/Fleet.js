import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const FleetDiv = styled.div`
    width: 100%;
    height: 300px;
    
    
    border: 3px solid #707070;
    display: flex;
    

    color: #707070;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #707070;
    margin: 10px;
    padding: 10px;
   flex-direction: column;

`

const Picture = styled.div`
    width: 80px;
    height: 80px;
   
    border-radius: 10px;
    border: 3px solid #707070;
    

    position: absolute;
    left: 10px;
    font-size: 12px;


`

const Title = styled.div`
  font-weight: 800;
`

const Type = styled.div`
  font-weight: 500;
  margin-top: 10px;
`
const Description = styled.div`
    width: 100%;
    margin: 20px;
   
    font-size: 12px;
    height: 100%;
    border-radius: 10px;
    position: relative;
    left: ;
    display: flex;
    background: white ;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    

    
`

const Date = styled.div`
    font-size: 12px;
    margin-top: 0px;

`


const Follow = styled.div`
    position: absolute;
    right: 30px;
    top: 20px;

`

const Right = styled.div`
    position: absolute;
    left: 125px;
   
    display: flex;
    flex-direction: column;
   
    background: ;
    text-align: left;
    width: 100px;
   

    height: 80px;
    align-items: ;
    justify-content: left;

    border-radius: 10px;
`
const Middle = styled.div`
position: relative;
width: 300px;
display: flex;
flex-direction: column;

border: 3px solid #707070;
height: 100px;
top: -3px;
left: 3px;
border-radius: 10px;
`

const Row = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: row;

height: 100px;

left: -3px;
border-radius: 10px;
justify-content: center;
align-items: center;padding: 2.5px;
`

const Tags = styled.div`
    
    width: 40%;
    height: 85%;
    position: relative;
    left: 90px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media(max-width: 450px){
        display: none;
    }
`

const Tag = styled.div`
    width: 100px;
    background: #707070;
    height: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    `

export const Fleet = () => {

    return(
        <FleetDiv>


<Row>        

<Picture></Picture>

<Right> 
<Title> Project Name</Title>
<Type>Project Type</Type>
<Date>Project Date</Date>
</Right>

<Tags>

    <Tag>new</Tag>
    <Tag>featured</Tag>
</Tags>



<Follow><StarBorderIcon />
<div>0</div>
</Follow>



</Row>



<Row>


<Description>Lorem ipsum Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non mollit anim id est laborum.
</Description>


</Row>

<Row>

<Description>
        <div>instagram facebook twitter</div>
</Description>



</Row>








        </FleetDiv>

        
    )
}