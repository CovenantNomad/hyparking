import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Onboarding from "./pages/Onboarding";
import RegisteredPage from "./pages/RegisteredPage";
import RegistrationPage from "./pages/RegistrationPage";
import SearchPage from "./pages/SearchPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { authAtom } from "./stores/state";

const queryClient = new QueryClient()

function App() {
  const auth = useRecoilValue(authAtom)

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {auth.isLoggedIn ? (
            <Route index element={<SearchPage />}/>
          ) : (
            <Route index element={<Onboarding />}/>
          )}
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
