Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function ts(){
    Webcam.snap(function(data_uri){
        document.getElementById("si").innerHTML='<img src="'+data_uri+'" id="snap"/>';
    });
}
