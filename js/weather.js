var button=document.querySelector('.button')
var inputvalue=document.querySelector('.inputval')
var city=document.querySelector('.name')
var temperature=document.querySelector('.temp')
var humidity=document.querySelector('.humid')
var forecast=document.querySelector('.fore')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=44028d7d983b76f9b36eb38db5ff7d4d&units=metric')
    .then(response =>response.json()).then(data =>{
    var nameValue=data['name'];
    var tempValue=data['main']['temp'];
    var humidValue=data['main']['humidity'];
    var descValue=data['weather'][0]['description'];

    city.innerHTML=nameValue;
    temperature.innerHTML=tempValue;
    humidity.innerHTML=humidValue;
    forecast.innerHTML=descValue;
    console.log(data);
    })  
    .catch(err =>alert("Wrong City name"))
})