import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context/LanguageContext";
import { DesktopNatawestPl } from "./screens/DesktopNatawestPl";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <DesktopNatawestPl />
    </LanguageProvider>
  </StrictMode>,
);
