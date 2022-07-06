function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'https://tse2.explicit.bing.net/th?id=OIF.2SXR%2f4LEcXEtokq0Igxm%2fQ&pid=Api&P=0&w=167&h=141';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'https://tse3.mm.bing.net/th?id=OIF.jNe%2finmJVPfGU4ncXKLEpg&pid=Api&P=0&w=167&h=167';
      cat = cat + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}
