import { arrTasks } from './data.js';
import { populateTaskList } from './styling.js';
import { addIconEvent, addInputDescEvent } from './task-edit.js';
import checkChanged from './toggle.js';

const renderUI = () => {
  populateTaskList();
  if (arrTasks.length === 0) {
    for (let i = 0; i < arrTasks.length; i += 1) {
      addIconEvent(arrTasks[i].index);
      addInputDescEvent(arrTasks[i].index);
      checkChanged(arrTasks[i].index);
    }
  }
};

export default renderUI;
