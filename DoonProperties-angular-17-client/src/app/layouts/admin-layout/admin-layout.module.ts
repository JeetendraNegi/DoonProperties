import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from 'app/components/users/users.component';
import { UserTypesComponent } from 'app/components/user-types/user-types.component';
import { DocumentTypeComponent } from 'app/components/document-type/document-type.component';
import { PropertiesComponent } from 'app/components/properties/properties.component';
import { VerificationStatusComponent } from 'app/components/verification-status/verification-status.component';

import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddUserTypeComponent } from 'app/components/user-types/add-userType/add-user-type.component';
import { AddVerificationStatusComponent } from 'app/components/verification-status/add-new/add-verification-status.component';
import { AddEditDocumentTypeComponent } from 'app/components/document-type/addedit-document-type/addedit-document-type.component';
import { AddNewUserComponent } from 'app/components/users/add-new-user/add-new-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UsersComponent,
    UserTypesComponent,
    DocumentTypeComponent,
    PropertiesComponent,
    VerificationStatusComponent,
    AddUserTypeComponent,
    AddVerificationStatusComponent,
    AddEditDocumentTypeComponent,
    AddNewUserComponent
  ]
})

export class AdminLayoutModule {}
