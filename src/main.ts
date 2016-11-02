/**
 * Created by zhao on 2016/10/28.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//import  './css/styles.css';
//if (process.env.ENV === 'production') {
   // enableProdMode();
//}
const platform = platformBrowserDynamic();
//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);