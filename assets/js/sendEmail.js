const serviceId = "service_fllei9h";
const templateId = "template_apga9gd"

function submitForm(contactForm) {
    let fullName = contactForm.name.value;
    let email = contactForm.emailaddress.value;
    let e = document.getElementById("querytype");
    let query = e.options[e.selectedIndex].text;
    let description = contactForm.description.value;

    validateForm(fullName, email, query, description);
    sendMail(fullName, email, query, description);
};

function validateForm(fullName, email, query, description) {
    console.log(fullName, email, query, description);

    //check if form is valid
    if ((fullName, email, query, description).length > 0) {
        document.getElementById("contact-modal-title").innerHTML = "Form Submission";
        document.getElementById("contact-modal-body").innerHTML = "Thank you for submitting your details into the form. Please wait for confirmation they have been sent to the server.";
        document.getElementById("contact-modal-button").innerHTML = 'Please wait  <i class="fa-solid fa-arrows-rotate"></i>';
        document.getElementById("form-modal").classList.add("show");
    }
    //code if no
    else {
        document.getElementById("contact-modal-title").innerHTML = "Form Submission Failed";
        document.getElementById("contact-modal-body").innerHTML = "You have not entered all required fields, please return to the form and try again.";
        document.getElementById("contact-modal-button").innerHTML = 'OK';
        okButtonBlue();
        document.getElementById("form-modal").classList.add("show");
    }
}

function sendMail(fullName, email, query, description) {
    if ((fullName, email, query, description).length > 0) {
        emailjs.send(serviceId, templateId, {
                fromName: fullName,
                fromEmail: email,
                queryType: query,
                description: description
            })
            .then(
                function (response) {
                    console.log("SUCCESS", response);
                    document.getElementById("contact-modal-title").innerHTML = "Form Submitted";
                    document.getElementById("contact-modal-body").innerHTML = "Thank you for your enquiry, your details have now been submitted. <br> I aim to respond within 2-3 days.";
                    document.getElementById("contact-modal-button").innerHTML = 'OK';
                    okButtonBlue();
                },
                function (error) {
                    console.log("FAILED", error);
                    document.getElementById("contact-modal-title").innerHTML = "Form Submission Failed";
                    document.getElementById("contact-modal-body").innerHTML = `Thank you for your enquiry. Unfortunately, there has been an error. <br> ${error.response}`;
                    document.getElementById("contact-modal-button").innerHTML = 'OK';
                    okButtonBlue();
                }
            )
        //code to reset form
        document.getElementById("contact-form").reset();
    } else {
        return false
    }
}

function hideModal() {
    if (document.getElementById("contact-modal-button").innerHTML == "OK") {
        document.getElementById("form-modal").classList.remove("show");
    }
}

function okButtonBlue() {
    if (document.getElementById("contact-modal-button").innerHTML == 'OK') {
        document.getElementById("contact-modal-button").classList.add("okButton");
    }
}