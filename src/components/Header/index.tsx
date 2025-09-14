import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between bg-card w-full shadow-lg px-6 py-4 border-b border-border">
      <h1 className="font-bold text-xl sm:text-2xl text-foreground">
        ConnectaCloud Status
      </h1>

      <Button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-background transition-colors"
        variant="secondary"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </header>
  );
}
