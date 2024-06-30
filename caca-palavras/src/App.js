import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [letras, setletras] = useState([])
  const [valor_incial, setvalor_incial] = useState('')
  useEffect(()=>{
    function createEmptyMatrix(rows, cols) {
      let matrix = [];
      for (let i = 0; i < rows; i++) {
        var coluna = []
        for(var index = 0; index<rows;index++){
          coluna.push(getRandomLetter());
        }
        matrix.push(coluna)
      }
      return matrix;
    }
    function getRandomLetter() {
      const randomCharCode = Math.floor(Math.random() * 26) + 97; // 97 é o código ASCII de 'a'
      return String.fromCharCode(randomCharCode);
  }
    // Função para inserir uma palavra aleatoriamente na matriz
    function insertWord(matrix, word) {
        // Direção aleatória: 0 para horizontal e 1 para vertical
        const directions = ['horizontal', 'vertical', 'diagonal'];
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const wordLength = word.length;
        const maxRow = matrix.length;
        const maxCol = matrix[0].length;
    
        if (direction === 'horizontal') {
            const startRow = Math.floor(Math.random() * maxRow);
            const startCol = Math.floor(Math.random() * (maxCol - wordLength + 1));
    
            for (let i = 0; i < wordLength; i++) {
                matrix[startRow][startCol + i] = word[i];
            }
        } else if (direction === 'vertical') {
            const startRow = Math.floor(Math.random() * (maxRow - wordLength + 1));
            const startCol = Math.floor(Math.random() * maxCol);
    
            for (let i = 0; i < wordLength; i++) {
                matrix[startRow + i][startCol] = word[i];
            }
        } else if (direction === 'diagonal') {
            const startRow = Math.floor(Math.random() * (maxRow - wordLength + 1));
            const startCol = Math.floor(Math.random() * (maxCol - wordLength + 1));
    
            for (let i = 0; i < wordLength; i++) {
                matrix[startRow + i][startCol + i] = word[i];
            }
        }
    }
    
    // Função para imprimir a matriz

    
    // Exemplo de uso:
    let matrix = createEmptyMatrix(10, 10);
    let palavra = "EXEMPLO";  // Substitua pela palavra que deseja inserir
    
    insertWord(matrix, palavra);
    insertWord(matrix, "NARUTO");
    var matriz_formatada = []
    matrix.forEach(items => {
      items.forEach(i =>{
        matriz_formatada.push(i)
      })
    })
    setletras(matriz_formatada)

  },[])
  return (
    <div className="App">
      <div  id='canvas' className='quadro'>
        {letras.map((item, key) => (
          <span onClick={(event) => setvalor_incial(key)} className={valor_incial==key? "show": "hide"} key={key}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
