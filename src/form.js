import "./form.css";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";

let User = {};
function CreateForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setConfirmPassword] = useState("");

  function checkPassStrength() {
    if (
      !/[A-Z]/.test(password) || //checking the capital letters
      !/[a-z]/.test(password) || //checking the small letters
      !/\d+/.test(password) || //checking the digits
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) //checking the special characters
    ) {
      alert(
        "Please create Strong password with atleast one specail character,small alphabat,capital alphabat and digit"
      );
    }
  }

  function checkAllInputs(event) {
    event.preventDefault();
    if (!fullname || !email || !password || !cnfpassword) {
      alert("Please fill the all information");
      return;
    }

    //checking the fullname validation
    if (!fullname.includes(" ")) {
      alert("enter full name");

      return;
    }

    let nameWithLastname = fullname.split(" ");
    let firstName = nameWithLastname[0].trim();
    let lastName = nameWithLastname[nameWithLastname.length - 1].trim();
    //checking the email
    let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    console.log(email);
    if (!email.match(emailFormat)) {
      alert("Please Enter coorect email ");
      return;
    }

    // chcking password and confirm password

    User.firstName = firstName;
    User.lastName = lastName;
    User.email = email;

    if (password !== cnfpassword) {
      alert("confirm password should  be same password");
      return;
    } else if (checkPassStrength()) {
    }

    User.password = password;
    User.cnfPassword = cnfpassword;
    localStorage.setItem("User", JSON.stringify(User));
  }

  return (
    <div className="form-container">
      <form action="">
        <div className="bigBox">
          <input
            type="text"
            placeholder="Please Enter your full name"
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
        </div>
        <div className="bigBox">
          <input
            type="email"
            placeholder="Please Enter your email"
            onChange={(event) => {
              setEmail(event.target.value.trim());
            }}
          />
        </div>

        <div className="bigBox">
          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <FaEyeSlash className="eye" />
        </div>
        <div className="bigBox">
          <input
            type="password"
            id="cnfpassword"
            placeholder="Confirm Password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <FaEyeSlash className="eye" />
        </div>
        <div className="bigBox">
          <button
            id="btn"
            onClick={checkAllInputs}
            style={
              password === cnfpassword && password.length > 5
                ? { background: "green" }
                : {}
            } // Changed "style={{background:"green"}}:style={{background:""}}" to "style={password === cnfpassword ? { background: "green" } : {}}"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
