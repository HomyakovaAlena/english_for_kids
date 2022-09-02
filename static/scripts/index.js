import "../sass/styles.scss";
import "./components/navigation.component";
import "./components/audio.component";

const images = require.context("../assets/images/", true);
const imagePath = (name) => images(name, true);

const audio = require.context("../assets/audio/", true);
const audioPath = (name) => audio(name, true);


import { App } from "./app/app";
import { Component } from "./components/component.component";
import { Navigation } from "./components/navigation.component";
import { SortableTable } from "./components/sortableTable.component";
