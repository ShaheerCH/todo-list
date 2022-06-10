const resetTasks = () => {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.innerHTML = '';
};

const resetIcon = () => {
  const icons = Array.from(document.getElementsByClassName('item-btns'));

  icons.forEach((icon) => {
    icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');
    const chBox = document.getElementById(icon.id.replace(/\D/gi, '')).checked;
    if (chBox) {
      icon.classList.add('bi-trash3');
    } else {
      icon.classList.add('bi-three-dots-vertical');
    }
  });
};

export { resetTasks, resetIcon };
