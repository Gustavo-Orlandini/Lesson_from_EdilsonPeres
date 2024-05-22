import { User } from '../../../src/domain/User.js';

describe('CreateUserTests', () => {
    const invalidNames = ['Gustavo1', 'Gustavo@', '', '123456', 'a']

    it.each(invalidNames)('should do not create user on invalid name', (invalidName) => {
        const newUser = User.create(invalidName)

        expect(newUser).not.toBeInstanceOf(User);
        //precisa continuar a fazer a validação dos outros nomes errados...
    });

    it('should create user on valid name', () => {
        const validName = 'Gustavo'
        const newUser = User.create(validName)

        expect(newUser).toBeInstanceOf(User);
        expect(newUser.name).toEqual(validName);
    });
});

