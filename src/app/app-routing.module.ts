import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './main/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { authGuard } from './main/guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    // Demo
                    { path: '', loadChildren: () => import('./main/components/dashboard/dashboard.module').then(m => m.DashboardModule) },

                    // Main
                    { path: 'patient', loadChildren: () => import('./main/components/patient/patient.module').then(m => m.PatientModule) },
                    { path: 'charge', loadChildren: () => import('./main/components/charge/charge.module').then(m => m.ChargeModule) },
                    { path: 'reports', loadChildren: () => import('./main/components/reports/reports.module').then(m => m.ReportsModule) },
                    { path: 'bank_statement', loadChildren: () => import('./main/components/bank-statement/bank-statement.module').then(m => m.BankStatementModule) },
                    { path: 'user', loadChildren: () => import('./main/components/user/user.module').then(m => m.UserModule) },
                    { path: 'workout', loadChildren: () => import('./main/components/workout/workout.module').then(m => m.WorkoutModule) },
                ],
                canActivate: [authGuard]
            },

            // Main
            { path: 'auth', loadChildren: () => import('./main/components/auth/auth.module').then(m => m.AuthModule) },

            // Generic
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
