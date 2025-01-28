/**
 * This is purely a re-export of packages in the @ethersproject mono repo so that
 * apps using the @ttx/core are all using the same version of the @ethersproject
 */

export * from '@ethersproject/bignumber';
export * from '@ethersproject/contracts';
export * from '@ethersproject/units';
export * from '@ethersproject/providers';

// Workaround for "No named export" error from exlint import/export
export const ethersproject = null;
