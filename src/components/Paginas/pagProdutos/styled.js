import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`;
export const Column = styled.div`
  max-width: 30%; 
  flex: 0 0 33.3333%;
  padding-left: 1.2rem;
  margin-bottom: 1rem;
 

`;
export const Product = styled.div`
  position: relative;
`;
export const Image = styled.img`
  object-fit: contain;
  max-width: 70%;
  

`;
export const H1 = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: poppins;
  display: flex;
  justify-content: space-between;
  margin: 20px;
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
export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  width: 125px;
 
  background: #aa8becac;
  color: #fff;
  border: 0;
`;
export const Botao = styled.button`
  background: #6950a1;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  color: white;
  padding: 5px;
  width: 200px;
  position: relative;
  bottom:2px;
  left: 385px;
`;

export const Price = styled.div`
  font-size: 1rem;
  color: #313131;
  font-weight: bold;
  margin-top: 10px;
`;