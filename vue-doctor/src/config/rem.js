(function(doc,win){
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' :'resize',
        recacl = function(){
            var clientWidth  = docEl.clientWidth;
            if(!clientWidth) return;
            console.log(clientWidth);
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recacl,false);
    doc.addEventListener('DOMContentLoaded',recacl,false);

})(document,window)

// fontSize = 20px;
// 屏幕宽度16rem