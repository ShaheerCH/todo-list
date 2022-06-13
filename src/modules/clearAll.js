import { clearCompleted } from './data.js';
import { populateTaskList } from './styling.js';

const delCompleted = () => {
  clearCompleted();
  populateTaskList();
};

export default delCompleted;
