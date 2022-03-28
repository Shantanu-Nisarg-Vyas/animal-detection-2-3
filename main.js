function record() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kof4TeFmR/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

dog = 0;
cat = 0;
lion = 0;
human = 0;
bgn = 0;

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        red = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        console.log("rgb(" + red + "," + green + "," + blue + ")");

        document.getElementById("noise").innerHTML = "Noise: " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("noise").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("accuracy").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("dog_detect").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("cat_detect").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("lion_detect").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("human_detect").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("bgn_detect").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        if (results[0].label == "Background Noise") {
            bgn = bgn + 1;
            document.getElementById("bgn_detect").innerHTML = "Detected Background Noise - " + bgn;
            document.getElementById("picture").src = "156991383-cabinet-tv-in-modern-living-room-with-armchair-lamp-table-flower-and-plant-on-yellow-wall-background.webp";
            console.log(bgn);
        } else if (results[0].label == "Cat") {
            cat = cat + 1;
            document.getElementById("cat_detect").innerHTML = "Detected Cat - " + cat;
            document.getElementById("picture").src = "VSy6kJDNq2pSXsCzb6cvYF.jpeg";
            console.log(cat);
        } else if (results[0].label == "Dog") {
            dog = dog + 1;
            document.getElementById("dog_detect").innerHTML = "Detected Dog - " + dog;
            document.getElementById("picture").src = "dog-puppy-on-garden-royalty-free-image-1586966191.jpeg";
            console.log(dog);
        } else if (results[0].label == "Lion") {
            lion = lion + 1;
            document.getElementById("lion_detect").innerHTML = "Detected Lion - " + lion;
            document.getElementById("picture").src = "Lion_waiting_in_Namibia.jpeg";
            console.log(lion);
        } else if (results[0].label == "Human") {
            human = human + 1;
            document.getElementById("human_detect").innerHTML = "Detected Human - " + human;
            document.getElementById("picture").src = "fitness-sports-runner-man-jogging-beach-handsome-young-fit-sporty-male-athlete-running-outside-beautiful-training-55523028.jpeg";
            console.log(human);
        }
    }
}