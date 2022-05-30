// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

    let flag = 0;
	scrl();

    var passiveSupported = false;

    try {
        var options = Object.defineProperty({}, "passive", {
            get: function() {
                passiveSupported = true;
            }
        });

        console.log(passiveSupported);

        window.addEventListener("scroll", (e)=> {
            scrl();
        }, true);
    } catch(err) {
        console.log(err);
    }

	

    function scrl() {
        let height = window.pageYOffset;
        if (height > 100 && flag) {
            flag = 0;
            toggleNav(flag);
        } else if (height <= 100 && !flag) {
            flag = 1;
            toggleNav(flag);
        }
    }

})

function toggleNav(flag){

    let nav = document.querySelector('.nav');

    if (!flag) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }

}

function addBg(){
    top.classList.add('top-bg');
}
function removeBg(){
    top.classList.remove('top-bg');
}
