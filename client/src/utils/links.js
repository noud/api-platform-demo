export function linkStringForFrontEnd(linkString, pluralEntityName) {
  console.log('string', linkString);
  return linkString.replace(encodeURIComponent('/' + pluralEntityName + '/'), '');
}

export function storeLinkSettings(pluralEntityName) {
  let options = null;
  options = {entity: pluralEntityName};
  return options;
}
