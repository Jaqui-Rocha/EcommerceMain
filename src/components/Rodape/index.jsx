import styled from "styled-components"
import visa from "../Imagens/imagens/visa 1.svg"
import hipercard from "../Imagens/imagens/hipercard 1.svg"
import mastercard from "../Imagens/imagens/masterCard.svg"
import boleto from "../Imagens/imagens/boleto.svg"


 const Container= styled.div`
 width: 586px;
 height: 86px;
 font-size:12px;
 display:flex;
 color:black;
 border: 2px solid #6950A1;
 margin-bottom:10px;
 align-items: center;
 font-family: 'Poppins', sans-serif;
 justify-content: space-around;
 gap:px;
 padding: 5px;
 margin-top:10px;
 >img{
    width:104px;
    height: 37px;
 };
 >div{
display: flex ;
flex-direction: column;
 }
 `
 function Rodape(){

    return(
        <Container>
                <div>
                Meio de pagamento:                  
                    <img src={visa}/>           
                </div>
                                      
                            
                    <img src={mastercard}/>                
                    <img src={boleto}/>
                    <img src={hipercard}/>
        </Container>
    )
 }
 export default Rodape;

 