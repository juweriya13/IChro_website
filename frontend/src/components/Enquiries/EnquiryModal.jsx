import { FiX } from "react-icons/fi";

function EnquiryModal({ enquiry, onClose }) {
  if (!enquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-full max-w-2xl shadow-xl">

        <div className="flex justify-between items-center border-b px-6 py-4">

          <h2 className="text-xl font-semibold">
            Enquiry Details
          </h2>

          <button onClick={onClose}>
            <FiX size={22} />
          </button>

        </div>

        <div className="p-6 space-y-4">

          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{enquiry.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p>{enquiry.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p>{enquiry.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Requirement</p>
            <p>{enquiry.requirement}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Submitted On</p>
            <p>{new Date(enquiry.created_at).toLocaleString()}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default EnquiryModal;