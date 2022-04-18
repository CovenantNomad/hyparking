import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import RegisteredPage from "./pages/RegisteredPage";
import RegistrationPage from "./pages/RegistrationPage";
import SearchPage from "./pages/SearchPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Onboarding />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/vehicle-list" element={<RegisteredPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
