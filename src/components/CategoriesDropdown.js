import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { categoriesService } from "../services/categories";

export const CategoriesDropdown = ({
  selectedSpeaker,
  selectedCategory,
  setSelectedCategory,
  setSelectedSubCategory,
}) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    if (selectedSpeaker) fetchCategories(selectedSpeaker.id);
  }, [selectedSpeaker]);

  const fetchCategories = async (id) => {
    try {
      const res = await categoriesService.getAllCategories(id);
      console.log(res);
      setCategories(
        res.data.map((item) => {
          const { id, name, shiurCount } = item;
          return { id, name, count: shiurCount };
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  const dropdownItems = (items) => {
    if (items)
      return items.map((item) => {
        const { id, name, count } = item;
        return (
          <li
            key={id}
            onClick={() => {
              setSelectedCategory(item);
              setSelectedSubCategory(null);
            }}
          >
            <div className="dropdown-item" pathname="" style={{ minHeight: "32px", cursor: "pointer" }}>
              {`${name} (${count})`}
            </div>
          </li>
        );
      });
  };
  return (
    <Dropdown
      items={dropdownItems(categories)}
      status={selectedSpeaker ? true : false}
      placeholder={selectedSpeaker && selectedCategory ? selectedCategory.name : "All Categories"}
    />
  );
};
