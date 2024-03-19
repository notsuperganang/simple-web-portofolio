// toggle and responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists= document.querySelector("nav")
}

// Clear form before undo
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};