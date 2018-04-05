System.register(["./home/home.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, AppRoutes;
    return {
        setters: [
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }
        ],
        execute: function () {
            exports_1("AppRoutes", AppRoutes = [
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                }
            ]);
        }
    };
});
//# sourceMappingURL=app.routes.js.map