"use client";

import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import AdminWrapper from "./AdminWrapper";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function UserCount() {
  return (
    <AdminWrapper>
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between w-full">
          <SectionTitle>User Count</SectionTitle>
          <Button className="bg-transparent hover:bg-transparent">
            See All
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            id="test"
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorManila" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#red" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPampanga" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCebu" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="purple" stopOpacity={0.8} />
                <stop offset="95%" stopColor="purple" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Manila"
              stroke="red"
              fillOpacity={1}
              fill="url(#colorManila)"
            />
            <Area
              type="monotone"
              dataKey="Pampanga"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPampanga)"
            />
            <Area
              type="monotone"
              dataKey="Cebu"
              stroke="purple"
              fillOpacity={1}
              fill="url(#colorCebu)"
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </AdminWrapper>
  );
}

const data = [
  {
    name: "May 1",
    Manila: 400,
    Pampanga: 350,
    Cebu: 50,
  },
  {
    name: "May 2",
    Manila: 550,
    Pampanga: 300,
    Cebu: 100,
  },
  {
    name: "May 3",
    Manila: 670,
    Pampanga: 370,
    Cebu: 180,
  },
  {
    name: "May 4",
    Manila: 707,
    Pampanga: 400,
    Cebu: 250,
  },
];
