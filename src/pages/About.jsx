import ContentWrapper from "../ui/ContentWrapper";
import TextBox from "../ui/TextBox";
import Team from "../ui/Team";
import { team } from "../../public/docs/team";

function About() {
  return (
    <ContentWrapper padding="p-0">
      <>
        {/* Text Box */}
        <TextBox
          margin="mt-7"
          subtitle="tentang kami"
          title="Layanan Jual Beli Bagasi Terpercaya"
        />
        {/* About Container */}
        <div
          className="-mt-4 px-6 flex justify-center  
              lg:mt-12
              sm:mt-2 sm:px-4 sm:flex-col-reverse
              "
        >
          {/* Hero Title and Link Container */}
          <div className="flex flex-col justify-center">
            {/* Title Box */}
            <div
              className="
                      max-w-xl mb-12 flex flex-col space-y-7 
                      sm:space-y-4 sm:self-center
                      "
            >
              {/* Title */}
              <h2 className=" text-3xl font-title lg:text-2xl sm:text-xl">
                Pulang Mudah dengan Baka
              </h2>
              {/* Subtitle */}
              <span className="text-base lg:text-sm">
                Baka, berawal dari komunitas pelajar Indonesia di Timur Tengah.
                Sejak Desember 2023, kami menjadi solusi pengantar bagasi,
                memudahkan WNI yang ingin pulang atau mengirim barang ke tanah
                air. <br /> <br />
                Inovatif, teknologi, dan penuh perhatian, kami hadir untuk
                membuat setiap perjalanan pulang menjadi pengalaman yang mudah
                dan tak terlupakan.
              </span>
            </div>
            {/* Link */}
            <div className="flex justify-start space-x-2 items-center ">
              <a
                href="#team"
                className="text-sm hover:translate-y-1 duration-300 lg:text-xs"
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
            src="/svg/team.svg"
            className="w-2/4 
                  sm:w-[80%] sm:mb-8 sm:self-center
                  "
            alt="Team"
          />
        </div>
        {/* Team Content */}
        <div className="-mt-12 mb-12 sm:mb-4">
          {/* SVG WaveUp */}
          <div className="svgUp h-[17rem]" />
          {/* Content Container */}
          <div className="px-6 w-full h-[10] bg-primaryBlue">
            {/* Text Box */}
            <div className="-mt-[4.5rem] mb-12 text-center mx-auto">
              {/* Subtitle */}
              <TextBox
                textColor="text-white"
                subtitle="~ Tim Kami ~"
                title="Hubungi Tim Baka"
              />
            </div>
            {/* Tim Container */}
            <div
              id="team"
              className="
                      grid grid-cols-3 justify-items-center 
                      sm:grid-cols-1 sm:gap-12
                      "
            >
              <Team data={team} />
            </div>
          </div>
          {/* SVG WaveDown */}
          <div className="svgDown h-[10rem]" />
        </div>
      </>
    </ContentWrapper>
  );
}

export default About;
