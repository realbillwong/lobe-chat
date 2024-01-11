const Faq = () => (
  <section className="bg-gray-100 dark:bg-gray-800" id="faq">
    <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
      <h2 className="mb-8 mx-auto text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
        常见问题
      </h2>
      <div className="grid pt-8 text-left md:gap-16 dark:border-gray-700 md:grid-cols-2">
        <div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              是否可以免费使用？
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              注册后每天有5次免费使用的额度，用完后无法继续使用，次日凌晨会重置免费使用额度。当日额度没用完不会结转至次日。付费会员用户不限制使用次数。
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              是否提供发票？
            </h3>
            <p className="text-gray-500 dark:text-gray-400">不提供发票</p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              是否支持退款？
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              不支持退款。任何用户注册后每天都有5次免费使用的额度，次日凌晨重置次数。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Faq;
