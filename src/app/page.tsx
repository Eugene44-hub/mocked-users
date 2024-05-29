import AllUsers from "@/components/users";
import GeneralLayout from "@/templates/general-layout";
import React from "react";

const Users = () => {
  return (
    <main className="py-10">
      <GeneralLayout>
        <AllUsers />
      </GeneralLayout>
    </main>
  );
};

export default Users;
