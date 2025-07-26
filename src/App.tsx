import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./page/landing_page/LandingPage";
import Layout from "./components/Layout";
import SplashScreen from "./page/slash_screen/SplashScreen";
import TesMinat from "./page/TesMinat";
import MinatBakat from "./page/MinatBakat";
import Jurusan from "./page/Jurusan";
import Dukungan from "./page/Dukungan";
import Sekolah from "./page/Sekolah";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<SplashScreen />}></Route>
          <Route path="/*" element={<Layout />}>
            <Route path="home" element={<LandingPage />} />
            <Route path="tes-minat" element={<TesMinat />} />
            <Route path="minat-bakat" element={<MinatBakat />} />
            <Route path="jurusan" element={<Jurusan />} />
            <Route path="dukungan" element={<Dukungan />} />
            <Route path="sekolah" element={<Sekolah />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
