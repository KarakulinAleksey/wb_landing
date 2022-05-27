import './index.css';
import {controlPanelButtonLamp} from '../utils/var.js';




controlPanelButtonLamp.forEach((item)=>{
  console.log(item);
  item.addEventListener('click', function(evt){
    console.log(evt.target);
  })
})
// console.log(controlPanelButtonLamp);



