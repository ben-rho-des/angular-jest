import 'jest-preset-angular';
import './jestGlobalMocks';


import { TestBed, async, TestModuleMetadata } from '@angular/core/testing';

const resetTestingModule = TestBed.resetTestingModule,
    preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;

global.setupTestBed = (moduleDef: TestModuleMetadata) => {
    beforeAll(async(async () => {
        const compilerConfig = { preserveWhitespaces: false } as any;
        resetTestingModule();
        preventAngularFromResetting();
        TestBed.configureCompiler(compilerConfig).configureTestingModule(moduleDef);
        await TestBed.compileComponents();
    }));

    afterAll(() => resetTestingModule());
};
