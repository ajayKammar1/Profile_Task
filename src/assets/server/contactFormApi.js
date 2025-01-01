import api from "./api";

export const AddContactForm = async (Data) => {
  try {
    const responce = await api.post("/ContactForm", Data);
    return responce.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to add contact form");
  }
};
