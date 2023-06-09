// Router
import { Link, useNavigate } from "react-router-dom";

// Images
import backArrow from "../assets/images/icons/back-arrow.svg";

// Components
import LanguageSelector from "../components/LanguageSelector";

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { object, string } from "yup";

const Register = () => {
  // Router
  const navigate = useNavigate();

  // Yup schema
  const emailSchema = object({
    email: string()
      .trim("Mail ünvanı boş ola bilməz")
      .required("Zəhmət olmasa mailnizi yazın")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Mail formatı düzgün deyil."
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
  const onSubmit = (data) => {
    console.log(data);
    navigate("/register-info-page");
  };

  return (
    <main>
      <section className="register">
        <div className="screen">
          <div className="leftSide">
            <div className="formHeader">
              <Link className="navigate" to="/">
                <img src={backArrow} alt="go-back" />
                <p className="navigateInfo">Ana səhifə</p>
              </Link>
              <LanguageSelector />
            </div>
            <div className="formSteps">
              <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="formTitle">Ön qeydiyyat</h2>
                <p className="info">İlk istifadəçilərdən olun!</p>
                <div className="inputBox">
                  <label htmlFor="email" className="email">
                    Mail *
                  </label>
                  <input
                    className="formInp"
                    id="email"
                    name="email"
                    placeholder="nümunə@gmail.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="errorAlert">{errors.email.message}</span>
                  )}
                </div>
                <button className="registerBtn" disabled={errors.email && true}>
                  Qeydiyyatdan keç!
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
