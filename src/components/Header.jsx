const Header = ({ logoName, home, about, service, contact }) => {
  return (
    <div className="bg-[#fff6d9] p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{logoName}</div>
          <ul className="flex items-center space-x-5">
            <li>
              <a href="#" className="font-semibold">
                {home}
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                {about}
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                {service}
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                {contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
