import React from "react";

const User = ({ user }) => {
  return (
    <tr>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex items-center gap-x-3">
            <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
            <div className="grow">
              <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{user.name}</span>
              <span className="block text-sm text-gray-500 dark:text-neutral-500">{user.email}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="size-px  whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{user.nickname}</span>
          <span className="block text-sm text-gray-500 dark:text-neutral-500">GM</span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {user.city}
          </span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-500 dark:text-neutral-500">
            {user.about}
          </span>
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
  )
}

export default User;