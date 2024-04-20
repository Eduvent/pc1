export class Country {
  country_name: string;
  iso_3166: string;
  total_holidays: number;
  supported_languages: number;
  uuid: string;
  flag_unicode: string;

  constructor() {
    this.country_name = '';
    this.iso_3166 = '';
    this.total_holidays = 0;
    this.supported_languages = 0;
    this.uuid = '';
    this.flag_unicode = '';
  }
}
