var ColorPickerFake = function ColorPickerFake(currentColor = "black") {
	this.currentColor = currentColor; // current color member
}

{
	var _uut;
	var _cpFake;

	function Setup(testName) {
		test(testName);

		_cpFake = new ColorPickerFake();
		_uut = new Grid(_cpFake);
	}

	function Teardown() {
		delete _uut;
	}

	addEventListener("load", function () {
		createEle("h1", "Grid Unit Test");
	});

	//constructor test
	addEventListener("load", function () {
		Setup("ctor_Run_DefaultValuesCorrect:");

		isEq(typeof (_uut.canvas), "object");
		isEq(typeof (_uut.wrap), "object");
		isEq(typeof (_uut.ctx), "object");
		isEq(typeof (_uut.canvasPos), "object");
		isEq(typeof (_uut.colorPicker), "object");
		isEq(_uut.color, "black");

		Teardown();
	});

	//key press tests
	addEventListener("load", function () {
		Setup("keydownHandle_ThrowEvent_CorrectValues");

		isEq(_uut.ranInterval, undefined);

		isEq(_uut.ranFlag, true);
		window.simKey(82);
		isEq(typeof(_uut.ranInterval), "number");

		isEq(_uut.ranFlag, false);
		window.simKey(82);
		isEq(_uut.ranFlag, true);

		Teardown();
	});
}

