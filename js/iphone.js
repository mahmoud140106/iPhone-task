let videobtn = document.querySelectorAll('.pic-btn');
let home = document.querySelector('.home');





videobtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.controls').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#pic-slider').src = src;

        console.log(e.currentTarget.dataset.color)
        console.log(e.currentTarget.dataset.src)

        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        window.localStorage.setItem("src", e.currentTarget.dataset.src);

        home.style.backgroundColor = e.currentTarget.dataset.color;
    });
});



if (window.localStorage.getItem("color")) {
    // If There Is Color In Local Storage
    // [1] Add Color To Div
    home.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove Active Class From All Lis
    // videobtn.forEach((btn) => {
    //     btn.classList.remove("active");
    // });
    // [3] Add Active Class To Current Color
    // document.querySelector(`[data-src="${window.localStorage.getItem("src")}"]`).classList.add("active");    
}
if (window.localStorage.getItem("src")) {
    document.querySelector('#pic-slider').src =window.localStorage.getItem("src");
}