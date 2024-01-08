(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    $(".menu__mobile-open").on("click", (() => {
        $(".menu__bottom").toggleClass("menu__bottom-active");
        $("body").css({
            overflow: "hidden"
        });
    }));
    const accordionBtns = document.querySelectorAll(".accordion");
    accordionBtns.forEach((accordion => {
        accordion.onclick = function() {
            this.classList.toggle("is-open");
            let content = this.nextElementSibling;
            console.log(content);
            if (content.style.maxHeight) content.style.maxHeight = null; else {
                content.style.maxHeight = content.scrollHeight + "px";
                console.log(content.style.maxHeight);
            }
        };
    }));
    window["FLS"] = true;
    isWebp();
})();