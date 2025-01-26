import {Component, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'bt-libs-ui-multi-open-model',
  imports: [CommonModule, ModalComponent],
  templateUrl: './multiOpenModel.component.html',
  styleUrl: './multiOpenModel.component.scss',
})
export class MultiOpenModelComponent {

  showModal = false;
  modalTitle = '';
  modalContent!: TemplateRef<unknown>;
  openModal(title: string, content: TemplateRef<unknown>) {
    this.modalTitle = title;
    this.modalContent = content;
    this.showModal = true;
  }

}
