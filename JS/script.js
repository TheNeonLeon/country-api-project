document.getElementById('show-btn').addEventListener('click', loadData => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <li>${element.name}</li>
            `;
            console.log(Response, data);
        });
        document.getElementById('list').innerHTML = html;
    });
});
//make every list show more info when clicked
document.querySelector("li").addEventListener("click", onClick => {
    console.log("test");
});
//iterate through countries and filter by search query
document.querySelector(".input-field").addEventListener('onkeyup', filterCountry => {
    let input = document.querySelector('.input-field');
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
    }
})
document.getElementById('list').addEventListener('click', clickInfo => {
    
})