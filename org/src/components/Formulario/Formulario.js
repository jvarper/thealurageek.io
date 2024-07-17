import {useState} from 'react'
import "./Formulario.css";
import CampoTexto from "../CampoText/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {//e = evento / event        
        e.preventDefault()
        console.log('Manejar el envio');
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
            title="Nombre" 
            placeholder="Ingresa el nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            title="Puesto" 
            placeholder="Ingresa el puesto" 
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
            title="Foto" 
            placeholder="Ingresa la foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            required
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            />
            <Boton 
            text="Crear colaborador"
            />

        </form>
    </section>
}

export default Formulario