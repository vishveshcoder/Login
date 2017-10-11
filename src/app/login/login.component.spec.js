"use strict";
var login_component_1 = require("./login.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('LoginComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('input'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h2> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Login/i, '<h1> should say something about "Login"');
    });
    it('Username  should start with company name', function () {
        fixture.detectChanges();
        expect(de[0].innerText).toMatch('Techno');
    });
});
//# sourceMappingURL=login.component.spec.js.map