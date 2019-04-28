function function1() {
var name=prompt("Как Вас зовут?");
alert(name);
}

function function2() {
var number = '3751';
arr = number.split('');
arr.sort();
var result = arr.join('');
alert(result);
}

function function3() {
var num=1;
num +=12;
num -=14;
num *=5;
num /=7;
num++;
num--;
alert(num);
}

function function4() {
var a6 = 5 % 3;
var a7 = 3 % 5;
var a8 = 5 + '3';
var a9 = '5' - 3;
var a10 = 75 + 'кг';
alert("a6=" + a6 + "<br>" + "a7=" + a7 + "<br>" + "a8=" + a8 +"<br>"+ "a9=" + a9 +"<br>"+ "a10 = " + a10);
}

function function5() {
var arr=['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
alert(arr);
var day=prompt("введите номер дня недели");
day = day-1;
for (var i=0; i<arr.length; i++) {
if (day==i){
day=arr[i];
alert(day);
break;}}

}

function function6() {
var a=10, b=3;
var c=a%b;
alert(c);
}

function function7() {
var d=5, e=10;
var f= ++d + --e;
alert(f);
}

function function8() {
var aarr = [100, 200, 300, 400];
var g=0;
for (var j = 0;  j< aarr.length; j++) {
g +=aarr[j];}
alert(g);
}

function function9() {
var a=prompt("Введите число");
if (a==10) {
alert ("верно");}
else {
alert ("неверно");}
}

function function10() {
var str = ['Привет,', 'мир', '!'];
alert(str);
}
