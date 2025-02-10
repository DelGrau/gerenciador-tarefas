import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';
import { TaskServiceService } from '../../services/task-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() tarefaAtualizada = new EventEmitter<void>();

  removendo = false;

  constructor(private taskService: TaskServiceService) {}

  marcarConcluida() {
    this.taskService.marcarConcluida(this.tarefa.id);
    this.tarefaAtualizada.emit();
  }


  removerTarefa() {
    this.removendo = true;
    setTimeout(() => {
      this.taskService.removerTarefa(this.tarefa.id);
      this.tarefaAtualizada.emit();
    }, 300); // Aguarda a animação antes de remover do array
  }


}
