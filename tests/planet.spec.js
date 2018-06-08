import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { getPlanet, getPlanets, getPlanetRandom } from '../src/planet';

describe('SWAPI Wrapper', () => {

  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');

    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {

    it('should exist the getPlanet method', () => {
      expect(getPlanet).to.exist;
    });

    it('should exist the getPlanets method', () => {
      expect(getPlanets).to.exist;
    });
  });

  describe('getPlanet', () => {

    it('should call fetch method', () => {
      const planet = getPlanet(1);
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const planet1 = getPlanet(1);
      expect(fetchedStub)
        .to.have.been.calledWith('https://swapi.co/api/planets/1/');

      const planet2 = getPlanet(2);
      expect(fetchedStub)
        .to.have.been.calledWith('https://swapi.co/api/planets/2/');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ "name": "Tatooine" });

      const planet1 = getPlanet(1);

      expect(planet1.resolveValue).to.be.eql({ "name": "Tatooine" });

    });

  });

  describe('getPlanets', () => {

    it('should call fetch method', () => {
      const planets = getPlanets();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const planets1 = getPlanets();
      expect(fetchedStub)
        .to.have.been.calledWith('https://swapi.co/api/planets/');

      const planets2 = getPlanets('?page=3');
      expect(fetchedStub)
          .to.have.been.calledWith('https://swapi.co/api/planets/');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ "count": 61 });

      const planets = getPlanets();

      expect(planets.resolveValue).to.be.eql({ "count": 61 });

    });

  });

  describe('getPlanetRandom', () => {

    it('should call fetch method', () => {
      const planet = getPlanetRandom();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ "name": "Tatooine" });

      const planet = getPlanetRandom();

      expect(planet.resolveValue).to.be.eql({ "name": "Tatooine" });

    });

  });

});
