// Forms
emailjs.init("eJhwiApVWSzOVl2so");


document.querySelector(".user-inquiry").addEventListener("submit", function(e) {
    e.preventDefault();

    // send to YOU
    emailjs.sendForm("service_n8qy0nd", "template_7q44e24", this);

    // send confirmation to USER
    emailjs.send("service_n8qy0nd", "template_fvpo3vv", {
        user_email: this.user_email.value
    });

    alert("Message sent successfully!");
    this.reset();
});