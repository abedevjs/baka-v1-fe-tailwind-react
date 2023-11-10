import { user, bagasi, order } from "../../public/docs/faq";
import Accordion from "../ui/Accordion";
import ContentWrapper from "../ui/ContentWrapper";
import { LinkArrowLeft } from "../ui/LinkArrow";
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

      <Accordion title="User" data={user} />
      <Accordion title="Bagasi" data={bagasi} />
      <Accordion title="Order" data={order} />
    </ContentWrapper>
  );
}

export default Faq;
