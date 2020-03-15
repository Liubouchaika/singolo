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

function imagesBorder(event) {
	let images = document.querySelectorAll(".image-border");
	images.forEach(item => {
		item.classList.remove("image-border");
	});
	event.target.classList.toggle("image-border");
};

let images = document.querySelectorAll(".portfolio-item");
images.forEach(item => {
	item.addEventListener("click", imagesBorder, false);
});

function navTagClick(element) {
	let navElements = document.querySelectorAll("nav li");
	console.log(navElements);
	navElements.forEach( navElement => {
		navElement.classList.remove("nav-li-active");
	});
	element.classList.add("nav-li-active");
};