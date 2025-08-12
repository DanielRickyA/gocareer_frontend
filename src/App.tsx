import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./page/landing_page/LandingPage";
import Layout from "./components/Layout";
import SplashScreen from "./page/slash_screen/SplashScreen";
import TesMinat from "./page/TesMinat";
import MinatBakat from "./page/MinatBakat";
import Jurusan from "./page/jurusan/Jurusan";
import Dukungan from "./page/Dukungan";
import Sekolah from "./page/Sekolah";
import JurusanList from "./page/jurusan/JurusanList";
import SubJurusanList from "./page/jurusan/SubJurusanList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<SplashScreen />}></Route>
          <Route path="/*" element={<Layout />}>
            <Route path="home" element={<LandingPage />} />
            <Route path="uji-coba-minat" element={<TesMinat />} />
            <Route path="minat-bakat" element={<MinatBakat />} />
            <Route path="jurusan" element={<Jurusan />} />
            <Route path="jurusan/:sekolah" element={<JurusanList />} />
            <Route
              path="jurusan/:sekolah/:jurusan"
              element={<SubJurusanList />}
            />
            <Route path="dukungan" element={<Dukungan />} />
            <Route path="sekolah" element={<Sekolah />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
