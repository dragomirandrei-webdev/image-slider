(function () {
    const buttons = document.querySelectorAll('.btn');
    const imgDIV = document.querySelector('.img-container');
    let counter = 0;

    const pictures = [
        "imgBG-0",
        "imgBG-1",
        "imgBG-2",
        "imgBG-3",
        "imgBG-4"
    ];

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imgDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
            }
            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
            }
        })
    })
})();