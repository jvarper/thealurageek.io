import {useState} from "react"
import "./MiOrg.css"
const MiOrg = (props) => {
    //Estado - hooks
    //useState = Es un hook 
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props);
    //const [mostrar, actualizarMostrar] = useState(true);
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar);
    //    actualizarMostrar(!mostrar) //Tomar el valor que esta en const [mostrar...] al generar el evento del
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg