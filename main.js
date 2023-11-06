const songs = ['https://www.youtube.com/watch?v=qqi-8nv5ngk', 'https://www.youtube.com/watch?v=1fk4HGeeIjw', 'https://www.youtube.com/watch?v=OMOGaugKpzs', 'https://www.youtube.com/watch?v=FxYw0XPEoKE', 'https://www.youtube.com/watch?v=izGwDsrQ1eQ', 'https://www.youtube.com/watch?v=53GIADHxVzM', 'https://www.youtube.com/watch?v=WT-VE9OyAJk', 'https://www.youtube.com/watch?v=lr9xbNccyVM', 'https://www.youtube.com/watch?v=uoe0qoXm2kU', 'https://www.youtube.com/watch?v=RO8ZMFo4-DY', 'https://www.youtube.com/watch?v=THeFUd72MIs', 'https://www.youtube.com/watch?v=7PCkvCPvDXk', 'https://www.youtube.com/watch?v=FJfFZqTlWrQ', 'https://www.youtube.com/watch?v=a90tZJHBklk', 'https://www.youtube.com/watch?v=L1-KQkNtUk4', 'https://www.youtube.com/watch?v=6dYWe1c3OyU', 'https://www.youtube.com/watch?v=KhcaPNuaJNU', 'https://www.youtube.com/watch?v=tK4ioPhpal4', 'https://youtu.be/UtF6Jej8yb4?si=RnB1QyotJVtdUXPN', 'https://youtu.be/WPiEbYSF9kE?si=_opi0ZoEmDMuPR8K', 'https://youtu.be/VMnjF1O4eH0?si=iEdGFMo5UG7NVaSr', 'https://youtu.be/fNFzfwLM72c?si=ux9FPqYMoh-19HhE', 'https://youtu.be/TLSpj7q6_mM?si=ymX2T7ctwT9hnaB9', 'https://youtu.be/RRKJiM9Njr8?si=RHM01xjLwKMi33u_', 'https://youtu.be/8SbUC-UaAxE?si=2Yl4qPWeHMZtDaT',];

const moods = ['Balads', 'Sad', 'Happy', 'Party', 'RocknRoll'];

const balladSongs = ['On the radio - Donna Summer', 'Como antes - Llane', 'Every Breath you take - The Police', 'I Have Nothing - Whitney Houston', 'Careless Whisper - George Michael'];

const sadSongs = ['She Used To Be Mine - Sara Bareilles', 'Tu tanta falta de querer - Mon Laferte', 'Every Time We Say Goodbye - Betty Carter', 'Missed - Ella Henderson', 'Chandelier - Nossa Toca, Julian Gray']; 

const happySongs = ['Presumida - Eddy Herrera', 'All About That Bass - Meghan Trainor', 'So What - Pink', 'Sway - Michael Bubble', 'Me Encantas - Pedro Fernandez'];

const partySongs = ['I Will Survive - Gloria Gaynor', 'Hot Stuff - Donna Summer', 'Pa Romperla - Bad Bunny & Don Omar', 'The Nights - Avicii', 'Suavemente - Elvis Crespo'];

const rocknrollSongs = ['Fat Bottomed Girls - Queen', 'Stayin Alive - Bee Gees', 'Howlin for You - The Blak Keys', 'Welcome to The Black Parade - My Chemical Romance', 'November Rain - Guns n Roses'];

/* Code for Displaying right songs for every mood */

var moodDropDown = document.getElementById("mood");
var songDropDown = document.getElementById("song");
var songLink = document.getElementById("songOutcome");
var randomSong = document.getElementById("randomSong");

var selected = moodDropDown.value;
var selectedSong = songDropDown.value;

moodDropDown.onchange = function(){
    selected = moodDropDown.value;
    addDropdownOptions(songDropDown, selected);
};

songDropDown.onchange = function(){
    selectedSong = songDropDown.value;
    showSelectedLinks(selected);
};

randomSong.onclick = function() {
    getRandomSong();
};


function addDropdownOptions(dropDown, selectedMood) {
    dropDown.innerHTML = '';
    let option = document.createElement('option');
    option.innerText = 'Pick One';
    option.value = 'Pick One';
    dropDown.appendChild(option)


    currentSongs = [];
    if(selectedMood === "0") {
        currentSongs = balladSongs;
    }
    else if(selectedMood === "1") {
        currentSongs = sadSongs;
    }
    else if(selectedMood === "2") {
        currentSongs = happySongs;
    }
    else if(selectedMood === "3") {
        currentSongs = partySongs;
    }
    else {
        currentSongs = rocknrollSongs;
    }

    for(var index = 0; index < 5; index++)
    {
        songOptions = document.createElement('option');
        songOptions.innerText = currentSongs[index];
        songOptions.className = 'song';
        songOptions.value = index;
        dropDown.appendChild(songOptions);   
    }
    
}

function showSelectedLinks(selectedValue) {

    index = parseInt(selectedValue) * 5;
    songIndex = parseInt(selectedSong) + index;

    let aTag = document.createElement('a');
    aTag.setAttribute('target', '_blank');
    aTag.innerHTML = songs[songIndex]; 
    aTag.setAttribute('href', songs[songIndex]);

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
}

/* var songOptions = document.getElementsByClassName("song");
var option = '<option class="song" value='+ index +'>' + currentSongs[index] +'</option>';
dropDown.appendChild('<option value="pick">Pick one</option>');

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

function getRandomSong() {
       let getSong;
    
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
    songLink.appendChild(aTag);
}*/