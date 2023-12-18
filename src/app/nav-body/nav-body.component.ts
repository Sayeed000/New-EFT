import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.css']
})
export class NavBodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass():string {
    let styleClass = ''
    if (this.collapsed && this.screenWidth >768){
      styleClass = 'body-trimmed'
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth >0){
      styleClass= 'body-md-screen'
    }
    return 'styleClass';
  }

}
