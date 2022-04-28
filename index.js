function Math () {
let a = document.getElementById('chislo').value;
let b = 0;
do {
if (a % 2 == 0)
{
    a = a / 2;
    b= b+1;
}
else {
    a = a*3+1;
    b = b+1; 
}   
}
while (a !== 1)
alert ('Количество итераций ' + b)
}