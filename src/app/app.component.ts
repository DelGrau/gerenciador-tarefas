import { Component } from '@angular/core';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ListaTarefasComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerenciador-tarefas';
}
