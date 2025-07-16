import { Link } from "react-router";
import Header from "../../component/header";

function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-6 justify-center items-center my-14">
        <Link
          className="text-xl p-3 w-[70dvw] sm:w-[420px] hover:shadow-lg hover:transition-all hover:duration-500 rounded-md font-medium text-center bg-light-primary hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary border dark:border-none border-blue-300"
          to="food"
        >
          Food Buff
        </Link>
        <a
          href="https://potumdb-xp.pages.dev"
          className="text-xl p-3 w-[70dvw] sm:w-[420px] hover:shadow-lg hover:transition-all hover:duration-500 rounded-md font-medium text-center bg-light-primary hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary border dark:border-none border-blue-300"
        >
          Quest Calulator
        </a>
        <Link
          className="text-xl p-3 w-[70dvw] sm:w-[420px] hover:shadow-lg hover:transition-all hover:duration-500 rounded-md font-medium text-center bg-light-primary hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary border dark:border-none border-blue-300"
          to="bag"
        >
          Bag Expansion
        </Link>
      </main>
    </>
  );
}

export default Home;
