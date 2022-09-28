import { useContext } from "react";

import { UserContext } from "./context";

export default function User() {
  return useContext(UserContext);
}
