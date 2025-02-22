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
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                    { label: 'Autores', icon: 'pi pi-fw pi-users', routerLink: ['/autores'] },
                    { label: 'Libros', icon: 'pi pi-fw pi-book', routerLink: ['/libros'] },
                    { label: 'Préstamos', icon: 'pi pi-fw pi-refresh', routerLink: ['/prestamos'] },
                ]
            }
        ];
    }
}