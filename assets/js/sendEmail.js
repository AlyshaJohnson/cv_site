function sendEmail(contactForm) {
    emailjs.send("service_fllei9h", "template_apga9gd", {
            fromName: contactForm.name.value,
            fromEmail: contactForm.emailaddress.value,
            queryType: contactForm.querytype.value,
            description: contactForm.description.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        )
    return false; // To block from loading a new page
};