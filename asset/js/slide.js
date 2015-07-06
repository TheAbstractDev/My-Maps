var bars = document.getElementById("bars");
var side = document.getElementById("search");
var main = document.getElementById("main");
var tmp = 0;

bars.addEventListener('click', function(e) {

	if(tmp == 0)
	{
		tmp = 1;

		bars.classList.remove("animateBack");
		side.classList.remove("animateSideBack");

		bars.classList.add("animate");
		side.classList.add("animateSide");
	}

	else
	{
		tmp = 0;

		bars.classList.remove("animate");
		side.classList.remove("animateSide");

		bars.classList.add("animateBack");
		side.classList.add("animateSideBack");
	}

});
