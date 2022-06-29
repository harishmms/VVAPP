import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { OtpComponent } from './components/authentication/otp/otp.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MainComponent } from './components/home/main/main.component';

import { ConsultDoctorComponent } from './components/consult/consult-doctor/consult-doctor.component';
import { ConsultNowComponent } from './components/consult/consult-now/consult-now.component';
import { AboutdocComponent } from './components/consult/aboutdoc/aboutdoc.component';
import { TimeslotComponent } from './components/consult/timeslot/timeslot.component';

import { BookappointmentComponent } from './components/consult/bookappointment/bookappointment.component';

import { AthomeComponent } from './components/labtest/athome/athome.component';
import { OffersubComponent } from './components/labtest/offersub/offersub.component';
import { LabbooknowComponent } from './components/labtest/labbooknow/labbooknow.component';
import { FrequentlySubComponent } from './components/labtest/frequently-sub/frequently-sub.component'
import { KnowMoreComponent } from './components/home/know-more/know-more.component';
import { CovidHomeComponent } from './components/covid/covid-home/covid-home.component';
import { CovidSpecComponent } from './components/covid/covid-spec/covid-spec.component';
import { HeaderComponent } from './components/home/header/header.component';
import { UserprofileComponent } from './components/user/userprofile/userprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRecordsComponent } from './components/user/user-records/user-records.component';
import { UserPaymentsComponent } from './components/user/user-payments/user-payments.component';
import { MyAppointmentsComponent } from './components/user/my-appointments/my-appointments.component';
import { HomeMainDoctorsComponent } from './components/consult/Home-main-doctors/Home-main-doctors.component';
import { OnlineConsultationComponent } from './components/user/online-consultation/online-consultation.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { RemindersComponent } from './components/user/reminders/reminders.component';
import { HelpComponent } from './components/home/help/help.component';
import { MyDoctorsComponent } from './components/home/my-doctors/my-doctors.component';
import { MedicalRecordsComponent } from './components/home/medical-records/medical-records.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { OuryoudoctorComponent } from './components/home/ouryoudoctor/ouryoudoctor.component';
import { AppointmentDetailsComponent } from './components/user/appointment-details/appointment-details.component';
import { CancelAppointmentComponent } from './components/user/cancel-appointment/cancel-appointment.component';
import { OnlineConsultationSideComponent } from './components/home/Online-Consultation-Side/Online-Consultation-Side.component';
import { SecurietyComponent } from './components/Settings/securiety/securiety.component';
import { SettingsPaymentsComponent } from './components/Settings/Settings-payments/Settings-payments.component';
import { PrescriptionComponent } from './components/reports/prescription/prescription.component';
import { SelfCheckReportsComponent } from './components/reports/Self-check-reports/Self-check-reports.component';
import { AttachmentsComponent } from './components/reports/attachments/attachments.component';
import { SirTempletComponent } from './components/home/sir-templet/sir-templet.component';
import {HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
import { LoginByPasswordComponent } from './components/authentication/LoginByPassword/LoginByPassword.component';
import { PSymptomsComponent } from './components/consult/PSymptoms/PSymptoms.component';
import { FormsModule } from '@angular/forms';
import { MyHealthChechupsComponent } from './components/user/my-HealthChechups/my-HealthChechups.component';
// import { AuthService } from '../app/login/auth.service';


const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    SignupComponent,
    MainComponent,
    ConsultDoctorComponent,
    ConsultNowComponent,
    AboutdocComponent,
    TimeslotComponent,
    BookappointmentComponent,
        
         AthomeComponent,
         OffersubComponent,
         LabbooknowComponent,
         FrequentlySubComponent,
         KnowMoreComponent,
         CovidHomeComponent,
         CovidSpecComponent,
         HeaderComponent,
         UserprofileComponent,
         UserPaymentsComponent,      
         UserRecordsComponent,
         MyAppointmentsComponent,
         HomeMainDoctorsComponent,
         OnlineConsultationComponent,
         FooterComponent,
         RemindersComponent,
         HelpComponent,
         MyDoctorsComponent,
         MedicalRecordsComponent,
         SettingsComponent,
         OuryoudoctorComponent,
         AppointmentDetailsComponent,
         CancelAppointmentComponent,
         OnlineConsultationSideComponent,
         SecurietyComponent,
         SettingsPaymentsComponent,
         PrescriptionComponent,
         SelfCheckReportsComponent,
         AttachmentsComponent,
         SirTempletComponent,
         LoginByPasswordComponent,
         PSymptomsComponent,
         MyHealthChechupsComponent,
         
      
         
       
         
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [

    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass : AuthService,
    //   multi : true
    // },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
