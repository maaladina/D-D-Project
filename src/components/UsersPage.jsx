import React from "react";
import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";

const users = [
  {
    about: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    city: "Batumi",
    email: "asdf@asdf.com",
    id: 2,
    image: "",
    name: "Oleg",
    nickname: "UserName"
  },
  {
    about: "asdfklqwer asdf qwer s pxzcv puyqwer 1",
    city: "city",
    email: "testemail@asdf.ciom",
    id: 3,
    image: "",
    name: "testname",
    nickname: "testnickname"
  }
];

export const Context = React.createContext()

const UsersPage = () => {
  return (
    <Context.Provider value={users}>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                <Header />
                <Table />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export default UsersPage;