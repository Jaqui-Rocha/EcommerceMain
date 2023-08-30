import {Botao, H3, Column, Row, Image, Price, Box} from './styled'
export default function Checkout({changeTela, count, cart,setContador}){
    return(
        <>
        {console.log(cart)}
        <h1>Checkout</h1>
        <H3>Produtos escolhidos: {count}</H3>
        <div>
        {cart.map((item) => {
          return (
            <Column key={item.id}>
              <Row>
                <Image src={item.image} />                     
              </Row>
            </Column>
          );
        })}
    </div>
    <Box>                
        <Price>Total: R${}</Price>
        <Price>Quantidade: {setContador} </Price>   
    </Box>         

            <Botao onClick={()=> changeTela(0)} >Comprar</Botao>
        </>
      
    )
  }
