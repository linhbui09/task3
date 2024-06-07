
var settingsMenu = document.querySelector(".settings-menu");


function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

// -----------dark mode button------------

var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
    
}

if(localStorage.getItem("theme") == "light"){

    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){

    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

function saveProfile() {
    var name = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var location = document.getElementById("location").value;
    
    // Make sure all fields are filled
    if (name && job && location) {
        var data = {
            name: name,
            job: job,
            location: location
        };

        fetch('/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert("Profile updated successfully!");
            } else {
                throw new Error('Failed to update profile');
            }
        })
        .catch(error => {
            alert("Error updating profile: " + error.message);
        });
    } else {
        alert("Please fill in all fields");
    }
}