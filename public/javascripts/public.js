includescript("jquery.flexslider-min.js");
includescript("all.js");







function includescript (url){
    document.write('<script type="text/javascript" src="/public/javascript/'+ url +'"></script>');
    return false;
}