import HttpRequester from './HttpRequester';


describe('HttpRequester Tests', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  const foo = 'foo';
  const bar = 'bar';
  it('Make the getJSON call with right params', () => {
    HttpRequester.getJSON('https://www.example.com', {foo, bar});
    expect(fetch.mock.calls[0][0]).toEqual('https://www.example.com?foo=foo&bar=bar')
  });
});
