import "./Formulario.css";
import CampoTexto from "../CampoText/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
    const manejarEnvio = (e) => {//e = evento / event        
        e.preventDefault()
        console.log('Manejar el envio', e);
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto title="Nombre" placeholder="Ingresa el nombre" required/>
            <CampoTexto title="Puesto" placeholder="Ingresa el puesto" required />
            <CampoTexto title="Foto" placeholder="Ingresa la foto" required/>
            <ListaOpciones required/>
            <Boton text="Crear colaborador"/>

        </form>
    </section>
}

export default Formulario