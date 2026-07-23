import { useEffect, useState } from "react";
import { getContacts } from "../../services/contact";
import EnquiryTable from "../../components/enquiries/EnquiryTable";
import SearchBar from "../../components/enquiries/SearchBar";
import EnquiryModal from "../../components/enquiries/EnquiryModal";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const data = await getContacts();
      setEnquiries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEnquiries = enquiries.filter((enquiry) => {
  return (
    enquiry.name.toLowerCase().includes(search.toLowerCase()) ||
    enquiry.email.toLowerCase().includes(search.toLowerCase()) ||
    enquiry.phone.includes(search)
  );
});

  return (
  <div className="bg-white rounded-xl shadow-sm border p-6">

    <div className="mb-6">
      <h1 className="text-2xl font-bold">
        Contact Enquiries
      </h1>

      <p className="text-gray-500">
        View and manage all contact enquiries.
      </p>
    </div>

    <div className="mb-6">
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {loading ? (
      <p>Loading...</p>
    ) : filteredEnquiries.length === 0 ? (
      <p>No enquiries found.</p>
    ) : (
      <EnquiryTable
        enquiries={filteredEnquiries}
        onView={setSelectedEnquiry}
      />
    )}

    <EnquiryModal
      enquiry={selectedEnquiry}
      onClose={() => setSelectedEnquiry(null)}
    />

  </div>
);
}

export default Enquiries;