import Ember from 'ember';

export function trimString(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper(trimString);
