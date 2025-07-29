import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '25acd88c-e62e-4d82-8525-d17caabf9cee',
};

export const sampleWithPartialData: IAuthority = {
  name: '652dd8d9-2f0d-4acd-a163-aaeb3fdfbf60',
};

export const sampleWithFullData: IAuthority = {
  name: '2176447c-4542-49c8-8ccc-e49a5e199d8a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
