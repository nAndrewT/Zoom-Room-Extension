const input = document.querySelector('.name')
const zoomRoom = document.querySelector('.link')
const zoomLinks = document.querySelector('.zoom-links')
const button = document.querySelector('.submit')


document.addEventListener('DOMContentLoaded', () => {
  const storedLinks = localStorage.get("links");
  if (storedLinks) {
    renderLinks(storedLinks);
  }
  button.addEventListener("click", addFunc)
})


function addFunc() {
  const link = zoomRoom.value;
  const name = input.value;
  const addedLink = document.createElement('a')
  addedLink.href = link;
  addedLink.innerText = name;
  zoomLinks.append(addedLink)
}


// { name: lin2, name2 : link2 }

// localStorage.get('')
// localStorage.set('links')