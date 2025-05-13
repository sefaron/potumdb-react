function FoodCard(i) {
  return (
    <div className="p-4 flex flex-col gap-4 rounded-md border-1 bg-primary dark:bg-primary-dark border-gray-300 dark:border-gray-500/50">
      <div>
        🏠 {i.owner} 🍕 Level {i.lv}
      </div>

      <div className=" p-2 px-4 w-auto flex flex-row items-center justify-between rounded-md bg-secondary dark:bg-secondary-dark border-1 border-borderlight dark:border-borderdark">
        <div>{i.code}</div>

        <button className="flex cursor-pointer items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-gray-400 dark:stroke-neutral-400 hover:stroke-gray-600 dark:hover:stroke-gray-100"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

function Food() {
  return (
    <main className="flex flex-col items-center justify-center m-4 p-4 rounded-lg bg-gray-300/30 dark:bg-gray-600/30 bg- backdrop-blur-sm">
      <div className=" gap-4 flex flex-col">
        <h1 className="text-3xl font-bold">Food buff codes</h1>
        <h2 className="text-base font-semibold">
          Click below to jump to a specific buff ⬇️
        </h2>

        <div className="flex flex-wrap gap-2 gap-y-3 leading-none max-w-5xl">
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#ampr"
          >
            AMPR
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#cr"
          >
            Critical Rate
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#mp"
          >
            MP
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#watk"
          >
            Weapon ATK
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#str"
          >
            STR
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#dex"
          >
            DEX
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#pres"
          >
            Physical Resistance
          </a>
          <a
            className="rounded-full bg-[#ffd752] px-4 py-2 font-bold text-black"
            href="#mres"
          >
            Magic Resistance
          </a>
        </div>

        <h2 className="text-lg font-bold" id="ampr">
          AMPR
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          <FoodCard owner="S A R A" lv="10" code="4040404" />
          <FoodCard owner="S A R A" lv="10" code="4040404" />
          <FoodCard owner="S A R A" lv="10" code="4040404" />
        </div>

        <h2 className="text-lg font-bold" id="cr">
          Critical Rate
        </h2>
        <h2 className="text-lg font-bold" id="mp">
          MP
        </h2>
        <h2 className="text-lg font-bold" id="watk">
          Weapon ATK
        </h2>
        <h2 className="text-lg font-bold" id="str">
          STR
        </h2>
        <h2 className="text-lg font-bold" id="dex">
          DEX
        </h2>
        <h2 className="text-lg font-bold" id="pres">
          Physical Resistance
        </h2>
        <h2 className="text-lg font-bold" id="mres">
          Magic Resistance
        </h2>
      </div>
    </main>
  );
}

export default Food;
