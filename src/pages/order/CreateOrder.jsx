import PageCreateOrder from "../../features/order/PageCreateOrder";
import ContentWrapper from "../../ui/ContentWrapper";
import { LinkArrowLeft } from "../../ui/LinkArrow";

function CreateOrder() {
  return (
    <ContentWrapper padding="p-6">
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Area Bagasi"
        destination="/list-bagasi"
        style="mb-8"
      />

      {/* FORM Create Order */}
      <PageCreateOrder />
    </ContentWrapper>
  );
}

export default CreateOrder;
