var valGenre;
var emisoraActual;


document.getElementById('parteUno').addEventListener('submit', function(event) {
   event.preventDefault(); // Evitar el envío del formulario 
   var valGenre = document.getElementById('genre').value;
   console.log('Género enviado:', valGenre);
   
   var container = document.getElementById('selectorRadio');
       
   var show_stations = function(stations){
     var buffer = [];
     
     stations.forEach(function(station){


 buffer.push('<input type="radio" name="estacion" value=', '"https://stream.laut.fm/',station.name,'">','<label for="estacion">',station.name, '</label>', '<br />') ;
       
     });
     
     container.innerHTML = buffer.join('');

   };
 
 //  laut.fm.stations.genre('Rock', show_stations);
var fetchStations = function(genre, order, limit){
  var url = `https://api.laut.fm/stations/genre/${genre}?order=${order}&limit=${limit}`;
  fetch(url)
   .then(response => response.json())
   .then(data => show_stations(data))
   .catch(error => console.error('Error:', error));
  };
//     fetchStations('Rock', 'desc',5);  
fetchStations(valGenre, 'desc',5);  
 

   // Ocultar el paso 1 y mostrar el paso 2 
   document.getElementById('parteUno').style.display = 'none'; 

   document.getElementById('parteDos').style.display = 'block'; });



   document.getElementById('parteDos').addEventListener('change', function(event) {

    event.preventDefault(); // Evitar el envío del formulario 
    if(event.target.name === 'estacion'){
      var opcionSeleccionada = event.target.value;
      console.log(opcionSeleccionada);
      emisoraActual = opcionSeleccionada;
      updateAudioPlayer(emisoraActual);
    } 
    console.log("emisora actual : ",emisoraActual);
 });


// Datos del stream o archivo de audio
const audioSource = "https://stream.laut.fm/smooth-jazz";

// Función para actualizar el reproductor de audio
function updateAudioPlayer(source) {
    const audioPlayer = document.getElementById('reproductorRadio');
    audioPlayer.src = source;
    audioPlayer.load(); // Cargar el nuevo archivo
}

// Llamar a la función para actualizar el reproductor con la nueva fuente
updateAudioPlayer(audioSource);

/*
function infoPistaActual(source){
  const info = document.getElementById('cancioncita');



}
*/
