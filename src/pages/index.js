import './index.css';
import {
  controlPanelButtonLamp,
  baseUrl,
  headersContentType
} from '../utils/var.js';
import Api from '../components/api.js'



controlPanelButtonLamp.forEach((item)=>{
  console.log(item);
  item.addEventListener('click', function(evt){
    console.log(evt.target);
  })
})
// console.log(controlPanelButtonLamp);

const api = new Api({
  baseUrl: baseUrl,
  headers: {
   'Content-Type': headersContentType,
  },
});

const allLamp = api.getAllLamp();
console.log(allLamp);

allLamp
  .then((data)=>{
    console.log(data);
  })
