window.addEventListener("load", (event) => {
    var mouseX = 0;
    var mouseY = 0;
    var modalZoom = 1.0;

    console.log("glry.js IS LOADED, BABY! HELL YEAH!");
    
    window.addEventListener("mousemove", (event) => {
        mouseX = event.x;
        mouseY = event.y;
    });

    const showImgModal = document.getElementById("show-img-modal");
    const showImgModalImg = showImgModal.querySelector("img");
    showImgModal.addEventListener("click", (event) => {
        showImgModal.close();
    });
    showImgModalImg.addEventListener("click", (event) => {
        showImgModal.close();
    });

    document.querySelectorAll(".glry-img").forEach((el, key, parent) => {
        el.style.backgroundImage = `url('${el.dataset.glryImg}')`;
        if(el.textContent === "")
            el.innerHTML = "\u00A0"; // nonbreaking whitespace
        // const bgImg = new Image();
        // bgImg.src = "./img/portfolio/Fruit.jpg";
        // bgImg.className = "object-fit-scale";
        // el.appendChild(bgImg);
        el.addEventListener("click", (event) => {
            showImgModalImg.src = el.dataset.glryImg;
            const aspectRatio = showImgModalImg.naturalWidth / showImgModalImg.naturalHeight;
            const newModalWidth = aspectRatio * window.visualViewport.height;
            showImgModal.style.top = "0px";
            showImgModal.style.bottom = "0px";
            showImgModal.style.width = newModalWidth + "px";
            showImgModal.style.left = (window.visualViewport.width - newModalWidth) * 0.5 + "px";
            showImgModal.showModal();
        });
    });
});