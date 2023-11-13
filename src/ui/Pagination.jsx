import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;

function Pagination({ count, setterPage, newDataCount }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(Number(count) / PAGE_SIZE); // 17/10 = 1.7 dibulatkan ke 2

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setterPage(next);
    setSearchParams(searchParams);
  }

  function backPage() {
    const back = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", back);
    setterPage(back);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className=" w-3/4 mx-auto flex items-center justify-between">
      <div className=" text-xs">
        {/* Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results */}
      </div>
      <div className=" text-xs flex space-x-4">
        <button
          onClick={backPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? "bg-bodyBackColor cursor-not-allowed"
              : "bg-secondaryYellow cursor-pointer"
          } py-1 px-2 rounded-md`}
        >
          {currentPage === 1 ? "Stop ⛔" : "← Back"}
        </button>

        <button
          onClick={nextPage}
          // disabled={currentPage === pageCount}
          disabled={newDataCount < PAGE_SIZE}
          className={`${
            // currentPage === pageCount
            newDataCount < PAGE_SIZE
              ? "bg-bodyBackColor cursor-not-allowed"
              : "bg-secondaryYellow cursor-pointer"
          } py-1 px-2 rounded-md`}
        >
          {/* {currentPage === pageCount ? "Stop ⛔" : "Next →"} */}
          {newDataCount < PAGE_SIZE ? "Stop ⛔" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// function Pagination() {
//   return (
//     <nav className="mx-auto text-sm">
//       <ul className="inline-flex items-center -space-x-px">
//         <li>
//           <a
//             href="#"
//             className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-bodyBackColor border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             <span className="sr-only">Previous</span>
//             <svg
//               aria-hidden="true"
//               className="w-4 h-4"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="px-3 py-2 leading-tight text-gray-500 bg-bodyBackColor border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             1
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="px-3 py-2 leading-tight text-gray-500 bg-bodyBackColor border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             2
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             aria-current="page"
//             className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//           >
//             3
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="px-3 py-2 leading-tight text-gray-500 bg-bodyBackColor border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             4
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="px-3 py-2 leading-tight text-gray-500 bg-bodyBackColor border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             5
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="block px-3 py-2 leading-tight text-gray-500 bg-bodyBackColor border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           >
//             <span className="sr-only">Next</span>
//             <svg
//               aria-hidden="true"
//               className="w-4 h-4"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default Pagination;
