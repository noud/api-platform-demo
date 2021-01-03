import { ENTRYPOINT } from '../config/entrypoint';

export function paginationStringForFrontEnd(paginationString, pluralEntityName) {
  return paginationString.replace('\/' + pluralEntityName + '\?page=', '');
}

export function paginationStringForBackEnd(paginationSettings) {
  var entryPoint = ENTRYPOINT;
  if (paginationSettings.entity) {
    entryPoint += '/' + paginationSettings.entity;
    if (!paginationSettings.page) {
      entryPoint += '/';
    }
  }
  return entryPoint;
}

export function storePaginationSettings(page, pluralEntityName) {
  var options = [];
  options.entity = pluralEntityName;
  options.page = '?page=' + page;
  return options;
}
