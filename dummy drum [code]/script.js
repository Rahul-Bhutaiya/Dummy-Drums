const allKeys=document.querySelectorAll('div[class="key"]');
const allAudio=document.querySelectorAll('audio');

allKeys.forEach((key,index)=>{
    key.addEventListener('click',()=>{
        makeSound(index);
    });
});

function makeSound(index){
    allKeys[index].classList.add('active');
    setTimeout(()=>{
        allKeys[index].classList.remove('active');
    },100);
    allAudio[index].currentTime=0;
    allAudio[index].play();
}

function makeSound2(e){
    const divElement=document.querySelector(`div[key-code="${e.keyCode}"]`);
    const audioElement=document.querySelector(`audio[key-code="${e.keyCode}"]`);

    if(!divElement) return;

    divElement.classList.add('active');
    setTimeout(()=>{
        divElement.classList.remove('active');
    },100);

    audioElement.currentTime=0;
    audioElement.play();

}

window.addEventListener('keydown',makeSound2);