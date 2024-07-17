import {useState} from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? Si : No
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <div></div>*/} 
      {mostrarFormulario && <Formulario />}     
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
