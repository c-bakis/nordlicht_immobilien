
const scrollers = document.querySelectorAll('.scroller');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.inner-scroler');
        const scrollerContent = Array.from(scrollerInner.children);
        console.log("Scroller content items:", scrollerContent);
        scrollerContent.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(clone);
            console.log(item);
        });
    });
}
