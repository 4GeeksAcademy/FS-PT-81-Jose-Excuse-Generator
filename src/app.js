window.onload = function(){

  function sentence() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  const generateRandom= arr => Math.floor(Math.random() * arr.length); //genera un índice aleatorio dependiendo de la largura del array
  const getValue = arr => arr[generateRandom(arr)]; // transforma ese índice en valor
  const excuse =  `${getValue(who)} ${getValue(action)} ${getValue(what)} ${getValue(when)}.`; //genera la frase
  return excuse;
  }
  const excuseElement = document.getElementById("excuse");
  const button = document.getElementById("button");
  button.addEventListener("click", function() {
    let excuse = sentence(); 
    excuseElement.textContent = excuse; 
  });
  }