fetch("events.json")
.then((response) => response.json())
.then((events) => {
    const list = document.querySelector("#starred");
    events.foreach((event) => {
        const item = document.createElement("li");
        item.textcontent = '${event.name} - starred ${event.starred}';
        list.appendChild(item)
    }
,)}
)