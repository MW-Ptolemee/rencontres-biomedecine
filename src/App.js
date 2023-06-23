import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Index from "./pages/index";
import { useEffect, useState } from "react";
import Programme from "./pages/Programme";
import Inscription from "./pages/Inscription";
import Information from "./pages/Information";
import FutureLegal from "./pages/FutureLegal";
import Accessibility from "./pages/Accessibility";
import Faq from "./pages/Faq";
import Session1 from "./pages/sessions/Session1";
import Session2 from "./pages/sessions/Session2";
import Session3 from "./pages/sessions/Session3";
import Session4 from "./pages/sessions/Session4";
import Session5 from "./pages/sessions/Session5";
import Session6 from "./pages/sessions/Session6";
import Session7 from "./pages/sessions/Session7";
import Session8 from "./pages/sessions/Session8";
import SessionPleniere from "./pages/sessions/SessionPleniere";
import SessionPleniere2 from "./pages/sessions/SessionPleniere2";
import Oct from "./pages/Oct";
import Session9 from "./pages/sessions/Session9";
import Session10 from "./pages/sessions/Session10";
import Session11 from "./pages/sessions/Session11";
import Session12 from "./pages/sessions/Session12";
import Session13 from "./pages/sessions/Session13";
import Session14 from "./pages/sessions/Session14";
import Session15 from "./pages/sessions/Session15";
import Session16 from "./pages/sessions/Session16";
import SessionPleniere3 from "./pages/sessions/SessionPleniere3";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [textSize, setTextSize] = useState("text-base md:text-[18px]");

  const handleText = () => {
    if (textSize === "text-base md:text-[18px]") setTextSize("text-[18px] md:text-2xl");
    if (textSize === "text-[18px] md:text-2xl") setTextSize("text-base md:text-[18px]");
  };

  useEffect(() => {
    localStorage.removeItem("theme");
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleMode = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              toggleMode={toggleMode}
              darkMode={colorTheme}
              handleText={handleText}
            />
          }
        >
          <Route
            index
            element={<Index darkMode={colorTheme} textSize={textSize} />}
          />
          <Route
            path="/programme"
            element={<Programme handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/inscription"
            element={
              <Inscription handleText={handleText} textSize={textSize} />
            }
          />
          <Route
            path="/Informations-pratiques"
            element={
              <Information
                darkMode={colorTheme}
                handleText={handleText}
                textSize={textSize}
              />
            }
          />
          <Route
            path="/mentions-legales"
            element={
              <FutureLegal handleText={handleText} textSize={textSize} />
            }
          />
          <Route
            path="/accessibilité"
            element={
              <Accessibility handleText={handleText} textSize={textSize} />
            }
          />{" "}
          <Route
            path="/faq"
            element={<Faq handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/vendredi-13-octobre"
            element={<Oct handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-1"
            element={<Session1 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-2"
            element={<Session2 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-3"
            element={<Session3 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-4"
            element={<Session4 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-5"
            element={<Session5 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-6"
            element={<Session6 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-7"
            element={<Session7 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-8"
            element={<Session8 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-9"
            element={<Session9 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-10"
            element={<Session10 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-11"
            element={<Session11 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-12"
            element={<Session12 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-13"
            element={<Session13 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-14"
            element={<Session14 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-15"
            element={<Session15 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-16"
            element={<Session16 handleText={handleText} textSize={textSize} />}
          />
          <Route
            path="/session-Pleniere"
            element={<SessionPleniere handleText={handleText} textSize={textSize} />}
          />
           <Route
            path="/session-Pleniere2"
            element={<SessionPleniere2 handleText={handleText} textSize={textSize} />}
          />
           <Route
            path="/session-Pleniere3"
            element={<SessionPleniere3 handleText={handleText} textSize={textSize} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
