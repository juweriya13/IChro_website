import { FiEye, FiTrash2 } from "react-icons/fi";

function EnquiryTable({ enquiries }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left text-sm font-semibold">#</th>
            <th className="px-5 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-5 py-3 text-left text-sm font-semibold">Phone</th>
            <th className="px-5 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-5 py-3 text-left text-sm font-semibold">
              Requirement
            </th>
            <th className="px-5 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-5 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((enquiry, index) => (
            <tr
              key={enquiry.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-5 py-4">{index + 1}</td>

              <td className="px-5 py-4 font-medium">{enquiry.name}</td>

              <td className="px-5 py-4">{enquiry.phone}</td>

              <td className="px-5 py-4">{enquiry.email}</td>

              <td className="px-5 py-4 max-w-xs truncate">
                {enquiry.requirement}
              </td>

              <td className="px-5 py-4">
                {new Date(enquiry.created_at).toLocaleDateString()}
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-2">
                  <button
  className="rounded-lg p-2 text-blue-600 hover:bg-blue-100 transition"
  title="View"
>
    <FiEye size={18} />
    </button>

    <button
    className="rounded-lg p-2 text-red-600 hover:bg-red-100 transition"
    title="Delete"
    >
    <FiTrash2 size={18} />
    </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnquiryTable;