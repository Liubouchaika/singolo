function handleTagClick(element, tagName) {
	console.log("handleTagClick:", element, tagName);
	let navElements = document.querySelectorAll(".portfolio-nav-li");
	navElements.forEach( navElement => {
		navElement.classList.remove("portfolio-nav-li-active");
	});
	element.classList.add("portfolio-nav-li-active");
};