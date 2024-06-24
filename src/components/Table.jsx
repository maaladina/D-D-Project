import React, { useContext } from "react";
import User from "./User";
import { Context } from "./UsersPage";

const Table = () => {
  const users = useContext(Context);

  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead className="bg-gray-50 dark:bg-neutral-800">
        <tr>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                Name
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                Nickname
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                City
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-start">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                About
              </span>
            </div>
          </th>

          <th scope="col" className="px-6 py-3 text-end"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {users.map((user) => <User key={user.id} user={user} />)}
      </tbody>
    </table>
  )
}

export default Table;