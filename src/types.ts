export interface SiteConfig {
  // author: string;
  // date: {
  //   locale: string | string[] | undefined;
  //   options: Intl.DateTimeFormatOptions;
  // };
  author: string,
  description: string;
  lang: string;
  // ogLocale: string;
  // sortPostsByUpdatedDate: boolean;
  title: string;
  // webmentions?: {
  //   link: string;
  //   pingback?: string;
  // };
}

export interface SiteMeta {
  description?: string;
  title: string;
}
