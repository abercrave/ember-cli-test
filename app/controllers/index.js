import Ember from 'ember';

export default Ember.Controller.extend({
  models: function() {
    var list = this.get('model'),
      foo = this.get('settingsService.foo');
    this.set('settingsService.foo', 'baz');
    list.push(foo, this.get('settingsService.foo'));
    return list;
  }.property('model')
});
