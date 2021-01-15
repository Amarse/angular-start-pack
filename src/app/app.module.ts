import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';

//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

//chart.js 
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';

import '@aravindanve/rapidoc';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'board', component: BoardComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [AppComponent, ContentComponent, LoginComponent, JoinComponent, HomeComponent, BoardComponent, DashboardComponent, LineChartComponent, PieChartComponent, BarChartComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
