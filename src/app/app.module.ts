import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent], // Declare all components here
  imports: [BrowserModule], // BrowserModule is required for browser apps
  bootstrap: [AppComponent], // Bootstraps the root component
})
export class AppModule {}
