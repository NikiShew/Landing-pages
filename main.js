document.addEventListener('mousemove', function (e) {
    // Получаем текущие координаты мыши
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let distanceX = window.innerWidth / 2 - mouseX;
    let distanceY = window.innerHeight / 2 - mouseY;

    let movingText = document.querySelectorAll('.moving');
    let purpleBall = document.querySelector(".moving-slow");
    purpleBall.style.transform = `translate(${distanceX / 500}px, ${distanceY / 500}px)`



    movingText.forEach(elem => {
        elem.style.transform = `translate(${(distanceX / 100) + 10}px, ${(distanceY / 100) + 10}px)`
    })

    

});
