const linksItem = document.querySelectorAll('#wa-design-sidebar li');
const searchPlace = document.querySelector('#wa-design-sidebar .heading');
const nodeInput = document.createElement('input');

nodeInput.style.cssText = `display: block; width: 90%; margin: 10px auto 5px auto; padding: 5px; border: 1px solid #999;`;
nodeInput.setAttribute('placeholder', 'Введите название файла');

searchPlace.after(nodeInput);

const inputHandler = (e) => {
  const value = e.currentTarget.value.trim();
  linksItem.forEach((link) => {
    const title = link.querySelector('a').getAttribute('title');
    if (title && title.indexOf(value) === -1) {
      link.style.display = 'none'
    } else {
      link.style.display = 'block'
    }
  });
}

nodeInput.addEventListener('input', inputHandler);
