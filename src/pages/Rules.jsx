import { useState } from "react";
import ContentWrapper from "../ui/ContentWrapper";
import { TabRules, RulesParagrafContent } from "../ui/TabRules";
import TextBox from "../ui/TextBox";
import Policy from "../ui/Policy";

function Rules() {
  const [open, setOpen] = useState(1); //* Example of receiving state from children component. Saya pakai useState di sini karena pargraf content terbuka dgn angka. angka tsb di pass back and forth antara TabRules sebagai child dan Rules(halaman ini) sebagai parent.

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
          mt-6 w-full flex justify-center space-x-4
          lg:flex-col lg:space-x-0 lg:space-y-8
          sm:space-y-6
          "
        >
          {/* Illustration */}
          <div
            className="
              w-[30%] 
              lg:self-center lg:w-[60%]
              sm:w-[80%]
              "
          >
            <img src="/svg/policy.svg" className="" alt="" />
          </div>
          <TabRules tabOpen={setOpen} />
        </div>
        {/* Paragraf Container start */}
        <RulesParagrafContent contentNumber={open} />
        {/* Paragraf Container start */}

        <Policy />
      </>
    </ContentWrapper>
  );
}

export default Rules;
