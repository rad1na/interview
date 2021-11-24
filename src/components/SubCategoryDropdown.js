import React, { useState, useEffect } from "react";
import { Dropdown } from "./Dropdown";
import { categoriesService } from "../services/categories";

export const SubCategoryDropdown = ({
  selectedSpeaker,
  selectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  const [subCategories, setSubCategories] = useState(null);
  useEffect(() => {
    if (selectedSpeaker && selectedCategory) fetchSubCategories(selectedSpeaker.id, selectedCategory.id);
  }, [selectedSpeaker, selectedCategory]);
  const fetchSubCategories = async (id1, id2) => {
    try {
      const res = await categoriesService.getAllSubCategories(id1, id2);
      console.log(res);
      setSubCategories(
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
          <li key={id} onClick={() => setSelectedSubCategory(item)}>
            <div className="dropdown-item" pathname="" style={{ minHeight: "32px", cursor: "pointer" }}>
              {`${name} (${count})`}
            </div>
          </li>
        );
      });
  };
  return (
    <Dropdown
      items={dropdownItems(subCategories)}
      status={selectedSpeaker && selectedCategory ? true : false}
      placeholder={selectedSubCategory ? selectedSubCategory.name : "All SubCategories"}
    />
  );
};
