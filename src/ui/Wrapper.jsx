import Pagination from "./Pagination";

function Wrapper({ type, children }) {
  return (
    <>
      {type == "table-pagination" && (
        <div className="w-full mb-8 px-4 flex flex-col lg:px-0">
          {children}
          <Pagination />
        </div>
      )}
    </>
  );
}

export default Wrapper;
