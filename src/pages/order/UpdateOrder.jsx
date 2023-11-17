import PageUpdateOrder from "../../features/order/PageUpdateOrder";
import ContentWrapper from "../../ui/ContentWrapper";
import { LinkArrowLeft } from "../../ui/LinkArrow";

function UpdateOrder() {
  return (
    <ContentWrapper padding="p-6">
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Area User"
        destination="/user"
        style="mb-8"
      />

      {/* Page Update Order */}
      <PageUpdateOrder />
    </ContentWrapper>
  );
}

export default UpdateOrder;
