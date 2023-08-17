import { Conteiner, H1, Row, No, Column, Image, Botao, Button,Price,Product } from "./styled";


export default function ListaProdutos({ changeTela, AddCarrinho, produtos,count}) {

  return (
    <Conteiner>
      <H1>
        Produtos <No>{count}</No>
      </H1>
      <Row>
        {produtos.map((item) => {
          return (
            <Column key={item.id}>
              <Product >
                <Image src={item?.image} alt={item.title} /> 
                <Button onClick={()=>AddCarrinho(item)}>Adicionar</Button>
                <Price>Valor: R${item.price}</Price>
                
              </Product>
            </Column>
          );
        })}
      </Row>

      <Botao onClick={() => changeTela(1)}>Ir para Carrinho</Botao>
    </Conteiner>
  );
}
