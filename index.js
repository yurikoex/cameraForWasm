const startCapture = async (cb, fps = 5) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { height: 720, width: 1280 }
    });
    console.log('got stream');

    var video = document.createElement('video');
    document.body.appendChild;
    video.srcObject = stream;
    video.onloadedmetadata = err => {
      video.play();
    };
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 1280;
    canvas.height = 720;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    setInterval(() => {
      cb(canvas.toDataURL()), 1000 / fps;
    });
  } catch (err) {
    console.error(err);
  }
};

console.log('loaded');
