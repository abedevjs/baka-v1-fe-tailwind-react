import { useState } from "react";
import { user, bagasi, order } from "../../public/docs/faq";
import Accordion from "./Accordion";

function TabFaq() {
  const [showTab, setShowTab] = useState(1);
  function handleToggle(e) {
    setShowTab(e);
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className=" w-full flex justify-around border-t-2 border-textColor sm:justify-between">
        <button
          onClick={() => handleToggle(1)}
          tabIndex={0}
          className={`${
            showTab === 1
              ? "bg-secondaryYellow -translate-y-3/4 shadow-md shadow-textColor"
              : " bg-secondaryYellowTint"
          } py-2 px-4 border-2 border-textColor  rounded-md -translate-y-1/2 duration-300 hover:bg-secondaryYellow`}
        >
          <div className=" text-sm flex items-center space-x-1">
            <img
              src="/svg/userTextColor.svg"
              alt=""
              className=" fill-textColor text-textColor w-6 h-6 sm:w-4 sm:h-4"
            />
            <span>USER</span>
          </div>
        </button>
        <button
          onClick={() => handleToggle(2)}
          tabIndex={1}
          className={`${
            showTab === 2
              ? "bg-secondaryYellow -translate-y-3/4 shadow-md shadow-textColor"
              : " bg-secondaryYellowTint"
          } py-2 px-4 border-2 border-textColor  rounded-md -translate-y-1/2 duration-300 hover:bg-secondaryYellow`}
        >
          <div className=" text-sm flex items-center space-x-1">
            <img
              src="/svg/luggageTextColor.svg"
              alt=""
              className=" fill-textColor text-textColor w-6 h-6 sm:w-4 sm:h-4"
            />
            <span>BAGASI</span>
          </div>
        </button>
        <button
          onClick={() => handleToggle(3)}
          tabIndex={2}
          className={`${
            showTab === 3
              ? "bg-secondaryYellow -translate-y-3/4 shadow-md shadow-textColor"
              : " bg-secondaryYellowTint"
          } py-2 px-4 border-2 border-textColor  rounded-md -translate-y-1/2 duration-300 hover:bg-secondaryYellow`}
        >
          <div className=" text-sm flex items-center space-x-1">
            <img
              src="/svg/suitcaseTextColor.svg"
              alt=""
              className=" fill-textColor text-textColor w-4 h-4 sm:w-3 sm:h-3"
            />
            <span>JASTIP</span>
          </div>
        </button>
      </div>
      <TabContent showTab={showTab} />
    </div>
  );
}

function TabContent({ showTab }) {
  return (
    <>
      {showTab === 1 ? <Accordion data={user} /> : ""}
      {showTab === 2 ? <Accordion data={bagasi} /> : ""}
      {showTab === 3 ? <Accordion data={order} /> : ""}
    </>
  );
}

export default TabFaq;
