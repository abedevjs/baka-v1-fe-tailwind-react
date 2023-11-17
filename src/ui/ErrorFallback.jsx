function ErrorFallback({ error, resetErrorBoundary }) {
  console.error(error);
  return (
    <main className=" h-screen p-16 bg-bodyBackColor flex items-center justify-center lg:p-8">
      <div className=" h-1/2 w-2/3 p-4 flex flex-col justify-between items-center text-textColor bg-secondaryYellowTint border border-textColor rounded-md lg:h-1/3 lg:w-full lg:justify-around sm:justify-between">
        <span className=" text-3xl sm:text-sm">
          🙇‍♂️ Maaf ya kak, ada gangguan teknis 😵‍💫
        </span>
        <div className=" text-lg flex flex-col items-center space-y-1 sm:text-sm">
          <span>Pesan internal untuk admin: </span>
          <span className="text-red-500 font-semibold">{`'${error.message}'`}</span>
        </div>
        <button
          onClick={resetErrorBoundary}
          className="w-1/2 sm:w-full mb-2 p-2 px-2 block mx-auto text-center text-sm text-white font-semibold rounded-xl bg-green-600 duration-300 hover:opacity-80"
        >
          Coba lagi
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
