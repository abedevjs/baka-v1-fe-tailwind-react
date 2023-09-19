import ContentWrapper from "../ui/ContentWrapper";
import Tab from "../ui/Tab";
import TextBox from "../ui/TextBox";

function Rules() {
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
          flex justify-center space-x-4
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
          <Tab />
        </div>
        {/* Paragraf Container start */}
        {/* Disini seharusnya ada paragraf */}
        {/* Paragraf Container start */}
      </>
    </ContentWrapper>
  );
}

export default Rules;
