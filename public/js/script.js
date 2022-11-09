const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("open");
};

window.onscroll = () => {
	menu.classList.remove("bx-x");
	navbar.classList.remove("open");
};

(function () {
	// DON'T EDIT BELOW THIS LINE
	var d = document,
		s = d.createElement("script");
	s.src = "https://meikelstore.disqus.com/embed.js";
	s.setAttribute("data-timestamp", +new Date());
	(d.head || d.body).appendChild(s);
})();

// vars
("use strict");
var testim = document.getElementById("testim"),
	testimDots = Array.prototype.slice.call(
		document.getElementById("testim-dots").children
	),
	testimContent = Array.prototype.slice.call(
		document.getElementById("testim-content").children
	),
	testimLeftArrow = document.getElementById("left-arrow"),
	testimRightArrow = document.getElementById("right-arrow"),
	testimSpeed = 4500,
	currentSlide = 0,
	currentActive = 0,
	testimTimer,
	touchStartPos,
	touchEndPos,
	touchPosDiff,
	ignoreTouch = 30;
window.onload = function () {
	// Testim Script
	function playSlide(slide) {
		for (var k = 0; k < testimDots.length; k++) {
			testimContent[k].classList.remove("active");
			testimContent[k].classList.remove("inactive");
			testimDots[k].classList.remove("active");
		}

		if (slide < 0) {
			slide = currentSlide = testimContent.length - 1;
		}

		if (slide > testimContent.length - 1) {
			slide = currentSlide = 0;
		}

		if (currentActive != currentSlide) {
			testimContent[currentActive].classList.add("inactive");
		}
		testimContent[slide].classList.add("active");
		testimDots[slide].classList.add("active");

		currentActive = currentSlide;

		clearTimeout(testimTimer);
		testimTimer = setTimeout(function () {
			playSlide((currentSlide += 1));
		}, testimSpeed);
	}

	testimLeftArrow.addEventListener("click", function () {
		playSlide((currentSlide -= 1));
	});

	testimRightArrow.addEventListener("click", function () {
		playSlide((currentSlide += 1));
	});

	for (var l = 0; l < testimDots.length; l++) {
		testimDots[l].addEventListener("click", function () {
			playSlide((currentSlide = testimDots.indexOf(this)));
		});
	}

	playSlide(currentSlide);

	// keyboard shortcuts
	document.addEventListener("keyup", function (e) {
		switch (e.keyCode) {
			case 37:
				testimLeftArrow.click();
				break;

			case 39:
				testimRightArrow.click();
				break;

			case 39:
				testimRightArrow.click();
				break;

			default:
				break;
		}
	});

	testim.addEventListener("touchstart", function (e) {
		touchStartPos = e.changedTouches[0].clientX;
	});

	testim.addEventListener("touchend", function (e) {
		touchEndPos = e.changedTouches[0].clientX;

		touchPosDiff = touchStartPos - touchEndPos;

		console.log(touchPosDiff);
		console.log(touchStartPos);
		console.log(touchEndPos);

		if (touchPosDiff > 0 + ignoreTouch) {
			testimLeftArrow.click();
		} else if (touchPosDiff < 0 - ignoreTouch) {
			testimRightArrow.click();
		} else {
			return;
		}
	});
};

$.getJSON(
	"https://api.countapi.xyz/hit/meikelstore.site/visits",
	function (response) {
		$("#views").html("Total Pengunjung : " + response.value);
	}
);
$.getJSON("https://reallyfreegeoip.org/json/", function (jsonResponse) {
	$("#alamat").html(
		"Asal Pengunjung: " + jsonResponse.city + ", " + jsonResponse.country_name
	);
});

window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-PX09SSJGJM");
