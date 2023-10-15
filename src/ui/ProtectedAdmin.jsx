import { useNavigate } from "react-router-dom";
import { useGetAdmin } from "../features/admin/useGetAdmin";
import { useEffect } from "react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
const ADMIN = import.meta.env.VITE_ADMIN;

function ProtectedAdmin({ children }) {
  const navigate = useNavigate();
  const { admin, isLoadingAdmin } = useGetAdmin();

  useEffect(
    function () {
      if (admin !== ADMIN && !isLoadingAdmin) {
        toast.error("Go away! You are not Abé 👺");
        navigate("/about");
      }
    },
    [admin, isLoadingAdmin, navigate]
  );

  if (isLoadingAdmin) return <Spinner />;

  if (admin == ADMIN) return children;
}

export default ProtectedAdmin;