//fetching data from api and creating list item for each object
window.addEventListener('load', loadData => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <li><img src="${element.flag}">
                <br> ${element.name}
                <br> Capital: ${element.capital} 
                <br> Population: ${element.population}
            </li>
            `;
            console.log(Response, data);
        });
        document.getElementById('list').innerHTML = html;
        
        
    });
    
});

//make every list show more info when clicked
/*document.getElementsByTagName('li').addEventListener("click", onClick => {

});*/
//iterate through countries and filter by search query
let filterInput = document.getElementById('input-field');
filterInput.addEventListener('keyup', filterCountry);
   
function filterCountry(){
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


   /* let input = document.querySelector('.input-field');
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName('li');
    let filter = input.value.toUpperCase();

    for (i = 0; i < li.length; i++) {
        var list = li[i].getElementsByTagName("li")[0];
        var txtValue = list.textContent || list.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }else {
            li[i].style.display = "none";
        }
    }*/