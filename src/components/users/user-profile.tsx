import { IUser } from "@/apis/users/get-all-users.api";
import Image from "next/image";
import React from "react";

const UserProfile = (props: IUser) => {
  const { email, login, name, picture } = props;
  return (
    <figure
      key={login.uuid}
      className="max-w-[300px] w-full text-center border p-3 rounded-lg hover:shadow-lg transition-all"
    >
      <div className="rounded-full size-[100px] overflow-hidden mx-auto">
        <Image
          src={picture.medium ?? ""}
          className="bg-cover w-full h-full"
          width={1000}
          height={1000}
          alt={name.first ?? ""}
        />
      </div>
      <figcaption className="space-y-2 mt-5">
        <p>
          {name.title} {name.first} {name.last}
        </p>
        <p> {email}</p>
      </figcaption>
    </figure>
  );
};

export default UserProfile;
