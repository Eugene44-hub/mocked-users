"use client";
import useGetAllUsersQuery from "@/apis/users/get-all-users.api";
import React from "react";
import ComponentVisibility from "../visibility/component-visibility";
import Spinner from "../loaders/spinner";
import UserProfile from "./user-profile";

const AllUsers = () => {
  const { data: users, loading } = useGetAllUsersQuery();
  console.log(loading);
  return (
    <section>
      <ComponentVisibility appear={loading}>
        <div className="h-screen  flex justify-center items-center">
          <Spinner variant="secondary" />
        </div>
      </ComponentVisibility>
      <ComponentVisibility appear={!loading}>
        <p className="text-center text-2xl font-bold mb-5">Users</p>
        <div className="flex flex-wrap justify-center gap-5  text-sm">
          {users?.map((user) => (
            <UserProfile key={user.login.uuid} {...user} />
          ))}
        </div>
      </ComponentVisibility>
    </section>
  );
};

export default AllUsers;
