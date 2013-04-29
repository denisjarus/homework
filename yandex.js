window.onload = function() {
	var progress = document.getElementById('progress-1'),
		progressValue = progress.getElementsByClassName('progress-value')[0],
		progressLabel = progress.getElementsByClassName('progress-label')[0];

	progress.onclick = function(event) {
		var width = progress.offsetWidth,
			value = Math.max(0, Math.min((event.clientX - getPosition(progress).x) / width, 1)) * 100;

		progressValue.style.width = value + '%';
		progressLabel.innerHTML = Math.round(value) + '%';
	}

	var button1 = document.getElementById('button-1'),
		button2 = document.getElementById('button-2');

	button1.onclick = function(event) {
		document.body.style.color = 'white';
		document.body.style.backgroundColor = 'black';
	}
	button2.onclick = function(event) {
		document.body.style.color = 'black';
		document.body.style.backgroundColor = 'white';
	}
}

function getPosition(element) {
	var position = { x: 0, y: 0 };
	while (element) {
		position.x += element.offsetLeft;
		position.y += element.offsetTop;
		element = element.offsetParent;
	}
	return position;
}