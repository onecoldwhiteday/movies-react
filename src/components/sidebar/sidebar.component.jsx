import React from "react";
import { XLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { TabNamesEnum } from "../movies-page/movies-page.component";
import "./sidebar.styles.scss";

export const Sidebar = (props) => {
  return (
    <div
      className={"sidebar-container "}
      style={{ display: props.isHidden ? "none" : "flex" }}
    >
      <button className="close-btn" onClick={props.onClose}>
        <XLg className="text-white font-weight-bold close-btn-icon"></XLg>
      </button>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-menu-item ${
            props.activeTab === TabNamesEnum.popular ? "active" : ""
          }`}
        >
          <Link to="/" onClick={props.onClose} className="sidebar-link">
            <span className="sidebar-menu-item-text text-white">Popular</span>
          </Link>
        </li>
        <li
          className={`sidebar-menu-item ${
            props.activeTab === TabNamesEnum.topRated ? "active" : ""
          }`}
        >
          <Link
            to="/top-rated"
            onClick={props.onClose}
            className="sidebar-link"
          >
            <span className="sidebar-menu-item-text text-white">Top Rated</span>
          </Link>
        </li>
        <li
          className={`sidebar-menu-item ${
            props.activeTab === TabNamesEnum.upcoming ? "active" : ""
          }`}
        >
          <Link to="/upcoming" onClick={props.onClose} className="sidebar-link">
            <span className="sidebar-menu-item-text text-white">Upcoming</span>
          </Link>
        </li>
        <li
          className={`sidebar-menu-item ${
            props.activeTab === TabNamesEnum.nowPlaying ? "active" : ""
          }`}
        >
          <Link
            to="/now-playing"
            onClick={props.onClose}
            className="sidebar-link"
          >
            <span className="sidebar-menu-item-text text-white">
              Now playing
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
