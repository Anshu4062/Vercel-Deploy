import { useTheme } from "../contexts/ThemeContext";
import LogoutButton from "./LogoutButton";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <button
        style={{ width: "auto", marginLeft: "1rem" }}
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <LogoutButton />
    </>
  );
}
