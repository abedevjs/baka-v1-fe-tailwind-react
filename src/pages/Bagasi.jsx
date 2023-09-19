import { TabelBagasiComplete } from "../features/bagasi/TabelBagasi";
import ContentWrapper from "../ui/ContentWrapper";
import Pagination from "../ui/Pagination";
import TextBox from "../ui/TextBox";
import TextTitle from "../ui/TextTitle";
import Wrapper from "../ui/Wrapper";

function Bagasi() {
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
              Kenali tim dibalik layar Baka
            </h2>
            {/* Subtitle */}
            <span className="text-base lg:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              illo mollitia odit maxime dolor provident vitae beatae rem
              consequuntur dolorum. <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, modi.
            </span>
          </div>
          {/* Link */}
          <div className="flex justify-start space-x-2 items-center ">
            <a
              href="#daftar__bagasi"
              className="text-sm hover:translate-y-1 duration-300"
            >
              Kenalan dengan tim kami
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
    </ContentWrapper>
  );
}

export default Bagasi;
