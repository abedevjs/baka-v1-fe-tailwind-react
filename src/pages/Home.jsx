import { useNavigate } from "react-router-dom";
import {
  TabelBagasiComplete,
  TabelBagasiHero,
} from "../features/bagasi/TabelBagasi";
import {
  TabelOrderComplete,
  TabelOrderHero,
} from "../features/order/TabelOrder";
import ContentWrapper from "../ui/ContentWrapper";
import { LinkArrowLeft, LinkArrowRight } from "../ui/LinkArrow";
import TextBox from "../ui/TextBox";
import { useIsAuthenticated } from "../features/authentication/useAuth";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useIsAuthenticated();

  useEffect(
    function () {
      if (isAuthenticated) return navigate("/list-bagasi");
    },
    [isAuthenticated, navigate]
  );

  if (isLoading) return <Spinner />;

  return (
    <ContentWrapper>
      {/* Main Content */}
      <div className="">
        {/* Class ini sengaja kosong karena dibawah ada svg yg padding nya full */}
        {/* Hero Container */}
        <Hero />
        {/* Table Wrap */}
        <div className="-mt-4 mb-12">
          {/* SVG WaveUp */}
          <div className="svgUp h-[17rem]" />
          {/* Table Container */}
          <div className="px-6 w-full h-[51rem] bg-primaryBlue lg:h-[51rem] sm:h-[56rem]">
            {/* Text Box */}
            <div className="-mt-[4.5rem] mb-8 text-center mx-auto">
              <TextBox
                textColor="text-white"
                subtitle="layanan kami"
                title="daftar bagasi traveler"
              />
            </div>
            {/* Table Bagasi Visual  */}
            <TabelBagasiComplete complete={false} />
            {/* Link */}
            <LinkArrowRight
              destination="/list-bagasi"
              text="Lihat Semua List Bagasi"
            />
            {/* Text Box */}
            <div className="mt-12 mb-8 text-center mx-auto">
              <TextBox
                textColor="text-white"
                subtitle="layanan kami"
                title="daftar order jastiper"
              />
            </div>
            {/* Table Order Visual */}
            <TabelOrderComplete complete={false} />
            {/* Link */}

            <LinkArrowRight
              destination="/order"
              text="Lihat Semua List Order"
            />
          </div>
          {/* SVG WaveDown */}
          <div className="svgDown h-[10rem]" />
        </div>
        {/* Advantage Container */}
        <Advantage />
      </div>
      {/* Main Content end */}
    </ContentWrapper>
  );
}

function Hero() {
  return (
    <div className="flex justify-center lg:p-4 sm:flex-col-reverse sm:gap-8">
      {/* Hero Title and Link Container */}
      <div className="flex flex-col justify-center">
        {/* Title Box */}
        <div className=" w-full mb-12 flex flex-col space-y-7">
          {/* Title */}
          <h1 className="text-7xl font-title font-black lg:text-6xl md:text-5xl sm:text-4xl self-center">
            Open Bagasi <br />
            ke luar negeri
          </h1>
          {/* Subtitle */}
          <p className="text-base px-6 self-center sm:px-2 sm:text-sm">
            Layanan jual-beli Bagasi dan Jastip. Nikmati kemudahannya melalui
            Aplikasi kami.
          </p>
        </div>
        {/* Link Left */}
        <LinkArrowLeft destination="/rules" text="Kepoin caranya" />
      </div>
      {/* Hero Illustration */}
      <img
        src="/svg/Flight Booking-bro.svg"
        className="w-2/4 lg:w-[45%] sm:w-[70%] sm:self-center"
        alt=""
      />
    </div>
  );
}

