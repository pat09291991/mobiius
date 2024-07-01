"use client";

import { ChangeEvent, useState } from "react";
import AdminWrapper from "./AdminWrapper";
import LabelIcon from "./LabelIcon";
import SectionTitle from "../ui/section-title";
import { Icon } from "../ui/Icon";
import { FutrUsersType } from "@/lib/types";

export default function FutrUsers() {
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("asc");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<FutrUsersType[]>(initialData);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    const filteredData = initialData.filter((item) =>
      item.name.toLowerCase().includes(term),
    );
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
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between w-full">
          <SectionTitle>Futr.Users</SectionTitle>
        </div>
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
              label={"id"}
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
            <LabelIcon
              label={"date"}
              orderBy={orderBy}
              sortBy={sortBy}
              updateSortBy={handleSortingData}
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[#938C8C] font-bold text-xl">
              <th className="text-start py-2 lg:py-10 text-xs lg:text-base">
                ID
              </th>
              <th className="py-2 lg:py-10 text-xs lg:text-base">Contracts</th>
              <th className="py-2 lg:py-10 text-xs lg:text-base">Status</th>
              <th className="py-2 lg:py-10 text-xs lg:text-base">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id} className="font-bold">
                <td className="text-start text-xs lg:text-base flex gap-x-4 py-6">
                  {d.id}
                </td>
                <td className="text-center text-xs lg:text-base py-6">
                  {d.name}
                </td>
                <td className="text-center text-xs lg:text-base py-6 text-green-400">
                  {d.status}
                </td>
                <td className="text-center text-xs lg:text-base py-6">
                  {d.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminWrapper>
  );
}

const sortData = (
  data: FutrUsersType[],
  key: string,
  order: "asc" | "desc" = "asc",
): FutrUsersType[] => {
  return [...data].sort((a, b) => {
    if (key === "status" || key === "date") {
      if (a[key] < b[key]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    }
    if (key === "id") {
      return order === "asc" ? a[key] - b[key] : b[key] - a[key];
    }
    return 0;
  });
};

const initialData = [
  {
    id: 1,
    name: "Olivia Stone",
    status: "Premium",
    date: "May 10, 2023",
  },
  {
    id: 2,
    name: "John Snow",
    status: "Recent Sign Up",
    date: "May 10, 2024",
  },
  {
    id: 3,
    name: "John Snow",
    status: "Recent Sign Up",
    date: "May 10, 2024",
  },
  {
    id: 4,
    name: "John Snow",
    status: "Recent Sign Up",
    date: "May 10, 2024",
  },
  {
    id: 5,
    name: "John Snow",
    status: "Recent Sign Up",
    date: "May 10, 2024",
  },
  {
    id: 6,
    name: "Olivia Stone",
    status: "Premium",
    date: "May 10, 2023",
  },
];
