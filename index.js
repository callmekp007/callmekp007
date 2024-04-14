$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Creator", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Creator", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

const downloadButton = document.querySelector(".download-button");
const fileLink =
  "https://drive.google.com/file/d/1jkyiyq7YWzWpg24D1CCW4HD5WQeahhq_/view?usp=drivesdk";

const initializeTimer = () => {
  if (downloadButton.classList.contains("disable-timer")) {
    return (location.href = fileLink);
  }
  let timer = downloadButton.dataset.timer;
  downloadButton.classList.add("timer");
  downloadButton.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (downloadButton.innerHTML = `Your download will begin in <b>${timer}</b> seconds`);
    }
    clearInterval(initCounter);
    location.href = fileLink;
    downloadButton.innerText = "Your file is downloading...";
    setTimeout(() => {
      downloadButton.classList.replace("timer", "disable-timer");
      downloadButton.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                               <span class="text">Download Again</span>`;
    }, 3000);
  }, 1000);
};

downloadButton.addEventListener("click", initializeTimer);


// document.onkeydown = function (a) {
//     if (a.ctrlKey && a.key == 66) {
//         box.style.display = "none";
//     }
//     else {
//         return false;
//     }
// }




function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "callmekp007";
    const templateID = "template_fp5brov";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  