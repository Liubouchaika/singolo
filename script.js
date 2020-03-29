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
	openMenu();
};

let items = document.querySelectorAll('.slider-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem (num) {
	currentItem = (num + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;

	let item = items[currentItem];
	let listener = function() {
		console.log('=== hide animation end');
		item.classList.remove('active', direction);
		item.removeEventListener('animationend', listener);
	};

	item.classList.add(direction);

	item.addEventListener('animationend', listener);
}

function showItem(direction) {

	let item = items[currentItem];
	let listener = function() {
		console.log('=== show animation end');
		item.classList.remove('next', direction);
		item.classList.add('active');
		item.removeEventListener('animationend', listener);

		isEnabled = true;
	};

	item.classList.add('next', direction);
	item.addEventListener('animationend', listener);
}

function previousItem(num) {
	hideItem('to-right');
	changeCurrentItem (num - 1);
	showItem('from-left');
}

function nextItem(num) {
	hideItem('to-left');
	changeCurrentItem (num + 1);
	showItem('from-right');
}


document.querySelector('.left-arrow').addEventListener('click', function() {
	console.log('>>> left click:', isEnabled, currentItem);
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.right-arrow').addEventListener('click', function() {
	console.log('>>> right click:', isEnabled, currentItem);
	if (isEnabled) {
		nextItem(currentItem);
	}
});

function toggleClickable(event) {
	let eventClass = event.target.classList.contains('phone-vertical') ? 'phone-vertical' : 'phone-horizontal';
	let phonesToToggle = document.querySelectorAll('.' + eventClass + '-black');
	phonesToToggle.forEach(item => {
		item.classList.toggle('hidden');
	});
};

let phonesClickable = document.querySelectorAll(".phone-clickable");
phonesClickable.forEach(item => {
	item.addEventListener("click", toggleClickable, false);
});


function getFormInfo(event) {
	let formInputs= document.querySelectorAll(".form-input");

	let name = formInputs[0].value;
	let email = formInputs[1].value;
	let subject = formInputs[2].value;
	let description = formInputs[3].value;

	if (!name || !email) {
		return;
	}
	if (!subject) {
		subject = 'Without subject';
	} else {
		subject = 'Subject: ' + subject;
	}

	if (!description) {
		description = 'Without description';
	} else {
		description = 'Description: ' + description;
	}

	alert('The letter was sent \n' + subject + '\n' + description + '\nOK');

	formInputs[0].value = '';
	formInputs[1].value = '';
	formInputs[2].value = '';
	formInputs[3].value = '';
}

let submit = document.querySelectorAll(".submit");
submit.forEach(item => {
	item.addEventListener("click", getFormInfo, false);
});

function openMenu (event) {
	let blocksToToggle = document.querySelectorAll(".burger");
	blocksToToggle.forEach(item => {
		item.classList.toggle('open-menu');
	});

}

let headerBurger= document.querySelectorAll(".header-burger");
headerBurger.forEach(item => {
	item.addEventListener("click", openMenu, false);
});
