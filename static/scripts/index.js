import "../sass/styles.scss";
// import "../data/cards.data";
import "./components/navigation.component";
import "./components/audio.component";
import "./components/categoryCard.component";

const images = require.context("../assets/images/", true);
const imagePath = (name) => images(name, true);

const audio = require.context("../assets/audio/", true);
const audioPath = (name) => audio(name, true);

console.log("yohoho");
// const fonts = require.context("../assets/fonts/", true);
// const fontsPath = (name) => fonts(name, true);

// const icons = require.context("../assets/icons/", true);
// const iconsPath = (name) => icons(name, true);

import { App } from "./app/app";
import { Component } from "./components/component.component";
import { Navigation } from "./components/navigation.component";
import { SortableTable } from "./components/sortableTable.component";
