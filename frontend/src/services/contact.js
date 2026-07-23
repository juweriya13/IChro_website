import api from "./api";

/**
 * Get all contact enquiries
 */
export const getContacts = async (params = {}) => {
  const { data } = await api.get("/contact/", {
    params,
  });

  return data.results || [];
};

/**
 * Delete enquiry
 */
export const deleteContact = async (id) => {
  await api.delete(`/contact/${id}/`);
};

/**
 * Get single enquiry
 */
export const getContact = async (id) => {
  const { data } = await api.get(`/contact/detail/${id}/`);
  return data;
};