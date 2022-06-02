import "./index.css";
import {
  controlPanelButtonLamp,
  viewBlockLamp,
  viewBlock,
  bottonLight,
  bottonNight,
  contentBlockSpecificationsLamp,
  baseUrl,
  headersContentType,
  contentBlockImage,
  contentBlock
} from "../utils/var.js";
import Api from "../components/api.js";
import ControlPanel from "../utils/ControlPanel.js";

const controlPanel = new ControlPanel(
  controlPanelButtonLamp,
  contentBlockSpecificationsLamp,
  viewBlock,
  contentBlock
);

const preloaderTemplate = document.querySelector("#preloader").content;
const preloaderCopy = [];

controlPanelButtonLamp.forEach((item, i) => {
  preloaderCopy[i] = preloaderTemplate
    .querySelector(".preloader")
    .cloneNode(true);
  item.append(preloaderCopy[i]);
});

const preloaderViewBlock = preloaderTemplate
  .querySelector(".preloader")
  .cloneNode(true);
preloaderViewBlock.classList.add("preloader__viewBlock-position");
viewBlockLamp.replaceWith(preloaderViewBlock);

const preloaderContentBlock = preloaderTemplate
  .querySelector(".preloader")
  .cloneNode(true);
preloaderContentBlock.classList.add("preloader__contentBlock-position");
contentBlockImage.replaceWith(preloaderContentBlock);

bottonNight.addEventListener("click", () => {
  viewBlock.classList.add("view-block__background-night");
});

bottonLight.addEventListener("click", () => {
  viewBlock.classList.remove("view-block__background-night");
});

const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": headersContentType,
  },
});

const allLamp = api.getAllLamp();

allLamp
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      controlPanel.addElement(data[i], controlPanelButtonLamp[i]);
    }
    controlPanel.addSpecificationsLamp(data[0]);
    controlPanel.addImageViewBlock(data[0]);
    controlPanel.addImageContentBlock(data[0]);
    controlPanel.addBackgroundControlPanelButtonLamp(controlPanelButtonLamp[0]);
  })
  .catch((err) => {
    console.log("Error " + err);
  });
