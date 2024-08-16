import React, { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";
import axios from "axios";


export const Context = React.createContext()


const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:4000/users');
      const data = response.data.data;
      setUsers(data);
    }
    getUsers();
  }, []);
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