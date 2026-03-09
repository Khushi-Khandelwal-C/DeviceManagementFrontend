import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
=======
import { RouterOutlet,RouterModule } from '@angular/router';
>>>>>>> dded6d30f60b21090427eb790590bf6e1e19dc41

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('device-management-frontend');
}
