


var input =document.querySelector('input');
var button =document.querySelector('button');
button.addEventListener('click', search);
input.style.fontSize = '32'+'px'
button.style.borderRadius = '25'+'%'



function search(){
    
    val=input.value;
    var omb=`http://www.omdbapi.com/?i=tt3896198&apikey=84059532&t=${val}`;
    var reg =new Request(omb);
    fetch(reg)
    .then((responce)=>{
        return responce.json();
    })
    .then((data)=>{
        console.log(data)
        var photo = document.querySelector('.photo')
        document.querySelector('h2').innerHTML = `${data.Title}  ${data.Released}`
        photo.innerHTML =`<img src="${data.Poster}" alt="">`
})}
//   then((data)=>{
//   for(let i=0; i<data.length; i++){})
// }}

