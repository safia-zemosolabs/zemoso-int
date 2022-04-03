import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import { Button } from "@material-ui/core";

export interface LoginProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = (props: LoginProps) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box data-testid="Login Page">
      <Button
        onClick={() => loginWithRedirect()}
        variant="outlined"
        size="large"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
