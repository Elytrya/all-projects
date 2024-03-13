document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы <ul> списка проектов
    var webProjectList = document.getElementById("web-project-list");
    var pythonProjectList = document.getElementById("python-project-list");

    // Массив объектов с данными о проектах
    var projects = [
        { name: "spidernodes.space", url: "https://github.com/Akitilltka/SpiderNodes", category: "web" },
        { name: "akitiltka.space", url: "https://github.com/Akitilltka/all-projects", category: "web" },
        { name: "shadowmanager.space", url: "https://github.com/Akitilltka/shadowmanager", category: "web" },
        { name: "warivetryproject.xyz [OLD]", url: "https://github.com/Akitilltka/WarivetryProject", category: "web" },
        { name: "akitiltka.space [OLD]", url: "https://github.com/Akitilltka/akitiltka", category: "web" },
        { name: " akitilltka.github.io/lousky [OLD]", url: "https://github.com/Akitilltka/lousky", category: "web" },
        { name: "akitilltka.github.io/rilikclient [OLD]", url: "https://github.com/Akitilltka/rilikclient", category: "web" },
        { name: " rillikclienthack.fun [VUE.JS] [OLD]", url: "https://github.com/Akitilltka/rillikclienthack.fun", category: "web" },
        { name: "jokeapi_vuejs [OLD]", url: "https://github.com/Akitilltka/jokeapi_vuejs", category: "web" },
        { name: " akitiltka.space [VUE.JS] [OLD]", url: "https://github.com/Akitilltka/akitiltka.space", category: "web" },
        // Добавьте здесь остальные веб-проекты

        // Пример Python-проекта
        { name: "requestmanager", url: "https://github.com/Akitilltka/requestmanager", category: "python" },
        { name: "Mineparser [Не сделано]", url: "https://github.com/Akitilltka/Mineparser", category: "python" },
        { name: "PCControl", url: "https://github.com/Akitilltka/PCControl.py", category: "python" },
        { name: "TimeControl", url: "https://github.com/Akitilltka/TimeControll", category: "python" },
        { name: "FontsChanger", url: "https://github.com/Akitilltka/FontChanger", category: "python" },
        // Добавьте здесь остальные Python-проекты
    ];

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