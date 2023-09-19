function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <span className="text-xs">
      © {year} by @be ❤️. All rights reserved. <br /> All illustrations by&nbsp;
      <a href="https://storyset.com/online">
        <span className="underline">Storyset</span>
      </a>
    </span>
  );
}

export default Copyright;

<div className="overflow-y-hidden overflow-x-auto mb-7 mx-auto shadow-md rounded-xl md:w-[45rem] sm:w-[20rem]">
  <table className="w-full max-w-none mx-auto border-collapse text-sm text-left text-textColor">
    <thead className="text-xs text-gray-700 uppercase bg-secondaryYellow">
      <tr>
        <th scope="col" className="py-4 px-6 sm:py-2 sm:px-4">
          Berangkat
        </th>
        {/* <th scope="col" class="py-4 px-6">Tiba</th> */}
        <th scope="col" className="py-4 px-6 sm:py-2 sm:px-4">
          Dari
        </th>
        <th scope="col" className="py-4 px-6 sm:py-2 sm:px-4">
          Tujuan
        </th>
        {/* <th scope="col" class="py-4 px-6">Total (Kg)</th> */}
        <th scope="col" className="py-4 px-6 sm:py-2 sm:px-4">
          Sisa
        </th>
        <th scope="col" className="py-4 px-6 sm:py-2 sm:px-4">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="lg:text-center sm:text-xs">
      <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
        <td scope="row" className="py-3 px-6">
          20/Mar/23
        </td>
        {/* <td scope="row" class="py-3 px-6">21 Maret 2023</td> */}
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/jakarta.svg" alt="Jakarta" />
            <span>Jakarta</span>
          </div>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/cairo.svg" alt="Cairo" />
            <span>Cairo</span>
          </div>
        </td>
        {/* <td scope="row" class="py-3 px-6">60</td> */}
        <td scope="row" className="py-3 px-6">
          60 <span className="text-xs italic">Kg</span>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/scheduled.svg" alt="Scheduled" />
            <span>Scheduled</span>
          </div>
        </td>
      </tr>
      <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
        <td scope="row" className="py-3 px-6">
          25/Mar/23
        </td>
        {/* <td scope="row" class="py-3 px-6">27 Maret 2023</td>    */}
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/istanbul.svg" alt="Istanbul" />
            <span>Istanbul</span>
          </div>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/jakarta.svg" alt="Jakarta" />
            <span>Jakarta</span>
          </div>
        </td>
        {/* <td scope="row" class="py-3 px-6">40</td> */}
        <td scope="row" className="py-3 px-6">
          15 <span className="text-xs italic">Kg</span>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/opened.svg" alt="Opened" />
            <span>Opened</span>
          </div>
        </td>
      </tr>
      <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
        <td scope="row" className="py-3 px-6">
          02/Apr/23
        </td>
        {/* <td scope="row" class="py-3 px-6">03 April 2023</td> */}
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/cairo.svg" alt="Cairo" />
            <span>Cairo</span>
          </div>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/jakarta.svg" alt="Jakarta" />
            <span>Jakarta</span>
          </div>
        </td>
        {/* <td scope="row" class="py-3 px-6">30</td> */}
        <td scope="row" className="py-3 px-6">
          05 <span className="text-xs italic">Kg</span>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/closed.svg" alt="Closed" />
            <span>Closed</span>
          </div>
        </td>
      </tr>
      <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
        <td scope="row" className="py-3 px-6">
          11/Apr/23
        </td>
        {/* <td scope="row" class="py-3 px-6">13 April 2023</td> */}
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/jakarta.svg" alt="Jakarta" />
            <span>Jakarta</span>
          </div>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/dubai.svg" alt="Dubai" />
            <span>Dubai</span>
          </div>
        </td>
        {/* <td scope="row" class="py-3 px-6">50</td> */}
        <td scope="row" className="py-3 px-6">
          10 <span className="text-xs italic">Kg</span>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/opened.svg" alt="Opened" />
            <span>Opened</span>
          </div>
        </td>
      </tr>
      <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
        <td scope="row" className="py-3 px-6">
          09/Jun/23
        </td>
        {/* <td scope="row" class="py-3 px-6">10 Juni 2023</td> */}
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/jakarta.svg" alt="Jakarta" />
            <span>Jakarta</span>
          </div>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/istanbul.svg" alt="Istanbul" />
            <span>Istanbul</span>
          </div>
        </td>
        {/* <td scope="row" class="py-3 px-6">60</td> */}
        <td scope="row" className="py-3 px-6">
          60 <span className="text-xs italic">Kg</span>
        </td>
        <td scope="row" className="py-3 px-6">
          <div className="flex justify-left space-x-2">
            <img src="/svg/canceled.svg" alt="Canceled" />
            <span>Canceled</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
