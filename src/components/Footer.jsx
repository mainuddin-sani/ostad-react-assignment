const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full py-20 bg-gray-800">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <p className="font-semibold text-gray-200">Md.Mainuddin Sani</p>
            <a className="text-gray-600" href="#">
              0187870121
            </a>
          </li>
          <li>
            <p className="font-semibold text-gray-200">Github Link</p>
            <a
              className="text-gray-600"
              href="https://github.com/mainuddin-sani"
            >
              https://github.com/mainuddin-sani
            </a>
          </li>
          <li>
            <p className="font-semibold text-gray-200">Gitlab</p>
            <a className="text-gray-600" href="https://gitlab.com/main12sani">
              https://gitlab.com/main12sani
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
