import { useState } from "react";

function Semaforo(){

    const colores = ["red", "yellow", "green"]

    const[colorActivo, setColorActivo]=useState("red")

        function cambioColor(){
            if (colorActivo === "red") setColorActivo("yellow");
            else if (colorActivo==="yellow") setColorActivo("green");
            else setColorActivo ("red");
        };

    return(

        <section>

            <div className="caja_principal">

                <div className={`luz_roja ${colorActivo === "red" ? "encendida" : ""}`}>

                </div>

                <div className={`luz_amarilla ${colorActivo === "yellow" ? "encendida" : ""}`}>

                </div>

                <div className={`luz_verde ${colorActivo === "green" ? "encendida" : ""}`}>

                </div>

                <button onClick={cambioColor}>Cambia de color</button>


            </div>

        </section>
    );
}
export default Semaforo;