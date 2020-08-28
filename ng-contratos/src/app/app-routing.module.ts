import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CapturaContratoComponent } from './components/captura-contrato/captura-contrato.component';
import { ListaBibliotecasComponent } from './components/lista-bibliotecas/lista-bibliotecas.component';
import { RegistraBibliotecaComponent } from './components/registra-biblioteca/registra-biblioteca.component';

const routes: Routes = [
  { path: '', redirectTo: '/captura-contrato', pathMatch: 'full' },
  { path: 'captura-contrato', component: CapturaContratoComponent },
  { path: 'lista-bibliotecas', component: ListaBibliotecasComponent },
  { path: 'registra-bibliotecas', component: RegistraBibliotecaComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**',  redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
