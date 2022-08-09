import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Details } from "./components/pages/Details";
import { PrincipalPage } from "./components/pages/PrincipalPage";

export function App() {
  return <>
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route exact path="movie/:id" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
}