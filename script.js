// function play() {
//     document.getElementById('vidwrap').innerHTML = '<iframe width="480" height="360" src="http://www.youtube.com/embed/7-7knsP2n5w?autoplay=1" frameborder="0"></iframe>';
// }


// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest('.js-videoWrapper');
    videoPlay($wrapper);
  });
  
  // play the targeted video (and hide the poster frame)
  function videoPlay($wrapper) {
    var $iframe = $wrapper.find('.js-videoIframe');
    var src = $iframe.data('src');
    // hide poster
    $wrapper.addClass('videoWrapperActive');
    // add iframe src in, starting the video
    $iframe.attr('src',src);
    
    // add styling for video pop out for different breakpoints
    if (window.matchMedia('(min-width: 1200px)').matches) {
      document.querySelector(".videoWrapper").setAttribute("style", "width: 843px; height: 506px; z-index: 1000; transform: translate(-275px, -19px");
      console.log('XL');
    } else if (window.matchMedia('(min-width: 980px)').matches) {
      document.querySelector(".videoWrapper").setAttribute("style", "width: 643px; height: 406px; z-index: 1000; transform: translate(-175px, -19px");
      console.log('LG');
    } 
  }


  // add a resize
//   function myFunction(x) {
//     if (x.matches && document.querySelector('.videoWrapperActive' !== null)) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//         console.log('it works');
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes



// $min-width: (
//   xs: 0,
//   sm: 480px,
//   md: 768px,
//   lg: 980px,
//   xl: 1200px,
// );
// $max-width: (
//   xs: 479px,
//   sm: 767px,
//   md: 979px,
//   lg: 1199px,
// );
