import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./page/landing_page/LandingPage";
import Layout from "./components/Layout";
import SplashScreen from "./page/slash_screen/SplashScreen";
import TesMinat from "./page/uji_coba_minat/TesMinat";
import MinatBakat from "./page/MinatBakat";
import Jurusan from "./page/jurusan/Jurusan";
import Dukungan from "./page/Dukungan";
import Sekolah from "./page/Sekolah";
import JurusanList from "./page/jurusan/JurusanList";
import SubJurusanList from "./page/jurusan/SubJurusanList";
import TentangKami from "./page/TentangKami";
import { Toaster } from "sonner";
import HasilTesMinat from "./page/uji_coba_minat/HasilTesMinat";
import UjiCobaMinat from "./page/uji_coba_minat/UjiCobaMinat";
import RefrensiKarir from "./page/RefrensiKarir";
import RencanaKarir from "./page/RencanaKarir";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<SplashScreen />}></Route>
          <Route path="/*" element={<Layout />}>
            <Route path="beranda" element={<LandingPage />} />
            <Route path="asesmen-minat" element={<UjiCobaMinat />} />
            <Route path="asesmen-minat/tes" element={<TesMinat />} />
            <Route path="asesmen-minat/hasil" element={<HasilTesMinat />} />
            <Route path="minat-bakat" element={<MinatBakat />} />
            <Route path="jurusan" element={<Jurusan />} />
            <Route path="jurusan/:sekolah" element={<JurusanList />} />
            <Route
              path="jurusan/:sekolah/:jurusan"
              element={<SubJurusanList />}
            />
            <Route path="refrensi-karir" element={<RefrensiKarir />} />
            <Route path="rencana-karir" element={<RencanaKarir />} />
            <Route path="dukungan" element={<Dukungan />} />
            <Route path="sekolah" element={<Sekolah />} />
            <Route path="tentang-kami" element={<TentangKami />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        // position="top-center"
        toastOptions={{
          style: { fontFamily: "DM+Sans, sans-serif" },
        }}
        richColors
      />
    </>
  );
}

export default App;
