import { Component, Injector, OnInit } from '@angular/core';
import { ProdutoListView } from "../../domain/produto-list-view";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { FornecedorService } from "../../service/fornecedor.service";
import { MessageService } from "primeng/api";
import { FornecedorListView } from "../../domain/fornecedor-list-view";
import { Location } from '@angular/common';

@Component({
  selector: 'app-fornecedor-dialog',
  templateUrl: './fornecedor-dialog.component.html',
  styleUrls: ['./fornecedor-dialog.component.scss'],
  providers: [MessageService, DialogService, FornecedorListView]
})
export class FornecedorDialogComponent implements OnInit {

  fornecedor: FornecedorListView;
  fornecedorId: any;

  constructor(public ref: DynamicDialogRef, private fornecedorService: FornecedorService, private messageService: MessageService,
    private dialogService: DialogService,
    private data: FornecedorListView,
    public config: DynamicDialogConfig
  ) {

    this.fornecedor = data;
  }
  ngOnInit() {
    if (this.config.data) {
      this.fornecedor = this.config.data
    }
  }

  save() {
    this.fornecedorService.save(this.fornecedor).subscribe(
      (resource: FornecedorListView) => {
          this.ref.close(resource)
      },
    )
  }
  back() {
    this.ref.close();
  }

  reload() {
    window.location.reload();

  }
}
