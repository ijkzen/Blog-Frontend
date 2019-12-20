import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {EditArticleDirective} from '../../edit/edit-article.directive';
import {OnlyCompareTextComponent} from '../only-compare-text/only-compare-text.component';
import {OnlyCompareViewComponent} from '../only-compare-view/only-compare-view.component';
import {EditService} from '../../service/edit.service';
import {NzModalService} from 'ng-zorro-antd';
import {StorageService} from '../../service/storage.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-only-compare-outline',
    templateUrl: './only-compare-outline.component.html',
    styleUrls: ['./only-compare-outline.component.scss']
})
export class OnlyCompareOutlineComponent implements OnInit {

    @ViewChild(EditArticleDirective, {static: true})
    editTemplate: EditArticleDirective;

    current = 0;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private editService: EditService,
        private modalService: NzModalService,
        private storageService: StorageService,
        private location: Location
    ) {
    }

    ngOnInit() {
        this.toTarget(OnlyCompareTextComponent);
    }


    toCompareText() {
        if (this.current !== 0) {
            this.toTarget(OnlyCompareTextComponent);
        }
        this.current = 0;
    }

    toCompareView() {
        if (this.current !== 1) {
            this.toTarget(OnlyCompareViewComponent);
        }
        this.current = 1;
    }

    toTarget(component: Type<any>) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const ref = this.editTemplate.viewContainerRef;
        ref.clear();
        ref.createComponent(factory);
    }

    cancelEdit() {
        this.editService.cancelEdit(Number(this.storageService.getNewArticleId()))
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.modalService.success({
                            nzContent: '已删除此条修改',
                            nzOnOk: () => {
                                this.location.back();
                            }
                        });
                    }
                }
            );
    }

    applyEdit() {
        this.editService.applyEdit(Number(this.storageService.getNewArticleId()))
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.modalService.success({
                            nzContent: '已应用此条修改',
                            nzOnOk: () => {
                              this.location.back();
                            }
                        });
                    }
                }
            );
    }
}
