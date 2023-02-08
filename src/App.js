import { useState } from 'react';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time';


function App() {

  const [colaboradores,setColaboradores ]= useState([])

  const aoNovoColaboradorAdicionado=(colaborador)=>{
    console.log(colaborador);
    colaboradores.push(colaborador)
    setColaboradores([...colaboradores,colaborador])

  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador) }/>
      <Time nome="Programação"/>
      <Time nome="FrontEnd"/>
      <Time nome="Data Science"/>
      <Time nome="DevOps"/>
      <Time nome="UX e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>

      
    </div>
  );
}

export default App;
