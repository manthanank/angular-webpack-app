import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: false,
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>Welcome to your Angular application built with Webpack!</p>
    </div>
  `,
  styles: [
    `
      .container {
        text-align: center;
        padding: 20px;
      }
      h1 {
        color: #007bff;
      }
    `,
  ],
})
export class AppComponent {
  title = "Angular with Webpack";
}
