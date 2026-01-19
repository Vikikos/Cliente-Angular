import { Component } from '@angular/core';

@Component({
  selector: 'lifecycle-test',
  imports: [],
  templateUrl: './lifecycle-test.html',
  styleUrl: './lifecycle-test.css',
})
export class LifecycleTest {
  ngOninit(){
    console.log('Componente inicializado')
  }
  ngOnDestroy(){
    console.log('El componente se destruyo')
  }
}
