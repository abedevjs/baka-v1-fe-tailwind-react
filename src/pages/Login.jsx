import ContentWrapper from "../ui/ContentWrapper";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

function Login() {
  // const { isLoading } = useAuthGoogle();
  function handleClick(provider) {
    window.open(`${BAKA_URL}/auth/${provider}`, "_self");
  }
  return (
    <ContentWrapper padding="p-6">
      <div
        id="modalContainer"
        className=" w-2/3  bg-white opacity-95 rounded-lg shadow-lg lg:w-2/3 lg:h-1/5 sm:w-4/5 sm:h-1/3 sm:p-2"
      >
        {/* Content */}
        <div className="h-full flex flex-col flex-wrap justify-around">
          {/* Greetings Text */}
          <div className="w-full mx-auto flex flex-col space-y-2 text-center">
            <span className="text-2xl text-stone-600 font-thin sm:text-lg">
              Selamat datang di
              <span className="ml-2 text-primaryBlue font-bold drop-shadow-sm">
                Baka App
              </span>
            </span>
            <span className="text-base font-thin text-stone-600 sm:text-sm">
              Kita Check In dulu ya Kak!
            </span>
          </div>
          {/* Login Buttons Icons */}
          <div className="w-full flex space-x-2 justify-center items-center sm:flex-col sm:space-x-0 sm:space-y-1">
            <div className="py-2 px-4 flex border border-gray-500 rounded-md sm:py-3">
              <button
                onClick={() => handleClick("google")}
                className="flex items-center space-x-2 lg:space-x-1 lg:text-center cursor-pointer"
              >
                <img
                  src="/svg/google.svg"
                  className="w-8 h-auto sm:w-6"
                  alt=""
                />
                <span className="text-sm font-thin sm:text-xs">
                  Masuk dengan Google
                </span>
              </button>
            </div>
            <span className="text-sm">atau</span>
            <div className="py-2 px-4 flex border border-gray-500 rounded-md sm:py-3">
              <button
                onClick={() => handleClick("facebook")}
                className="flex items-center space-x-2 lg:space-x-1 lg:text-center"
              >
                <img
                  src="/svg/facebook.svg"
                  className="w-8 h-auto sm:w-6"
                  alt=""
                />
                <span className="text-sm font-thin sm:text-xs">
                  Masuk dengan Facebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Login;
