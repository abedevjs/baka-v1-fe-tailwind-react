import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "../features/authentication/useAuth";
import ContentWrapper from "../ui/ContentWrapper";
import Spinner from "../ui/Spinner";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

function Login() {
  // const { isLoading } = useAuthGoogle();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useIsAuthenticated();

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return navigate("/user");

  function handleClick(provider) {
    window.open(`${BAKA_URL}/auth/${provider}`, "_self");
  }

  return (
    <ContentWrapper padding="p-6">
      <div className=" w-full h-full">
        {/* Content */}
        <div className="h-full flex flex-col items-center justify-center sm:justify-around">
          {/* Greetings Text */}
          <div className="w-full mx-auto flex flex-col space-y-2 text-center">
            <span className="text-3xl text-textColor font-semibold sm:text-lg">
              👋 Selamat datang di
              <span className="ml-2 text-3xl text-primaryBlue font-bold drop-shadow-sm sm:font-semibold">
                Baka
              </span>
            </span>
            <span className=" text-lg font-thin sm:text-sm">
              Kita Check In dulu ya Kak!
            </span>
          </div>
          {/* Image */}
          <div className="w-1/3 sm:w-3/4">
            <img
              className="w-full h-full text-center block mx-auto"
              src="/svg/Login-bro.svg"
              alt="Login"
            />
          </div>
          {/* Login Buttons Icons */}
          <div className="w-full flex space-x-6 justify-center items-center sm:flex-col sm:space-x-0 sm:space-y-2">
            <button
              onClick={() => handleClick("google")}
              className="py-4 px-6 bg-secondaryYellow rounded-md opacity-80 hover:opacity-100 duration-300 sm:py-3"
            >
              <div className="flex items-center space-x-2 lg:space-x-1 lg:text-center cursor-pointer">
                <img
                  src="/svg/google.svg"
                  className="w-8 h-auto sm:w-6"
                  alt=""
                />
                <span className="text-sm text-textColor sm:text-xs">
                  Masuk dengan Google
                </span>
              </div>
            </button>
            <span className="text-sm font-thin text-stone-600 sm:text-xs">
              atau
            </span>
            <button
              onClick={() => handleClick("facebook")}
              className="py-4 px-6 bg-secondaryYellow rounded-md opacity-80 hover:opacity-100 duration-300 sm:py-3"
            >
              <div className="flex items-center space-x-2 lg:space-x-1 lg:text-center">
                <img
                  src="/svg/facebook.svg"
                  className="w-8 h-auto sm:w-6"
                  alt=""
                />
                <span className="text-sm text-textColor sm:text-xs">
                  Masuk dengan Facebook
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Login;
