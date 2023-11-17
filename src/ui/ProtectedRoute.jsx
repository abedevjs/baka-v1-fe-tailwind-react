import { useNavigate } from "react-router-dom";
// import { useIsAuthenticated } from "../features/authentication/useAuth";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { useGetUser } from "../features/user/useGetUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { user: isAuthenticated, isLoading } = useGetUser();
  // const { isAuthenticated, isLoading } = useIsAuthenticated();

  //2. If there is no authenticated user navigate to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. Show spinner
  if (isLoading) return <Spinner />;

  //4. If authenticated, return children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
