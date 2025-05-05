import { Link } from "react-router";

function Home() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center my-8">
      <Link
        className="block text-2xl px-4 py-2 w-full max-w-[320px] rounded-md font-medium text-center bg-gray-50 dark:bg-neutral-800/50 border border-blue-300"
        to="food"
      >
        Food Buff
      </Link>
      <Link
        className="block text-2xl px-4 py-2 w-full max-w-[320px] rounded-md font-medium text-center bg-gray-50 dark:bg-neutral-800/50 border border-blue-300"
        to="food"
      >
        Quest Calulator
      </Link>
      <Link
        className="block text-2xl px-4 py-2 w-full max-w-[320px] rounded-md font-medium text-center bg-gray-50 dark:bg-neutral-800/50 border border-blue-300"
        to="food"
      >
        Bag Expansion
      </Link>
    </main>
  );
}

export default Home;
