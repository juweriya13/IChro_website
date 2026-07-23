import { useEffect, useState } from "react";
import { getContacts, updateContactStatus, exportContacts } from "../../services/contact";
import EnquiryTable from "../../components/enquiries/EnquiryTable";
import SearchBar from "../../components/enquiries/SearchBar";
import EnquiryModal from "../../components/enquiries/EnquiryModal";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async (filters = {}) => {
    setLoading(true);

    try {
      const data = await getContacts(filters);
      setEnquiries(data);
    } catch (error) {
      console.error("Failed to fetch enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    if (startDate && endDate && startDate > endDate) {
      alert("Start Date cannot be after End Date.");
      return;
    }

    fetchEnquiries({
      search,
      start_date: startDate || undefined,
      end_date: endDate || undefined,
    });
  };

  const handleReset = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");

    fetchEnquiries();
  };

  const handleExport = async () => {

    try {

        await exportContacts({
            search,
            start_date: startDate,
            end_date: endDate,
        });

    } catch (error) {

        console.error(error);

        alert("Export failed.");

    }

};

  // Temporary local update
  const handleComplete = async (id) => {
  try {
    await updateContactStatus(id, "completed");

    fetchEnquiries();
  } catch (error) {
    console.error(error);
    alert("Failed to update status.");
  }
};

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Contact Enquiries
        </h1>

        <p className="text-gray-500">
          View and manage all contact enquiries.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 flex flex-wrap gap-4 items-end">

        <div className="flex-1 min-w-[250px]">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            End Date
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          onClick={handleFilter}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Filter
        </button>

        <button
          onClick={handleReset}
          className="border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-lg transition"
        >
          Reset
        </button>

        <button
          onClick={handleExport}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          Export Excel
        </button>

      </div>

      {/* Table */}

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <EnquiryTable
          enquiries={enquiries}
          onView={setSelectedEnquiry}
          onComplete={handleComplete}
        />
      )}

      {/* Modal */}

      <EnquiryModal
        enquiry={selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
      />
    </div>
  );
}

export default Enquiries;