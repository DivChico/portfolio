const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between h-[100px] ">
      <p>ChicoDiv</p>
      <nav>
        <ul className="  flex flex-row space-x-5 items-center capitalize text-neutral-300 text-sm">
          <li className=" hover:text-purple-500">home</li>
          <li className=" hover:text-purple-500">about</li>
          <li className=" hover:text-purple-500">contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
