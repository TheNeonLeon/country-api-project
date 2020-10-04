//fetching data from api and creating list item for each object
window.addEventListener('load', loadData => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <li><a href="info.html"</a>
                <img src="${element.flag}">
                <br> ${element.name}
                <br> Capital: ${element.capital}
                <br> Population: ${element.population}
            </li>
            `;
            console.log(data);
            function filterCountry(){
            let filterValue = document.getElementById('input-field').value.toUpperCase();
            let li = document.getElementsByTagName('li');

            for(let i = 0; i < li.length; i++) {
                html += element[i]
              if (li.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = '';
            }
          }
        }
        filterCountry();
        });
        document.getElementById('list').innerHTML = html;
        
    });
    
});

//make every list show more info when clicked
/*document.getElementsByTagName('li').addEventListener("click", onClick => {

});*/
//iterate through countries and filter by search query

   
/*function filterCountry(){
   let filterValue = document.getElementById('input-field').value.toUpperCase();
   let wrapper = document.getElementById('list');
   let li = wrapper.getElementsByTagName('li');

   for (i = 0; i < li.length; i++) {
    let list = li[i].getElementsByTagName('li')[0];
    if (li.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = '';
    }else {
        li[i].style.display = 'none';
    }
  }
}
let filterInput = document.getElementById('input-field');
filterInput.addEventListener('keyup', filterCountry());*/