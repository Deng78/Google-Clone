// Variables
const searchBtn = document.getElementById('searchBtn');
const query = document.getElementById('search');
const apiKey = 'AIzaSyBKQv2EnFx493Bln-xfVok_5nr-wHCPD2A';
const cx = '011559359091137687575:e4hex8wb2fk';
const apiUrl = 'https://www.googleapis.com/customsearch/v1?key='+ apiKey +'&cx='+ cx +'&q=';

$(() =>{
    searchBtn.addEventListener('click', () =>{
        let q = query.value;
        sessionStorage.setItem('query', q);
        window.location = 'results.html';
        return false;
        //getResults(q);
    })
});

function getResults(){
    let queryVal = sessionStorage.getItem('query');
    axios.get(apiUrl + queryVal)
    .then((response) =>{
        let data = response.data;
        console.log(data);
        displayResults(data);
    })
    .catch((error) =>{
        throw error;
    })
}
function displayResults(data){
    let results = data.items;
    let output = '';
    $.each(results, (index, list) => {
        output += `
            <div class="col-12">
                <h4><a href="${list.link}">${list.title}</a></h4>
                <a>${list.displayLink}</a>
                <p>${list.snippet}</p>
            </div>`;
    });
                $('#searchResults').html(output);

}