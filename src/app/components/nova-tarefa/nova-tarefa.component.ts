import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-tarefa',
  imports: [FormsModule],
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css'
})
export class NovaTarefaComponent {
  descricao: string = '';

  @Output() tarefaAdicionada = new EventEmitter<string>();

  adicionarTarefa() {
    if (this.descricao.trim()) {
      this.tarefaAdicionada.emit(this.descricao);

      console.log("tarefa adicionada, descricao = ", this.descricao);
      this.descricao = '';
    }
  }
}
