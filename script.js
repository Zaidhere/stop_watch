// let ms = 0;
// let s = 0;
// let interval;

// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var restart = document.querySelector("#restart");

// let secs = document.querySelector(".secs");
// let msecs = document.querySelector(".msecs");

// start.addEventListener("click", getStart);
// function getStart() {
// 	clearInterval(interval);
// 	interval = setInterval(setTime, 10);
// 	// console.log("hello");
// }

// stop.addEventListener("click", stopTheTimer);
// function stopTheTimer() {
// 	clearInterval(interval);
// }

// restart.addEventListener("click", reset);
// function reset() {
// 	s = 0;
// 	ms = 0;
// 	secs.innerHTML = "00";
// 	msecs.innerHTML = "00";
// 	// clearInterval(interval);
// 	// console.log(secs.innerHTML);
// 	// console.log(msecs.innerHTML);
// }

// function setTime() {
// 	ms += 1;

// 	if (ms <= 9) msecs.innerHTML = "0" + ms;
// 	else if (ms > 9 && ms <= 99) msecs.innerHTML = ms;
// 	if (ms > 99) {
// 		ms = 0;
// 		s += 1;
// 		msecs.innerHTML = "0" + ms;

// 		if (s <= 9) secs.innerHTML = "0" + s;
// 		else secs.innerHTML = s;
// 	}
// }








let mn = 0;
let s = 0;
let ms = 0;

let interval;


let mins = document.querySelector('.min');
let sec = document.querySelector('.sec');
let msec = document.querySelector('.msec');


let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let restart = document.querySelector('.restart');

// setInterval
// val = setInterval(fun, 10);
// clearInterval(val);


start.addEventListener('click', started);
function started() {

	clearInterval(interval);
	interval = setInterval(timer, 10);

}


stop.addEventListener('click', time_stop);
function time_stop() {
	clearInterval(interval);
}


restart.addEventListener('click', restart_timer);
function restart_timer() {
	s = 0;
	ms = 0;
	min = 0;

	mins.innerHTML = "00";
	sec.innerHTML = "00";
	msec.innerHTML = "00";
}


function timer () {

	ms += 1;

	if(ms <= 9)
		msec.innerHTML = "0" + ms;
	else if(ms <= 99)
		msec.innerHTML = ms;
	else {
		s += 1;
		ms = 0;


		if(s <= 9)
			sec.innerHTML = "0" + s;
		else {

			if(s >= 60) {
				mn += 1;
				s = 0;
				ms = 0;
				sec.innerHTML = "00";

				if(mn <= 9) {
					mins.innerHTML = "0" + mn;
				}
				else 
					mins.innerHTML = mn;
			}
			else {
				sec.innerHTML = s;
			}
		}
		msec.innerHTML = "00";
	}
}









