document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы <ul> списка проектов
    var webProjectList = document.getElementById("web-project-list");
    var pythonProjectList = document.getElementById("python-project-list");

    // Массив объектов с данными о проектах
    var projects = [
        { name: "spidernodes.space - лучший хостинг для ботов", url: "https://spidernodes.space/", category: "web" },
        { name: "akitiltka.space - сайт на котором вы находитесь", url: "https://akitiltka.space/index.html", category: "web" },
        { name: "shadowmanager.space - лучший дискорд бот", url: "https://shadowmanager.space/", category: "web" },
    ]
    // Добавляем каждый проект в соответствующий список
    projects.forEach(function(project) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.textContent = project.name;
        link.href = project.url;
        listItem.appendChild(link);
        
        if (project.category === "web") {
            webProjectList.appendChild(listItem);
        } else if (project.category === "python") {
            pythonProjectList.appendChild(listItem);
        }
    });
});