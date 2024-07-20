/*=== SHOW MENU ===*/
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const navLink = document.querySelectorAll(".navLink");
const header = document.querySelectorAll("header");

/*== Validate if constant exists ==*/

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.style.display = "list-item";
	});
};


if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.style.display = "none";
	});
};

/*== Remove mobile menu ==*/
const linkAction = () => {
	navMenu.style.display = "none";
}

/*== SHADOW HEADER ==*/
const shadowHeader = () => {
	const header = document.getElementById('header');
	/* When the scroll is greater than 50vh,
	 * add the shadowHeader class to the header tag
	 */
	if (scrollY >= 50) {
		header.classList.add('shadowHeader');
	}
	else if (scrollY < 50) {
		header.classList.remove('shadowHeader');
	}
	else {
		header.classList.remove('shadoHeader');
	}
}

window.addEventListener('scroll', shadowHeader);