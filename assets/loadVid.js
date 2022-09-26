

function loadVid() {
    
    var videourl = 'urltoyourvideo here', // set the url to your video file here
        videocontainer = document.getElementById( "videocontainer" ), // set the ID of the container that you want to insert the video in
        parameter = new Date().getMilliseconds(),  //  generate variable based on current date/time

        video = `<video id="intro-video" loop src="${videourl}?t=${parameter}"></video>`; // setup the video element

    $( videocontainer ).append( video ); // insert the video element into its container
    videocontainer.appendChild( video ); // insert the video element into its container

    videl = $( document ).find( '#intro-video' )[0]; // find the newly inserterd video
            
    videl.load(); // load the video (it will autoplay because we've set it as a parameter of the video)

}

var node = document.getElementById(videocontainer);
node.appendChild(video);
var videl = document.getElementById('#intro-video');
videl.load();