import { useState } from "react";
import ContentWrapper from "../ui/ContentWrapper";
import { ParagrafContent, Tab } from "../ui/Tab";
import TextBox from "../ui/TextBox";

function Rules() {
  const [open, setOpen] = useState(1); //* saya pakai useState di sini karena pargraf content terbuka dgn angka. angka tsb di pass back and forth antara Tab component sebagai child dan Rules component sebagai parent

  return (
    <ContentWrapper padding="p-6">
      <>
        {/* Text Box */}
        <TextBox
          marginBottom="mb-16"
          subtitle="policy kami"
          title="bagaimana cara kami bekerja"
        />
        {/* Steps Container */}
        <div
          className="
          mt-6 flex justify-center space-x-4
          lg:flex-col lg:space-x-0 lg:space-y-8
          sm:space-y-6
          "
        >
          {/* Illustration */}
          <div
            className="
              w-[50%] 
              lg:self-center
              sm:w-[80%]
              "
          >
            <img src="/svg/policy.svg" className="" alt="" />
          </div>
          <Tab tabOpen={setOpen} />
        </div>
        {/* Paragraf Container start */}
        <ParagrafContent contentNumber={open} />
        {/* Paragraf Container start */}
      </>
    </ContentWrapper>
  );
}

export default Rules;
