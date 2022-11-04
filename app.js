let scroll_box = document.getElementById("scroll_box");
let left_box = document.getElementById("left");
let right_box = document.getElementById("right");

left_box.addEventListener("click", () => {
    scroll_box.scrollLeft += 195;
})
right_box.addEventListener("click", () => {
    scroll_box.scrollLeft -= 195;
})
