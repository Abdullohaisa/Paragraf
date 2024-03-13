import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Timer from "../Timer/Timer";

const RegisterPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const phoneNumber = useSelector((state) => state.register.data?.number);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data.code === "1234") {
      navigate("/");
    } else {
      alert("xato");
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="enter-side">
          <ul>
            <p>Saytga kirish</p>
            <h4>Kod raqamga xabar orqali yuborildi</h4>
            <h4>dummy number</h4>
          </ul>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="phone">Tasdiqlash kodi</label>
              <input
                type="number"
                className="register-input"
                placeholder="1234"
                id="code"
                name="code"
                {...register("code", {
                  required: "Raqamingizni kiriting!",
                  minLength: {
                    value: 4,
                    message: "Raqamni to`g`ri kiriting!!",
                  },
                  maxLength: {
                    value: 4,
                    message: "Raqamni to`g`ri kiriting!!",
                  },
                })}
              />

              {errors.code && <h5>{errors.code.message}</h5>}
            </div>

            <Timer
              initialSeconds={5}
              onComplete={() => console.log("Timer complete!")}
            />
            <button
              type="submit"
              className="register-confirm-btn"
              onClick={onSubmit}
            >
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

export default RegisterPassword;
