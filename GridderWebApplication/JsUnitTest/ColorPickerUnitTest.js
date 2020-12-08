{
	var _uut;

	function Setup(testName) {
		test(testName);
		_uut = new ColorPicker("red");
	}

	function Teardown() {
		delete _uut;
	}

	addEventListener("load", function () {
		createEle("h1", "ColorPicker Unit Test");
	});

	// constructor test
	addEventListener("load", function () {
		Setup("ctor_Run_defaultValuesCorrect:");

		isEq(_uut.currentColor, "red");
		isEq(_uut.currentObj, undefined);
		isEq(typeof(_uut.colorIndicator), "object");
		isEq(typeof(_uut.colors), "object");
		isEq(_uut.colors.length, 5);

		Teardown();
	});

	// update color
	addEventListener("load", function () {
		Setup("updateColor_Run_currentColorCorrect:");

		_uut.updateColor("green");
		isEq(_uut.currentColor, "green");

		_uut.updateColor("purple");
		isEq(_uut.currentColor, "purple");

		Teardown();
	});

	// updated color on simulated click event
	addEventListener("load", function () {
		Setup("clickHandle_ThrowClickEvent_updateCurrentColor:");

		var eleColor = _uut.colors[1].style.backgroundColor;
		_uut.colors[1].click(); // simulate click event
		isEq(_uut.currentColor, eleColor);

		var eleColor = _uut.colors[0].style.backgroundColor;
		_uut.colors[0].click(); // simulate click event
		isEq(_uut.currentColor, eleColor);

		Teardown();
	});

	// updated color on simulated click event
	addEventListener("load", function () {
		Setup("updateCurrentObj_Run_updateCurrentObj:");

		_uut.updateCurrentObj(_uut.colors[1]);
		isEq(_uut.currentObj, _uut.colors[1]);
		isEq(_uut.currentObj.style.backgroundColor, "white");

		_uut.updateCurrentObj(_uut.colors[0]);
		isEq(_uut.currentObj, _uut.colors[0]);
		isEq(_uut.currentObj.style.backgroundColor, "black");

		Teardown();
	});

}