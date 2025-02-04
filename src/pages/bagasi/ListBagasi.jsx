import { TabelBagasiComplete } from "../../features/bagasi/TabelBagasi";
import { ButtonBlue } from "../../ui/Button";
import ContentWrapper from "../../ui/ContentWrapper";
import TextBox from "../../ui/TextBox";
import TextTitle from "../../ui/TextTitle";
import Wrapper from "../../ui/Wrapper";

function ListBagasi() {
  return (
    <ContentWrapper padding="p-6">
      {/* Text Box */}
      <TextBox subtitle="layanan kami" title="area bagasi" />

      {/* Illustration Container */}
      <div
        className="
          flex justify-center -mt-4 mb-12 
          lg:mt-12
          sm:mt-2 sm:px-4 sm:flex-col-reverse
          "
      >
        {/* Hero Title and Link Container */}
        <div className="flex flex-col justify-center">
          {/* Title Box */}
          <div className="max-w-xl mb-12 flex flex-col space-y-7 sm:space-y-4 sm:self-center">
            {/* Title */}
            <h2 className=" text-3xl font-title lg:text-2xl sm:text-xl">
              Pulang kini sudah lebih dekat
            </h2>
            {/* Subtitle */}
            <span className="text-base lg:text-sm">
              Penjualan bagasi pesawat bagi warga negara Indonesia di luar
              negeri yang ingin pulang atau sebaliknya. Dengan kemudahan
              teknologi, kami memastikan bagasi sampai dengan selamat di tujuan.{" "}
              <br /> <br />
              Menggunakan teknologi terkini, kami mempermudah proses pemesanan,
              pelacakan, dan manajemen perjalanan.
            </span>
          </div>
          {/* Link */}
          <div className="flex justify-start space-x-2 items-center ">
            <a
              href="#list__bagasi"
              className="text-sm hover:translate-y-1 duration-300"
            >
              Lihat List Bagasi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="m7 10l5 5m0 0l5-5"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Hero Illustration */}
        <img
          src="/svg/Traveling-bro.svg"
          className="w-2/4 sm:w-[80%] sm:mb-8 sm:self-center"
          alt="Flying"
        />
        {/* <img src="images/svg/Flying around the world-amico.svg" class="w-2/4" alt="Flying"> */}
      </div>

      {/* Text Title */}
      <TextTitle icon="bagasi" title="daftar bagasi" />

      {/* Table-Pagination Container */}
      <Wrapper type="table-pagination">
        <TabelBagasiComplete />
      </Wrapper>

      {/* Text Title */}
      <TextTitle icon="bagasi" title="jual bagasi" />

      {/* Link ke Jual Bagasi */}
      <div
        className=" w-fit mx-auto flex flex-col items-center space-y-2"
        id="list__bagasi"
      >
        <span>Ingin jual Bagasi?</span>
        <ButtonBlue
          text="Isi Formulir Jual Bagasi"
          destination="/create-bagasi"
        />
      </div>
    </ContentWrapper>
  );
}

export default ListBagasi;
