var fitText = function (element, compression, min, max) {
	var compressor = compression || 1;
	var minFont = min || -1/0;
	var maxFont = max || 1/0;

	var addEvent = function (element, type, func) {
		if (element.addEventListener)
			element.addEventListener(type, func, false);
		else
			element.attachEvent('on'+type, func);
	};

	var fit = function () {
		element.style.fontSize = Math.round(
			Math.max(
				Math.min(
					(element.offsetWidth / (compressor*10)), 
					parseFloat(maxFont)), 
				parseFloat(minFont))) + 'px';
	};

	fit();
	addEvent(window, 'resize', fit);
};