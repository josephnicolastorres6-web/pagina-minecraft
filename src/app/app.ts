import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar} from './navbar/navbar';
import { Hero } from './hero/hero';
import { Features } from './features/features';
 import { Footer } from './footer/footer';
import { ServidoresComponent} from "./servidores/servidores";

@Component({  
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, Navbar, Hero, Features, Footer, ServidoresComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'pagina-minecraft';
}