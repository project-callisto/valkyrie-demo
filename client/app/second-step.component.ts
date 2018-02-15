import { Component, Input, ViewContainerRef } from "@angular/core";
import { EncryptedData } from "./services/crypto.service";

@Component({
  templateUrl: "./templates/second-step.component.html",
  styleUrls: [
    "./styles/base.scss",
    "./styles/step.scss",
  ],
})
export class SecondStepComponent {
  @Input() public encryptedData: EncryptedData;
}
