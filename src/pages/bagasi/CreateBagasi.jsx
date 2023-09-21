import ContentWrapper from "../../ui/ContentWrapper";
import { LinkArrowLeft } from "../../ui/LinkArrow";
import TextTitle from "../../ui/TextTitle";
import FormCreateBagasi from "../../features/bagasi/FormCreateBagasi";

function CreateBagasi() {
  return (
    <ContentWrapper padding="p-6">
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Area Bagasi"
        destination="/list-bagasi"
        style="mb-8"
      />

      {/* Text Title */}
      <TextTitle icon="bagasi" title="jual bagasi" />

      {/* FORM */}
      <FormCreateBagasi />
    </ContentWrapper>
  );
}

export default CreateBagasi;
