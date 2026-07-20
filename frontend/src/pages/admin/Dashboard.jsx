import { useEffect, useState } from "react";

import StatsSection from "../../components/admin_dashboard/StatsSection";
import { getDashboardData } from "../../services/dashboard";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboardData();

      console.log(data);

      setDashboardData(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboardData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">

      <StatsSection stats={dashboardData.stats} />

      <div className="bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Enquiries
        </h2>

        {dashboardData.recent_enquiries.length === 0 ? (
          <p className="text-gray-500">
            No enquiries available.
          </p>
        ) : (
          dashboardData.recent_enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="border-b py-3"
            >
              <h3 className="font-semibold">
                {enquiry.name}
              </h3>

              <p>{enquiry.email}</p>

              <p>{enquiry.phone}</p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;