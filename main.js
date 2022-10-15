const input = document.querySelector('.name');
const zoomRoom = document.querySelector('.link');
const zoomLinks = document.querySelector('.zoom-links');
const button = document.querySelector('.submit');

document.addEventListener('DOMContentLoaded', () => {
  const storedLinks = localStorage.getItem('links');
  console.log(storedLinks);
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
    const newLink = document.createElement('a');
    const listItem = document.createElement('li');
    const heading = document.createElement('h3');
    const text = document.createElement('p');
    listItem.setAttribute('class', 'zoom-link');
    heading.setAttribute('class', 'name');

    newLink.href = link;
    newLink.target = '_blank';
    heading.innerText = name;
    text.innerText = `${link.slice(0, 25)}...`;

    newLink.append(heading, text);
    listItem.append(newLink);

    zoomLinks.appendChild(listItem);
  });
}

//  <template id='li_template'>
//    <li>
//      <a>
//        <h3 class='title'>Tab Title</h3>
//        <p class='pathname'>Tab Pathname</p>
//      </a>
//    </li>
//  </template>;
