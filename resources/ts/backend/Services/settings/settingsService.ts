import {AxiosService} from '../../Utils/Service';

class Dropdown {
    countries = (id?: string) => AxiosService.get(`/countries-list?country_id=${id}`).then((res)=>res.data);
    // New methods for fetching timezones and languages
    timezones = (id?: string) => AxiosService.get(`/timezones-list?timezone_id=${id}`).then((res)=>res.data);

    languages = (id?:string) => AxiosService.get(`/languages-list?language_id=${id}`).then((res)=>res.data);
  }

  export const DropdownService = new Dropdown();
