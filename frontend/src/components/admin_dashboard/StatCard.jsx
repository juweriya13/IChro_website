function StatCard({ title, value, color = "sky" }) {
  const colorClasses = {
    sky: "bg-sky-50 text-sky-700 border-sky-200",
    green: "bg-green-50 text-green-700 border-green-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div
      className={`rounded-xl border p-6 shadow-sm ${colorClasses[color]}`}
    >
      <h3 className="text-sm font-medium">{title}</h3>

      <p className="mt-3 text-4xl font-bold">{value}</p>
    </div>
  );
}

export default StatCard;