import logoArnia from "../Imagens/logoArnia.png";
import styled from "styled-components"


const Container = styled.div`
display: flex;
background-color: #6950A1;
color: white;
width: 600px;
justify-content: center;
align-items: center;
gap: 250px;
height:86px;
font-size: 32px;
font-family: 'Poppins', sem serifa;
>img{
    width: 128px;
height: 38px;
}
`
function Header(){
    return(
        <Container>            
            <img src= {logoArnia}/>            
            Loja Virtual
        </Container>
    )
}
export default Header

