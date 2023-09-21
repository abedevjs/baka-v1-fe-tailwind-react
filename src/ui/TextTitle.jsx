function TextTitle({ icon = "", title = "" }) {
  return (
    <div className="mb-4 flex space-x-2 ">
      {icon == "bagasi" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-auto fill-textColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.75 2a.75.75 0 0 0 0 1.5H9V5h-.75A3.25 3.25 0 0 0 5 8.25v9a3.25 3.25 0 0 0 2 3v1a.75.75 0 0 0 1.5 0v-.75h7v.75a.75.75 0 0 0 1.5 0v-1a3.25 3.25 0 0 0 2-3v-9A3.25 3.25 0 0 0 15.75 5H15V3.5h.25a.75.75 0 0 0 0-1.5h-6.5Zm4.75 1.5V5h-3V3.5h3ZM8 9.75A.75.75 0 0 1 8.75 9h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 9.75Z" />
        </svg>
      )}

      {icon == "order" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-5 fill-textColor"
          viewBox="0 0 25 24"
        >
          <path d="M22.184 3.979h-5.506v-1.44a2.546 2.546 0 0 0-2.541-2.542H10.75a2.546 2.546 0 0 0-2.542 2.541v1.44H2.702A2.705 2.705 0 0 0-.002 6.683v13.26a2.7 2.7 0 0 0 2.701 2.701h.796a1.36 1.36 0 1 0 2.712-.005v.005h12.456a1.356 1.356 0 1 0 2.712 0h.796a2.7 2.7 0 0 0 2.701-2.701V6.661a2.683 2.683 0 0 0-2.683-2.683h-.007zm-12.085-1.44c0-.36.292-.652.652-.652h3.386c.36 0 .652.292.652.652v1.44h-4.683v-1.44zm-4.527 17.22h-.001a2.201 2.201 0 1 1 2.201-2.201v.001c0 1.215-.985 2.2-2.2 2.201zm3.579-8.88l1.44-3.867l3.867 1.44l-1.44 3.868zm6.24 8.336l-.956-3.305l7.269-2.097l.956 3.305z" />
        </svg>
      )}

      {icon == "user" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="#0b2471"
            d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
          />
        </svg>
      )}
      <h2 className="text-base uppercase">{title}</h2>
    </div>
  );
}

export default TextTitle;
