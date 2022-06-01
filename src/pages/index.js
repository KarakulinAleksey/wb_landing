import './index.css';
import {
  controlPanelButtonLamp,
  viewBlockLamp,
  viewBlock,
  bottonLight,
  bottonNight,
  contentBlockSpecificationsLamp,
  baseUrl,
  headersContentType
} from '../utils/var.js';
import Api from '../components/api.js';
import ControlPanel from '../utils/ControlPanel.js';

const controlPanel = new ControlPanel(viewBlockLamp, controlPanelButtonLamp, contentBlockSpecificationsLamp);

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

allLamp
  .then((data)=>{
    for (let i=0;i<3;i++){
      controlPanel.addElement(data[i], controlPanelButtonLamp[i]);
    }
    controlPanel.addSpecificationsLamp(data[0]);
    controlPanel.addImageViewBlock(data[0]);
    controlPanel.addBackgroundControlPanelButtonLamp(controlPanelButtonLamp[0]);
  })
  .catch((err) => {
    console.log('Error ' + err);
  })
