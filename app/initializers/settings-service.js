export function initialize(container, application) {
  application.inject('controller', 'settingsService', 'service:settings');
  application.inject('route', 'settingsService', 'service:settings');
}

export default {
  name: 'settings-service',
  initialize: initialize
};
