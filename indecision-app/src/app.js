const app = {
    title: "Indecision App",
    subtitle: "Great people take great decisions",
    options: ["List Item 1", "List Item 2"]
}
const template = (
    <div>
        {(app.title) && <h1>{app.title}</h1>}
        <p>{app.subtitle}</p>
        {app.options.length>0 ? "Here are your options" : "No Options"}
        <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
        </ol>
    </div>
);

const user = {
    name: "Jatinder Arora",
    age: 44,
    location: "New Delhi, India"
}

const getLocation = (location)=>{
    if(location){
        return <p>Location: {location}</p> ;
    }
}

const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}   
    </div>
);



const appRoot = document.getElementById("app")
ReactDOM.render(templateTwo, appRoot)