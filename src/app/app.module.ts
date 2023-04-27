import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProjectAddEditComponent} from './project-add-edit/project-add-edit.component';
import { Routes, RouterModule } from '@angular/router';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskAddEditComponent } from './task-add-edit/task-add-edit.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'projects/:id', component: ProjectDetailsComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectAddEditComponent,
    ProjectDeleteComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    TaskAddEditComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
