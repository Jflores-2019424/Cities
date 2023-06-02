import axios from "axios";

export const searchCities = async (nameCity) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${nameCity}`
    );  
    return data;
  } catch (e) {
    return e;
  }
};

export const defaultCities = async () =>{
    try{
        const { data } = await axios.get(
            `https://restcountries.com/v3.1/all`
        )
        return data
    }catch(e){
        return e
    }
}

export const genCities = async(nameCity) =>{
    if(nameCity == ''){
        try{
            const { data } = await axios.get(
                `https://restcountries.com/v3.1/all`
            )
            return data   
        }catch(e){
            return e;
        }
    }else{
        try{
        const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${nameCity}`
          );  
          return data;
        }catch(e) {
            return e
        }
    }
}

export const oneCity = async(name) =>{
    try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );  
        return data;
      } catch (e) {
        return e;
      }
}