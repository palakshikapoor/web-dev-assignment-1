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

