import { Icon } from "./ui/Icon";
import { Fragment } from "react";

export default function Progress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const lastValue = total - 1;

  return (
    <div className="flex w-full justify-center items-center">
      {Array.from({ length: total }).map((_, i) => (
        <Fragment key={i + 1}>
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center ${
              i + 1 < current
                ? "border border-violet-700 bg-violet-700 text-black"
                : i + 1 == current
                ? "border border-violet-700 bg-white text-black"
                : "bg-[#222222]"
            }`}
          >
            {i + 1 < current ? (
              <Icon
                className="material-icons"
                icon="check"
                size={18}
                color="white"
              />
            ) : (
              <p>{i + 1}</p>
            )}
          </div>
          {i != lastValue && (
            <div
              className={`border-t w-8 ${
                i + 1 <= current ? " border-violet-700" : "border-gray-300"
              }`}
            ></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
