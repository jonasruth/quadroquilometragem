import { async, TestBed } from '@angular/core/testing';
import { QuilometragemComponent } from './quilometragem.component';
describe('QuilometragemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [QuilometragemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QuilometragemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=quilometragem.component.spec.js.map