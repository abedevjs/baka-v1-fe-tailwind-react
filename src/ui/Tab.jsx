import { useState } from "react";
import { Link } from "react-router-dom";

export function Tab({ tabOpen }) {
  const [openTab, setOpenTab] = useState(1);

  function handleClick(e) {
    if (e.target.tabIndex == -1) e.target.tabIndex = 1;
    setOpenTab(e.target.tabIndex);
    tabOpen(e.target.tabIndex);
  }

  return (
    <>
      {/* Steps Box */}
      <div className="flex-1 flex flex-col justify-between items-center space-y-4">
        {/* Steps Title */}
        <span className="mb-2 text-lg self-center sm:text-base">
          Pastikan sudah menjadi Member, kemudian ikuti langkah berikut:
        </span>
        {/* Steps Options Box */}
        <div className="tab_container w-full flex justify-evenly items-center">
          {/* Traveler Button */}
          <button
            tabIndex={1}
            onClick={(e) => handleClick(e)}
            className={`${
              openTab == 1
                ? "tab__buttons tab__buttons--active"
                : "tab__buttons"
            } p-2 px-28 rounded-lg text-sm text-white cursor-pointer transition duration-300 sm:px-14`}
          >
            {/* <a href="#" class="p-2 px-28 rounded-lg text-sm text-white cursor-pointer transition-all duration-300 opacity-100 bg-primaryBlueBold"> */}
            <div className=" ">Untuk Traveler</div>
          </button>
          {/* Jastiper Button */}
          <button
            tabIndex={2}
            onClick={(e) => handleClick(e)}
            className={`${
              openTab == 2
                ? "tab__buttons tab__buttons--active"
                : "tab__buttons"
            } p-2 px-28 rounded-lg text-sm text-white cursor-pointer transition duration-300 sm:px-14`}
          >
            <div className=" ">Untuk Pembeli</div>
          </button>
        </div>

        <TabContent contentNumber={openTab} />

        {/* Link Detail */}
        <div className="w-full flex justify-center p-1 px-2 text-white cursor-pointer bg-primaryBlue opacity-80 rounded-lg hover:opacity-100 hover:bg-primaryBlueBold transition-all duration-300 ">
          <Link to="/faq" className="text-lg ">
            Lihat Tanya-Jawab
          </Link>
        </div>
        {/* <ParagrafContent contentNumber={openTab} /> */}
      </div>
      {/* akhir Steps Box */}
    </>
  );
}

function TabContent({ contentNumber }) {
  return (
    <>
      {/* Steps Content Box Bagasi */}
      {contentNumber == 1 && (
        <div
          className={`${
            contentNumber == 1
              ? "tab__contents tab__contents--active"
              : "tab__contents"
          } relative space-y-2`}
        >
          {/* Vertical Line */}
          <div className="absolute top-8 left-[20px] w-[2px] h-[80%] bg-secondaryYellow z-[1] " />
          {/* Step 1 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              1
            </div>
            <span>Registrasi Bagasi</span>
          </div>
          {/* Step 2 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              2
            </div>
            <span>Upload Bukti Keberangkatan</span>
          </div>
          {/* Step 3 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              3
            </div>
            <span>Admin memeriksa bukti keberangkatan</span>
          </div>
          {/* Step 4 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              4
            </div>
            <span>Admin memberikan feedback</span>
          </div>
          {/* Step 5 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              5
            </div>
            <span>Jika valid, akan di update ke Daftar Bagasi Traveler</span>
          </div>
        </div>
      )}

      {/* Steps Content Box Order */}
      {contentNumber == 2 && (
        <div
          className={`${
            contentNumber == 2
              ? "tab__contents tab__contents--active"
              : "tab__contents"
          } relative space-y-2`}
        >
          {/* Vertical Line */}
          <div className="absolute top-8 left-[20px] w-[2px] h-[80%] bg-secondaryYellow z-[1] " />
          {/* Step 1 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              1
            </div>
            <span>Registrasi Order</span>
          </div>
          {/* Step 2 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              2
            </div>
            <span>Upload Bukti Keberangkatan</span>
          </div>
          {/* Step 3 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              3
            </div>
            <span>Admin memeriksa bukti keberangkatan</span>
          </div>
          {/* Step 4 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              4
            </div>
            <span>Admin memberikan feedback</span>
          </div>
          {/* Step 5 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              5
            </div>
            <span>Jika valid, akan di update ke Daftar Bagasi Traveler</span>
          </div>
        </div>
      )}
    </>
  );
}

export function ParagrafContent({ contentNumber }) {
  return (
    <>
      {/* Paragraf Container start */}
      <div
        className={`${
          contentNumber == 1
            ? "paragraf__contents paragraf__contents--active"
            : "paragraf__contents"
        } p-6 space-y-2  sm:mt-2 sm:p-2 sm:space-y-0`}
      >
        <span className="text-base">Untuk Traveler yang menjual Bagasi:</span>
        <p className="p-2 text-base sm:text-sm">Bagasi</p>
      </div>
      <div
        className={`${
          contentNumber == 2
            ? "paragraf__contents paragraf__contents--active"
            : "paragraf__contents"
        } p-6 space-y-2  sm:mt-2 sm:p-2 sm:space-y-0`}
      >
        <span className="text-base">Untuk pembeli Bagasi:</span>
        <p className="p-2 text-base sm:text-sm">Order</p>
      </div>
      {/* Paragraf Container start */}
    </>
  );
}

// export default Tab;
