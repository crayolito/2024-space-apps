import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements AfterViewInit {
  api?: VgApiService;
  public router = inject(Router);

  constructor() {}

  ngAfterViewInit(): void {
    if (this.api) {
      this.autoPlay();
    }
  }

  onPlayerReady(api: VgApiService): void {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(() => {
      this.autoPlay();
    });
    this.api.getDefaultMedia().subscriptions.ended.subscribe(() => {
      this.loopVideo();
    });
  }

  autoPlay(): void {
    this.api!.play();
  }

  loopVideo(): void {
    this.api!.getDefaultMedia().currentTime = 0;
    this.api!.play();
  }

  irToMapa(): void {
    window.location.href = 'https://staging.d1iy340myko62q.amplifyapp.com/';
  }

  irToCronologia(): void {
    this.router.navigate(['/linea-tiempo']);
  }
}
