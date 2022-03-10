import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    //crear un objeto tarea
    let tarea = new Tarea(this.nombreTarea, false);
    //agregar el objeto tarea al array
    this.listTareas.push(tarea);
    //resetear el valor del input
    this.nombreTarea = "";
  }

  eliminarTarea(index: number) {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number) {
    this.listTareas[index].estado = !tarea.estado;
  }

}
