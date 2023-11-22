import {useSound} from "@vueuse/sound";

export default class AudioPlayer {
    music
    play
    pause

    constructor() {
        this.music = useSound("./audios/I Knew You Were Trouble..mp3")
        this.play = this.music.play
        this.pause = this.music.pause
        this.isPlaying = this.music.isPlaying
    }
}