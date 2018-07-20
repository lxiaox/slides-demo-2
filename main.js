let n
init()
setInterval(()=>{
    makeLeave(getImage(x(n)))
        .one('transitionend',(x)=>{
            makeEnter($(x.currentTarget))
        })
    makeCurrent(getImage(x(n+1)))
    n++
},2000)

/***************************************************************************************/
/***************************************************************************************/

function init() {
    n=1
    for (let i = 1; i<6; i++) {
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
    let length = $('.images> img').length
     return n = n % length ? n % length : length;
}

function getImage(n) {
    return $(`.images> img:nth-child(${n})`)
}