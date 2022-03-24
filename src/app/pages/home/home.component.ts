import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import Swal from 'sweetalert2';
import {YoutubeService } from '../../services/youtube.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos:Video[]=[];
  constructor(
    private service:YoutubeService
  ) { }

  ngOnInit(): void {
    this.cargarVideos();
  }
  cargarVideos(){
    this.service.getVideos().subscribe(resp=>{
      this.videos.push(...resp);
    })
  }
  mostrarVideo(video:Video){
    Swal.fire({
      html: `
      <h4>${video.title}</h4><br>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/${video.resourceId.videoId}
      " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    })
  }
}
