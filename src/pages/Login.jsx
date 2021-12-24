import React, { useContext } from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleLogin from "react-google-login";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
    const { showProfile, setUsername, setAvatar, setName } =
        useContext(LoginContext);
    const clientId =
        "984740848184-9lmdamivf3lgve6lbjpaj0p4kdlsnfrs.apps.googleusercontent.com";
    const onLoginSuccess = (res) => {
        var result = res.profileObj;
        console.log(result);
        showProfile(true);
        setUsername(result.givenName);
        setAvatar(result.imageUrl);
        setName(result.name);
        localStorage.setItem("profile", true);
        localStorage.setItem("username", result.givenName);
        localStorage.setItem("avatar", result.imageUrl);
        localStorage.setItem("name", result.name);
    };
    const onLoginFailure = () => {
        console.log("Failure");
        showProfile(false);
    };
    return (
        <div className="login">
            <div href="/app" className="login_Logo">
                <TwitterIcon className="login__twitterIcon" />
            </div>
            <div className="login__buttons">
                <TwitterIcon className="login__twitterIconRight" />
                <h1 className="login__title">Happening now</h1>
                <h3 className="login__subtitle">Join Twitter Today.</h3>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    className="login__googleSignIn"
                />
                <button className="login__appleSignIn">
                    <AppleIcon />
                    <h3>Sign Un with Apple</h3>
                </button>
                <p className="login__line"></p>
                <p className="login__or">or</p>
                <button className="login__phoneSignUp">
                    <h3>Sign up with phone or email</h3>
                </button>
                <p className="login__terms">
                    By signing up, you agree to the Terms of Service and Privacy
                    Policy, including Cookie Use.
                </p>
                <h4 className="login__haveAccount">Already have an account?</h4>
                <button className="login__signin">
                    <h3>Sing in</h3>
                </button>
            </div>
        </div>
    );
}

export default Login;
