import DataUser from "../features/user/DataUser";
import { TabelUserBagasi, TabelUserOrder } from "../features/user/TabelUser";
import { useDeleteUser } from "../features/user/useDeleteUser";
import { ButtonRed } from "../ui/Button";
import ContentWrapper from "../ui/ContentWrapper";
import Notification from "../ui/Notification";
import Pagination from "../ui/Pagination";
import TextBox from "../ui/TextBox";
import TextTitle from "../ui/TextTitle";
import Wrapper from "../ui/Wrapper";

const BAKA_URL = import.meta.env.VITE_BAKA_URL;

function User() {
  const { deleteUser, isDeleting } = useDeleteUser();

  // function handleLogout() {
  //   window.open(`${BAKA_URL}/auth/logout`, "_self");
  // }
  function handleDelete() {
    deleteUser("", {
      onSuccess: () => {
        window.open(`${BAKA_URL}/auth/logout`, "_self");
      },
    });
  }

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
      <TextTitle icon="order" title="data jastip" />

      {/* Wrapper */}
      <Wrapper type="table-pagination">
        <TabelUserOrder />
      </Wrapper>

      <button
        onClick={handleDelete}
        className="w-1/4 sm:w-full mb-2 p-2 px-2 block mx-auto text-center text-sm text-white rounded-xl bg-red-500 duration-300 cursor-pointer hover:opacity-80"
      >
        {isDeleting ? "Menghapus data..." : "Hapus Akun Saya"}
      </button>
    </ContentWrapper>
  );
}

export default User;
