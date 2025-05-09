function FoodCard(i) {
  return (
    <div className="flex flex-col gap-4 rounded-md border-1 border-gray-300 bg-white p-4 dark:border-gray-500/50 dark:bg-neutral-900">
      <div>
        🏠 {i.owner} 🍕 Level {i.lv}
      </div>

      <div className="flex flex-row items-center justify-between rounded-md border-1 border-gray-300 bg-gray-100 p-2 px-4 dark:border-gray-500/50 dark:bg-neutral-700">
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
            className="stroke-gray-400 dark:stroke-neutral-400"
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
    <main className="m-2 flex flex-col items-center justify-center gap-4 p-2 sm:m-4 sm:p-4">
      <h1 className="text-3xl font-bold">Food buff codes</h1>
      <h2 className="text-base font-semibold">
        Click below to jump to a specific buff ⬇️
      </h2>

      <div className="flex flex-wrap gap-2 gap-y-3 leading-5">
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

      <div>
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
    </main>
  );
}

export default Food;
