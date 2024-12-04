let textarea=document.querySelector('textarea')
let button = document.querySelector('button')
let speech = new SpeechSynthesisUtterance()
button.addEventListener('Convert Text to Speach',()=>{
    speech.text=textarea.value;
    speechSynthesis.speak(speech)
})