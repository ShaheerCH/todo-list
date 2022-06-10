import './style.css';
import newTaskListener from './modules/add-task.js';
import renderUI from './modules/render.js';
import delCompleted from './modules/clearAll.js';

renderUI();
newTaskListener();

document.getElementById('btn-clear').addEventListener('click', delCompleted);
