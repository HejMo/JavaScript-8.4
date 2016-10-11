var a = 1,
	name = 'bok trójkąta';
var h = 2,
	name = 'wysokość trójkąta';

a = prompt('Podaj długość podstawy trójkąta prostokątnego w [cm]');
h = prompt('Podaj wysokość trójkąta prostokątnego w [cm]');

triangleArea = a * h / 2;

alert('Pole trójkąta prostokątnego wynosi ' + triangleArea + ' cm2');

console.log('Pole trójkąta prostokątnego o podstawie a: ' + a + 'cm i wysokości h: ' + h + 'cm wynosi: ' + triangleArea + 'cm2');