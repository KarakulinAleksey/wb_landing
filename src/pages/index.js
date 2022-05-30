import './index.css';
import {
  controlPanelButtonLamp,
  baseUrl,
  headersContentType
} from '../utils/var.js';
import Api from '../components/api.js'
const controlPanel = document.querySelector('.content-block__control-panel');

controlPanelButtonLamp.forEach((item)=>{
  console.log('item', item);
  item.addEventListener('click', function(evt){
    console.log(evt.target);

  })
})

const api = new Api({
  baseUrl: baseUrl,
  headers: {
   'Content-Type': headersContentType,
  },
});

const getAllLamp = api.getAllLamp();

getAllLamp
  .then((data)=>{
    console.log('data', data);
    addElement(data);
  })
  .catch((err) => {
    console.log('Error ' + err);
  })

  addElement();

function addElement(data){
  const buttomElement = [];
  for (let i=0;i<3;i++){
    const listItem = document.createElement('li');
    listItem.classList.add('content-block__control-panel_item');
    const imageListItem = document.createElement('img');
    imageListItem.src = data.i.image;
    imageListItem.classList.add('content-block__control-panel_image-light');
    listItem.prepend(imageListItem);
    buttomElement[i]=listItem;
  }
  for (let i=0;i<3;i++){
    controlPanel.prepend(buttomElement[i]);
  }
}
