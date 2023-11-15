// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// const cursor = document.querySelector(".cursor");

// circles.forEach(function (circle, index) {
//     circle.x = 0;
//     circle.y = 0;
//     circle.style.backgroundColor = "white";
// });

// window.addEventListener("mousemove", function (e) {
//     coords.x = e.clientX;
//     coords.y = e.clientY;
// });

// function animateCircles() {
//     let x = coords.x;
//     let y = coords.y;

//     cursor.style.top = x;
//     cursor.style.left = y;

//     circles.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.scale = (circles.length - index) / circles.length;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.5;
//         y += (nextCircle.y - y) * 0.5;
//     });

//     requestAnimationFrame(animateCircles);
// }

// animateCircles();


const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

const getTrailerClass = type => {
    switch (type) {
        case "star":
            return "fa-solid fa-splotch";
        case "link":
            return "fa-solid fa-link";
        case "video":
            return "fa-solid fa-play";
        default:
            return "fa-solid fa-link";
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if (interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}