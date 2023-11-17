import ContentWrapper from "../../ui/ContentWrapper";
import FormUpdateBagasi from "../../features/bagasi/FormUpdateBagasi";
import { LinkArrowLeft } from "../../ui/LinkArrow";

function UpdateBagasi() {
  return (
    <ContentWrapper padding="p-6">
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Area User"
        destination="/user"
        style="mb-8"
      />

      {/* FORM */}
      <FormUpdateBagasi />
    </ContentWrapper>
  );
}

export default UpdateBagasi;
