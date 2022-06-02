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

  addImageViewBlock(data) {
    if (this._viewBlock.querySelector(".preloader")) {
      this._imageViewBlock = document.createElement("img");
      this._imageViewBlock.src = data.image;
      this._imageViewBlock.classList.add("view-block__lamp");
      this._viewBlock
        .querySelector(".preloader")
        .replaceWith(this._imageViewBlock);
    } else {
      this._imageViewBlock = document.createElement("img");
      this._imageViewBlock.src = data.image;
      this._imageViewBlock.classList.add("view-block__lamp");
      this._viewBlock
        .querySelector(".view-block__lamp")
        .replaceWith(this._imageViewBlock);
    }
  }

  addImageContentBlock(data) {
    if (this._contentBlock.querySelector(".preloader")) {
      this._imageContentBlock = document.createElement("img");
      this._imageContentBlock.src = data.image;
      this._imageContentBlock.classList.add("content-block__image");
      this._contentBlock
        .querySelector(".preloader")
        .replaceWith(this._imageContentBlock);
    } else {
      this._imageContentBlock = document.createElement("img");
      this._imageContentBlock.src = data.image;
      this._imageContentBlock.classList.add("content-block__image");
      this._contentBlock
        .querySelector(".content-block__image")
        .replaceWith(this._imageContentBlock);
    }
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
