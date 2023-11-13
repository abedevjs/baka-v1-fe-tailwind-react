import ContentWrapper from "../ui/ContentWrapper";
import { LinkArrowLeft } from "../ui/LinkArrow";
import TabFaq from "../ui/TabFaq";
import TextBox from "../ui/TextBox";

function Faq() {
  return (
    <ContentWrapper padding="p-6">
      {/* Text Box */}
      <TextBox
        marginBottom="mb-7"
        subtitle="tanya kami"
        title="pertanyaan dan jawaban"
      />
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Halaman Policy"
        destination="/rules"
        style="mb-12"
      />
      {/* FAQ */}
      <TabFaq />
    </ContentWrapper>
  );
}

export default Faq;
