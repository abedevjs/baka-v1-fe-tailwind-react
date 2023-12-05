import { useEffect, useRef, useState } from "react";
import ModalJonas from "./ModalJonas";
import ModalAbe from "./ModalAbe";
import BarNavigation from "./BarNavigation";
import BarNavigationMobile from "./BarNavigationMobile";
import { useGetUser } from "../features/user/useGetUser";

function ButtonHamburger() {
  const [isActive, setIsActive] = useState(false);
  const { refetch: reFetchUser } = useGetUser();

  //Using useRef and Dialog element from HTML which failed. But it's good to know the new feature of html dialog element
  // const dialogRef = useRef(null);
  // useEffect(
  //   function () {
  //     if (isActive) dialogRef.current.showModal();
  //     if (!isActive) dialogRef.current.close();
  //   },
  //   [isActive]
  // );

  function handleClick() {
    setIsActive((current) => !current);
    reFetchUser();
  }

  return (
    <>
      <div
        onClick={handleClick}
        id="hamburger__btn"
        type="button"
        className={`hamburger  fixed cursor-pointer hidden z-20 lg:block ${
          isActive ? "open" : ""
        }`}
      >
        <span className="hamburger-top bg-textColor" />
        <span className="hamburger-middle bg-textColor" />
        <span className="hamburger-bottom bg-textColor" />
      </div>

      {isActive && (
        <ModalAbe>
          <BarNavigationMobile />
        </ModalAbe>
      )}

      {/* <BarNavigationMobile /> */}

      {/* {isActive && <BarNavigationMobile />} */}

      {/* {isActive && (
        <dialog ref={dialogRef}>
          <BarNavigationMobile />
        </dialog>
      )} */}
    </>
  );

  // return (
  //   <Modal>
  //     <Modal.Open opens="hamburger">
  //       <div
  //         onClick={handleClick}
  //         id="hamburger__btn"
  //         type="button"
  //         className={`hamburger absolute cursor-pointer hidden lg:block ${
  //           isActive ? "open" : ""
  //         }`}
  //       >
  //         <span className="hamburger-top bg-textColor" />
  //         <span className="hamburger-middle bg-textColor" />
  //         <span className="hamburger-bottom bg-textColor" />
  //       </div>
  //     </Modal.Open>
  //     <Modal.Window name="hamburger">
  //       <BarNavigation mobile={true} />
  //     </Modal.Window>
  //   </Modal>
  // );
}

export default ButtonHamburger;
