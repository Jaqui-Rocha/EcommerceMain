import Header from "../Header"
import Rodape from "../Rodape"
import  styled from "styled-components"


const Container = styled.div`
margin:auto;
width: 600px;
`


export default function Layout({children}){
    return(
    
        <Container>
        <Header/>
        <main>{children}</main>
       
        <Rodape/>
        </Container>
        
    )
}