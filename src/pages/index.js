import './index.css';
import {
  controlPanelButtonLamp,
  viewBlockLamp,
  viewBlock,
  bottonLight,
  bottonNight,
  contentBlockTextMaterial,
  baseUrl,
  headersContentType
} from '../utils/var.js';
import Api from '../components/api.js';

bottonNight.addEventListener('click',()=>{
  viewBlock.classList.add('view-block__background-night');
})

bottonLight.addEventListener('click',()=>{
  viewBlock.classList.remove('view-block__background-night')
})

const api = new Api({
  baseUrl: baseUrl,
  headers: {
   'Content-Type': headersContentType,
  },
});

const allLamp = api.getAllLamp();

console.log(contentBlockTextMaterial);

allLamp
  .then((data)=>{
    for (let i=0;i<3;i++){
      addElement(data[i], controlPanelButtonLamp[i]);
    }
    console.log(data);
    viewBlockLamp.src = data[0].image;
    controlPanelButtonLamp[0].classList.add('content-block__control-panel_item-focus');
  })
  .catch((err) => {
    console.log('Error ' + err);
  })

function addElement(data, panelItem){
    const imageListItem = document.createElement('img');
    imageListItem.src = data.image;
    imageListItem.classList.add('content-block__control-panel_image-light');
    panelItem.addEventListener('click', function(evt){
      viewBlockLamp.src = data.image;
      resetBackgroundControlPanelButtonLamp ();
      panelItem.classList.add('content-block__control-panel_item-focus');
      contentBlockTextMaterial[0].innerHTML=upperCase(data.material);
      contentBlockTextMaterial[1].innerHTML='H' + data.height + ' x ' + 'W' + data.width + ' x ' + 'D15';
      contentBlockTextMaterial[2].innerHTML=data.weight + ' kg';
      contentBlockTextMaterial[3].innerHTML=joinText(data.electrification);
    })
    panelItem.prepend(imageListItem);
}

function resetBackgroundControlPanelButtonLamp (){
  controlPanelButtonLamp.forEach((item)=>{
    item.classList.remove('content-block__control-panel_item-focus');
  })
}

function upperCase(text){
  return ((text.slice(0,1).toUpperCase()) + text.slice(1));
}

function joinText(text){
  return((text.split(',').join(' |')));
}

