function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("Musica",true);
VideoSetVolume("Video",0);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();


}

function Button1_OnClick(){
StackTrace="Button1.On Click";
GotoSceneNameAndPlay("Scene2",0);
SoundPlay("click",false);

}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.On Click";
VideoSetVolume("Video",100);
SoundPlay("click",false);
}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.On Release";
VideoSetVolume("Video",0);

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.On Click";
VideoPause("Video");
SoundPlay("click",false);
}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("Scene1",0);
SoundPlay("click",false);
}

function ToggleButton3_OnClick(){
StackTrace="ToggleButton3.On Click";
SoundPause("Musica");
SoundPlay("click",false);

}

function ToggleButton3_OnRelease(){
StackTrace="ToggleButton3.On Release";
SoundPlay("Musica",false);

}

