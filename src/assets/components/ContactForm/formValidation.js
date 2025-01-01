export const validateForm = (formData) => {
  const errors = {};

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Phone validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  // Address validation
  if (!formData.address.trim()) {
    errors.address = "Address is required";
  }

  return errors;
};
