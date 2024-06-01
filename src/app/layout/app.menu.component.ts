import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Financeiro',
                items: [
                    { label: 'Extrato', icon: 'pi pi-fw pi-wallet', routerLink: ['/bank_statement'] },
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/reports/financial/dashboard'] },
                    { label: 'Cobranças', icon: 'pi pi-fw pi-money-bill', routerLink: ['/charge'] },
                    { 
                        label: 'Relatórios',
                        icon: 'pi pi-fw pi-list',
                        items: [
                            { label: 'Inadimplentes', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/reports/financial/defaulters'] }
                        ]
                    }
                ]
            },
            {
                label: 'Cadastros',
                items: [
                    { label: 'Pacientes', icon: 'pi pi-fw pi-users', routerLink: ['/patient'] },
                    // { label: 'Dietas', icon: 'pi pi-fw pi-plus' },
                    { label: 'Treinos', icon: 'pi pi-fw pi-shield', routerLink: ['/workout'] },
                ]
            }
        ];
    }
}
