//connect laptop to web cam
let video=document.getElementById('video6');
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true})
    .then(function(s){
        video.srcObject=s;
    })
    .catch(function(err){
        console.log(err);
    });
}else{
        console.log('No');
}

//pause video
function togglePlayPause(videoId, buttonId) {
    var video = document.getElementById(videoId);
    var button = document.getElementById(buttonId);

    if (video.paused) {
        video.play();
        button.textContent = "Pause";
    } else {
        video.pause();
        button.textContent = "Play";
    }
}
//thermal effect
    const video1 = document.getElementById('video1');
    const thermal1 = document.getElementById('thermal1');
    thermal1.addEventListener('click',()=>{
        if(!video1.classList.contains('thermal-effect')){
            video1.classList.add('thermal-effect');
            thermal1.textContent="Remove effect";
        }
        else{
            video1.classList.remove('thermal-effect');
            thermal1.textContent='Thermal Mode';
        }
    });


    const video2 = document.getElementById('video2');
    const thermal2 = document.getElementById('thermal2');
    thermal2.addEventListener('click',()=>{
        if(!video2.classList.contains('thermal-effect')){
            video2.classList.add('thermal-effect');
            thermal2.textContent="Remove effect";
        }
        else{
            video2.classList.remove('thermal-effect');
            thermal2.textContent='Thermal Mode';
        }
    });


    const video3 = document.getElementById('video3');
    const thermal3 = document.getElementById('thermal3');
    thermal3.addEventListener('click',()=>{
        if(!video3.classList.contains('thermal-effect')){
            video3.classList.add('thermal-effect');
            thermal3.textContent="Remove effect";
        }
        else{
            video3.classList.remove('thermal-effect');
            thermal3.textContent='Thermal Mode';
        }
    });


    const video4 = document.getElementById('video4');
    const thermal4 = document.getElementById('thermal4');
    thermal4.addEventListener('click',()=>{
        if(!video4.classList.contains('thermal-effect')){
            video4.classList.add('thermal-effect');
            thermal4.textContent="Remove effect";
        }
        else{
            video4.classList.remove('thermal-effect');
            thermal4.textContent='Thermal Mode';
        }
    });


    const video5 = document.getElementById('video5');
    const thermal5 = document.getElementById('thermal5');
    thermal5.addEventListener('click',()=>{
        if(!video5.classList.contains('thermal-effect')){
            video5.classList.add('thermal-effect');
            thermal5.textContent="Remove effect";
        }
        else{
            video5.classList.remove('thermal-effect');
            thermal5.textContent='Thermal Mode';
        }
    });


    const video6 = document.getElementById('video6');
    const thermal6 = document.getElementById('thermal6');
    thermal6.addEventListener('click',()=>{
        if(!video6.classList.contains('thermal-effect')){
            video6.classList.add('thermal-effect');
            thermal6.textContent="Remove effect";
        }
        else{
            video6.classList.remove('thermal-effect');
            thermal6.textContent='Thermal Mode';
        }
    });

    
    const video7 = document.getElementById('video7');
    const thermal7 = document.getElementById('thermal7');
    thermal7.addEventListener('click',()=>{
        if(!video7.classList.contains('thermal-effect')){
            video7.classList.add('thermal-effect');
            thermal7.textContent="Remove effect";
        }
        else{
            video7.classList.remove('thermal-effect');
            thermal7.textContent='Thermal Mode';
        }
    });

    
    const video8 = document.getElementById('video8');
    const thermal8 = document.getElementById('thermal8');
    thermal8.addEventListener('click',()=>{
        if(!video8.classList.contains('thermal-effect')){
            video8.classList.add('thermal-effect');
            thermal8.textContent="Remove effect";
        }
        else{
            video8.classList.remove('thermal-effect');
            thermal8.textContent='Thermal Mode';
        }
    });

    
    const video9 = document.getElementById('video9');
    const thermal9 = document.getElementById('thermal9');
    thermal9.addEventListener('click',()=>{
        if(!video9.classList.contains('thermal-effect')){
            video9.classList.add('thermal-effect');
            thermal9.textContent="Remove effect";
        }
        else{
            video9.classList.remove('thermal-effect');
            thermal9.textContent='Thermal Mode';
        }
    });

    
    const video10 = document.getElementById('video10');
    const thermal10 = document.getElementById('thermal10');
    thermal10.addEventListener('click',()=>{
        if(!video10.classList.contains('thermal-effect')){
            video10.classList.add('thermal-effect');
            thermal10.textContent="Remove effect";
        }
        else{
            video10.classList.remove('thermal-effect');
            thermal10.textContent='Thermal Mode';
        }
    });

    
    const video11 = document.getElementById('video11');
    const thermal11 = document.getElementById('thermal11');
    thermal11.addEventListener('click',()=>{
        if(!video11.classList.contains('thermal-effect')){
            video11.classList.add('thermal-effect');
            thermal11.textContent="Remove effect";
        }
        else{
            video11.classList.remove('thermal-effect');
            thermal11.textContent='Thermal Mode';
        }
    });

    
    const video12 = document.getElementById('video12');
    const thermal12 = document.getElementById('thermal12');
    thermal12.addEventListener('click',()=>{
        if(!video12.classList.contains('thermal-effect')){
            video12.classList.add('thermal-effect');
            thermal12.textContent="Remove effect";
        }
        else{
            video12.classList.remove('thermal-effect');
            thermal12.textContent='Thermal Mode';
        }
    });


//menu
    
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Optional: Close the dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});