"use client";
import { useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyModal from "../_common/MyModal";
import LprContent from "./LprContent";
import "./LprTest.css";
import PreviewBox from "./PreviewBox";
import RegisterForm from "./RegisterForm";
import ResultBox from "./ResultBox";
import UploadBox from "./UploadBox";

const LprTest = () => {
  const [registration, setRegistration] = useState<ILprRegisterForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [isModalShown, setIsModalShown] = useState(true);
  const [result, setResult] = useState<ILprTestRes>(defaultResult);
  const [uploadedImage, setUploadedImage] = useState<File>();

  const updateRegistration = (form: ILprRegisterForm) => {
    setIsModalShown(false);
    setRegistration(form);
  };

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append("name", registration.name || "");
    formData.append("email", registration.email || "");
    formData.append("phone", registration.phone || "");
    formData.append("image", uploadedImage || "");

    try {
      const response = await fetch(
        "https://lpr.royal-defense.cloud/api/v1/lpr",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.status === 429) {
        toast.info(
          "You have exceeded your trials limit, Please contact our sales team!",
        );
        return;
      }

      if (response.status === 500) {
        toast.info(
          "We are making some enhancements on our side, please try again later!",
        );
        return;
      }

      if (response.status === 200) {
        const result: ILprTestRes = await response.json();
        if (result.data && result.success) {
          setResult(result);
        }
        return;
      }

      toast.info("Something went wrong!");
    } catch (e) {
      toast.info(
        "We are making some enhancements on our side, please try again later!",
      );
    }
  };

  return (
    <>
      <MyModal show={isModalShown} onClose={() => {}}>
        <RegisterForm updateForm={updateRegistration} />
      </MyModal>

      <p className="mt-4 mb-4 fw-normal">
        Maximize the potential of LPR technology and gain unparalleled
        operational advantages. Experience the cutting-edge solutions we offer,
        which allow you to streamline traffic flow, optimize parking management,
        and eliminate manual errors. Our system seamlessly integrates with your
        existing infrastructure, ensuring a hassle-free installation process.
      </p>

      <div className="row g-3 align-items-end">
        <div className="col-12 col-md-6 col-lg-4 col-xxl-5">
          <UploadBox
            submitHandler={submitHandler}
            uploadImage={setUploadedImage}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <PreviewBox result={result} uploadedImage={uploadedImage} />
        </div>

        <div className="col-12 col-lg-4">
          <ResultBox result={result} />
        </div>
      </div>

      <LprContent />
    </>
  );
};

export default LprTest;

const defaultResult: ILprTestRes = {
  data: [
    {
      confidence: 62.63333333333334,
      plate_image: "ALPR_46eb20240318071000_plate_62.63_288ATG.jpg",
      plate_number: "S A M P L E",
    },
  ],
  full_image: "ALPR_46eb20240318071000_plate_62.63_288ATG_full.jpg",
  status: null,
  success: null,
};
