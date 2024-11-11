import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UsersComponent } from 'app/components/users/users.component';
import { UserTypesComponent } from 'app/components/user-types/user-types.component';
import { DocumentTypeComponent } from 'app/components/document-type/document-type.component';
import { PropertiesComponent } from 'app/components/properties/properties.component';
import { VerificationStatusComponent } from 'app/components/verification-status/verification-status.component';
import { LoginComponent } from 'app/authentication/login/login.component';
import { SignupComponent } from 'app/authentication/signup/signup.component';
import { AddUserTypeComponent } from 'app/components/user-types/add-userType/add-user-type.component';
import { AddVerificationStatusComponent } from 'app/components/verification-status/add-new/add-verification-status.component';
import { AddEditDocumentTypeComponent } from 'app/components/document-type/addedit-document-type/addedit-document-type.component';
import { AddNewUserComponent } from 'app/components/users/add-new-user/add-new-user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'users',           component: UsersComponent},
    { path: 'user-types',      component: UserTypesComponent},
    { path: 'document-types',  component: DocumentTypeComponent},
    { path: 'properties',      component: PropertiesComponent},
    { path: 'verification-status',      component: VerificationStatusComponent},
    { path: 'login',      component: LoginComponent},
    { path: 'signup',      component: SignupComponent},
    { path: 'add-userType',      component: AddUserTypeComponent},
    { path: 'add-userType/:id',      component: AddUserTypeComponent},
    { path: 'add-verification-status',      component: AddVerificationStatusComponent},
    { path: 'add-verification-status/:id',      component: AddVerificationStatusComponent},
    { path: 'add-document-types',      component: AddEditDocumentTypeComponent},
    { path: 'add-document-types/:id',      component: AddEditDocumentTypeComponent},
    { path: 'add-users',      component: AddNewUserComponent},
    { path: 'add-users/:id',      component: AddNewUserComponent}
];
