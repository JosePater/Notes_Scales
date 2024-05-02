import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
  notaSeleccionada: string = 'C'; // Tonalidad seleccionada
  numNota: string = '1';  // 1era de la tonalidad especificada
  numCamp1: string = 'C';

  numNotasArray: string[] = ['1', '2', '3', '4', '5', '6', '7'];

  // 12 notas musicales
  notasMusicales: string[] = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  todasLasTonalidades: string[][] = [
    // 1    2       3     4    5        6     7
    ['C',  'Dm',  'Em',  'F',  'G',  'Am',  'B°'],
    ['C#', 'D#m', 'Fm',  'F#', 'G#', 'A#m', 'C°'],
    ['D',  'Em',  'F#m', 'G',  'A',  'Bm',  'C#°'],
    ['D#', 'Fm',  'Gm',  'G#', 'A#', 'Cm',  'D°'],
    ['E',  'F#m', 'G#m', 'A',  'B',  'C#m', 'D#°'],
    ['F',  'Gm',  'Am',  'A#', 'C',  'Dm',  'E°'],
    ['F#', 'G#m', 'A#m', 'B',  'C#', 'D#m', 'F°'],
    ['G',  'Am',  'Bm',  'C',  'D',  'Em',  'F#°'],
    ['G#', 'A#m', 'Cm',  'C#', 'D#', 'Fm',  'G°'],
    ['A',  'Bm',  'C#m', 'D',  'E',  'F#m', 'G#°'],
    ['A#', 'Cm',  'Dm',  'D#', 'F',  'Gm',  'A°'],
    ['B',  'C#m', 'D#m', 'E',  'F#', 'G#m', 'A#°'],
  ];

  classInput: string[] = [
    'bg-gray-50',
    'border',
    'border-gray-300',
    'text-center',
    'text-gray-900',
    'text-sm',
    'rounded-lg',
    'focus:ring-blue-500',
    'focus:border-blue-500',
    'w-10',
    'py-1',
    'pl-0',
    'pr-0'
  ];

  // Función para manejar el cambio de selección en el select
  onSelectChange(event: any) {
    this.notaSeleccionada = event.target.value;
    this.calcularNota();
  }

  onSelectNumber(event: any) {
    this.numNota = event.target.value;
    this.calcularNota();
  }

  calcularNota() {
    const row = this.notasMusicales.indexOf(this.notaSeleccionada);
    const col = this.numNotasArray.indexOf(this.numNota);
    this.numCamp1 = this.todasLasTonalidades[row][col];
  }

}
