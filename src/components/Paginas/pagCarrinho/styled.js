import styled from "styled-components"
export const Botao = styled.button`
background: #6950A1 ;
border-radius: 5px;
border:0;
font-size:16 px;
color: white;
padding:5px;
gap: 5 px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: start;

 background: pink;
 
`;
export const Column = styled.div`

  padding-left: 1.2rem;
  margin-bottom: 1rem;
`;
export const Box = styled.div`
text-align: start;
 
 
`;
export const Image = styled.img`
  object-fit: contain;
  max-width: 70%;
  width: 200px;
  

`;
export const No = styled.div`
  background: #6950a1;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  right: 15px;
`;
export const Price = styled.h3`
  font-size: 1.2rem;
  color: #313131;
  font-weight: bold;
  margin-top: 10px;
  //display:inline-block;
  ;
`;
export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
`;
export const H1 = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: poppins;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  width: 500px;
`;