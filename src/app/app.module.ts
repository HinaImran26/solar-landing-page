import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { Section5Component } from './views/section5/section5.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { NewsletterComponent } from './views/newsletter/newsletter.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestimonialsComponent,
    ContactUsComponent,
    Section5Component,
    FaqsComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
