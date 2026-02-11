let formObj = {
    title: "",
    date: "",
    category: "",
    description: ""
};

function eventSubmitHandler(event) {
    event.preventDefault();

    formObj.title = event.target.title.value;
    formObj.date = event.target.date.value;
    formObj.category = event.target.category.value;
    formObj.description = event.target.description.value;

    if (formObj.title === "" || formObj.date === "") {
        alert("Please enter event title and date");
        return;
    }

    addEventCard(formObj);
    event.target.reset();
}

function addEventCard(data) {
    let list = document.getElementById("eventsList");

    if (list.innerHTML.includes("No events")) {
        list.innerHTML = "";
    }

    let eventDiv = document.createElement("div");
    eventDiv.className = "event";

    eventDiv.innerHTML = `
        <button class="delete-btn" onclick="deleteEvent(this)">×</button>
        <h4>${data.title}</h4>
        <div class="date">📅 ${data.date}</div>
        <div class="badge">${data.category}</div>
        <p>${data.description}</p>
    `;

    list.appendChild(eventDiv);
}

