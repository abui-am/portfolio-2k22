import { atom } from 'nanostores';

// eslint-disable-next-line import/prefer-default-export
export const stackActive = atom<'fe' | 'be' | 'du'>('fe');
