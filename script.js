function handleTagClick(element, tagName) {
	let navElements = document.querySelectorAll(".portfolio-nav-li");
	navElements.forEach( navElement => {
		navElement.classList.remove("portfolio-nav-li-active");
	});
	element.classList.add("portfolio-nav-li-active");

	//filterImages(tagName);
	imagesOrder();

};

function filterImages(tagName) {
	console.log("filterImages", tagName);
	let imagesCollection = document.querySelectorAll(".portfolio-item");
	if (tagName !== 'all') {
		imagesCollection.forEach(item => {
			if (item.classList.contains(tagName)) {
				item.classList.remove("hidden");
			} else {
				item.classList.add("hidden");
			}
		});
	} else {
		imagesCollection.forEach(item => {
			item.classList.remove("hidden");
		});
	};
};

function imagesOrder() { 
	let portfolio = document.getElementById("portfolio-items");
	let images = document.querySelectorAll(".portfolio-item");
	let removedChild = portfolio.removeChild(images[0]);
	portfolio.appendChild(removedChild);
};