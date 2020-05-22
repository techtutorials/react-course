"use strict";

var app = {
    title: "Indecision App",
    subtitle: "Great people take great decisions",
    options: ["List Item 1", "List Item 2"]
};
var template = React.createElement(
    "div",
    null,
    app.title && React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? "Here are your options" : "No Options",
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "List Item 1"
        ),
        React.createElement(
            "li",
            null,
            "List Item 2"
        )
    )
);

var user = {
    name: "Jatinder Arora",
    age: 44,
    location: "New Delhi, India"
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age > 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
