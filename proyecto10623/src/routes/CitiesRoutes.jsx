import { Navigate, Route, Routes } from "react-router-dom"
import { App } from "../pages/App"
import { CitiesPage } from "../pages/CitiesPages"

export const CitiesRoutes = () => {
    return(
        <>
            <div className="container">
                <Routes>
                    <Route path="cities" element={<CitiesPage/>}/>

                    <Route path="searchCities" element={<App/>}/>

                    <Route path="/" element={<Navigate to="/searchCities"/>}/>
                </Routes>
            </div>
        </>
    )
}