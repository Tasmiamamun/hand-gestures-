prediction1=""
prediction2=""


Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
})


Webcam.attach("#camera")


function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_img">'
    })
}


function speak(){
var synth=window.speechSynthesis;
speak_data1="The first prediction is"+prediction1
speak_data2="The first prediction is"+prediction2
utter=new SpeechSynthesisUtterance(speak_data1+speak_data2)
synth.speak(utter)
}