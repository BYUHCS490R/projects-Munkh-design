const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
        link.classList.add("active");
    }
});


document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    

    if (!fullname || !email) {
        alert("You need a name and email.")
        return;
    }


    const formData = {
        name: fullname,
        email: email,
        
    };
    
    alert("Form Submitted");
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "final.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState === 4 & xhr.status === 200) {
            alert("Form submitted succesfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        
        } else if (xhr.readyState === 4)  
            {
            alert("Error submiting form.");
        }
    }
    xhr.send(JSON.stringify(formData));

});