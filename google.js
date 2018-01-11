
let cacher = document.getElementById('center-div');
let button = document.querySelector('button');
cacher.style.display =  'none';

function hide() {
  cacher.style.display ='block';
  button.style.display ='none';
  cacher.style.display='flex';
}

let bouton = document.getElementById('RechercheGoogle')
bouton.onclick = function() {
  var search = document.getElementById('barre').value;
  document.location.href="https://www.google.fr/#q="+search;
}
setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien viens dessus stp please"); }, 10000);
