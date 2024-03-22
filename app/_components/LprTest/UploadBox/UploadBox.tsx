import React, { useState } from "react";
import { toast } from "react-toastify";
import FileUpload from "../FileUpload";
import ContactInfo from "./ContactInfo";
import SubmitBtn from "./SubmitBtn";
import Titles from "./Titles";

type Props = {
  updateImage: (files: File) => void;
  updateResult: (result: ILprTestRes) => void;
};

const UploadBox = (props: Props) => {
  const { updateImage, updateResult } = props;
  const [buttonState, setButtonState] = useState<"loading" | "idle">("idle");
  const [image, setImage] = useState<File>();
  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const imageChangeHandler = (image: File) => {
    setImage(image);
    updateImage(image);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonState("loading");

    const formData = new FormData();
    if (image) {
      formData.append("name", contacts.name);
      formData.append("email", contacts.email);
      formData.append("phone", contacts.phone);
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        "https://lpr.royal-defense.cloud/api/v1/lpr",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 429) {
        toast.info(
          "You have exceeded your trials limit, Please contact our sales team!"
        );
        setButtonState("idle");
        return;
      }

      if (response.status === 500) {
        toast.info(
          "We are making some enhancements on our side, please try again later!"
        );
        setButtonState("idle");
        return;
      }

      if (response.status === 200) {
        const result: ILprTestRes = await response.json();
        if (result.data && result.success) {
          updateResult(result);
          setButtonState("idle");
        }
        return;
      }

      toast.info("Something went wrong!");
      setButtonState("idle");
    } catch (e) {
      toast.info(
        "We are making some enhancements on our side, please try again later!"
      );
      setButtonState("idle");
    }
  };

  return (
    <form className="uploadBox" onSubmit={submitHandler}>
      <Titles />
      <FileUpload setUploadedImage={imageChangeHandler} />
      <ContactInfo onChange={setContacts} />
      <SubmitBtn buttonState={buttonState} />
    </form>
  );
};

export default UploadBox;
