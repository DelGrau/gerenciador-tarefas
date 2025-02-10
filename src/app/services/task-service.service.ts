import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tarefas: Tarefa[] = [];

  constructor() {
    this.carregarTarefas(); // carregando as tarefas do LocalStorage
  }

  // 1: Retorna a lista de Tarefas
  getTarefas(){
    return this.tarefas;
  }

  // 2: Adiciona uma nova tarefa a lista
  addTarefa(descricao: string) {
    const newTask: Tarefa = {
      id: Math.floor(Math.random() * (1000 - 1 + 1)),
      descricao,
      concluida: false
    }

    this.tarefas.push(newTask);
    this.salvarTarefas();
  }

  // 3: remove uma tarefa pelo ID
  removerTarefa(id: number) {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    this.salvarTarefas();
  }

  // 4: Marca uma tarefa como Concluida ou não
  marcarConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);

    if(tarefa) {
      tarefa.concluida = !tarefa.concluida;
      this.salvarTarefas();
    }
  }

  // 5: Salva as tarefas no LocalStorage
  salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  private carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
    }

    console.log(tarefasSalvas)
  }
  
}
