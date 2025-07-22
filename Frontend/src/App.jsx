import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./stores/useAuth";
import { LoaderCircle } from "lucide-react";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl">
          <LoaderCircle className="size-10 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Toaster />
        <Routes>
          <Route path="/">
            <Route
              path="/"
              element={!authUser ? <WelcomePage /> : <HomePage />}
            />
            <Route
              path="/login"
              element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
            />
            <Route
              path="/signup"
              element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
