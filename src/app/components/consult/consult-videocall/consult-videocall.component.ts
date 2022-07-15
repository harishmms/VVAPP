import { Component, OnInit } from "@angular/core";
import { Peer } from "peerjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-consult-videocall",
  templateUrl: "./consult-videocall.component.html",
  styleUrls: ["./consult-videocall.component.css"],
})
export class ConsultVideocallComponent implements OnInit {
  private peer: Peer;
  peerId: any;
  videoElement: any;
  localStream: any;
  remotevideo: any;
  constructor(private Router:Router) {
    this.peer = new Peer();
  }
  ngOnInit() {
    this.getPeerId();
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.localStream = stream;
      this.videoElement = document.getElementById("localVideo");
      this.videoElement.srcObject = this.localStream;
      this.videoElement.onloadedmetadata = () => this.videoElement.play();
    });
  }
  private getPeerId = () => {
    this.peer.on("open", (id) => {
      this.peerId = id;
    });
    this.peer.on("call", (call) => {
      call.answer(this.localStream);
      call.on("stream", (stream) => {
        this.remotevideo = document.getElementById("remoteVideo");
        this.remotevideo.srcObject = stream;
        this.remotevideo.onloadedmetadata = () => this.remotevideo.play();
      });
    });
  };
  getconn(remotePeerId: any) {
    const call = this.peer.call(remotePeerId, this.localStream);
    call.on("stream", (stream) => {
      this.remotevideo = document.getElementById("remoteVideo");
      this.remotevideo.srcObject = stream;
      this.remotevideo.onloadedmetadata = () => this.remotevideo.play();
    });
  }
  mutes() {
    console.log("mute");
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        this.localStream = stream;
        const videoElement = document.getElementById("localVideo");
        const remoteVideo = document.getElementById("remoteVideo");
        this.videoElement.srcObject = this.localStream;
        this.videoElement.onloadedmetadata = () => this.videoElement.play();
      });
  }
  unmutes() {
    console.log("mute");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
       this.localStream = stream;
        const videoElement = document.getElementById("localVideo");
        const remoteVideo = document.getElementById("remoteVideo");
        this.videoElement.srcObject = this.localStream;
        this.videoElement.onloadedmetadata = () => this.videoElement.play();
      });
  }
   off () {//toggle state
   this.localStream.getAudioTracks()[0].enabled = !this.localStream.getAudioTracks()[0].enabled;
  }
   multioffv() {
    // this.localStream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
    this.localStream.getVideoTracks()[0].enabled = !this.localStream.getVideoTracks()[0].enabled;
    console.log("on ");
  }
  closes() {
    if (confirm("do you want end the meet")) {
      console.log("bye bye");
      // window.location.href = "tata.php"
      this.Router.navigateByUrl('Home');
    }
  }

}
