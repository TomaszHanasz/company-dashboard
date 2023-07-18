import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import logo from "./../../images/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import GoogleButton from "react-google-button";
import "./signUp.style.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={logo} alt="logo" style={{ width: 100 }} />©
      {new Date().getFullYear()} ADM Investors Services, Inc
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { createNewUser } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    try {
      const newUser = await createNewUser(email, password);
      if (newUser) {
        navigate("/");
      }
      setEmailError("");
      setPasswordError("");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setEmailError("Invalid email address.");
      } else if (err.code === "auth/weak-password") {
        setPasswordError("Password should be at least 6 characters.");
      } else if (err.code === "auth/email-already-in-use") {
        setEmailError("Email already in use.");
      }
      console.log("Error with sign up:", err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              Validate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={emailError !== ""}
                    helperText={emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={passwordError !== ""}
                    helperText={passwordError}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              <Grid container justifyContent="flex-start">
                <Grid item>
                  <RouterLink to="/signin">
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
