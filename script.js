const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    enterBtn.innerText = "LOADING...";

    document.body.style.transition = "0.7s";

    document.body.style.transform = "scale(1.2)";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "menu.html";

    },700);

});