function Advantage() {
  return (
    <div className="px-12 mb-12">
      {/* Text Box */}
      <div className="mb-10 sm:mb-8 text-textColor text-center mx-auto">
        {/* Subtitle */}
        <h3 className="text-xs tracking-widest font-title uppercase">
          ~ keunggulan kami ~
        </h3>
        {/* Advantage Title */}
        <h2 className="text-3xl font-title capitalize sm:text-2xl">
          alasan menggunakan baka
        </h2>
      </div>
      {/* Advantage Box */}
      <div className="relative flex justify-evenly sm:flex-col sm:items-center sm:space-y-8">
        {/* Horizontal Line */}
        <div className="absolute top-32 left-52 h-3 bg-secondaryYellow w-[65%] lg:top-24 sm:hidden" />
        {/* Vertical Line */}
        <div className="absolute hidden w-2 h-2/3 -ml-1 bg-secondaryYellow left-1/2 sm:block" />
        {/* Advantage 1 */}
        <div className="z-10">
          {/* Advantage Box */}
          <div className="flex flex-col items-center space-y-2 w-60 h-auto p-7 bg-secondaryYellow rounded-xl lg:w-48 lg:p-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-40 h-auto lg:w-32"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="#0b2471"
                  d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065l7-2.625Zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414Z"
                />
              </g>
            </svg>
            {/* Text Box */}
            <div className="flex flex-col space-y-1 text-center">
              {/* Main Text */}
              <span className="text-base uppercase">aman</span>
              {/* Sub Text */}
              <span className="text-xs text-left">
                Baka menjadi jembatan kepercayaan antara Traveler dan Jastiper,
                memastikan setiap barang titipan sampai dengan aman dan tepat
                waktu.
              </span>
            </div>
          </div>
        </div>
        {/* Advantage 2 */}
        <div className="z-10">
          {/* Advantage Box */}
          <div className="flex flex-col items-center space-y-2 w-60 h-auto p-7 bg-secondaryYellow rounded-xl lg:w-48 lg:p-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-40 h-auto lg:w-32"
              viewBox="0 0 576 512"
            >
              <path
                fill="#0b2471"
                d="M432 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96zm-84.3 104.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1l22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54l19.3-65.5l9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L505 232.7l-15.3-36.8c-17.2-41.1-57.4-67.9-102-67.9c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1l-25 62.4l-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l61.7-61.7c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2l-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM256 274.1c-7.7-4.4-17.4-1.8-21.9 5.9l-32 55.4l-54.4-31.4c-15.3-8.8-34.9-3.6-43.7 11.7L40 426.6c-8.8 15.3-3.6 34.9 11.7 43.7l55.4 32c15.3 8.8 34.9 3.6 43.7-11.7l64-110.9c1.5-2.6 2.6-5.2 3.3-8l43.8-75.7c4.4-7.7 1.8-17.4-5.9-21.9z"
              />
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-40 h-auto lg:w-32" viewBox="0 0 26 26"><path fill="#0b2471" d="M15 3c-1.093 0-2 .907-2 2v1H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-5V5c0-1.093-.907-2-2-2h-3zM.812 4A1.001 1.001 0 0 0 1 6h1c.505 0 .66.108.781.25c.122.142.219.413.219.75v11c0 1.124.248 2.182.969 2.938C4.689 21.692 5.769 22 7 22h18a1 1 0 1 0 0-2H7c-.905 0-1.318-.212-1.563-.469C5.194 19.275 5 18.83 5 18V7c0-.69-.173-1.43-.688-2.031C3.798 4.368 2.95 4 2 4H1a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.094 0zM23 22a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM7 22a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm8-17h3v1h-3V5z"/></svg> */}
            {/* Text Box */}
            <div className="flex flex-col space-y-1 text-center">
              {/* Main Text */}
              <span className="text-base uppercase">Mudah</span>
              {/* Sub Text */}
              <span className="text-xs text-left">
                Nikmati kemudahan mengatur pengiriman dan penerimaan barang
                tanpa harus repot, langsung di ujung jari Anda.
              </span>
            </div>
          </div>
        </div>
        {/* Advantage 3 */}
        <div className="z-10">
          {/* Advantage Box */}
          <div className="flex flex-col items-center space-y-2 w-60 h-auto p-7 bg-secondaryYellow rounded-xl lg:w-48 lg:p-4">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-40 h-auto lg:w-32"
              viewBox="0 0 20 20"
            >
              <path
                fill="#0b2471"
                d="M1 8.25a1.25 1.25 0 1 1 2.5 0v7.5a1.25 1.25 0 1 1-2.5 0v-7.5ZM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0 1 14 3c0 .995-.182 1.948-.514 2.826c-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 0 1-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 0 1-1.341-.317l-2.734-1.366A3 3 0 0 0 6.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 0 1 2.166-1.73c.432-.143.853-.386 1.011-.814c.16-.432.248-.9.248-1.388Z"
              />
            </svg>
            {/* Text Box */}
            <div className="flex flex-col space-y-1 text-center">
              {/* Main Text */}
              <span className="text-base uppercase">nyaman</span>
              {/* Sub Text */}
              <span className="text-xs text-left">
                Baka membantu menjembatani perasaan dan kenangan, membuat setiap
                transaksi di antara Traveler dan Jastiper menjadi momen yang
                berkesan.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
