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

var songs_lists=document.getElementsByClassName('songs-lists');
var flage=false;
var i;
var audio;
for(i=0;i<songs_lists.length;i++)
{
    songs_lists[i].addEventListener('click',function()
    {
        if(audio!=undefined)
        {
            console.log('pre paused');
            // flage=false;
           audio.pause();
        }
        console.log(audio);
        var path=this.getAttribute('data-path');
        var song_name=this.getAttribute('data-song');
        console.log(song_name);
        audio=new Audio(path);
        if(flage==false)
       { 
        console.log('play');
           flage=true;
           audio.play();
       }
       else  
       {
        console.log('pause');
         flage=false;
         audio.pause();
       }
    })
}