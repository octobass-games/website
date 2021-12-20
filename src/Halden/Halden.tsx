import React, { useState } from "react";

import "./Halden.css";
import HaldenDescription from "./HaldenDescription";
import HaldenGames from "./HaldenGames";
import HaldenMusic from "./HaldenMusic";
import HaldenVideos from "./HaldenVideos";

export type SelectedThing = "game" | "video" | "music" | undefined;

const Halden = () => {
  const [currentlySelectedThing, setSelectedThing] =
    useState<SelectedThing>(undefined);
  return (
    <div className="Halden font">
      <div className="halden__wrapper">
        <div className="halden__image-wrapper">
          <img
            className="halden__image"
            src="https://i.imgur.com/hmOoxWl.gif"
            alt=""
          />
        </div>
        <div className="halden__right-wrapper">
          <div className="halden__items">
            <div className="halden__items-inner">
              {currentlySelectedThing === "game" && <HaldenGames />}
              {currentlySelectedThing === "video" && <HaldenVideos />}
              {currentlySelectedThing === "music" && <HaldenMusic />}
              {currentlySelectedThing === undefined && (
                <div className="halden__mobile-head-wrapper">
                  <img
                    className="halden__mobile-head"
                    src="https://i.imgur.com/viy1QC7.png"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          <HaldenDescription
            currentlySelectedThing={currentlySelectedThing}
            setSelectedThing={setSelectedThing}
          />
        </div>
      </div>
    </div>
  );
};

export default Halden;
