import Layout from "./components/Paginas/Layout"
import Produtos from "./components/Paginas/pagProdutos"
import Carrinho from "./components/Paginas/pagCarrinho"
import Checkout from "./components/Paginas/pagCheckout"
import { useState } from "react"

import  Array from "./components/Produtos"

export const TELAS = {
PAGPRODUTOS:0,
PAGCARRINHO:1,
PAGCHECKOUNT:2
}

export default function App(){
const [tela,setTela]= useState(TELAS.PAGPRODUTOS)
const [produtos,setProdutos]= useState(Array)
const [cart,setCart]= useState([])
const[count,setCount]=useState(0)
const [contador,setContador]=useState(1)
const AddCarrinho = (item) => {
if(cart.includes(item)){
     console.log('teste: ', item)
     return
}
setCart(prevItem => [...prevItem, item]); //pegar valor anterior do state, mantem ele, e adiciona um novo.
setCount(count + 1);
 
  
  return (
    <Layout>
	
      
          {tela===TELAS.PAGPRODUTOS &&<Produtos changeTela={setTela} produtos={produtos} AddCarrinho={AddCarrinho} count={count}/>}
                  
          
          {tela===TELAS.PAGCARRINHO &&<Carrinho changeTela={setTela} cart={cart}  produtos={produtos} AddCarrinho={AddCarrinho} count={count} />}
          {tela===TELAS.PAGCHECKOUNT &&<Checkout changeTela={setTela} produtos={produtos}/>}
         </Layout>
        
      
  ) 
  }

}
