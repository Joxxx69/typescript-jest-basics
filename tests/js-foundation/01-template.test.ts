import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.ts', () => {
    
    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hola');
    })

    test('emailTamplate should contain {{name}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/)
    });
})