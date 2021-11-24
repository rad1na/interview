import React from "react";
import { mainApi } from "../services/api";

export const SearchButton = ({ selectedSpeaker, selectedCategory, setLectures, setLoading }) => {
  const fetchLectures = async (id1, id2) => {
    try {
      setLoading(true);
      const res = await mainApi.get(`/Shiurim/all?PageIndex=1&PageSize=20&CategoryID=+${id1}+&SpeakerID=+${id2}`);
      setLectures(
        res.data.shiurList.sort((a, b) => {
          if (a.speaker < b.speaker) {
            return -1;
          }
          if (a.speaker > b.speaker) {
            return 1;
          }
          return 0;
        })
      );
      console.log(res.data.shiurList);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={`btn btn-primary ${selectedCategory ? null : "disabled"}`}
      onClick={() => fetchLectures(selectedCategory.id, selectedSpeaker.id)}
    >
      Search
    </button>
  );
};
