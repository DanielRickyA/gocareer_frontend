import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./page/landing_page/LandingPage";
import Layout from "./components/Layout";
import SplashScreen from "./page/slash_screen/SplashScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<SplashScreen />}></Route>
          <Route path="/*" element={<Layout />}>
            <Route path="home" element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
