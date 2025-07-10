import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./page/landing_page/LandingPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
