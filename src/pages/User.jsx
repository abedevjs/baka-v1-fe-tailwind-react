import DataUser from "../features/user/DataUser";
import { TabelUserBagasi, TabelUserOrder } from "../features/user/TabelUser";
import { ButtonRed } from "../ui/Button";
import ContentWrapper from "../ui/ContentWrapper";
import Notification from "../ui/Notification";
import Pagination from "../ui/Pagination";
import TextBox from "../ui/TextBox";
import TextTitle from "../ui/TextTitle";
import Wrapper from "../ui/Wrapper";

function User() {
  return (
    <ContentWrapper padding="p-6">
      {/* Text Box */}
      <TextBox margin="mb-12" subtitle="layanan kami" title="area user" />

      {/* Text Title */}
      <TextTitle icon="user" title="data user" />

      {/* Data User */}
      <DataUser />

      {/* Text Title */}
      <TextTitle icon="bagasi" title="data bagasi" />

      {/* Wrapper */}
      <Wrapper type="table-pagination">
        <TabelUserBagasi />
      </Wrapper>

      {/* Text Title */}
      <TextTitle icon="order" title="data order" />

      {/* Wrapper */}
      <Wrapper type="table-pagination">
        <TabelUserOrder />
      </Wrapper>

      <ButtonRed text="Hapus Akun Saya" destination="/login" />
      <Notification
        type="error"
        text="Gagal menghapus akun, dicoba lagi ya kak"
      />
    </ContentWrapper>
  );
}

export default User;
