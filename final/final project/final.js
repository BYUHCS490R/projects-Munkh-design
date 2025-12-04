document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const desire = document.getElementById("desire").value;
    const budget = document.getElementById("budget").value;
    const month = document.getElementById("month").value;
    const comment = document.getElementById("comment").value;

    if (!fullname || !email) {
        alert("Name and email are required.");
        return;
    }

    const output = `
        <h2>Submission Received</h2>

        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Destination:</strong> ${desire}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Preferred Month:</strong> ${month}</p>
        <p><strong>Reason:</strong> ${comment}</p>
    `;

    document.getElementById("myForm").style.display = "none";
    document.getElementById("message").innerHTML = output;

    fetch("submit.json")
        .then(response => response.json())
        .then(data => {
            const msg = document.createElement("p");
            msg.style.fontWeight = "bold";
            msg.textContent = data.message;
            document.getElementById("message").appendChild(msg);
        });
});