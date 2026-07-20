import StatCard from "./StatCard";

function StatsSection({ stats }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Enquiries"
        value={stats.total_enquiries}
        color="sky"
      />

      <StatCard
        title="Today's Enquiries"
        value={stats.today_enquiries}
        color="green"
      />

      <StatCard
        title="This Month"
        value={stats.monthly_enquiries}
        color="amber"
      />

      <StatCard
        title="Pending"
        value={stats.pending_enquiries}
        color="red"
      />

    </div>
  );
}

export default StatsSection;