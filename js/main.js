const main = () => {
    let selected = document.querySelectorAll(".selected");
    const change = document.getElementById("change");

    change.addEventListener("click", () => {
        selected.forEach(selected => {
            if (selected.classList.contains("even")) {
                selected.classList.remove("even");
                selected.classList.add("odd");
                console.log("impar");
            } else {
                selected.classList.remove("odd");
                selected.classList.add("even");
                console.log("par");
            }
        });
    });
}

