const input = document.querySelector('.name');
const zoomRoom = document.querySelector('.link');
const zoomLinks = document.querySelector('.zoom-links');
const button = document.querySelector('.submit');

document.addEventListener('DOMContentLoaded', () => {
  const storedLinks = localStorage.getItem('links');
  if (storedLinks) {
    renderLinks(JSON.parse(storedLinks));
  }
  button.addEventListener('click', addZoomLink);
});

function addZoomLink() {
  const savedLinks = JSON.parse(localStorage.getItem('links') ?? '[]');
  const link = zoomRoom.value;
  const name = input.value;
  zoomRoom.value = '';
  input.value = '';
  savedLinks.push({ name, link });
  if (savedLinks.length > 5) savedLinks.shift();
  localStorage.setItem('links', JSON.stringify(savedLinks));
  zoomLinks.innerText = '';
  renderLinks(savedLinks);
}

function renderLinks(links) {
  links.reverse().forEach(({ name, link }) => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.setAttribute('type', 'submit');
    deleteButton.innerText = 'X';

    const newLink = document.createElement('a');
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    const text = document.createElement('p');
    listItem.setAttribute('class', 'zoom-link');
    heading.setAttribute('class', 'name');

    newLink.href = link;

    heading.innerText = name;
    newLink.target = '_blank';
    text.innerText = `${link.slice(0, 35)}...`;

    newLink.append(heading, text);
    listItem.append(newLink);

    listItem.append(deleteButton);

    zoomLinks.appendChild(listItem);

    deleteButton.onclick = function () {
      deleteButton.parentElement.remove();
      const linkID = deleteButton.previousElementSibling.firstChild.innerText;
      // console.log(linkID)
      for (let i = 0; i < 5; i++) {
        if (links[i].name == linkID) {
          // console.log(links[i].name)
          links.splice(i, 1);
          break;
        }
      }
      // console.log(links)
      // links = links.reverse();
      localStorage.setItem('links', JSON.stringify(links.reverse()));
    };
  });
}
