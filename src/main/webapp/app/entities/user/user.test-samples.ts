import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1488,
  login: 'y4MH',
};

export const sampleWithPartialData: IUser = {
  id: 4941,
  login: 'fj|U@JOWHvY\\WHEiiU\\<i3\\OpomYye\\^aW\\\\qkM',
};

export const sampleWithFullData: IUser = {
  id: 4495,
  login: 'PO',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
