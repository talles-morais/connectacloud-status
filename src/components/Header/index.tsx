import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between bg-card w-full shadow-lg px-6 py-4 border-b border-border">
      <h1 className="font-bold text-xl sm:text-2xl text-foreground">
        ConnectaCloud Status
      </h1>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-background transition-colors"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
}
