
function gify(){
  imgg = document.getElementById("bar1").value
  imgg2 = document.getElementById("bar2").value
  imgg3 = document.getElementById("bar3").value
  text = document.getElementById("giftext").value
  console.log(imgg)
  
  gifshot.createGIF({
      gifWidth: 200,
      gifHeight: 200,
      images: [
          imgg,
          imgg2,
          imgg3
      ],
      interval: 1,
      numFrames: 10,
      frameDuration: 1,
      fontWeight: 'bold',
      fontSize: '22px',
      fontFamily: 'sans-serif',
      fontColor: '#ffffff',
      textAlign: 'center',
      text: text,
      textBaseline: 'bottom',
      sampleInterval: 10,
      numWorkers: 2
  }, function (obj) {
      if (!obj.error) {
          var image = obj.image, animatedImage = document.createElement('img');
          animatedImage.src = image;
          document.body.appendChild(animatedImage);
      }
  });
}

