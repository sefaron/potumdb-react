function Error404() {
  return (
    <>
      <img
        className="w-full z-[-1] blur-sm sm:blur-md fixed bg-cover bg-center top-50 sm:top-30"
        src="/images/404.webp"
        alt=""
      />
      <main className="min-h-full flex flex-col items-center justify-center p-6 overflow-hidden">
        <h1 className="text-4xl text-white font-bold text-center my-12 text-wrap">
          If you want it,
        </h1>
        <h1 className="text-4xl text-white font-bold text-center my-8 text-wrap">
          then you'll have to take it.
        </h1>
        <h1 className="text-4xl text-white font-bold text-center my-8 text-wrap">
          But you already knew that.
        </h1>
        <h3 className="text-sm text-white fixed bottom-15">Error 404</h3>
      </main>
    </>
  );
}

export default Error404;
