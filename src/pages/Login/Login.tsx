import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";

import { Typography } from "@mui/material";

export interface LoginProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = (props: LoginProps) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()} variant="outlined" size="large">
      Login
    </Button>
  );
};

export default Login;
