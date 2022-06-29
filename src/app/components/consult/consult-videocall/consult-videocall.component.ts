import { Component, OnInit } from '@angular/core';
import{Peer}from 'peerjs';
@Component({
  selector: 'app-consult-videocall',
  templateUrl: './consult-videocall.component.html',
  styleUrls: ['./consult-videocall.component.css']
})
export class ConsultVideocallComponent implements OnInit {
  private peer:Peer;
  peerId:any;
  videoElement:any;
  localStream:any;
   remotevideo:any;
  constructor() {   this.peer=new Peer();}

  ngOnInit() {


    this.getPeerId();
  navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=>{
       this.localStream=stream;
  this.videoElement=document.getElementById("localVideo");
   this. videoElement.srcObject =this.localStream;
     this.videoElement.onloadedmetadata=()=>this.videoElement.play();
   });

  }
   private getPeerId = () => {
    this.peer.on('open', (id) => {
      this.peerId = id;
    });
  
   this.peer.on("call",call=>{
    call.answer(this.localStream);
    call.on("stream",stream=>{
      this.remotevideo=document.getElementById("remoteVideo");
      this.remotevideo.srcObject=stream;
      this.remotevideo.onloadedmetadata=()=>this.remotevideo.play();
    });
  });
}


getconn(remotePeerId:any){
  const call=this.peer.call(remotePeerId,this.localStream);
  call.on("stream",stream=>{
    this.remotevideo=document.getElementById("remoteVideo");
    this.remotevideo.srcObject=stream;
    this.remotevideo.onloadedmetadata=()=>this.remotevideo.play();
  });
}
}
