const videoElement = document.querySelector('#my-video');
let stream = null;

const constraints = {
    audio: true, // use your headphones or be prepared for feedback
    video: true,
}

const getMicAndCamera = async () => {
    // Starting point for our app
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch {
        // User denied access to constraints
        console.log("User denied access to constraints")
    }
}

const showMyFeed = e => {
    console.log("Show my feed is working.");
    videoElement.srcObject = stream; // Set stream to video tag
    const tracks = stream.getTracks();
    console.log(tracks);
}

const stopMyFeed = e => {
    const tracks = stream.getTracks();
    tracks.forEach(track => {
        track.stop(); // disassociates the track with the source
    })
}

document.querySelector('#share').addEventListener('click', e => getMicAndCamera(e));
document.querySelector('#show-video').addEventListener('click', e => showMyFeed(e));
document.querySelector('#stop-video').addEventListener('click', e => stopMyFeed(e));
