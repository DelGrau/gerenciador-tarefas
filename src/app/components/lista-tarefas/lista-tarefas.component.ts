import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';
import { TaskServiceService } from '../../services/task-service.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { NovaTarefaComponent } from "../nova-tarefa/nova-tarefa.component";

@Component({
  selector: 'app-lista-tarefas',
  imports: [TaskItemComponent, NovaTarefaComponent],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent implements OnInit{
  title = "Minhas Tarefas";
  tarefas: Tarefa[] = [];

  // declarando o Service
  constructor(private taskService: TaskServiceService) {}

  ngOnInit(){
    this.tarefas = this.taskService.getTarefas();
  }

  // removendo da lista
  removerTarefa(id: number) {
    this.taskService.removerTarefa(id);
    this.tarefas = this.taskService.getTarefas();
  }

  // marcando como concluida
  marcarConcluida(id: number) {
    this.taskService.marcarConcluida(id);
    this.tarefas = this.taskService.getTarefas();
  }

  // adiciona uma nova terefa
  adicionarTarefa(descricao: string) {
    this.taskService.addTarefa(descricao);
    this.tarefas = this.taskService.getTarefas();
  }

  atualizarLista() {
    this.tarefas = this.taskService.getTarefas();
  }
}
