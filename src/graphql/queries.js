/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      globalLine
      sites {
        items {
          id
          title
          oneMarketing
          brand {
            id
            name
            globalLine
            sites {
              nextToken
            }
          }
          pages {
            items {
              id
              url
              title
              content
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        globalLine
        sites {
          items {
            id
            title
            oneMarketing
            brand {
              id
              name
              globalLine
            }
            pages {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      title
      oneMarketing
      brand {
        id
        name
        globalLine
        sites {
          items {
            id
            title
            oneMarketing
            brand {
              id
              name
              globalLine
            }
            pages {
              nextToken
            }
          }
          nextToken
        }
      }
      pages {
        items {
          id
          url
          title
          content
          site {
            id
            title
            oneMarketing
            brand {
              id
              name
              globalLine
            }
            pages {
              nextToken
            }
          }
          crawls {
            items {
              id
              timestamp
              screenshot
              pagespeed_score
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        oneMarketing
        brand {
          id
          name
          globalLine
          sites {
            items {
              id
              title
              oneMarketing
            }
            nextToken
          }
        }
        pages {
          items {
            id
            url
            title
            content
            site {
              id
              title
              oneMarketing
            }
            crawls {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      url
      title
      content
      site {
        id
        title
        oneMarketing
        brand {
          id
          name
          globalLine
          sites {
            items {
              id
              title
              oneMarketing
            }
            nextToken
          }
        }
        pages {
          items {
            id
            url
            title
            content
            site {
              id
              title
              oneMarketing
            }
            crawls {
              nextToken
            }
          }
          nextToken
        }
      }
      crawls {
        items {
          id
          timestamp
          screenshot
          pagespeed_score
          page {
            id
            url
            title
            content
            site {
              id
              title
              oneMarketing
            }
            crawls {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        title
        content
        site {
          id
          title
          oneMarketing
          brand {
            id
            name
            globalLine
            sites {
              nextToken
            }
          }
          pages {
            items {
              id
              url
              title
              content
            }
            nextToken
          }
        }
        crawls {
          items {
            id
            timestamp
            screenshot
            pagespeed_score
            page {
              id
              url
              title
              content
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCrawl = /* GraphQL */ `
  query GetCrawl($id: ID!) {
    getCrawl(id: $id) {
      id
      timestamp
      screenshot
      pagespeed_score
      page {
        id
        url
        title
        content
        site {
          id
          title
          oneMarketing
          brand {
            id
            name
            globalLine
            sites {
              nextToken
            }
          }
          pages {
            items {
              id
              url
              title
              content
            }
            nextToken
          }
        }
        crawls {
          items {
            id
            timestamp
            screenshot
            pagespeed_score
            page {
              id
              url
              title
              content
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listCrawls = /* GraphQL */ `
  query ListCrawls(
    $filter: ModelCrawlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCrawls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timestamp
        screenshot
        pagespeed_score
        page {
          id
          url
          title
          content
          site {
            id
            title
            oneMarketing
            brand {
              id
              name
              globalLine
            }
            pages {
              nextToken
            }
          }
          crawls {
            items {
              id
              timestamp
              screenshot
              pagespeed_score
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
