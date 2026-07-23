import api from "./api";

/**
 * Get all contact enquiries
 */
export const getContacts = async (params = {}) => {
  const { data } = await api.get("/contact/", {
    params,
  });

  return data.results || data;
};

/**
 * Get single enquiry
 */
export const getContact = async (id) => {
  const { data } = await api.get(`/contact/detail/${id}/`);
  return data;
};

/**
 * Update enquiry status
 */
export const updateContactStatus = async (id, status) => {
  const { data } = await api.patch(`/contact/${id}/status/`, {
    status,
  });

  return data;
};

/**
 * Export enquiries to Excel
 */
export const exportContacts = async (params = {}) => {
  const response = await api.get("/contact/export/", {
    params,
    responseType: "blob",
  });

  const blob = new Blob([response.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  // Read filename from Django if available
  const disposition = response.headers["content-disposition"];

  let filename = "Contact_Enquiries.xlsx";

  if (disposition) {
    const match = disposition.match(/filename="?(.+)"?/);

    if (match) {
      filename = match[1];
    }
  }

  link.download = filename;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};

/**
 * Delete enquiry
 */
export const deleteContact = async (id) => {
  await api.delete(`/contact/${id}/`);
};