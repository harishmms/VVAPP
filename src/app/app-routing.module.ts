import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { OtpComponent } from './components/authentication/otp/otp.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AboutdocComponent } from './components/consult/aboutdoc/aboutdoc.component';
import { BookappointmentComponent } from './components/consult/bookappointment/bookappointment.component';
import { ConsultDoctorComponent } from './components/consult/consult-doctor/consult-doctor.component';
import { ConsultNowComponent } from './components/consult/consult-now/consult-now.component';
import { MainComponent } from './components/home/main/main.component';
import { TimeslotComponent } from './components/consult/timeslot/timeslot.component';
import { AthomeComponent } from './components/labtest/athome/athome.component';
import { OffersubComponent } from './components/labtest/offersub/offersub.component';
import { LabbooknowComponent } from './components/labtest/labbooknow/labbooknow.component';
import { FrequentlySubComponent } from './components/labtest/frequently-sub/frequently-sub.component';
import { KnowMoreComponent } from './components/home/know-more/know-more.component';
import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { UserRecordsComponent } from './components/user/user-records/user-records.component';
import { CovidHomeComponent } from './components/covid/covid-home/covid-home.component';
import { CovidSpecComponent } from './components/covid/covid-spec/covid-spec.component';
import { UserPaymentsComponent } from './components/user/user-payments/user-payments.component';
import { MyAppointmentsComponent } from './components/user/my-appointments/my-appointments.component';
import { CancelAppointmentComponent } from './components/user/cancel-appointment/cancel-appointment.component';
import { HomeMainDoctorsComponent } from './components/consult/Home-main-doctors/Home-main-doctors.component';
import { OnlineConsultationComponent } from './components/user/online-consultation/online-consultation.component';
import { RemindersComponent } from './components/user/reminders/reminders.component';
import { HelpComponent } from './components/home/help/help.component';
import { MyDoctorsComponent } from './components/home/my-doctors/my-doctors.component';
import { MedicalRecordsComponent } from './components/home/medical-records/medical-records.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { OuryoudoctorComponent } from './components/home/ouryoudoctor/ouryoudoctor.component';
import { AppointmentDetailsComponent } from './components/user/appointment-details/appointment-details.component';
import { OnlineConsultationSideComponent } from './components/home/Online-Consultation-Side/Online-Consultation-Side.component';
import { SecurietyComponent } from './components/Settings/securiety/securiety.component';
import { SettingsPaymentsComponent } from './components/Settings/Settings-payments/Settings-payments.component';
import { PrescriptionComponent } from './components/reports/prescription/prescription.component';
import { SelfCheckReportsComponent } from './components/reports/Self-check-reports/Self-check-reports.component';
import { AttachmentsComponent } from './components/reports/attachments/attachments.component';
import { LoginByPasswordComponent } from './components/authentication/LoginByPassword/LoginByPassword.component';
import { PSymptomsComponent } from './components/consult/PSymptoms/PSymptoms.component';
import { MyHealthChechupsComponent } from './components/user/my-HealthChechups/my-HealthChechups.component';
import { SirTempletComponent } from './components/home/sir-templet/sir-templet.component';
import { ConsultVideocallComponent } from './components/consult/consult-videocall/consult-videocall.component';



const routes: Routes = [
  // { path: '', component: MainComponent },
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path:'Home', component: MainComponent },
  {path:'Login',component:LoginComponent},
  {path:'Loginbypassword',component:LoginByPasswordComponent},
  {path:'Signup',component:SignupComponent},
  {path:'enterOtp',component:OtpComponent},
  {path:'knowmore',component:KnowMoreComponent},
  //consult navs
  {path:'consultnow',component:ConsultNowComponent},
  {path:'consult',component:ConsultDoctorComponent},
  {path:'aboutdoc',component:AboutdocComponent},
  {path:'timeslot',component:TimeslotComponent},
  {path:'bookappointment',component:BookappointmentComponent},
  {path:'psymptoms',component:PSymptomsComponent},
  {path:'consultcall',component:ConsultVideocallComponent},
  
  //lab navs
  {path:'homelab',component:AthomeComponent},
  {path:'sublab',component:OffersubComponent},
  {path:'laborder',component:LabbooknowComponent},
  {path:'labfrequently',component:FrequentlySubComponent},
   //user navs
  {path:'userprofile',component:UserprofileComponent},
  {path:'userrecords',component:UserRecordsComponent},
  {path:'userpayments',component:UserPaymentsComponent},
  {path:'appointments',component:MyAppointmentsComponent},
  {path:'cancelappointments',component:CancelAppointmentComponent},
  {path:'OnlineConsultation',component:OnlineConsultationComponent},
  {path:'appointmentDetails',component:AppointmentDetailsComponent},
  {path:'MyHealthChechups',component:MyHealthChechupsComponent},
//covid navs
{path:'covidhome',component:CovidHomeComponent},
{path:'covidspec',component:CovidSpecComponent},




//header navs
{path:'reminder',component:RemindersComponent},
{path:'help',component:HelpComponent},
{path:'mydoctors',component:MyDoctorsComponent},
{path:'madicalrecords',component:MedicalRecordsComponent},
{path:'settings',component:SettingsComponent},
{path:'areyoudoctor',component:OuryoudoctorComponent},
{path:'CancelAppointment',component:CancelAppointmentComponent},
{path:'OnlineConsultationSide',component:OnlineConsultationSideComponent},


//common navs
{path:'viewdoctors',component:HomeMainDoctorsComponent},


//settings
{path:'securiety',component:SecurietyComponent},
{path:'paymentsettings',component:SettingsPaymentsComponent},


//records
{path:'Prescription',component:PrescriptionComponent},
{path:'selfcheckreports',component:SelfCheckReportsComponent},
{path:'attachments',component:AttachmentsComponent},


{path:'fasak',component:SirTempletComponent}

  // {timeslot
  //   path: 'first-component',
  //   component: FirstComponent, // this is the component with the <router-outlet> in the template
  //   children: [
  //     {
  //       path: 'child-a', // child route path
  //       component: ChildAComponent, // child route component that the router renders
  //     },
  //     {
  //       path: 'child-b',
  //       component: ChildBComponent, // another child route component that the router renders
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
