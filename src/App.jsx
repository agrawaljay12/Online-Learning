import ArtBoard from "./pages/Artboard";
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artboard" element={<ArtBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
