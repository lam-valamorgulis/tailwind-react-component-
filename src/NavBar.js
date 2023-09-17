import React from 'react';

const LINKS = ['How it works', 'Meals', 'Testimonials', 'Pricing'];

function NavBar() {
  return (
    <header className="flex items-center justify-between items-center px-5 h-24 bg-[#fdf2e9]	">
      <a href="#">
        <img
          src="https://omnifood.dev/img/omnifood-logo.png"
          alt="omifood"
          className="h-5"
        />
      </a>
      <nav>
        {/* from medium size will show a navigation bar, below medium size will hidden */}
        <div className="flex hidden md:block">
          <ul className="flex gap-6">
            {LINKS.map((li, index) => (
              <li key={index}>
                <a href="#" className="font-semibold text-lg">
                  {li}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="font-semibold text-lg text-[#fff] bg-[#e67e22] px-3 py-2 rounded-[9px]"
              >
                Try for free
              </a>
            </li>
          </ul>
        </div>
        {/* when smaller than medium size will show a icon menu, lager than medium size will hidden */}
        <button className="cursor-pointer block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            className="h-10 w-10"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
