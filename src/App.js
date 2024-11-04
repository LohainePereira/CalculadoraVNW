import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// pra usar o reset precisamos importar essa funcionalidade createGlobalStyle

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: purple;
}
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const Title = styled.h1`
  color: white;
`;

const Input = styled.input`
  width: 200px;
  border-radius: 15px;
  padding: 6px;
  margin: 15px;
  text-align: center;
  color: white;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  width: 20px;
  height: 25px;
  color: white;
  align-items: center;
  cursor: pointer;
  text-align: center;
  justify-content; center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 50px;
  

  &:hover {
    background-color: rgba(255, 255, 255, 0.5); /* Efeito ao passar o mouse */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 15px;
`;

const Resultado = styled.h3`
  border-radius: 20%;
  color: white;
  margin: 10px;
  font-size: 25px;
`;

const GifContainer = styled.div`
margin-left: 20px;
`;

export default function App() {
  // primeiroValor é variavel de estado
  //setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  //(e.target.value) é o valor que está sendo digitado dentro do input
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicaçao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  return (
    <Main>
      <GlobalStyle />
      <Title>Calculadora</Title>
      {/* onChange pra capturar o que o usuario esta digitando */}
      <Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <Input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />
      <ButtonContainer>
        <Button onClick={soma}>+</Button>
        <Button onClick={subtracao}>-</Button>
        <Button onClick={multiplicaçao}>x</Button>
        <Button onClick={divisao}>/</Button>
      </ButtonContainer>
      <Resultado>{resultado}</Resultado>
      <GifContainer>
        <img
          src="https://media.tenor.com/y37jNuLhSJEAAAAM/dzao-nazare.gif"
          alt="Gif de uma mulher confusa com calculos matemáticos"
        />
      </GifContainer>
    </Main>
  );
}
