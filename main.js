const input = document.querySelector('.name')
const zoomRoom = document.querySelector('.link')
const zoomLinks = document.querySelector('.zoom-links')
const button = document.querySelector('.submit')


document.addEventListener('DOMContentLoaded', () => {
  const storedLinks = localStorage.getItem("links");
  console.log(storedLinks)
  if (storedLinks) {
    renderLinks(JSON.parse(storedLinks));
  }
  button.addEventListener("click", addFunc)
})


function addFunc() {
  const savedLinks = JSON.parse(localStorage.getItem("links") ?? '[]');
  const link = zoomRoom.value;
  const name = input.value;
  zoomRoom.value = "";
  input.value = "";
  // const addedLink = document.createElement('a')
  // addedLink.href = link;
  // addedLink.innerText = `${name}\n`;
  // zoomLinks.append(addedLink)
  savedLinks.push({ name, link });
  if (savedLinks.length > 5) savedLinks.shift();
  localStorage.setItem("links", JSON.stringify(savedLinks));
  zoomLinks.innerText = "";
  renderLinks(savedLinks)
}

function renderLinks(links) {
  // for (let i=links.length-1; i>=0; i--) {
  //   const addedLink = document.createElement('a');
  //   addedLink.href = links[i].link;
  //   addedLink.innerText = `${links[i].name}\n`;
  // }
  links.reverse().forEach(({ name, link }) => {
    const addedLink = document.createElement('a');
    addedLink.href = link;
    addedLink.target = "_blank";
    addedLink.innerText = `${name}\n`;
    zoomLinks.append(addedLink);
  })
}



// { name: lin2, name2 : link2 }

// localStorage.get('')
// localStorage.set('links')