import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "./stores/state";
// pages
import Onboarding from "./pages/Onboarding";
import RegistrationPage from "./pages/RegistrationPage";
import SearchPage from "./pages/SearchPage";
import VehicleListPage from "./pages/VehicleListPage";
import SettingPage from "./pages/SettingPage";
import EditPage from "./pages/EditPage";


const queryClient = new QueryClient()

function App() {
  const [authState, setAuthState] = useRecoilState(authAtom)
  const location = useLocation()  

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={authState.isLoggedIn ? <SearchPage /> : <Onboarding />}/>
        <Route path="/vehicle-list" element={authState.isLoggedIn ? <VehicleListPage /> : <Navigate to="/" state={{ from: location }} replace />}/>
        <Route path="/registration" element={authState.isLoggedIn ? <RegistrationPage /> : <Navigate to="/" state={{ from: location }} replace />}/>
        <Route path="/edit" element={authState.isLoggedIn ? <EditPage /> : <Navigate to="/" state={{ from: location }} replace />}/>
        <Route path="/setting" element={authState.isLoggedIn ? <SettingPage /> : <Navigate to="/" state={{ from: location }} replace />}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
