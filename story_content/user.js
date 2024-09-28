function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6G1HGVynd13":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="music.mp3";
audio.load();
audio.play();
}

