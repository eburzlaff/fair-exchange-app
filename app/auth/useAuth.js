import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    // Setting user state var to the object that was decoded by jwtDecode
    console.log(authToken);
    const user = jwtDecode(authToken);
    setUser(user);

    // Storing token on SecureStore storage (users device)
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
