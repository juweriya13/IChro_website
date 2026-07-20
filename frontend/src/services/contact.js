import api from "./api";

/**
 * Get all contact enquiries
 */
export const getContacts = async () => {
  const { data } = await api.get("/contact/list/");
  return data;
};

/**
 * Delete enquiry
 */
export const deleteContact = async (id) => {
  await api.delete(`/contact/${id}/`);
};