const form = document.querySelector("#air_hoagie_form");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let fname = document.querySelector("#fname");
    let lname = document.querySelector("#lname");
    let age = document.querySelector("#age");
    let gender = document.querySelector("input[type='radio']:checked");
    let location = document.querySelector("#location");
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    let allergies = [];

    checkboxes.forEach(function(checkbox) {
        allergies.push(checkbox.value);
    });

    let alert_msg = 
    `   First Name: ${fname.value}\n
    Last Name: ${lname.value}\n
    Age ${age.value}\n
    Gender: ${gender.value}\n
    Location: ${location.value}\n
    Dietary Restrictions: ${allergies.join(',')}\n
    `;
    alert(alert_msg);
});
