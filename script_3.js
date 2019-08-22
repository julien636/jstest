function sayHello() {
  inputNumber=prompt("De quelle taille doit être la pyramide ?");
}

function pyramide(n)
{
if (n<0) {
alert ("Veuillez Saisir Un Entier Positif ou null");
return "### Erreur ###";
}
else {
  let hashTag = "#"
  let space = " "
  for(let count = 0; count <=n; count++){
console.log(space.repeat(n-count)+hashTag.repeat(count));
}
}
} 

sayHello();
pyramide(inputNumber);
