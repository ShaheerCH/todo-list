import { arrTasks, saveLocal } from './data.js';
import { resetIcon } from './reset.js';

const checkToggle = (event) => {
  const checkID = event.target.id;
  const checkValue = document.getElementById(checkID).checked;
  arrTasks[checkID - 1].completed = checkValue;
  saveLocal();
  const icon = document.getElementById(`icon-${checkID}`);
  const textDesc = document.getElementById(`desc-${checkID}`);
  textDesc.classList.toggle('completed');
  resetIcon();
  icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');
  if (checkValue) {
    icon.classList.add('bi-trash3');
  } else {
    icon.classList.add('bi-three-dots-vertical');
  }
};

const checkChanged = (eID) => {
  const chk = document.getElementById(`${eID}`);
  chk.addEventListener('change', checkToggle);
};

export default checkChanged;
