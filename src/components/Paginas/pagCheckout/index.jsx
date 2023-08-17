import {Botao} from './styled'
export default function Checkout({changeTela}){
    return(
<>
<h1>Checkout</h1>
      <Botao onClick={()=> changeTela(0)} >Comprar</Botao>
</>
      
    )
  }
