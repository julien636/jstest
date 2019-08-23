const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Voici les entrepreneurs nées dans les années 70:")

entrepreneurs.forEach(n => {
  if (n.year<=1979 && n.year>1969){console.log(n.first+" "+n.last)}
});


console.log("Voici un array des noms et prénoms des entrepreuneurs:")
var entrepreneursName=[]
entrepreneurs.forEach(n => {
  m={ first : n.first, last : n.last}
  entrepreneursName.unshift(m)
});
console.log(entrepreneursName)

console.log("Voici les ages qu'aurait les entrepreuneurs aujourd'hui:")
entrepreneurs.forEach(n => {
  age=2019-n.year
  console.log(n.first+" "+n.last+"aurait "+age+" ans aujourd'hui")
});

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
console.log(entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : -1));