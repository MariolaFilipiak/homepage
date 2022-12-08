{
    const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeButton = document.querySelector(".js-themeButton");

    body.classList.toggle("dark");
    themeButton.innerText = body.classList.contains("dark")
        ? "jasny"
        : "ciemny";
};

const init = () => {
    const button = document.querySelector(".themeButton");
    button.addEventListener("click", toggleBackground);
};
}

init();
