
// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      'zenduty/api/escalationpolicies_api.js',
      'zenduty/api/events_api.js',
      'zenduty/api/incidents_api.js',
      'zenduty/api/integrations_api.js',
      'zenduty/api/members_api.js',
      'zenduty/api/schedules_api.js',
      'zenduty/api/services_api.js',
      'zenduty/api/teams_api.js',

      'zenduty/tests/EP.test.js',
      'zenduty/tests/events.test.js',
      'zenduty/tests/incidents.test.js',
      'zenduty/tests/integrations.test.js',
      'zenduty/tests/members.test.js',
      'zenduty/tests/roles.test.js',
      'zenduty/tests/team.test.js'






    ],

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'zenduty/api/escalationpolicies_api.js': ['coverage'],
     'zenduty/api/events_api.js': ['coverage'],
      'zenduty/api/incidents_api.js': ['coverage'],
      'zenduty/api/integrations_api.js': ['coverage'],
      'zenduty/api/members_api.js': ['coverage'],
      'zenduty/api/schedules_api.js': ['coverage'],
     'zenduty/api/services_api.js': ['coverage'],
     'zenduty/api/teams_api.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};