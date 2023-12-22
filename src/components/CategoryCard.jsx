import * as React from "react";
import { motion } from "framer-motion";

export default function CategoryCard({ details }) {
  return (
    <>
      <motion.div
        style={{ width: "90%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <section className="group hover:bg-purple-100 duration-200  hover:scale-110 border rounded-2xl flex justify-between">
          <div className="p-4">
            <h1 className="group-hover:scale-110 duration-200 font-bold ">
              {details.name}
            </h1>
            <div className="text-gray-600">Looking for {details.name}?</div>
          </div>
          <img
            className=" mix-blend-multiply w-[10rem] h-[10rem] object-cover"
            src={details.images}
            alt={details.name}
          />
        </section>
      </motion.div>
    </>
  );
}
