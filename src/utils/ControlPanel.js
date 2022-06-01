export default class ControlPanel {
  constructor(
    viewBlockLamp,
    controlPanelButtonLamp,
    contentBlockSpecificationsLamp
  ) {
    (this._viewBlockLamp = viewBlockLamp),
    (this._controlPanelButtonLamp = controlPanelButtonLamp),
    (this._contentBlockSpecificationsLamp = contentBlockSpecificationsLamp);
  }

  addSpecificationsLamp (data){
    this._contentBlockSpecificationsLamp[0].innerHTML=this._upperCase(data.material);
    this._contentBlockSpecificationsLamp[1].innerHTML='H' + data.height + ' x ' + 'W' + data.width + ' x ' + 'D15';
    this._contentBlockSpecificationsLamp[2].innerHTML=data.weight + ' kg';
    this._contentBlockSpecificationsLamp[3].innerHTML=this._joinText(data.electrification);
  }

  _upperCase(text){
    return ((text.slice(0,1).toUpperCase()) + text.slice(1));
  }

  _joinText(text){
    return((text.split(',').join(' |')));
  }

  addBackgroundControlPanelButtonLamp(controlPanelButtonLampItem){
    controlPanelButtonLampItem.classList.add('content-block__control-panel_item-focus');
  }

  resetBackgroundControlPanelButtonLamp (){
    this._controlPanelButtonLamp.forEach((item)=>{
      item.classList.remove('content-block__control-panel_item-focus');
    })
  }

  addImageViewBlock(data){
    this._viewBlockLamp.src = data.image;
  }

  addElement(data, controlPanelButtonLamp){
    this._imageListItem = document.createElement('img');
    this._imageListItem.src = data.image;
    this._imageListItem.classList.add('content-block__control-panel_image-light');
    controlPanelButtonLamp.addEventListener('click', (evt)=>{
      this.addSpecificationsLamp(data);
      this.addImageViewBlock(data);
      this.resetBackgroundControlPanelButtonLamp();
      this.addBackgroundControlPanelButtonLamp(controlPanelButtonLamp);
    })
    controlPanelButtonLamp.prepend(this._imageListItem);
  }
}
