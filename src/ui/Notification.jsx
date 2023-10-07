function Notification({ type = "", text = "" }) {
  return (
    <>
      {type == "success" && (
        <>
          {/* Success Message */}
          <span className="w-fit sm:w-full mx-auto py-1 px-2 block self-center text-xs text-white text-center bg-green-600 rounded-lg">
            {text} 🤗
          </span>
        </>
      )}

      {type == "error" && (
        <>
          {/* Error Message */}
          <span className="w-fit sm:w-full mx-auto py-1 px-2 block self-center text-xs text-white text-center bg-red-500 rounded-lg">
            {text}..🙁
          </span>
        </>
      )}
    </>
  );
}

export default Notification;
