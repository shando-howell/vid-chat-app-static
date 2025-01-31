let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
    console.log("Start recording");
    recordedBlobs = []; // an array to hold the blobs for playback
    mediaRecorder = new MediaRecorder(stream); // make a media recorder from the constructor
    mediaRecorder.ondataavailable = e => {
        // ondataavailable will run when the stream ends, or stopped, or we specifically 
        console.log("Data is available for the media recorder!");
        recordedBlobs.push(e.data)
    }
    mediaRecorder.start();
}

const stopRecording = () => {
    console.log("Stop recording")
    mediaRecorder.stop();
}

const playRecording = () => {
    console.log("Play recording")
    const superBuffer = new Blob(recordedBlobs); // supperBuffer is a superBuffer of our array of blobs
    const recordedVideoElement = document.querySelector('#other-video');
    recordedVideoElement.src = window.URL.createObjectURL(superBuffer);
    recordedVideoElement.controls = true;
    recordedVideoElement.play();
}