
function handleSubmit(event) {
    event.preventDefault();
    const customerName = document.getElementById("name");
    const cusName = document.getElementById("cusName");
    cusName.innerText = customerName.value;  // Set the customer's name in the success message
    // Get Name for Success Message

    const status = document.getElementById("my-form-status");
    const form = document.getElementById("contact-form");
    const formData = new FormData(event.target);

    fetch("https://formspree.io/f/mqabrkye", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
          'Accept': 'application/json'
      }
    }).then(() => {
        // Show success message
        status.classList.remove("hide");
        status.classList.add("success-msg");
        form.reset()
  }).catch((error) => {
        console.log(error);
    });
}
  
let hideSuccessMessage = () => {
    const status = document.getElementById("my-form-status");
    status.classList.add("hide");
    status.classList.remove("success-msg");
    const cusName = document.getElementById("cusName");
    cusName.innerText = "";  // Clear the customer's name in the success message
};
document.addEventListener('click', hideSuccessMessage);