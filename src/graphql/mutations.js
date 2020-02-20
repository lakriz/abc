/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createCrawl = /* GraphQL */ `
  mutation CreateCrawl(
    $input: CreateCrawlInput!
    $condition: ModelCrawlConditionInput
  ) {
    createCrawl(input: $input, condition: $condition) {
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
export const updateCrawl = /* GraphQL */ `
  mutation UpdateCrawl(
    $input: UpdateCrawlInput!
    $condition: ModelCrawlConditionInput
  ) {
    updateCrawl(input: $input, condition: $condition) {
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
export const deleteCrawl = /* GraphQL */ `
  mutation DeleteCrawl(
    $input: DeleteCrawlInput!
    $condition: ModelCrawlConditionInput
  ) {
    deleteCrawl(input: $input, condition: $condition) {
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
