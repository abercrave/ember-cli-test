import Ember from 'ember';

export default Ember.Controller.extend({
  models: function() {
    var list = this.get('model');
    this.set('settingsService.foo', 'baz');
    list.push(this.get('settingsService.foo'));
    return list;
  }.property('model')
});
