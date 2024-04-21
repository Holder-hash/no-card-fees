import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {OverviewComponent} from "./overview/overview.component";
import {AdvantagesComponent} from "./advantages/advantages.component";
import {MobileComponent} from "./mobile/mobile.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, OverviewComponent, AdvantagesComponent, MobileComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'no-card-fees';
}
