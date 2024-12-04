function stream(){
    let video = document.querySelector('video')
    let option={video:true}
    navigator.mediaDevices.getUserMedia(option)
    .then(res=>video.srcObject=res)
}
function streams(){
    let video = document.querySelector('video')
    let option={video:true}
    navigator.mediaDevices.getDisplayMedia(option)
    .then(res=>video.srcObject=res)
}