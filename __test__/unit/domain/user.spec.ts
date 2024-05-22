import { User } from '../../../src/domain/User.js';

describe('userTest', () => {
    it('should do not create user on invalid name', () => {
        const invalidName = 'Gustavo1'
        const newUser = User.create(invalidName)

        expect(newUser).not.toBeInstanceOf(User);
    });
});

