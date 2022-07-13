import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeUs from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internacionalizacao';
  selectedFilter:string;
  public locales = [
    {value:'pt-BR', display:'Português'},
    {value:'en-US', display:'Inglês'},
    {value:'es-ES', display:'Espanhol'}
   ];
  constructor() {
		this.selectedFilter='pt-BR';
	}
  localeChanged(selectedValue:any){
    console.log("selectedValue",selectedValue.value);
		switch(selectedValue.value) {
		   case "pt-BR": {
			  registerLocaleData(localePt, 'pt-BR');
			  break;
		   }
		   case "en-US": {
			  registerLocaleData(localeUs, 'en-US');
			  break;
		   }
			 case "es-ES": {
			  registerLocaleData(localeEs, 'es-ES');
			  break;
		   }
		}

	}
}
