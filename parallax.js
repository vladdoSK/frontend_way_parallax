window.onload = () => {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human');

        const speed = 0.05;

        const forClouds = 40;
        const forHuman = 10;
        const forMountains = 20;

        let positionX = 0;
        let positionY = 0;
        let coordXprocent = 0,
            coordYprocent = 0;

        function setMousePrallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;

            requestAnimationFrame(setMousePrallaxStyle);
        }

        setMousePrallaxStyle();

        parallax.addEventListener('mousemove', function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }
}