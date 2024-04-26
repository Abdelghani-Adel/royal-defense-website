import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
  updateForm: (form: ILprRegisterForm) => void;
};

const RegisterForm = (props: Props) => {
  const { updateForm } = props;
  const [form, setForm] = useState<ILprRegisterForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const updateRegistration = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isValidName = form.name ? form.name.length > 2 : false;
    const isValidEmail = form.email ? /\S+@\S+\.\S+/.test(form.email) : false;
    const isValidPhone = form.phone ? /^\d{11}$/.test(form.phone) : false;

    const formIsValid = isValidName && isValidEmail && isValidPhone;
    setFormIsValid(formIsValid);
  }, [form]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formIsValid) {
      updateForm(form);
    }
  };

  return (
    <form className="registerForm" onSubmit={submitHandler}>
      <div className="text-white">
        <h2 className="mb-2">You need to try it out?</h2>
        <p className="mb-0">Please fill this form</p>
      </div>

      <div className="d-flex flex-column gap-2">
        <input
          className="form-control form-control"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={updateRegistration}
        />
        <input
          className="form-control form-control"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={updateRegistration}
        />
        <input
          className="form-control form-control"
          type="text"
          name="phone"
          placeholder="Enter your phone"
          required
          onChange={updateRegistration}
        />
        <input
          className="form-control form-control"
          type="text"
          name="compnay"
          placeholder="Enter your company"
          onChange={updateRegistration}
        />
      </div>

      <button type="submit" disabled={!formIsValid} className="registerBtn">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
