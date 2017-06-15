/*
  Web service URLs
*/
export class Urls  {

  static base = 'https://openciti.ca'

  static api = 'https://dinesafe.herokuapp.com'

  static linkToInspections = `${Urls.base}/inspections`

  static addresses = `${Urls.api}/addresses/`
  static inspections = `${Urls.api}/inspections/`
  static venues = `${Urls.api}/venues/`

  static github = {
    commits: 'https://api.github.com/repos/openciti/dinesafe6/commits?per_page=25&page=1',
    issues: 'https://github.com/openciti/dinesafe6/issues',
    pulls: 'https://github.com/openciti/dinesafe6/pulls'
  }

  static maps = {
    static: 'https://maps.googleapis.com/maps/api/staticmap?zoom=19&size=600x600&maptype=roadmap&markers=color:blue%7C'
  }
  static heroku = {
      municipalities: `${Urls.addresses}/mun`,
      addresses: {
        munstreets: `${Urls.addresses}munstreets`,
        mun: `${Urls.addresses}mun`,
        streets: `${Urls.addresses}streets`,
        numbers: `${Urls.addresses}numbers`
      },
      venues: {
        nearby: `${Urls.venues}nearby`,
        near: `${Urls.venues}near`,
        get: `${Urls.venues}get`,
        pho: `${Urls.venues}pho`
      },
      inspections: {
        find: `${Urls.inspections}find`,
        near: `${Urls.inspections}near`,
        nearsearch: `${Urls.inspections}nearsearch`,
        byaddress: `${Urls.inspections}byaddress`,
        get: `${Urls.inspections}get`,   //get 'get/:vid/:status' => :get
        byvid: `${Urls.inspections}get`, //get 'get/:vid' => :byvid
        byvidlatest: `${Urls.inspections}getlatest`, //get 'getlatest/:vid' => :byvidlatest
        statuses: `${Urls.inspections}status`,
        byaddr: `${Urls.inspections}byaddr`
      }
  }

}
