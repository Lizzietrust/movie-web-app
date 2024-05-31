"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Categories = () => {
  const [categoryName, setCategoryName] = useState("all");
  const router = useRouter();

  const categories = ["all", "action", "comedy", "romance", "adventure"];

  console.log("CAT:", categoryName);

  const handleClick = (category) => {
    setCategoryName(category);
    if (category !== "all") {
      router.push(`/search/${category}`);
    }
  };

  return (
    <div className="pb-10 text-white">
      <h2 className="font-semibold text-2xl mb-5">Categories</h2>
      <div className="grid grid-cols-3 sm:flex items-center gap-5">
        {categories.map((category, i) => (
          <div
            key={i}
            className={`cursor-pointer ${
              categoryName === category ? "bg-rose-500" : "bg-gray-500"
            } w-28 flex items-center justify-center rounded-full font-medium h-10 capitalize shadow-lg`}
            // onClick={() => setCategoryName(category)}
            onClick={() => handleClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
