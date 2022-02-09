import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import { MovieDBBackendApp } from '../../../src/server/MovieDBBackendApp';
import request from 'supertest';

let _request: request.Test;
let _response: request.Response;
let application: MovieDBBackendApp;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

BeforeAll(async () => {
  application = new MovieDBBackendApp();
  await application.start();
});
AfterAll(async () => {
  await application.stop();
});
