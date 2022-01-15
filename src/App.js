import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //const es un tipo de variable que no cambia mantiene su valor
  //aca almacenamos los valores que viene de los dos input
  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  //aca almacenamos el valor de imagen
  const [imagen, setImagen] = useState('');

//Funciones para los input
const onChangeTexto1 = function(evento){
  setTexto1(evento.target.value)
};
const onChangerTexto2 = function (evento){
  setTexto2(evento.target.value)
}
//funcion para extraer la imagen
const onChangerImagen = function (evento) {
  setImagen(evento.target.value)
}

//Funcion para exportar
const onClickExportar = function(evento){
  alert("Exportar")
}
  return (
    <div className="App">
      <select onChange={onChangerImagen}>
        <option value="Zelda">princesa Zelda</option>
        <option value="zelda3">Escudo</option>
        <option value="zelda2">link</option>
        <option value="yoshi3">Yoshi</option>
      </select> <br/>

      <input onChange={onChangeTexto1} type="text" placeholder='Linea Uno'/><br/>
      <input onChange={onChangerTexto2} type="text" placeholder='Linea Dos'/><br/>

      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme'>
        <span>{texto1}</span> <br />
        <span>{texto2}</span>
        <img src={"/img/" + imagen +".png"}/>
      </div>
    </div>
  );
}

export default App;
