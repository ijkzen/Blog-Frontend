import {enableProdMode} from '@angular/core';
import 'localstorage-polyfill';

import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

// mock
const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();
global['window'] = mock.getWindow();
global['document'] = mock.getDocument();
global['localStorage'] = localStorage;


export {AppServerModule} from './app/app.server.module';
export {ngExpressEngine} from '@nguniversal/express-engine';


export {renderModule, renderModuleFactory} from '@angular/platform-server';