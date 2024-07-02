async function Getinformation(){
    const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const info = await res.json();
    const data= info.recipes;
    const result = data.map(function(ele){
        return`
        <div class="pizzainfo">
        <h2>${ele.title}</h2>
        <img src="${ele.image_url}">
        </div>`;

    }).join('');

    document.querySelector(".pizza").innerHTML = result;

}
Getinformation();
