// Slider JS
let $slider = $(".slider"), $bullets = $(".bullets");

function calculateHeight() {
	let height = $(".slide.active").outerHeight();
    $slider.height(height);
}

function addBullets() {
	let total = $(".slide").length, index = $(".slide.active").index();
    for (let i = 0; i < total; i++) {
		let $bullet = $("<div>").addClass("bullet");
        if (i === index) {
            $bullet.addClass("active");
        }
        $bullets.append($bullet);
    }
}

addBullets();
calculateHeight();

// Range slider JS
let range = document.querySelector('.range')
let thumb = document.querySelector('.thumb')
let track = document.querySelector('.track-inner')

let updateSlider = (value) => {
    thumb.style.left = `${value}%`
    thumb.style.transform = `translate(-${value}%, -50%)`
    track.style.width = `${value}%`
}

range.oninput = (e) =>
    updateSlider(e.target.value)

updateSlider(80) // Init value
