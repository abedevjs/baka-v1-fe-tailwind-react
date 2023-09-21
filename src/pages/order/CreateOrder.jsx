import FormCreateOrder from "../../features/order/FormCreateOrder";
import ContentWrapper from "../../ui/ContentWrapper";
import { LinkArrowLeft } from "../../ui/LinkArrow";
import TextTitle from "../../ui/TextTitle";

function CreateOrder() {
  return (
    <ContentWrapper padding="p-6">
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Area Bagasi"
        destination="/list-bagasi"
        style="mb-8"
      />

      {/* Text Title */}
      <TextTitle icon="bagasi" title="beli bagasi" />

      {/* FORM Create Order */}
      <FormCreateOrder />
    </ContentWrapper>
  );
}

export default CreateOrder;
