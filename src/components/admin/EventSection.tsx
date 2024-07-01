"use client";

import { ChangeEvent, useEffect, useState } from "react";
import LabelIcon from "./LabelIcon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AdminWrapper from "./AdminWrapper";
import ContractCard from "./ContractCard";
import { Icon } from "../ui/Icon";
import { EventData } from "@/lib/types";
import SectionTitle from "../ui/section-title";

export default function EventSection() {
  const pathname = usePathname();
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("asc");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<EventData[]>([]);

  useEffect(() => {
    if (pathname.includes("dashboard")) {
      const dashboardData = initialData.slice(0, 3);
      setData(dashboardData);
    } else {
      setData(initialData);
    }
  }, [pathname]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);
    const filteredData = initialData
      .filter((item) => item.category.toLowerCase().includes(search))
      .slice(0, 3);
    setData(filteredData);
  };

  const handleSortingData = (value: string, order: "asc" | "desc") => {
    setSortBy(value);
    const sortedData = sortData(data, value, order);
    setData(sortedData);
    setOrderBy(order);
  };

  return (
    <AdminWrapper>
      <div className="flex flex-col gap-y-10 text-start">
        <SectionTitle>Most Popular Event Contract</SectionTitle>
        <div className="flex flex-col lg:flex-row items-center w-full justify-between gap-x-10">
          <div className="relative w-full mb-4 lg:mb-0">
            <Icon
              className="material-icons text-[#8E8E93] absolute top-4 left-2"
              icon="search"
              size={24}
            />
            <input
              type="text"
              value={search}
              placeholder="Search Contract"
              className="relative border-2 border-[#8E8E93] rounded-xl px-10 py-4 w-full text-base rounded-xl bg-transparent"
              onChange={handleChangeSearch}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-start lg:justify-end gap-x-20 w-full">
            <LabelIcon
              label={"category"}
              orderBy={orderBy}
              sortBy={sortBy}
              updateSortBy={handleSortingData}
            />
            <LabelIcon
              label={"price"}
              orderBy={orderBy}
              sortBy={sortBy}
              updateSortBy={handleSortingData}
            />
            <LabelIcon
              label={"status"}
              orderBy={orderBy}
              sortBy={sortBy}
              updateSortBy={handleSortingData}
            />
          </div>
        </div>
        <div className="hidden lg:flex">
          <table className="w-full">
            <thead>
              <tr className="text-[#938C8C] font-bold text-xl">
                <th className="text-start w-1/2 py-4 lg:py-10">Contracts</th>
                <th className="py-4 whitespace-nowrap lg:py-10">Market Cap</th>
                <th className="py-4 lg:py-10">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id} className="font-bold">
                  <td className="text-start w-2/3 flex gap-x-4 py-6 items-center">
                    <Image
                      src={d.image}
                      height={200}
                      width={200}
                      alt="image"
                      className="bg-white h-16 w-16 object-cover rounded-md"
                    />
                    {d.category}
                  </td>
                  <td className="text-center py-6">P{d.price}</td>
                  <td
                    className={`text-center py-6 ${
                      d.status === "ending_soon"
                        ? "text-[#DA5254]"
                        : "text-[#875FFE] capitalize"
                    }`}
                  >
                    {d.status === "ending_soon" ? "Ending Soon" : d.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:hidden">
          {data.map((d) => (
            <div key={d.id} className="rounded-lg text-start">
              <ContractCard
                image={d.image}
                category={d.category}
                price={d.price}
                status={d.status}
              />
            </div>
          ))}
        </div>
      </div>
    </AdminWrapper>
  );
}

const initialData = [
  {
    id: 1,
    image: "/scenario2.jpg",
    category: "Will Golden state will win the nba championship?",
    price: 500,
    status: "ongoing",
  },
  {
    id: 2,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 3,
    image: "/scenario2.jpg",
    category: "Will Golden state will win the nba championship?",
    price: 500,
    status: "new",
  },
  {
    id: 4,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 5,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 6,
    image: "/scenario2.jpg",
    category: "Will Golden state will win the nba championship?",
    price: 500,
    status: "new",
  },
  {
    id: 7,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 8,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 9,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 10,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 11,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
  {
    id: 12,
    image: "/scenario3.jpg",
    category: "Will alden and kathryn will be couple in a month?",
    price: 1000,
    status: "ending_soon",
  },
];

const sortData = (
  data: EventData[],
  key: string,
  order: "asc" | "desc" = "asc",
): EventData[] => {
  return [...data].sort((a, b) => {
    if (key === "category" || key === "status") {
      if (a[key] < b[key]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    }
    if (key === "price") {
      return order === "asc" ? a[key] - b[key] : b[key] - a[key];
    }
    return 0;
  });
};
