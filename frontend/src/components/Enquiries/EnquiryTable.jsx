import { FiEye, FiCheck } from "react-icons/fi";

function EnquiryTable({ enquiries, onView, onComplete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
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
            <th className="px-5 py-3 text-left text-sm font-semibold">
              Status
            </th>
            <th className="px-5 py-3 text-left text-sm font-semibold">Date</th>
            <th className="px-5 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {enquiries.length > 0 ? (
            enquiries.map((enquiry, index) => (
              <tr
                key={enquiry.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-5 py-4">{index + 1}</td>

                <td className="px-5 py-4 font-medium">{enquiry.name}</td>

                <td className="px-5 py-4">{enquiry.phone}</td>

                <td className="px-5 py-4">
                  {enquiry.email || "-"}
                </td>

                <td className="px-5 py-4 max-w-xs truncate">
                  {enquiry.requirement}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      enquiry.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {enquiry.status === "completed"
                      ? "Completed"
                      : "Pending"}
                  </span>
                </td>

                <td className="px-5 py-4">
                  {new Date(enquiry.created_at).toLocaleDateString()}
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    {/* View Button */}
                    <button
                      onClick={() => onView(enquiry)}
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-100 transition"
                      title="View"
                    >
                      <FiEye size={18} />
                    </button>

                    {/* Mark as Completed */}
                    {enquiry.status !== "completed" && (
                      <button
                        onClick={() => onComplete(enquiry.id)}
                        className="rounded-lg p-2 text-green-600 hover:bg-green-100 transition"
                        title="Mark as Completed"
                      >
                        <FiCheck size={18} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="py-8 text-center text-gray-500"
              >
                No enquiries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EnquiryTable;