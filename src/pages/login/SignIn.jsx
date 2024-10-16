// SignIn.jsx
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
// import styles from "./SignIn.css";
import styles from "./SignIn.scss";

const SignIn = () => {
return (
<div className="container">
    <div className={styles.topContent}>
    <img
        src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png"
        alt="Google Logo"
    />
    <h2>Sign in</h2>
    <p className="heading">Use your Google Account</p>
    </div>

    <form>

    <TextField
        id="email"
        label="Email or phone"
        fullWidth
        margin="normal"
    />
    <TextField
        id="password"
        label="Password"
        type="password"
        fullWidth
        margin="normal"
    />

    {/* <a href="" className={styles.linkBtn}>
        Forgot Password?
    </a> */}

    <div className="btnGroup">
        <Button variant="outlined">Create account</Button>
        <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={false}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
        <Button type="submit" variant="contained">
        Login
        </Button>
    </div>
    </form>
</div>
);
};

export default SignIn;
