function createEle(tag, inner){
	var ele = document.createElement(tag);
	ele.innerHTML = inner;
	document.body.appendChild(ele);
}

function isEq(p1, p2, title = "myTest"){
	if (p1 === p2){
		createEle("div", "✅_" + title + "_EQUAL TEST_[" + p1 + "] and [" + p2 + "] is equal.");
		return true;
	}

	createEle("div", "💩_" + title + "_EQUAL TEST_[" + p1 + "] and [" + p2 + "] is not equal.");
	return false;
}

function isNotEq(p1, p2, title = "myTest"){
	if (p1 !== p2){
		createEle("div", "✅_" + title + "_NOT EQUAL TEST_[" + p1 + "] and [" + p2 + "] is not equal.");
		return true;
	}

	createEle("div", "💩_" + title + "_NOT EQUAL TEST_[" + p1 + "] and [" + p2 + "] is equal.");
	return false;
}

function test(testName){
	var ele = document.createElement('h3');
	ele.innerHTML = testName;
	document.body.appendChild(ele);
}

