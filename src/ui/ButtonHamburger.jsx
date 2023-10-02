import { useState } from "react";
import Modal from "./Modal";
import BarNavigation from "./BarNavigation";

function ButtonHamburger() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((current) => !current);
  }

  return (
    <Modal>
      <Modal.Open opens="hamburger">
        <div
          onClick={handleClick}
          id="hamburger__btn"
          type="button"
          className={`hamburger absolute cursor-pointer hidden lg:block ${
            isActive ? "open" : ""
          }`}
        >
          <span className="hamburger-top bg-textColor" />
          <span className="hamburger-middle bg-textColor" />
          <span className="hamburger-bottom bg-textColor" />
        </div>
      </Modal.Open>
      <Modal.Window name="hamburger">
        <BarNavigation mobile={true} />
      </Modal.Window>
    </Modal>
  );
}

export default ButtonHamburger;
