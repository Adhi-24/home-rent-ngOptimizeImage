import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HomeTypeFilterComponent } from './home-type-filter/home-type-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage, provideImgixLoader } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HomeTypeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  // Configure the loader using the `IMAGE_LOADER` token.
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return  config.src;
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
