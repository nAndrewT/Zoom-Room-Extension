const zoomLinks = document.querySelector('.zoom-links');

chrome.history.search(
    {text: 'zoom', maxResults: 5},
    (results) => { results.forEach(function(page){
        console.table(page)
        renderLink(page)
        
    })}
)

function renderLink({lastVisitTime, url}) {
      const newLink = document.createElement('a');
      const listItem = document.createElement('li');
      const heading = document.createElement('h3');
    
      listItem.setAttribute('class', 'zoom-link');
      heading.setAttribute('class', 'name');
  
      newLink.href = url;
      newLink.target = '_blank';
      heading.innerText = new Date(lastVisitTime).toDateString();
   
  
      newLink.append(heading);
      listItem.append(newLink);
  
      zoomLinks.appendChild(listItem);
  
    ;
  }