import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
