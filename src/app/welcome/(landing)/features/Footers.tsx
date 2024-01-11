const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 border-t dark:border-t-gray-700">
      <div className="mx-auto max-w-screen-xl text-center">
        <ul className="flex flex-wrap justify-center items-center mb-4 text-gray-900 dark:text-white">
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="#">
              用户协议
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="#">
              隐私政策
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="#faq">
              常见问题
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="mailto:hi@tig.im">
              联系我们
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}
          <a className="hover:underline" href="#">
            TIG.IM
          </a>
          版权所有
        </span>
      </div>
    </footer>
  );
};

export default Footer;
