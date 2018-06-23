(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    function addImage() {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const data = JSON.parse(this.response);


        console.log(data.results[0]);
        figcaption.innerText = data.results[0].description;
        img.src = data.results[0].links.download;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        responseContainer.appendChild(figure);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.setRequestHeader('Authorization', 'Client-ID 1067c16bd4533194c80be19cb6382f26c98eaeb51c96ba1d92bc0a22a845fef5');
        xhr.onload = addImage;

        xhr.send();
    });
})();
