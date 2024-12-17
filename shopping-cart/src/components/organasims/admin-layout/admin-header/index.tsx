import { Button } from "@/components/atoms/button";
import React from "react";

const MOCK_DATA = {
  username: "dongt",
  avatar: "https://placehold.co/400",
  email: "dongt@gmail.com",
};

export const AdminHeader: React.FC = () => {
  return (
    <ul className="flex justify-end items-center border-b border-gray-300 h-[61px]">
      <li className="border-r border-gray-300 px-2">
        <div className="flex items-center gap-2">
          <img className="rounded-full w-[54px] h-[54px]" src={MOCK_DATA.avatar} alt={MOCK_DATA.username} />
          <span>{MOCK_DATA.username}</span>
        </div>
      </li>

      <li>
        <Button variant="white">Logout</Button>
      </li>
    </ul>
  );
};
