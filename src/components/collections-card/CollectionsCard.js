import React from "react";
import { HiOutlinePhoto } from "react-icons/hi2";

const CollectionsCard = () => {
  return (
    <div className="collections">
      <span className="collections__title">Popular Collections</span>

      <div className="collections__header">
        <button className="collections__header--tag">Profile</button>

        <button className="collections__header--tag">New York</button>

        <button className="collections__header--tag">Relaxing</button>

        <button className="collections__header--tag">Person</button>

        <button className="collections__header--tag">Fashion</button>
      </div>

      <div className="collections__cards">
        <div className="collections__cards--content">
          <img
            className="collections__cards--photo"
            src="https://placeimg.com/640/480/people"
            alt="card main"
          />

          <div className="collections__cards--thumbnails">
            <img
              className="collections__cards--icon"
              src="https://placeimg.com/800/600/people"
              alt="card thumbnail"
            />

            <img
              className="collections__cards--icon"
              src="https://placeimg.com/1024/768/people"
              alt="card thumbnail"
            />

            <img
              className="collections__cards--icon"
              src="https://placeimg.com/1200/900/people"
              alt="card thumbnail"
            />
          </div>

          <div className="collections__cards--additional">
            <span className="collections__cards--category">People</span>

            <div className="collections__cards--views">
              <HiOutlinePhoto size={32} />

              <span className="collections__cards--number">144</span>
            </div>
          </div>
        </div>

        <div className="collections__cards--content">
          <img
            className="collections__cards--photo"
            src="https://placeimg.com/640/480/nature"
            alt="card main"
          />

          <div className="collections__cards--thumbnails">
            <img
              className="collections__cards--icon"
              src="https://placeimg.com/800/600/nature"
              alt="card thumbnail"
            />

            <img
              className="collections__cards--icon"
              src="https://placeimg.com/1024/768/nature"
              alt="card thumbnail"
            />

            <img
              className="collections__cards--icon"
              src="https://placeimg.com/1200/900/nature"
              alt="card thumbnail"
            />
          </div>

          <div className="collections__cards--additional">
            <span className="collections__cards--category">Nature</span>

            <div className="collections__cards--views">
              <HiOutlinePhoto size={32} />

              <span className="collections__cards--number">7k</span>
            </div>
          </div>
        </div>

        <div className="collections__cards--content">
          <img
            className="collections__cards--photo"
            src="https://placeimg.com/640/480/arch"
            alt="card main"
          />

          <div className="collections__cards--thumbnails">
            <img
              className="collections__cards--icon"
              src="https://placeimg.com/800/600/arch"
              alt="card thumbnail"
            />

            <img
              className="collections__cards--icon"
              src="https://placeimg.com/1024/768/arch"
              alt="card thumbnail"
            />

            <img
              className="collections__cards--icon"
              src="https://placeimg.com/1200/900/arch"
              alt="card thumbnail"
            />
          </div>

          <div className="collections__cards--additional">
            <span className="collections__cards--category">History</span>

            <div className="collections__cards--views">
              <HiOutlinePhoto size={32} />

              <span className="collections__cards--number">431</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCard;
