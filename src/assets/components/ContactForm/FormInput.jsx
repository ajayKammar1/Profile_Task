import React from "react";

const FormInput = ({ type, label, value, onChange, error, Icon }) => (
  <div>
    <label className="block text-sm font-medium text-gray-900">
      <div className="mt-1 relative flex ">
        <Icon className="absolute left-3 top-1  text-gray-400" size={20} />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="pl-10 py-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </label>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default FormInput;
