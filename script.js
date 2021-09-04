let halbAvail = window.screen.availHeight/2;

function centreH(container,target) {
	let containerWidth = reversepx(getComputedStyle(container).width);
	let targetWidth = reversepx(getComputedStyle(target).width);
	target.style.marginLeft = px((containerWidth/2) - (targetWidth/2));
}
function centreV(target,extra) {
	let targetHeight = reversepx(getComputedStyle(target).height);
	target.style.marginTop = px(halbAvail - (targetHeight/2) + extra);
}



function px(number) {
	return number.toString() + "px";
}

function reversepx(pixelV) {
	return parseInt(pixelV.replace("px",""));
}
function justifH() {
	centreH($("bgOne"),$("centreOne"));
	centreH(document.body,$("specialOne"));
	centreH(document.body,$("next"));
	centreH($("bgTwo"),$("centreTwo"));
	centreH($("bgTwo"),$("centreThree"));
	centreH($("bgThree"),$("centreFour"));
	centreH($("bgFour"),$("centreFive"));
	centreH($("bgFour"),$("centreSix"));
	centreH($("bgFour"),$("switch"));
	centreH($("bgFour"),$("centreSeven"));
	centreH($("bgFour"),$("centreEight"));
	centreH($("bgFour"),$("centreNine"));
	centreH($("bgFour"),$("centreTen"));
}
function justifV() {
	centreV($("centreOne"),0);
	centreV($("specialOne"),60);
	centreV($("centreTwo"),0);
	centreV($("centreThree"),0);
	centreV($("btContainer"),100);
	centreV($("centreFive"),54);
	centreV($("centreSix"),54);
	centreV($("centreSeven"),54);
	centreV($("centreEight"),54);
	centreV($("centreNine"),54);
	centreV($("centreTen"),54);
}
function all() {
	justifH();
	justifV();
}
function $(id) {
	return document.getElementById(id);
}

$("bgOne").style.height = px(window.screen.availHeight);
$("bgTwo").style.height = px(window.screen.availHeight);
$("bgThree").style.height = px(window.screen.availHeight);
$("bgFour").style.height = px(window.screen.availHeight);

all();

window.onresize = function() { 
	all();
}

let S1 = 0;
let stuff = ["Hobbyist","Programmer","Artist?","Idiot","Hobbyist","Programmer","Artist?","Idiot","Hobbyist","Programmer","Artist?","Idiot","...","Still","Here?","...","It\'s","Ended","Here.","...","Well","Let\'s","Just","Start","All","Over","Again."];
$("specialOne").addEventListener("mouseover", function() {
	S1 += 1;
	$("specialOne").innerHTML = stuff[S1];
	if(S1 == (stuff.length-1)) {
		S1 = -1;
	}
});
let slides = [$("bgOne"),$("bgTwo"),$("bgThree"),$("bgFour")]; 
$("next").addEventListener("click", function() {
	for (let i = 0; i < slides.length; i++) {
		const box = slides[i].getBoundingClientRect();
		if(box.top < window.innerHeight && box.bottom >= 0 && (i + 1 < slides.length)) {
			location.href = "#" + slides[i + 1].id;
		}
	} 
});
let switchesOne = [[$("switch1")],[$("switch2")],[$("switch3")]];
let switchesTwo = [[$("bt1")],[$("bt2")],[$("bt3")]];
switchInteractibility(switchesOne);
switchInteractibility(switchesTwo);

for (let S2 = 0; S2 < switchesTwo.length; S2++) {
	switchesTwo[S2][0].addEventListener("click", function() {
		location.href = "#bgFour";
	});
}


function  switchInteractibility(uSwitch) {
for(let x = 0; x < uSwitch.length; x++) {
	let switches = uSwitch;
	switches[x][1] = $("c" + (x + 1).toString());
	switches[x][0].addEventListener("click", function() {
		for(let y = 0; y < switches.length; y++) {
			if(switches[y] != switches.indexOf(switches[x])) {
				switches[y][1].style.display = "none";
			}
		}
		switches[x][1].style.display = "block";
		all();
	});
}
}