import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { Cards } from "./components/Cards";
import { Nav } from "./components/Nav";
import { Details } from "./components/pages/Details";
import { PrincipalPage } from "./components/pages/PrincipalPage";

export function App(){
    return <>
    <BrowserRouter>
        <header>
            <Nav />
        </header>
        <main>
        
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="movie/:id" element={<Details />} />
      </Routes>
        </main>
    </BrowserRouter>
    </>
}