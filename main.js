const songs = ['https://www.youtube.com/watch?v=qqi-8nv5ngk', 'https://www.youtube.com/watch?v=1fk4HGeeIjw', 'https://www.youtube.com/watch?v=OMOGaugKpzs', 'https://www.youtube.com/watch?v=FxYw0XPEoKE', 'https://www.youtube.com/watch?v=izGwDsrQ1eQ', 'https://www.youtube.com/watch?v=53GIADHxVzM', 'https://www.youtube.com/watch?v=WT-VE9OyAJk', 'https://www.youtube.com/watch?v=lr9xbNccyVM', 'https://www.youtube.com/watch?v=uoe0qoXm2kU', 'https://www.youtube.com/watch?v=RO8ZMFo4-DY', 'https://www.youtube.com/watch?v=THeFUd72MIs', 'https://www.youtube.com/watch?v=7PCkvCPvDXk', 'https://www.youtube.com/watch?v=FJfFZqTlWrQ', 'https://www.youtube.com/watch?v=a90tZJHBklk', 'https://www.youtube.com/watch?v=L1-KQkNtUk4', 'https://www.youtube.com/watch?v=6dYWe1c3OyU', 'https://www.youtube.com/watch?v=KhcaPNuaJNU', 'https://www.youtube.com/watch?v=tK4ioPhpal4', 'https://youtu.be/UtF6Jej8yb4?si=RnB1QyotJVtdUXPN', 'https://youtu.be/WPiEbYSF9kE?si=_opi0ZoEmDMuPR8K', 'https://youtu.be/VMnjF1O4eH0?si=iEdGFMo5UG7NVaSr', 'https://youtu.be/fNFzfwLM72c?si=ux9FPqYMoh-19HhE', 'https://youtu.be/TLSpj7q6_mM?si=ymX2T7ctwT9hnaB9', 'https://youtu.be/RRKJiM9Njr8?si=RHM01xjLwKMi33u_', 'https://youtu.be/8SbUC-UaAxE?si=2Yl4qPWeHMZtDaT',];

const moods = ['Balads', 'Sad', 'Happy', 'Party', 'RocknRoll'];

const balladSongs = ['On the radio - Donna Summer', 'Como antes - Llane', 'Every Breath you take - The Police', 'I Have Nothing - Whitney Houston', 'Careless Whisper - George Michael'];

const sadSongs = ['She Used To Be Mine - Sara Bareilles', 'Tu tanta falta de querer - Mon Laferte', 'Every Time We Say Goodbye - Betty Carter', 'Missed - Ella Henderson', 'Chandelier - Nossa Toca, Julian Gray']; 

const happySongs = ['Presumida - Eddy Herrera', 'All About That Bass - Meghan Trainor', 'So What - Pink', 'Sway - Michael Bubble', 'Me Encantas - Pedro Fernandez'];

const partySongs = ['I Will Survive - Gloria Gaynor', 'Hot Stuff - Donna Summer', 'Pa Romperla - Bad Bunny & Don Omar', 'The Nights - Avicii', 'Suavemente - Elvis Crespo'];

const rocknrollSongs = ['Fat Bottomed Girls - Queen', 'Stayin Alive - Bee Gees', 'Howlin for You - The Blak Keys', 'Welcome to The Black Parade - My Chemical Romance', 'November Rain - Guns n Roses'];


/* Code for Displaying right songs for every mood */

var songDropDown = document.getElementById("song");
var moodDropDown = document.getElementById("mood");
var songLink = document.getElementById("songOutcome");
var randomSong = document.getElementById("randomSong");

var selectedSong = songDropDown.value;
var songOptions = document.getElementsByClassName("song");
var selected = moodDropDown.value;

moodDropDown.onchange = function(){
    selected = moodDropDown.value;
    showSongs();
};

songDropDown.onchange = function(){
    selectedSong = songDropDown.value;
    showSelectedLinks();
};

randomSong.onclick = function() {
    getRandomSong();
};

function showSongs() {
    for(index = 0; index < songOptions.length; index++)
    {
        songOptions[index].setAttribute('hidden', 'hidden');
    }
    
    if (selected === "ballads")
    {
        songOptions[0].removeAttribute('hidden');
        songOptions[1].removeAttribute('hidden');
        songOptions[2].removeAttribute('hidden');
        songOptions[3].removeAttribute('hidden');
        songOptions[4].removeAttribute('hidden');
    }
    else if (selected === "sad")
    {
        songOptions[5].removeAttribute('hidden');
        songOptions[6].removeAttribute('hidden');
        songOptions[7].removeAttribute('hidden');
        songOptions[8].removeAttribute('hidden');
        songOptions[9].removeAttribute('hidden');
    }
    else if (selected === "happy")
    {
        songOptions[10].removeAttribute("hidden");
        songOptions[11].removeAttribute("hidden");
        songOptions[12].removeAttribute("hidden");
        songOptions[13].removeAttribute("hidden");
        songOptions[14].removeAttribute("hidden");
    }
    else if (selected === "party")
    {
        songOptions[15].removeAttribute("hidden");
        songOptions[16].removeAttribute("hidden");
        songOptions[17].removeAttribute("hidden");
        songOptions[18].removeAttribute("hidden");
        songOptions[19].removeAttribute("hidden");
    }
    else if (selected === "rocknroll")
    {
        songOptions[20].removeAttribute("hidden");
        songOptions[21].removeAttribute("hidden");
        songOptions[22].removeAttribute("hidden");
        songOptions[23].removeAttribute("hidden");
        songOptions[24].removeAttribute("hidden");
    }
    else {
        return "pick a song"
    }
}

function showSelectedLinks () {
    let aTag = document.createElement('a');
    aTag.setAttribute('target', '_blank');
    aTag.innerHTML = songs[selectedSong]; 
    aTag.setAttribute('href', songs[selectedSong]);

    songLink.innerHTML = '';
    songLink.appendChild(aTag);
}

function getRandomSong() {
    let getMood = Math.floor(Math.random() * songs.length);
    
    let aTag = document.createElement('a');
    aTag.setAttribute('target', '_blank');
    aTag.innerHTML = 'Random Song: ' + songs[getMood];
    aTag.href = songs[getMood];
    
    songLink.innerHTML = '';
    songLink.appendChild(aTag);

    /*let getSong;
    
    if (getMood === 0) {
        getSong = (Math.floor(Math.random() * balladSongs.length));
    }
    else if (getMood === 1) {
        getSong = (Math.floor(Math.random() * sadSongs.length));
    }
    else if (getMood === 2) {
        getSong = (Math.floor(Math.random() * happySongs.length));
    }
    else if (getMood === 3) {
        getSong = (Math.floor(Math.random() * partySongs.length));
    }
    else {
        getSong = (Math.floor(Math.random() * rocknrollSongs.length));
    }

    let aTag = document.createElement('a');
    aTag.setAttribute('target', '_blank');
    aTag.innerHTML = 'Random Song: ' + songs[getMood];
    aTag.href = songs[getMood];
    
    songLink.innerHTML = '';
    songLink.appendChild(aTag);*/

}