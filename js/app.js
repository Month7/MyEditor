window.onload=function(){
    var bold=document.getElementById('bold');
    bold.onclick=function(){
        document.execCommand('bold',false,null);
    }
}