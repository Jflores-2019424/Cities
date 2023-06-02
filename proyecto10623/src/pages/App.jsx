import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { defaultCities, genCities, searchCities } from "../js/cities";

export const App= () =>{
  const [busqueda, setBusqueda] = useState("");
  const [cities, setCities] = useState([]);


  const gen = async() =>{
    setCities(await genCities(busqueda));
    console.log(cities)
  }

  useEffect(() => {
      gen();
  }, [busqueda])
  
  
  return (
    <>
      <div className='container'>
        <h1>Search</h1>
        <input 
        value={busqueda} 
        onChange={({target}) => setBusqueda(target.value)}/>
        <hr />

        {cities[0] &&
        cities.map((c)=>{
            return(
            <>
             <h3 key={c.name.common}>
              {" "}            
              {c.name.official}  {c.fifa && "- ("+c.fifa+")"}
              </h3>
             <h6>({c.continents[0]})</h6>
             <Link to="/cities">
              <img 
              src={c.flags.png} 
              alt={c.flags.alt} 
              width={100} 
              height={50}
              />
              </Link>

              <br />

              <a href={c.maps.googleMaps} target="_blank" rel="noreferrer">
                Ubicacion
              </a>
              </>
            )
        })}
      </div>
    </>
  )
}