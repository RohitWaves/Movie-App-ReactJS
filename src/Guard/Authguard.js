import { Navigate } from "react-router-dom";

const AuthGuard = ({ isLoggedIn, children }) => {

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default AuthGuard;