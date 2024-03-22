import React, { useEffect, useState } from "react";

type props = {
  onChange: (contact: { name: string; email: string; phone: string }) => void;
};

const ContactInfo = (props: props) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    props.onChange(contactInfo);
  }, [contactInfo]);

  return (
    <div className="d-flex flex-column gap-1">
      <input
        className="form-control form-control-sm"
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        onChange={handleChange}
      />
      <input
        className="form-control form-control-sm"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        onChange={handleChange}
      />
      <input
        className="form-control form-control-sm"
        type="text"
        name="phone"
        placeholder="Enter your phone"
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default ContactInfo;
