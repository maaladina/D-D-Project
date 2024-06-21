import React from "react";

const Table = () => {
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
          <tr>
            <td className="size-px whitespace-nowrap">
              <div className="px-6 py-3">
                <div className="flex items-center gap-x-3">
                  <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                  <div className="grow">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
                    <span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
                  </div>
                </div>
              </div>
            </td>
            <td className="size-px  whitespace-nowrap">
              <div className="px-6 py-3">
                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Chris</span>
                <span className="block text-sm text-gray-500 dark:text-neutral-500">GM</span>
              </div>
            </td>
            <td className="size-px whitespace-nowrap">
              <div className="px-6 py-3">
                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                  Batumi
                </span>
              </div>
            </td>
            <td className="size-px whitespace-nowrap">
              <div className="px-6 py-3">
                <span className="text-sm text-gray-500 dark:text-neutral-500">Love playing D&D</span>
              </div>
            </td>
            <td className="h-px w-72 whitespace-nowrap text-end">
              <div className="px-6 py-1.5">
                <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                  Edit
                </a>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    )
}

export default Table;