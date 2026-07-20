function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white border-b shadow-sm px-8 py-5 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back, Administrator
        </p>
      </div>

      <div className="text-sm text-gray-500">
        {today}
      </div>
    </header>
  );
}

export default Topbar;