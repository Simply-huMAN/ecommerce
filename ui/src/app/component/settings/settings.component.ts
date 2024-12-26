import { Component, ViewChild, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @ViewChild('childTemplate', {static: true}) childTemplate!: TemplateRef<any>;

}
