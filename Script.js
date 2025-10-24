const animeData = [
  {id:"1",title:"Attack on Titan",year:2013,genres:["Action","Drama"],img:"https://picsum.photos/seed/aot/800/1200",rating:9,synopsis:"Titans!" },
  {id:"2",title:"My Hero Academia",year:2016,genres:["Action","School"],img:"https://picsum.photos/seed/mha/800/1200",rating:8.1,synopsis:"Heroes!" },
  {id:"3",title:"Demon Slayer",year:2019,genres:["Action","Fantasy"],img:"https://picsum.photos/seed/ds/800/1200",rating:8.7,synopsis:"Demons!" }
];

let state = { favorites:new Set(), genre:"all", query:"" };
const grid=document.getElementById('grid');
const empty=document.getElementById('empty');
const search=document.getElementById('search');
const genre=document.getElementById('genreFilter');

search.oninput=()=>{state.query=search.value.toLowerCase();render();}
genre.onchange=()=>{state.genre=genre.value;render();}

function render(){
  let list=animeData.filter(a=>{
    if(state.genre!=="all" && !a.genres.includes(state.genre)) return false;
    if(state.query && !a.title.toLowerCase().includes(state.query)) return false;
    return true;
  });
  grid.innerHTML="";
  empty.style.display=list.length?"none":"block";
  list.forEach(a=>{
    grid.innerHTML+=`
    <article class="card">
      <img class="thumb" src="${a.img}">
      <div class="card-body">
        <h3>${a.title}</h3>
        <p class="meta">${a.year} — ${a.genres.join(", ")}</p>
      </div>
    </article>`;
  });
}
render();
