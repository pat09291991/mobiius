"use client";

import AdminWrapper from "./AdminWrapper";
import { useState } from "react";
import Image from "next/image";
import { RecentLogins } from "@/lib/types";
import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";

export default function RecentSignUps() {
  const [data, setData] = useState<RecentLogins[]>(initialData);

  return (
    <AdminWrapper>
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between">
          <SectionTitle>Recent Sign Ups</SectionTitle>
          <Button className="bg-transparent hover:bg-transparent">
            See All
          </Button>
        </div>
        <div className="h-96 overflow-y-scroll">
          <table className="w-full">
            <thead>
              <tr className="font-normal text-xl">
                <th className=""></th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id} className="font-normal">
                  <td className="text-start flex gap-x-2 items-center  py-2">
                    <Image
                      src={d.image}
                      height={200}
                      width={200}
                      alt="image"
                      className="bg-white h-16 w-16 object-cover rounded-full"
                    />
                    {d.name}
                  </td>
                  <td className="text-center py-3">{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminWrapper>
  );
}

const initialData = [
  {
    id: 1,
    image: "/johnsnow.jpg",
    name: "John Snow",
    time: "1 hour ago",
  },
  {
    id: 2,
    image: "/oliviastone.jpg",
    name: "Olivia Stone",
    time: "1 hour ago",
  },
  {
    id: 3,
    image: "/johnsnow.jpg",
    name: "John Snow",
    time: "1 hour ago",
  },
  {
    id: 4,
    image: "/oliviastone.jpg",
    name: "Olivia Stone",
    time: "1 hour ago",
  },
  {
    id: 5,
    image: "/oliviastone.jpg",
    name: "Olivia Stone",
    time: "1 hour ago",
  },
];
