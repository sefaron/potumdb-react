import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";
import "./toast.css";

function FoodCard(i) {
  const code = i.code;

  function copyToClipboard() {
    navigator.clipboard.writeText(code).then(
      () => {
        showToast("Code copied to clipboard: " + code);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }

  function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    toast.classList.add("show");
    setTimeout(function () {
      toast.classList.remove("show");
      document.body.removeChild(toast);
    }, 3000);
  }

  return (
    <div className="p-4 flex flex-col gap-4 rounded-lg border bg-light-bg dark:bg-dark-primary border-light-border dark:border-none">
      <div>
        🏠 {i.owner} 🍕 Level {i.lv}
      </div>

      <div className=" p-2 px-4 flex flex-row items-center justify-between rounded-lg bg-light-primary dark:bg-dark-bg border border-light-border dark:border-dark-border relative">
        <div>{i.code}</div>

        <button
          onClick={copyToClipboard}
          className="flex cursor-pointer items-center justify-center"
        >
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
    <>
      <Header />
      <GoToTop />

      <main className="flex flex-col items-center justify-center p-6.5 ">
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
            <FoodCard owner="GODragon" lv="10" code="7257777" />
            <FoodCard owner="AlvinXxX" lv="10" code="4233333" />
          </div>

          <h2 className="text-lg font-bold" id="cr">
            Critical Rate
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="Player20" lv="10" code="7162029" />
            <FoodCard owner="- Kanna -" lv="10" code="5119105" />
            <FoodCard owner="#SAM#" lv="10" code="2022020" />
          </div>

          <h2 className="text-lg font-bold" id="mp">
            MP
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="Aka Shiro" lv="10" code="1027777" />
            <FoodCard owner="Yamaha" lv="10" code="4010090" />
            <FoodCard owner="yuxieyoko" lv="10" code="3017676" />
          </div>

          <h2 className="text-lg font-bold" id="watk">
            Weapon ATK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="YusagiKurumi" lv="10" code="1067777" />
            <FoodCard owner="夜トyato☆" lv="10" code="1010810" />
            <FoodCard owner="『 G a p a p a 』" lv="10" code="6010024" />
          </div>

          <h2 className="text-lg font-bold" id="str">
            STR
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="Echidna@" lv="10" code="1010055" />
            <FoodCard owner="くくりぼー☆" lv="10" code="1110033" />
            <FoodCard owner="くアジヤ" lv="10" code="1010968" />
          </div>

          <h2 className="text-lg font-bold" id="dex">
            DEX
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="Espur" lv="10" code="3111999" />
            <FoodCard owner="Aurianne" lv="10" code="7140777" />
            <FoodCard owner="· H20 ·" lv="10" code="1010058" />
          </div>

          <h2 className="text-lg font-bold" id="pres">
            Physical Resistance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="ramenEso" lv="10" code="6010701" />
            <FoodCard owner="L.casei Shirato" lv="10" code="2020111" />
            <FoodCard owner="てんげん " lv="10" code="1020001" />
          </div>

          <h2 className="text-lg font-bold" id="mres">
            Magic Resistance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <FoodCard owner="Niacin [B3]" lv="10" code="2020505" />
            <FoodCard owner="Kiyanh" lv="10" code="1111575" />
            <FoodCard owner="nanako♪" lv="10" code="6190007" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Food;
