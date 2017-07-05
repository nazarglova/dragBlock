window.onload = function () {
	'use strict'
	let dragBlock = document.getElementById('drag-block');

	dragBlock.drag('.header', '#drag-box');
}
Object.prototype.drag = function (eventElement, dragBox) {
	'use strict'
	let self = this;
	dragBox = document.querySelector(dragBox);
	self.querySelector(eventElement).addEventListener('mousedown', function (e) {
		dragIt(self, e)
	});
	function dragIt(elementToDrag, event) {
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
};