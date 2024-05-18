const left = get.documentElementById("left");
const right = get.documentElementById("right");

function left() {
	left.style.zIndex = 2;
	right.style.zIndex = 1;
}

function right() {
	left.style.zIndex = 1;
	right.style.zIndex = 2;
}
