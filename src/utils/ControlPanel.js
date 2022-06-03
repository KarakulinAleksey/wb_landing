export default class ControlPanel {
  constructor(
    controlPanelButtonLamp,
    contentBlockSpecificationsLamp,
    viewBlock,
    contentBlock
  ) {
    (this._controlPanelButtonLamp = controlPanelButtonLamp),
      (this._contentBlockSpecificationsLamp = contentBlockSpecificationsLamp),
      (this._viewBlock = viewBlock),
      (this._contentBlock = contentBlock);
  }

  addSpecificationsLamp(data) {
    this._contentBlockSpecificationsLamp[0].innerHTML = this._upperCase(
      data.material
    );
    this._contentBlockSpecificationsLamp[1].innerHTML =
      "H" + data.height + " x " + "W" + data.width + " x " + "D15";
    this._contentBlockSpecificationsLamp[2].innerHTML = data.weight + " kg";
    this._contentBlockSpecificationsLamp[3].innerHTML = this._joinText(
      data.electrification
    );
  }

  _upperCase(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  }

  _joinText(text) {
    return text.split(",").join(" |");
  }

  addBackgroundControlPanelButtonLamp(controlPanelButtonLampItem) {
    controlPanelButtonLampItem.classList.add(
      "content-block__control-panel_item-focus"
    );
  }

  resetBackgroundControlPanelButtonLamp() {
    this._controlPanelButtonLamp.forEach((item) => {
      item.classList.remove("content-block__control-panel_item-focus");
    });
  }

  _createElement(
    preloader,
    element,
    addStyleClass,
    styleClass,
    data,
    parentElement
  ) {

    if (parentElement.querySelector(preloader)) {
      this._imageElement = document.createElement(element);
      this._imageElement.src = data.image;
      this._imageElement.classList.add(addStyleClass);
      parentElement.querySelector(preloader).replaceWith(this._imageElement);
    } else {
      this._imageElement = document.createElement(element);
      this._imageElement.src = data.image;
      this._imageElement.classList.add(addStyleClass);
      parentElement.querySelector(styleClass).replaceWith(this._imageElement);
    }
  }

  addImageViewBlock(data) {
    this._createElement(
      ".preloader",
      "img",
      "view-block__lamp",
      ".view-block__lamp",
      data,
      this._viewBlock
    );
  }

  addImageContentBlock(data) {
    this._createElement(
      ".preloader",
      "img",
      "content-block__image",
      ".content-block__image",
      data,
      this._contentBlock
    );
  }

  addElement(data, controlPanelButtonLamp) {
    this._imageListItem = document.createElement("img");
    this._imageListItem.src = data.image;
    this._imageListItem.classList.add(
      "content-block__control-panel_image-light"
    );
    controlPanelButtonLamp.addEventListener("click", (evt) => {
      this.addSpecificationsLamp(data);
      this.addImageViewBlock(data);
      this.addImageContentBlock(data);
      this.resetBackgroundControlPanelButtonLamp();
      this.addBackgroundControlPanelButtonLamp(controlPanelButtonLamp);
    });
    controlPanelButtonLamp
      .querySelector(".preloader")
      .replaceWith(this._imageListItem);
  }

  removePreloader(preloaderElement) {
    preloaderElement.forEach((item) => {
      item.remove();
    });
  }
}
