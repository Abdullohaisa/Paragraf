import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterName = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const phoneNumber = useSelector((state) => state.register.data.phoneNumber);

  const onSubmit = () => {
    navigate("/register/password");
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="enter-side">
          <ul>
            <p>Registratsiya</p>
            <h4>To'liq ismingizni kiriting</h4>
          </ul>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="phone">FIO</label>
              <input
                type="text"
                className="register-input"
                placeholder="ismingizni kiriting"
              />
              {errors.phone && <h5>{errors.phone.message}</h5>}
            </div>
            <button type="submit" className="register-confirm-btn">
              Tasdiqlash
            </button>
          </form>
        </div>

        <button className="register-close" onClick={() => navigate("/")}>
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default RegisterName;
