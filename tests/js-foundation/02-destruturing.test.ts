import { characters } from '../../src/js-foundation/02-destructuring';


describe('js-foundation/02-destructuring.ts', () => {
    test('characters should containt Flash, Batman', () => {
        expect(characters).toContain('flash')
    });

    test('first character should be flash', () => {
        const [flash, batman] = characters
        expect(flash).toBe('flash')
    });
})