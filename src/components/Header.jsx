const Header = () => {
  return (
    <header className="flex flex-row  items-center justify-between h-[100px] ">
      <p className="text-3xl font-bold">ChicoDiv</p>
      <nav className="hidden md:visible">
        <ul className="  flex flex-row space-x-5 items-center capitalize  text-xl">
          <li className=" hover:text-purple-500">home</li>
          <li className=" hover:text-purple-500">about</li>
          <li className=" hover:text-purple-500">contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
