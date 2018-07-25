let n
let length
init()
let timer = setTimer()

document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setTimer()
    }
})
/***************************************************************************************/
/***************************************************************************************/
function setTimer(){
    return setInterval(()=>{
        makeLeave(getImage(x(n)))
            .one('transitionend',(e)=>{
                makeEnter($(e.currentTarget))
            })
        makeCurrent(getImage(x(n+1)))
        n++
    },2000)
}
function init() {
    n = 1
    length = $('.images> img').length
    for (let i = 1; i<=length; i++) {
        if(i === 1) {makeCurrent(getImage(i))}
        else {makeEnter(getImage(i))}
    }
}
function makeCurrent($node) {
    return $node.removeClass('leave enter').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}

function x(n) {
    return n % length ? n % length : length
}

function getImage(n) {
    return $(`.images> img:nth-child(${n})`)
}