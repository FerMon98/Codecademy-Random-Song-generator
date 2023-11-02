const moods = ['Balads', 'Sad', 'Happy', 'Party', 'RocknRoll'];

// const baladSongs = ['On the radio - Donna Summer', 'Como antes - Llane', 'Every Breath you take - The Police', 'I Have Nothing - Whitney Houston', 'Careless Whisper - George Michael'];

// const sadSongs = ['She Used To Be Mine - Sara Bareilles', 'Tu tanta falta de querer - Mon Laferte', 'Every Time We Say Goodbye - Betty Carter', 'Missed - Ella Henderson', 'Chandelier - Nossa Toca, Julian Gray']; 

// const happySongs = ['Presumida - Eddy Herrera', 'All About That Bass - Meghan Trainor', 'So What - Pink', 'Sway - Michael Bubble', 'Me Encantas - Pedro Fernandez'];

// const partySongs = ['I Will Survive - Gloria Gaynor', 'Hot Stuff - Donna Summer', 'Pa Romperla - Bad Bunny & Don Omar', 'The Nights - Avicii', 'Suavemente - Elvis Crespo'];

// const rocknrollSongs = ['Fat Bottomed Girls - Queen', 'Stayin Alive - Bee Gees', 'Howlin for You - The Blak Keys', 'Welcome to The Black Parade - My Chemical Romance', 'November Rain - Guns n Roses'];


/* Code for Displaying right songs for every mood */

// Get references to the mood and song select elements
var songDropDown = document.getElementById('song');
var moodDropDown = document.getElementById('mood');

var selected = moodDropDown.value;
var songOptions = document.getElementsByClassName('song');

function showSongs() {
    for(index = 0; index <= 25; index++)
    {
        songOptions[index];
    }
    
    if (selected === "ballads")
    {
        songOptions[0].removeAttribute("hidden");
        songOptions[1].removeAttribute("hidden");
        songOptions[2].removeAttribute("hidden");
        songOptions[3].removeAttribute("hidden");
        songOptions[4].removeAttribute("hidden");
    }
    else if(selected === "sad")
    {
        songOptions[5].removeAttribute("hidden");
        songOptions[6].removeAttribute("hidden");
        songOptions[7].removeAttribute("hidden");
        songOptions[8].removeAttribute("hidden");
        songOptions[9].removeAttribute("hidden");
    }
    else if(selected === "happy")
    {
        songOptions[10].removeAttribute("hidden");
        songOptions[11].removeAttribute("hidden");
        songOptions[12].removeAttribute("hidden");
        songOptions[13].removeAttribute("hidden");
        songOptions[14].removeAttribute("hidden");
    }
    else if(selected === "party")
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

moodDropDown.addEventListener("click", showSongs);
songDropDown.addEventListener("change", showSongs);
