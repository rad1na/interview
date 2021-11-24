import React, { useState } from "react";
import { CategoriesDropdown } from "../components/CategoriesDropdown";
import { SearchButton } from "../components/SearchButton";
import { SpeakersDropdown } from "../components/SpeakersDropdown";
import { SubCategoryDropdown } from "../components/SubCategoryDropdown";
import { Table } from "../components/Table";

export const MainLayout = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <div className="row justify-content-center">
        <div className="col d-flex justify-content-center">
          <SpeakersDropdown
            selectedSpeaker={selectedSpeaker}
            setSelectedSpeaker={setSelectedSpeaker}
            setSelectedCategory={setSelectedCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            setLectures={setLectures}
          />
        </div>
        <div className="col d-flex justify-content-center">
          <CategoriesDropdown
            selectedSpeaker={selectedSpeaker}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        </div>
        <div className="col d-flex justify-content-center">
          <SubCategoryDropdown
            selectedSpeaker={selectedSpeaker}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        </div>
        <div className="col d-flex justify-content-center">
          <SearchButton
            selectedSpeaker={selectedSpeaker}
            selectedCategory={
              selectedSubCategory ? selectedSubCategory : selectedCategory
            }
            setLectures={setLectures}
            setLoading={setLoading}
          />
        </div>
      </div>
      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
      {lectures.length ? (
        <div className="row" style={{ marginTop: "2rem" }}>
          <Table lectures={lectures} />
        </div>
      ) : null}
    </div>
  );
};
