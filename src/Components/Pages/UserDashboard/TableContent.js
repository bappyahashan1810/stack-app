import React, { useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
import { FaArrowDown } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

const TableContent = () => {
  const { error, isLoading, users } = useSelector((state) => state.userR);
  console.log(users);
  console.log();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="w-full mt-4 ">
      {isLoading && <h1>Loading...........</h1>}
      {error && <p>{error.message}</p>}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Users</h2>
        <div className="flex items-center">
          <button className="btn-sm flex items-center border mr-2">
            <FiUploadCloud className="text-xl" />
            <span className="font-semibold ml-1 text-[14px]">import</span>
          </button>
          <button className="btn-sm flex items-center bg-[#7F56D9] p-2 text-center rounded-md">
            <LuPlus />
            <span className="font-semibold ml-1 text-white text-[14px]">
              Add User
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-[33px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[#667085] font-[12px]">
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="rounded-md border border-blue-500"
                  />
                </label>
              </th>
              <th className="flex items-center ">
                User Info
                <FaArrowDown />
              </th>
              <th>About</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.avatar}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.first_name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Some dummy Content
                    <br />
                    <div className="text-sm opacity-50">
                      Brings all your news into one place
                    </div>
                  </td>
                  <td className="text-green-600 font-semibold">Customer</td>
                  <th>
                    <button className="btn btn-ghost btn-xs flex items-center text-xl">
                      <IoTrashOutline />
                      <FiEdit2 />
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default TableContent;
