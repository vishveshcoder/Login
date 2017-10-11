"use strict";
var success_component_1 = require("./success/success.component");
var login_component_1 = require("./login/login.component");
exports.appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',
        name: 'login',
        component: login_component_1.LoginComponent,
        useAsDefault: true
    },
    { path: 'success',
        name: 'success',
        component: success_component_1.SuccessComponent
    },
    { path: '**',
        redirectTo: '/login' }
];
//# sourceMappingURL=app.route.js.map