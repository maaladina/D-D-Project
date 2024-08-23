import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Users
        </h2>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          Add users, edit and more.
        </p>
      </div>

      <div>
        <div className="inline-flex gap-x-2">
          <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
            View all
          </a>

          <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" to="/registration">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
            Add user
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;