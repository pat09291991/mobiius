"use client";
import Image from "next/image";
import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  label: string;
  menu?: string[];
  isOpen: boolean;
  onToggle: (label: string) => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ label, menu, isOpen, onToggle }, ref) => {
    return (
      <div
        className="relative flex flex-col lg:flex-row justify-center items-center"
        ref={ref}
      >
        <div
          className="flex gap-1 items-center mb-4 xl:mb-0 sm:justify-center bg-dark"
          onClick={() => onToggle(label)}
        >
          <label style={labelStyle} className="cursor-pointer">
            {label}
          </label>
          {menu?.length && (
            <Image
              src="/svg/caret-down.svg"
              style={caretStyle}
              width={2}
              height={2}
              alt="caret"
            />
          )}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="h-48 lg:absolute z-10 lg:top-full lg:left-0 mt-1 w-48 border border-gray-200 rounded-md shadow-lg"
            >
              <ul className="text-base">
                {menu?.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 hover:bg-white cursor-pointer text-[#848895]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

export default Dropdown;

const labelStyle = {
  color: "#848895",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "174%",
};

const caretStyle = {
  width: "12px",
  height: "12px",
  flexShrink: 0,
};
