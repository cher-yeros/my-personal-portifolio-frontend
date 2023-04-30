import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortifolioDetail from "./pages/PortifolioDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portifolio-detail" element={<PortifolioDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
