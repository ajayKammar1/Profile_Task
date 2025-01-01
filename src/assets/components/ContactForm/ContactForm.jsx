import React, { useState } from "react";

import { TbMail } from "react-icons/tb";
import { FiPhone, FiMapPin } from "react-icons/fi";

import { validateForm } from "./formValidation";
import FormInput from "./FormInput";
import GoogleMap from "./GoogleMap";
import { AddContactForm } from "../../server/contactFormApi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      AddContactForm(formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          type="email"
          label="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
          Icon={TbMail}
        />

        <FormInput
          type="tel"
          label="Phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={errors.phone}
          Icon={FiPhone}
        />

        <FormInput
          type="text"
          label="Address"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          error={errors.address}
          Icon={FiMapPin}
        />

        <GoogleMap setFormData={setFormData} />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
