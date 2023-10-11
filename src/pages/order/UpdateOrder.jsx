import PageUpdateOrder from "../../features/order/PageUpdateOrder";
import ContentWrapper from "../../ui/ContentWrapper";
import { LinkArrowLeft } from "../../ui/LinkArrow";
import TextTitle from "../../ui/TextTitle";

function UpdateOrder() {
  return (
    <ContentWrapper padding="p-6">
      {/* Link */}
      <LinkArrowLeft
        text="Kembali ke Area User"
        destination="/user"
        style="mb-8"
      />

      {/* Text Title */}
      <TextTitle icon="order" title="update order" />

      {/* Page Update Order */}
      <PageUpdateOrder />
    </ContentWrapper>
  );
}

export default UpdateOrder;
