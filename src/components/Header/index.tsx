import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <header className="flex justify-between bg-background w-full drop-shadow-lg px-3 py-2">
      <h1 className="font-bold text-2xl">ConnectaCloud Status</h1>

      <button onClick={toggleTheme}>
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
