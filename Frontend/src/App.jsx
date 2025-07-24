import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./stores/useAuth";
import { LoaderCircle } from "lucide-react";
import Layout from "./components/Layout";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

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
          <Route path="/" element={<Layout />}>
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
            <Route
              path="/categories/:categoryId"
              element={authUser ? <CategoryPage /> : <Navigate to={"/"} />}
            />
            <Route
              path="/products/:productId"
              element={authUser ? <ProductPage /> : <Navigate to={"/"} />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
