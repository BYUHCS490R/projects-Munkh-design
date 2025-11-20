document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;


    if (!fullname) {
        alert("Full name is required.");
        return;
    }

    if (!email) {
        alert("Email is required.");
        return;
    }

    if (!age) {
        alert("Please select your age.");
        return;
    }

    if (Number(age) < 18) {
        alert("You must be 18 or older.");
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        age: age
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            document.getElementById("myForm").innerHTML =
                "<p>Your form has been submitted.</p>";

            document.getElementById("message").innerText = response.message;

        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send();
});
