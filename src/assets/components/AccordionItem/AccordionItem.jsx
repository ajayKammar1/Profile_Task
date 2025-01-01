import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ Title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // return <div className="border-b border-blue-800 bg-black">AccordionItem</div>;
  return (
    <div className="border border-gray-200 w-9/12 m-auto my-3">
      <button
        className=" py-4 px-6 flex w-full justify-between   items-center hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
        <span className="text-lg font-medium">{Title}</span>{" "}
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-6 bg-white">{children}</div>}
    </div>
  );
};

export default AccordionItem;
