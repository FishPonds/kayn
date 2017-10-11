import Endpoint from 'Endpoint';
import Request from 'RequestClient/Request';

class ChampionMasteryEndpoint extends Endpoint {
  constructor(config) {
    super();

    this.config = config;

    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
    this.total = this.total.bind(this);

    this.serviceName = 'champion-mastery';
  }

  get(summonerID) {
    const self = this;
    return function(championID) {
      return new Request(
        self.config,
        self.serviceName,
        `champion-masteries/by-summoner/${summonerID}/by-champion/${championID}`,
      );
    };
  }

  list(val) {
    return new Request(
      this.config,
      this.serviceName,
      `champion-masteries/by-summoner/${val}`,
    );
  }

  total(val) {
    return new Request(
      this.config,
      this.serviceName,
      `scores/by-summoner/${val}`,
    );
  }
}

export default ChampionMasteryEndpoint;