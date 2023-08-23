import { useState } from "react";

// Router
import { Link, useNavigate } from "react-router-dom";

// Axios
import axios from "axios";

// Images
import backArrow from "../assets/images/icons/back-arrow.svg";

// Components
import LanguageSelector from "../components/LanguageSelector";
import Loading from "../components/Loading";

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { object, string } from "yup";

// Translation
import { useTranslation } from "react-i18next";

// Google login
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";

// JWT DECODER
// import jwt_decode from "jwt-decode";

const Register = () => {
  // JWT DECODER
  // const [googleUser, setGoogleUser] = useState({});

  // Local states
  const [loading, setLoading] = useState(false);

  // Translation
  const { t } = useTranslation();

  // Router
  const navigate = useNavigate();

  // Yup schema
  const emailSchema = object({
    email: string()
      .trim(t("register.trimError"))
      .required(t("register.requiredError"))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("register.matchesError")
      ),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  // Send data to api from here
  const onSubmit = async (data) => {
    setLoading(true);
    await axios
      .post(process.env.REACT_APP_PRE_REGISTER, data)
      .then((res) => {
        setLoading(false);
        navigate("/register-info-page");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main>
      <section className="register">
        {loading && <Loading />}
        <div className="screen">
          <div className="leftSide">
            <div className="formHeader">
              <Link className="navigate" to="/">
                <img src={backArrow} alt="go-back" />
                <p className="navigateInfo">{t("register.goBack")}</p>
              </Link>
              <LanguageSelector />
            </div>
            <div className="formSteps">
              <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="formTitle">{t("register.formTitle")}</h2>
                <p className="info">{t("register.info")}</p>
                {/* <div className="socialBtns">
                  <GoogleOAuthProvider
                    clientId={process.env.REACT_APP_CLIENT_ID}
                  >
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        const decoded = jwt_decode(
                          credentialResponse.credential
                        );
                        console.log(decoded);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </GoogleOAuthProvider>
                </div> */}
                <div className="inputBox">
                  <label htmlFor="email" className="email">
                    {t("register.label")} *
                  </label>
                  <input
                    className="formInp"
                    id="email"
                    name="email"
                    placeholder={t("register.inputPlaceholder")}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="errorAlert">{errors.email.message}</span>
                  )}
                </div>
                <button className="registerBtn" disabled={errors.email && true}>
                  {t("register.btnValue")}
                </button>
              </form>
            </div>
          </div>
          <div className="rightSide"></div>
        </div>
      </section>
    </main>
  );
};

export default Register;
