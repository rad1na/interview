import React, { useState, useEffect } from "react";
import { Dropdown } from "./Dropdown";
import { speakersService } from "../services/speakers";

export const SpeakersDropdown = ({
  selectedSpeaker,
  setSelectedSpeaker,
  setSelectedCategory,
  setSelectedSubCategory,
  setLectures,
}) => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetchAllSpeakers();
  }, []);

  const fetchAllSpeakers = async () => {
    try {
      const res = await speakersService.getAllSpeakers();
      if (res) {
        let mainSpeakers = [];
        let otherSpeakers = [];
        res.data.forEach((item) => {
          if (item.isMainSpeaker) mainSpeakers.push({ content: item.speaker, id: item.id });
          else otherSpeakers.push({ content: item.speaker, id: item.id });
        });
        setSpeakers([...mainSpeakers, { content: "", id: "" }, ...otherSpeakers]);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const dropdownItems = (items) => {
    if (items)
      return items.map((item) => {
        const { content, id } = item;
        return (
          <li
            key={id}
            onClick={() => {
              setSelectedSpeaker(item);
              setSelectedCategory(null);
              setSelectedSubCategory(null);
              setLectures([]);
            }}
          >
            <div className="dropdown-item" pathname="" style={{ minHeight: "32px", cursor: "pointer" }}>
              {content}
            </div>
          </li>
        );
      });
  };

  return (
    <Dropdown
      placeholder={selectedSpeaker ? selectedSpeaker.content : "All speakers"}
      items={dropdownItems(speakers)}
      status={true}
    />
  );
};
