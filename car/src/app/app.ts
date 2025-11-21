import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
