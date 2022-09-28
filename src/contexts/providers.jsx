import React from "react";
import UserProvider from "./user/provider";

function Providers(props) {
  return <UserProvider>{props.children}</UserProvider>;
}

export default Providers;
