interface HeaderProps {
  title?: string;
  showNavigation?: boolean;
}

export default function Header({
  title = "ConnectaCloud Status",
  showNavigation = true,
}: HeaderProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>

        {showNavigation && (
          <nav className="flex space-x-4">
            <button
              onClick={handleRefresh}
              className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded transition-colors"
            >
              Atualizar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
