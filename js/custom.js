// jquery smooth scroll //
$(document).ready(function(){
    $("a").on('click',function(event){
        if(this.hash !== ""){
            event.preventDefault();

            var hash=this.hash;

            $('html, body').animate({

                scrollTop:$(hash).offset().top
            },900,function(){
                window.location.hash=hash;
            });
        }
    });
});

// Java script page navigation

function gotoweb(){
    window.open("services.html#web","_self");
}
function gotodigital(){
    window.open("services.html#digital","_self");
}
function gotosoftware(){
    window.open("services.html#software","_self");
}
function gotoreach(){
    window.open("contactus.html","_self");
}