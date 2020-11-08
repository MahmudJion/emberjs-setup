import Application from 'emberjs-setup/app';
import config from 'emberjs-setup/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
