window.onload = function () {
	'use strict'
	let dragBlock = document.getElementById('drag-block'),
		dragBox = document.getElementById('drag-box');

	dragBlock.getElementsByClassName('header')[0].addEventListener('mousedown', function (e) {
		drag(dragBlock, e)
	});
	function drag(elementToDrag, event) {
		let startX = event.clientX - dragBox.offsetLeft,
			startY = event.clientY - dragBox.offsetTop,
			blockPosX = elementToDrag.offsetLeft,
			blockPosY = elementToDrag.offsetTop,
			deltaX = startX - blockPosX,
			deltaY = startY - blockPosY;

		dragBox.addEventListener('mousemove', moveHendler, true);
		dragBox.addEventListener('mouseup', removeHendler, true);

		function moveHendler(e) {
			let leftVal = e.clientX - dragBox.offsetLeft - deltaX,
				topVal = e.clientY - dragBox.offsetTop - deltaY;
			if (leftVal < 0 || topVal < 0) {
				removeHendler();
				elementToDrag.removeAttribute("style")
				return false;
			}
			elementToDrag.style.left = leftVal + 'px';
			elementToDrag.style.top = topVal + 'px';
		};
		function removeHendler() {
			dragBox.removeEventListener('mousemove', moveHendler, true);
			dragBox.removeEventListener('mouseup', removeHendler, true);
		}
	}
}