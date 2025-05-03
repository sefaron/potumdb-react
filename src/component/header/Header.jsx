function Header() {
  return (
    <header className="m-4 h-12 px-4 rounded-md bg-gray-300 backdrop-blur-sm flex justify-between items-center max-w-5xl">
      <a href="">
        <img className="h-6" src="logo.svg" alt="" />
      </a>

      <div className="flex justify-between gap-4">
        <a href="https://discord.com/users/1053259863569989652">
          <img className="h-6" src="discord.svg" alt="" />
        </a>
        <a href="https://github.com/Lixeira">
          <img className="h-6 bg-gray-200 rounded-full" src="github.svg" alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header