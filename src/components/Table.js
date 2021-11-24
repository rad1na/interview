import React from "react";

export const Table = ({ lectures }) => {
  const renderLectures = () => {
    return lectures.map((item, index) => {
      const { speaker, sponsor, title, audio, video } = item;
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{speaker}</td>
          <td>{sponsor}</td>
          <td>{title}</td>
          <td className="col d-flex justify-content-center">
            {audio ? (
              <a
                href={audio}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  fontSize: "2rem",
                  marginRight: "1rem",
                }}
              >
                <i className="bi bi-music-note-beamed"></i>
              </a>
            ) : (
              ""
            )}
            {video ? (
              <a
                href={video}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", fontSize: "2rem" }}
              >
                <i className="bi bi-camera-reels"></i>
              </a>
            ) : (
              ""
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Speaker Name</th>
          <th scope="col">Sponsor</th>
          <th scope="col">Lecture Title</th>
          <th scope="col">Audio / Video</th>
        </tr>
      </thead>
      <tbody>{renderLectures()}</tbody>
    </table>
  );
};
