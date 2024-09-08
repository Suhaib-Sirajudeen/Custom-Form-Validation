import { useState } from "react";
import "./Form.css";
export const Form = () => {
  const [userValue, setUserValue] = useState({
    firstName: "",
    email: "",
    gender: "",
    doe: "",
    country: "",
    skills: [],
  }); //state to store user value

  const [errorFields, setErrorFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    doe: "",
    country: "",
    skills: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    firstName: "",
    email: "",
    gender: "",
    doe: "",
    country: "",
    skills: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValidonSubmit()) {
      console.log("submitted");
      alert("submitted");
      return;
    }

    console.log("invalid");
  };

  const handleInput = (event) => {
    const { name, value, checked } = event.target;
    handleOnblur(event);

    setUserValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkills = (event) => {
    // if (userValue.skills.length == 0 && !event.target.checked) {
    //   setErrorFields((prev) => ({ ...prev, skills: true }));
    // }
    let newSkills = [...userValue.skills];
    const { checked, name, value } = event.target;

    if (checked) {
      newSkills.push(value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== value);
    }
    // console.log(newSkills);
    setUserValue((prev) => ({ ...prev, skills: newSkills }));
  };

  const handleOnblur = (event) => {
    const { name, value, checked } = event.target; // handle the value  on blur

    let error = "";
    let errorMsges = "";

    if (name === "firstName" && value === "") {
      error = true;
    } else if (
      name === "firstName" &&
      (value.length < 4 ||
        /[`0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))
    ) {
      errorMsges = "Please enter the valid name";
    } else if (name === "email" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        value
      )
    ) {
      errorMsges = "Please enter the valid email";
    } else if (name === "gender" && !checked) {
      error = true;
    } else if (name === "doe" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }
    setErrorFields((prev) => ({ ...prev, [name]: error }));
    setErrorMsg((prev) => ({ ...prev, [name]: errorMsges }));
  };

  const checkBoxValidation = (event) => {
    const { name, value, checked } = event.target;
    let error = "";
    if (name === "skills" && userValue.skills.length == 0) {
      error = true;
    }

    setErrorFields((prev) => ({ ...prev, [name]: error }));
  };

  function isFormValidonSubmit() {
    let submit = "";
    const errors = {
      firstName: false,
      email: false,
      gender: false,
      doe: false,
      country: false,
      skills: false,
    };
    if (userValue.firstName === "") {
      errors.firstName = true;
    }
    if (userValue.email === "") {
      errors.email = true;
    }
    if (userValue.gender === "") {
      errors.gender = true;
    }
    if (userValue.doe === "") {
      errors.doe = true;
    }
    if (userValue.country === "") {
      errors.country = true;
    }
    if (userValue.skills.length === 0) {
      errors.skills = true;
    }
    if (Object.values(errors).some((error) => error === true)) {
      submit = false;
    } else {
      submit = true;
    }

    setErrorFields(errors);
    console.log(errors);
    return submit;
  }

  return (
    <>
      <div className="main-contianer">
        <div className="form">
          <h1>Registeration Form</h1>
          <form
            onSubmit={handleSubmit}
            className="form-card"
            autoComplete="off"
            noValidate
          >
            <div className="firstname-section">
              <label htmlFor="firstname">Firstname:</label>
              <input
                type="text"
                name="firstName"
                id="firstname"
                placeholder="Enter your firstname"
                onChange={handleInput}
                onBlur={handleOnblur}
              />
              {errorMsg.firstName && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errorMsg.firstName}
                </p>
              )}
              {errorFields.firstName && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  The FirstName is required
                </p>
              )}
            </div>
            <div className="email-section">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your emailid"
                onChange={handleInput}
                onBlur={handleOnblur}
              />
              {errorMsg.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errorMsg.email}
                </p>
              )}
              {errorFields.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Email is required
                </p>
              )}
            </div>
            <div className="radio-button-label">
              <label htmlFor="gender">Gender:</label>
            </div>
            <div className="Gender-section">
              <input
                type="radio"
                name="gender"
                id="male"
                placeholder="Enter your Gender"
                onChange={handleInput}
                onBlur={handleOnblur}
                value="male"
              />
              <label htmlFor="male" style={{ fontWeight: "lighter" }}>
                Male
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={handleInput}
                onBlur={handleOnblur}
              />
              <label htmlFor="female" style={{ fontWeight: "lighter" }}>
                female
              </label>
              {errorFields.gender && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Gender is required
                </p>
              )}
            </div>

            <div className="doe-section">
              <label htmlFor="doe">Date of Birth:</label>
              <input
                type="date"
                name="doe"
                id="doe"
                placeholder="Enter your date of birth"
                onChange={handleInput}
                onBlur={handleOnblur}
              />
              {errorFields.doe && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  The Date of birth is required
                </p>
              )}
            </div>
            <div className="country">
              <label htmlFor="country">Country:</label>
              <select
                name="country"
                id="country"
                onChange={handleInput}
                onBlur={handleOnblur}
              >
                <option value="">Select</option>
                <option value="India" onBlur={handleOnblur}>
                  India
                </option>
                <option value="Qatar" onBlur={handleOnblur}>
                  Qatar
                </option>
                <option value="Uae" onBlur={handleOnblur}>
                  Uae
                </option>
              </select>
              {errorFields.country && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  The Country is required{" "}
                </p>
              )}
            </div>

            <div className="checkbox">
              <label htmlFor="skills">Skills:</label>
              <input
                type="checkbox"
                name="skills"
                id="react"
                value="React"
                onChange={handleSkills}
                onBlur={checkBoxValidation}
                // onBlur={handleOnbluronCheckBox}
              />
              <label htmlFor="react">React</label>
              <input
                type="checkbox"
                name="skills"
                id="angular"
                value="Angular"
                onChange={handleSkills}
                onBlur={checkBoxValidation}
              />
              <label htmlFor="angular">Angular</label>
              <input
                type="checkbox"
                name="skills"
                id="flutter"
                value="Flutter"
                onChange={handleSkills}
                onBlur={checkBoxValidation}
              />
              <label htmlFor="flutter">Flutter</label>
              {errorFields.skills && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  The skills is required
                </p>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
