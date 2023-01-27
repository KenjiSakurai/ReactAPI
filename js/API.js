// let GifAPI = "https://api.giphy.com/v1/gifs/search?api_key=BayFejsAdYiXWs7r06YPqeOTVR0Ac0G2&q=" + namn + "&limit=25&offset=0&rating=g&lang=en";
// let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + weather + "&units=metric&appid=eb05bb1d4707c64657317872a9e34b52&units=metric";



function getData(namn){
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=BayFejsAdYiXWs7r06YPqeOTVR0Ac0G2&q=${namn}&limit=25&offset=0&rating=g&lang=en)// promise`)
        .then(data => data.json())
        .then(data => data)
}