import logo from '../../assets/logo.svg';
import discord from '../../assets/discord.svg';
import github from '../../assets/github.svg';

function Header() {
  return (
    <header className="m-4 h-12 px-4 rounded-lg bg-gray-300/30 dark:bg-gray-600/30 bg- backdrop-blur-sm flex justify-between items-center">

      <a href="">
        <img className="h-5 sm:h-6" src={logo} alt="" />
      </a>

      <div className="flex justify-between gap-2 sm:gap-4">

        <a target="_blank" href="https://discord.com/users/1053259863569989652">
          <img className="h-6 w-6" src={discord} alt="" />
        </a>

        <a target="_blank" href="https://github.com/Lixeira">
          <img className="h-6 w-6" src={github} alt="" />
        </a>

      </div>
    </header>
  )
}

export default Header