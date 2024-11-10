import { useState } from "react"; // Importa o hook useState para gerenciar estado local
import "./CalculatorStyle.scss"; // Importa o estilo do componente
import { Container } from "@mui/material"; // Importa o Container do Material UI para layout

export default function Calculator() {
  // Gerencia o número atual exibido na calculadora
  const [num, setNum] = useState(0);
  // Guarda o número anterior para operações
  const [oldNum, setoldNum] = useState(0);
  // Armazena o operador atual
  const [operator, setOperator] = useState();

  // Função para capturar os números clicados
  function inputNum(e) {
    const input = e.target.value;
    // Se o número atual for 0, substitui pelo novo, senão concatena
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  // Reseta a calculadora
  function clear() {
    setNum(0);
  }

  // Calcula a porcentagem do número atual
  function porcentage() {
    setNum(num / 100);
  }

  // Inverte o sinal do número atual
  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  // Define o operador e armazena o número atual como número anterior
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setoldNum(num);
    setNum(0); // Reseta o número atual para entrada do próximo número
  }

  // Realiza o cálculo com base no operador selecionado
  function calculate() {
    if (operator === "/") {
      setNum(oldNum / num).toFixed(3);
    }
    if (operator === "x") {
      setNum(oldNum * num);
    }
    if (operator === "-") {
      setNum(oldNum - num);
    }
    if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }

    // Logs úteis para debug durante desenvolvimento
    console.log("Calculou");
    console.log(oldNum);
    console.log(num);
    console.log(operator);
  }

  return (
    <main>
      <h1>Calculadora</h1>
      <Container maxWidth="xs" className="MuiContainer-maxWidthXs">
        <div className="wrapper">
          <h2 className="result">
            {num % 1 === 0 ? num : parseFloat(num.toFixed(2))}
          </h2>
          {/* Botões de ações e números */}
          <button className="lighter-btn" onClick={clear}>
            AC
          </button>
          <button className="lighter-btn" onClick={changeSign}>
            +/-
          </button>
          <button className="lighter-btn" onClick={porcentage}>
            %
          </button>
          <button className="operator-btn" onClick={operatorHandler} value="/">
            /
          </button>
          {/* Continuando com os números e operadores */}
          <button className="num-btn" onClick={inputNum} value={7}>
            7
          </button>
          <button className="num-btn" onClick={inputNum} value={8}>
            8
          </button>
          <button className="num-btn" onClick={inputNum} value={9}>
            9
          </button>
          <button className="operator-btn" onClick={operatorHandler} value="x">
            x
          </button>
          <button className="num-btn" onClick={inputNum} value={4}>
            4
          </button>
          <button className="num-btn" onClick={inputNum} value={5}>
            5
          </button>
          <button className="num-btn" onClick={inputNum} value={6}>
            6
          </button>
          <button className="operator-btn" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="num-btn" onClick={inputNum} value={1}>
            1
          </button>
          <button className="num-btn" onClick={inputNum} value={2}>
            2
          </button>
          <button className="num-btn" onClick={inputNum} value={3}>
            3
          </button>
          <button className="operator-btn" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="num-btn" onClick={inputNum} value={0}>
            0
          </button>
          <button className="num-btn" onClick={inputNum} value=".">
            ,
          </button>
          <button className="fake-btn">icon</button>
          <button className="operator-btn" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </main>
  );
}
