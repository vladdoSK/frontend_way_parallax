const startAnimation = () =>{
    const animItems = document.querySelectorAll('._anim_items');

    if (animItems.length > 0) {

        console.log(animItems.length);

        const animOnScroll = (params) => {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                }
                else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('active');
                    }
                }
            }
        }

        window.addEventListener('scroll', animOnScroll);

        const offset = (el) => {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    }
}


setTimeout(startAnimation, 500);

