function myFunc1() {
alert ("задание выполнено");
}

function  myFunc2() {
  var str = prompt('"Привет"');
  var num = 123;
  var flag = true;
  var txt = "true";
  alert("Задание 2:\nstr is " + typeof(str) + "\nnum is " + typeof(num) + "\nflug is " + typeof(flag) + "\ntxt is " + typeof(txt));
}

function  myFunc3() {
	var a1 = 5 + 3;
	var a2 = 5 - 3;
	var a3 = 5 * 3;
	var a4 = 5 / 3;
	var a5;
	alert("Задание 3:\na1 = " + a1 + "\na2 = " + a2 + "\na3 = " + a3 + "\na4 = "+ a4 + "\na5 = " + a5)
}

function myFunc4() {
	var a6 = 5 % 3;
	var a7 = 3 % 5;
	var a8 = 5 + '3';
	var a9 = '5' - 3;
	var a10 = 75 + 'кг';
	alert("Задание 4:\na6 = " + a6 + "\na7 = " + a7 + "\na8 = " + a8 + "\na9 = "+ a9 + "\na10 = " + a10)
}

function myFunc5() {
	var l = prompt('Введите длину:');
	var w = prompt('Введите ширину:');
	alert ("Задание 5: Площадь прямоугольника = " + l*w)
}

function myFunc6() {
	var r = prompt('Введите радиус:');
	var h = prompt('Введите высоту:');
	alert ("Задание 6: Объем цилиндра = " + (Math.PI*r*r*h))
}

function myFunc7() {
	var n = 3;
	var m = 4;
	var k = Math.pow(n,2)+Math.pow(m,2);
	alert ("Задание 7: Длина гипотенузы = " + Math.pow(k, 0.5))
}

function myFunc8() {
	var name = prompt('Как Вас зовут?');
	alert ('Задание 8.1: Вас зовут ' + name + '!');
}
function myFunc88() {
	if (confirm("Нажмите ОК или Отмена")) {
	    alert("Вы нажали ОК.");
     }
	else {
	    alert("Вы нажали Отмена.");
     }
}
function myFunc888() {
	var name = prompt("Введите свое имя:")
	if (confirm("Введеное имя правильное?"))
	    {
          alert("Здравствуйте, " + name);
             }
}

function myFunc9() {
	var a = 5, b = 10, c;
	c = a + b--; 
	document.write(c);
}

