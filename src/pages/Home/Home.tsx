import React from "react";

export interface HomeProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = (props: HomeProps) => {
  props.setLogin(true);

  console.log("Reached Home");

  return <div data-testid="Home"></div>;
};

export default Home;
