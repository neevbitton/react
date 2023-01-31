import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import cardsSchema from "../../validation/creatCardValidation";
import { useHistory } from "react-router-dom";

const CreateBizCardPage = () => {
  const history = useHistory();
  const [bizName, setBizName] = useState("");
  const [bizDescription, setBizDescription] = useState("");
  const [bizAddress, setBizAddress] = useState("");
  const [bizPhone, setBizPhone] = useState("");
  const [bizImage, setBizImage] = useState("");

  const handleBizNameChange = (ev) => {
    setBizName(ev.target.value);
  };
  const handleBizDescriptionChange = (ev) => {
    setBizDescription(ev.target.value);
  };
  const handleBizAddressChange = (ev) => {
    setBizAddress(ev.target.value);
  };
  const handleBizPhoneChange = (ev) => {
    setBizPhone(ev.target.value);
  };
  const handleBizImageChange = (ev) => {
    setBizImage(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validated_Value = Joi.validate(
        { bizName, bizDescription, bizAddress, bizPhone },
        cardsSchema,
        { abortEarly: false }
      );
      const { error } = validated_Value;
      if (error) {
        console.log(error);
        for (let item of error.details) {
          toast.error(`${item.message.replaceAll('"', "")}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        let dateToSend = {
          bizName,
          bizDescription,
          bizAddress,
          bizPhone,
        };
        if (bizImage) {
          dateToSend.bizImage = bizImage;
        }
        axios
          //can also use .post("/users")
          .post("/cards", dateToSend)
          .then((res) => {
            console.log(res.data);
            toast.success('🦄 Created!', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
              history.push("/dashboard")
          })
          .catch((err) => console.log("error form axios", err));
      }
   
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h1 className="text-center">Create New Business Card</h1>
      <div className="mb-3">
        <label htmlFor="bizNameInput" className="form-label">
          Card Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizNameInput"
          value={bizName}
          onChange={handleBizNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizDescriptionInput" className="form-label">
          Card Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizDescriptionInput"
          value={bizDescription}
          onChange={handleBizDescriptionChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizAddressInput" className="form-label">
        Card Address:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizAddressInput"
          value={bizAddress}
          onChange={handleBizAddressChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizPhoneInput" className="form-label">
        Card Phone:
        </label>
        <input
          type="text"
          className="form-control"
          id="bizPhoneInput"
          value={bizPhone}
          onChange={handleBizPhoneChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bizImageInput" className="form-label">
        Card Image (url):
        </label>
        <input
          type="text"
          className="form-control"
          id="bizImageInput"
          value={bizImage}
          onChange={handleBizImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
</div>
  );
};

export default CreateBizCardPage;