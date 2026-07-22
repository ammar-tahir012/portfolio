import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
import { LoadingProvider } from "./context/LoadingProvider";

const HomeWrapper = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`home-wrapper-container ${isHome ? "visible" : "hidden"}`}
      style={{
        opacity: isHome ? 1 : 0,
        visibility: isHome ? "visible" : "hidden",
        pointerEvents: isHome ? "auto" : "none",
        height: isHome ? "auto" : 0,
        overflow: isHome ? "visible" : "hidden",
        transition: "opacity 0.4s ease, visibility 0.4s ease",
      }}
    >
      <LoadingProvider>
        <Suspense fallback={null}>
          <MainContainer>
            <Suspense fallback={null}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <HomeWrapper />
      <Routes>
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
