/*var song=document.getElementById('levitating-song');
var path=song.getAttribute('data-path')
var audio=new Audio(path);
let flage=false;
song.addEventListener('click',function()
{
    console.log('clicked');
    if(flage==false)
    {
        flage=true;
       audio.play();
       console.log('play');
    }
    else if(flage==true) 
    {

        
        console.log('pause');
        audio.pause();
        flage=false; 
    }
});*/

function song_list(name,image,path)
{
    this.name=name;
    this.image=image;
    this.path=path;
}

song_list.prototype.getname=function()
{
    return this.name;
}

song_list.prototype.getimage=function()
{
    return this.image;
}

song_list.prototype.getpath=function()
{
    return this.path;
}

var Levitating=new song_list("Levitating","media/levitating.jpg","media/Dua Lipa - Levitating Featuring DaBaby (Official Music Video).mp3");
var content=document.getElementById('content');
let flage=false;
window.addEventListener('click',function()
{
    console.log('clicked');
    var object=this.window.getAttribute('data-song');
    var name=object.getname();
    var image=object.getimage();
    var path=object.getpath();
    var audio=new Audio(path);
    if(flage==false)
        audio.play();
});
