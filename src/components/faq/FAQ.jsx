"use client";
import { motion } from "framer-motion";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FAQ({faq_data}) {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  
  };

  return (
      
                      <motion.div initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
   className="flex flex-wrap w-full leading-7 tracking-[0.04em] bg-gray-100 text-black" style={{colorScheme:"light"}}>
                          
                   <div className=" md:w-4/24 text-center"></div>  
                    <div className=" w-full md:w-16/24 text-center">
    <div className=" py-10 mx-7">
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faq_data.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id}  className={`border-none rounded shadow 
                  `} >

              {/* Header */}
              <div
                onClick={() => handleToggle(item.id)}
                
                className={` mt-3 flex  shadow-[0_0_10px_#696969] justify-between items-center p-5 ${isOpen 
  ? " bg-[#088D50] text-white" 
  : "bg-white text-black"}  cursor-pointer `}
  style={{
  backgroundColor: isOpen ? "#088D50" : "#ffffff",
  color: isOpen ? "#ffffff" : "#000000",
  borderRadius: isOpen ? "10px 10px 0px 0px" : "10px",
  
  
}}
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

              {/* Answer (Simple conditional render) */}
              <Collapse in={isOpen} timeout="auto">
  <div className="p-5 shadow-[0_0_10px_#696969] rounded-b-lg  text-left text-gray-600">
    {item.answer}


  </div>
</Collapse>
 
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </motion.div>
  );
}