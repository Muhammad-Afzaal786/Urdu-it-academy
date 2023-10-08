import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function Breadcrumb({ pages }) {
  return (
    <nav className="flex flex-wrap mt-8" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex flex-wrap items-center space-x-0 lg:space-x-4"
      >
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon
                className="h-5 w-5 flex-shrink-0 hidden sm:flex"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages &&
          pages?.map((page, i) => (
            <li key={page.name}>
              <div className="flex items-center">
                {i != 0 && (
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                )}

                <a
                  href={page.href}
                  className={`${
                    i != 0 ? "lg:ml-4 ml-0" : "ml-0"
                  } text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap`}
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
