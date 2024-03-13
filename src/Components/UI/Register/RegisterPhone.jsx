import React, { useState } from "react";
import InputMask from "react-input-mask";
import ClearIcon from "@mui/icons-material/Clear";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRegisterEntry } from "../../../Redux/registerSlice";

const RegisterPhone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[phones, setPhones] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const existingEntry = useSelector((state) =>
    state.register.data.some((entry) => entry.phoneNumber === phones)
  );

  const onSubmit = ({ phone }) => {
    setPhones(phone)
    if (existingEntry || phone === null) {
      navigate("/login");
    } else {
      dispatch(addRegisterEntry({ phoneNumber: phone }));
      navigate("/register/name");
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="enter-side">
          <ul>
            <p>Saytga kirish</p>
            <h4>Telefon raqamingiz bilan tizimga kiring</h4>
          </ul>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
           <div>
           <label htmlFor="phone">Telefon raqami</label>
            <InputMask
              mask="+\9\98 99 999-99-99"
              placeholder="+998 00 000-00-00"
              type="text"
              id="phone"
              name="phone"
              className="register-input"
              {...register("phone", {
                required: "Raqamingizni kiriting!",
                minLength: {
                  value: 1,
                  message: "Raqamni to`g`ri kiriting!!",
                },
              })}
            />
             {errors.phone && <h5>{errors.phone.message}</h5>}
           </div>
            <button type="submit" className="register-confirm-btn">
              Tasdiqlash
            </button>
          </form>
        </div>

        <button className="register-close" onClick={() => navigate('/')}>
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default RegisterPhone;
