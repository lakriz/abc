/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
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
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite {
    onUpdateSite {
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
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite {
    onDeleteSite {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
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
export const onCreateCrawl = /* GraphQL */ `
  subscription OnCreateCrawl {
    onCreateCrawl {
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
export const onUpdateCrawl = /* GraphQL */ `
  subscription OnUpdateCrawl {
    onUpdateCrawl {
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
export const onDeleteCrawl = /* GraphQL */ `
  subscription OnDeleteCrawl {
    onDeleteCrawl {
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
