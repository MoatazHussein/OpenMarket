import { Component, OnDestroy, Renderer2 } from "@angular/core";



@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnDestroy {

    constructor(private renderer: Renderer2){
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }

    ngOnDestroy() {
        this.renderer.setStyle(document.body, 'overflow', 'scroll');
    }
}