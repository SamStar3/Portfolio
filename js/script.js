/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/



// document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent the default form submission
  
    // const fullName = document.getElementById('fullName').value;
    // const email = document.getElementById('email').value;
    // const mobileNumber = document.getElementById('mobileNumber').value;
    // const emailSubject = document.getElementById('emailSubject').value;
    // const messageOne = document.getElementById('message').value;

// <script src="https://smtpjs.com/v3/smtp.js"></script>    
  
//      Email.send({
//       Host : "smtp.gmail.com",
//       Username : "samstar2809@gmail.com",
//       Password : "SamStar@2002#",
//       To : 'samstar2809@gmail.com',
//       From : document.getElementById("email").value,
//       Subject : emailSubject,
//       Body : `
//       ${
//         fullName,
//         email,
//         mobileNumber,
//         emailSubject,
//         messageOne
//       }
//       `
//     }).then(
//     message => alert(message)
//     );
  
//     document.getElementById('myForm').reset();
    
//   });

const form = document.querySelector("form");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");
const emailSubject = document.getElementById("emailSubject");
const messageOne = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Number: ${mobileNumber.value}<br>
    Email Subject: ${emailSubject.value}<br> Message: ${messageOne.value}`;

    Email.send({

        SecureToken : "cffcbf50-78c5-4a71-9d98-f833d2d851f2 ",
        To : 'samstar2809@gmail.com',
        From : "samstar2809@gmail.com",
        Subject : emailSubject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message Send Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})