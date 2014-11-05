import Ember from 'ember';

export function upperCase(input) {
  return input.toUpperCase();
};

export default Ember.Handlebars.makeBoundHelper(upperCase);
