import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";

// destructing props (history) below
const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();

  // (useEffect) this runs when the component mounts
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation
    if (!email || !password) {
      toast.error("Email and password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters long");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      //   console.log(result);
      // checkling if he really come freom email ans verified for safety
      if (result.user.emailVerified) {
        // remove email id from local storage
        window.localStorage.removeItem("emailForRegistration");
        //get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        console.log(idTokenResult);
        // redux store

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                role: res.data.role,
                _id: res.data._id,
                email: res.data.email,
                token: idTokenResult.token,
              },
            });
          })
          .catch((err) => console.log(err));

        // redirect
        history.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const CompleteRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />
      <br />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete Your Register</h4>
          {CompleteRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
