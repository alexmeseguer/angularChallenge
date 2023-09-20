/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function isAddress(arg: any): arg is models.Address {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // city?: string
    ( typeof arg.city === 'undefined' || typeof arg.city === 'string' ) &&
    // country?: 'ES' | 'UK' | 'DE' | 'US'
    ( typeof arg.country === 'undefined' || ['ES', 'UK', 'DE', 'US'].includes(arg.country) ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // postalcode?: string
    ( typeof arg.postalcode === 'undefined' || typeof arg.postalcode === 'string' ) &&
    // street?: string
    ( typeof arg.street === 'undefined' || typeof arg.street === 'string' ) &&

  true
  );
  }

export function isUser(arg: any): arg is models.User {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // address?: Address
    ( typeof arg.address === 'undefined' || isAddress(arg.address) ) &&
    // birthDate?: string
    ( typeof arg.birthDate === 'undefined' || typeof arg.birthDate === 'string' ) &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // firstname?: string
    ( typeof arg.firstname === 'undefined' || typeof arg.firstname === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // lastname?: string
    ( typeof arg.lastname === 'undefined' || typeof arg.lastname === 'string' ) &&

  true
  );
  }


