//Forms index page, locations, contact us
emailjs.init("MNHe7JFtNAkuDxMOu");

document.querySelector("#formfill").addEventListener("submit", function(e) {
    e.preventDefault();

    // send message to YOU
    emailjs.sendForm(
        "service_bb8j8hn",
        "template_5zyr7gu",
        this
    )
    .then(() => {
        // AFTER it succeeds → send confirmation to USER
        return emailjs.send(
            "service_bb8j8hn",
            "template_fkbwquu",
            {
                user_email: this.user_email.value,
                title: this.title.value,
                message: this.message.value
            }
        );
    })
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
    })
    .catch((error) => {
        console.log("Error:", error);
        alert("Something went wrong");
    });
});