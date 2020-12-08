{
	var _uut;

	function Setup(testName) {
		test(testName);
		_uut = new ColorPicker("green");
	}

	function Teardown() {
		delete _uut;
	}

	addEventListener("load", function () {
		createEle("h1", "Grid Unit Test");
	});

	//test one
	addEventListener("load", function () {
		Setup("My first test");

		createEle("p", _uut.currentColor);

		Teardown();
	});

	//test two
	addEventListener("load", function () {
		Setup("My second test");

		Teardown();
	});
}

