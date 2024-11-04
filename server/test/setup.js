import { beforeAll, afterAll } from "bun:test";
import { server } from '../server.js';

let testServer;

beforeAll(() => {
  testServer = server.listen(5000);
});

afterAll(() => {
  testServer.close();
}); 