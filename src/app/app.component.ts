import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  startt: any;
  contador = '00:00:00';
  test = 'Start';
  tiempoTranscurrido = {
    horas: 0,
    minutos: 0,
    segundos: 0,
  };
  
  reset() {
    clearInterval(this.startt);
    this.test = 'Start';
    this.contador = '00:00:00';
    this.tiempoTranscurrido = {
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }
  start() {
    if (this.test === 'Start') {
      this.startt = setInterval(() => {
        this.tiempoTranscurrido.segundos++;
        if (this.tiempoTranscurrido.segundos === 60) {
          this.tiempoTranscurrido.segundos = 0;
          this.tiempoTranscurrido.minutos++;
          if (this.tiempoTranscurrido.minutos === 60) {
            this.tiempoTranscurrido.minutos = 0;
            this.tiempoTranscurrido.horas++;
          }
        }
        this.contador = `${
          this.tiempoTranscurrido.horas < 10
            ? '0' + this.tiempoTranscurrido.horas
            : this.tiempoTranscurrido.horas
        }:${
          this.tiempoTranscurrido.minutos < 10
            ? '0' + this.tiempoTranscurrido.minutos
            : this.tiempoTranscurrido.minutos
        }:${
          this.tiempoTranscurrido.segundos < 10
            ? '0' + this.tiempoTranscurrido.segundos
            : this.tiempoTranscurrido.segundos
        }`;
      }, 1000);
      this.test = 'Stop';
    } else {
      clearInterval(this.startt);
      this.test = 'Start';
    }
  }

  stop() {
    clearInterval(this.startt);
    this.test = 'Start';
    this.tiempoTranscurrido = {
      horas: parseInt(this.contador.slice(0, 2)),
      minutos: parseInt(this.contador.slice(3, 5)),
      segundos: parseInt(this.contador.slice(6, 8)),
    };
  }
}
