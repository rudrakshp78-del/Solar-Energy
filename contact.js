function sendMail(event) {
    event.preventDefault();
    const templateParms = {
        first_name: document.querySelector("#first_name").value,
        last_name: document.querySelector("#last_name").value,
        Mobile: document.querySelector("#Mobile").value,
        Email: document.querySelector("#Email").value,
        Message: document.querySelector("#Message").value,
    };
    emailjs.send("service_gb0ut1h", "template_owp3saj", templateParms)
    .then(function (res) {
        alert("Thank you for solar enquiry!");
    })
    .catch(function (error) {alert("Email not sent!");})
}