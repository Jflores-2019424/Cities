import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import {   oneCity  } from "../js/cities";



export const CitiesPage = () =>{
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);
    


    const init = async() =>{
        setCities(await oneCity());
        console.log(cities)
    }

    const onNavigateBack = () =>{
        navigate(-1);
    }

    useEffect(() => {
        init();
    }, [])
    return(
        <>
            <div className="container">
                <h1>Ciudad</h1>
                <hr />
                <h4>nombre official</h4>
                <h5>nombre fifa</h5>
                <p>Bandera</p>
            







                <button 
                    className="btn btn-outline-primary"
                    onClick={ onNavigateBack }
                    >
                    Regresar
                </button>
            </div>
        </>
    )
}


