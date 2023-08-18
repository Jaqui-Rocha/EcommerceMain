import { Botao, Conteiner, No ,H1,Price,Image, Row, Box, Column} from "./styled"

export default function Carrinho({changeTela, cart, AddCarrinho, count }){
    return(
        <Conteiner>
        <H1>
            Carrinho <No>{count}</No>
        </H1>
        <div>
        {cart.map((item) => {
          return (
            <Column key={item.id}>
              <Row>
                <Image src={item?.image} alt={item.title} /> 
                
              
                <Box>
                <h2>{item.title}</h2>
                <Price>Valor: R${item.price}</Price>
                <Price>Quantidade: {} </Price>    
                <button>+</button>      <button>-</button>
                </Box>         
                               
              </Row>
            </Column>
          );
        })}
      </div>

       
        <Botao onClick={()=> changeTela(0)} >Continuar Comprando</Botao>
        
        <Botao onClick={()=> changeTela(2)} >Finalizar Compra</Botao>
        </Conteiner>
      
    )
  }
