import { Urls } from '../config/urls'

/*
  Builds parameterized web service URLs
*/
export class UrlBuilder {
  static inspectionsByVidLatestVersionUrlGen = vid => {
    return `${Urls.heroku.inspections.byvidlatest}/${vid}`
  }

  static inspectionsByVidUrlGen = vid => {
    return `${Urls.heroku.inspections.byvid}/${vid}`
  }

  static phoUrlGen = (lat, lng, limit) => {
    return `${Urls.heroku.venues.pho}/${lat}/${lng}/${limit}`
  }

  static nearUrlGen = (lat, lng, limit) => {
    return `${Urls.heroku.venues.near}/${lat}/${lng}/${limit}`
  }

  static nearbyUrlGen = (lat, lng, limit, search) => {
    return `${Urls.heroku.venues.nearby}/${lat}/${lng}/${limit}/${search}`
  }
}
