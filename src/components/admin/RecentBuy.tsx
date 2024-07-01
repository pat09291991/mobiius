"use client";

import { RecentBuyData } from "@/lib/types";
import AdminWrapper from "./AdminWrapper";
import { useState } from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";

export default function RecentBuy() {
  const [data, setData] = useState<RecentBuyData[]>(initialData);

  return (
    <AdminWrapper>
      <div className="flex flex-col gap-y-6">
        <div className="flex justify-between">
          <SectionTitle>Recent Buy</SectionTitle>
          <Button className="bg-transparent hover:bg-transparent">
            See All
          </Button>
        </div>
        <div>
          <table className="w-full">
            <thead>
              <tr className="font-normal text-xl">
                <th
                  colSpan={3}
                  className="text-start text-sm md:text-normal py-5"
                >
                  Name
                </th>
                <th className="py-5 text-sm md:text-normal">Share Type</th>
                <th className="py-5 text-sm md:text-normal">Share Amount</th>
                <th className="py-5 text-sm md:text-normal">Potential Win</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id} className="font-normal">
                  <td colSpan={3} className="text-start">
                    {d.name}
                  </td>
                  <td className="text-center py-3">{d.share_type}</td>
                  <td className="text-center py-3">{d.share_amount}</td>
                  <td className="text-center py-3">{d.potential_win}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminWrapper>
  );
}

const initialData: RecentBuyData[] = [
  {
    id: 1,
    name: "John Snow",
    share_type: "Yes",
    share_amount: 1000,
    potential_win: 10000,
  },
  {
    id: 2,
    name: "John Snow",
    share_type: "Yes",
    share_amount: 1000,
    potential_win: 10000,
  },
  {
    id: 3,
    name: "John Snow",
    share_type: "Yes",
    share_amount: 1000,
    potential_win: 10000,
  },
  {
    id: 4,
    name: "John Snow",
    share_type: "Yes",
    share_amount: 1000,
    potential_win: 10000,
  },
  {
    id: 5,
    name: "John Snow",
    share_type: "Yes",
    share_amount: 1000,
    potential_win: 10000,
  },
];
