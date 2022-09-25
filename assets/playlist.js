

window.addEventListener( "load", ev => {
    var videoList = document.querySelectorAll( "video-playlist-holder list" );
    
    videoList.forEach( vid => {
        vid.onclick = () => {
            videoList.forEach( remove => { remove.classList.remove( "active" ) } );
            vid.classList.add( "active" );
            let src = vid.querySelector( ".list-video" ).src;
            let title = vid.querySelector( ".list-title" ).innerHTML;
            document.querySelector( "main-video-holder .main-video" ).src = src;
            document.querySelector( "main-video-holder .main-video" ).play();
            document.querySelector( "main-video-holder .main-vid-title" ).innerHTML = title;
        };
    });



    var videoPoster = document.querySelectorAll( "video" );

    videoPoster.forEach( v => v.setAttribute( "poster", "../../pix/dark-matter.jpg" ) );


    var l = document.querySelectorAll( "l" );
    l.forEach( v => {
        v.addEventListener( "click", ev => {
            window.open( v.getAttribute( "href", "blank" ) ); 
        } ); 
    } );
} );