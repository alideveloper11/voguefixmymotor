"use client";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FAQ({ faq_data }) {

  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-wrap w-full bg-gray-100 text-black" style={{colorScheme:"light"}}>

      <div className="w-4/24 text-center"></div>

      <div className="w-16/24 text-center">

        <div className="py-16">

          <h2 className="text-center text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">

            {faq_data.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="border-none rounded shadow">

                  <div
                    onClick={() => handleToggle(item.id)}
                    className={`mt-3 flex justify-between items-center p-5 cursor-pointer ${
                      isOpen ? "bg-[#088D50] text-white" : "bg-white text-black"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <AddIcon />
                      <p>{item.question}</p>
                    </div>

                    <KeyboardArrowDownIcon
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <Collapse in={isOpen} timeout="auto">
                    <div className="p-5 py-8 text-left text-gray-600">
                      {item.answer}

                     
                    </div>
                  </Collapse>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}