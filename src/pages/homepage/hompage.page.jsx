import React from "react";
import { HomePageContainer } from "./homepage.styles";
import "./homepage.styles.scss";
import Directory from "../../component/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Directory key="directory" />
  </HomePageContainer>
);

export default HomePage;