import { defineStore } from 'pinia';
import { Helpers } from '../Utils/Helper';
import { DropdownService } from '../Services/settings/settingsService';

export const useSettingsStore = defineStore('settings', () => {
  const countries = Helpers.useDynamicRef([]);
  const timezones = Helpers.useDynamicRef([]);
  const languages = Helpers.useDynamicRef([]);

  async function fetchCountries() {
    try {
      countries.value = await DropdownService.countries();
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  async function fetchTimezones() {
    try {
      timezones.value = await DropdownService.timezones();
    } catch (error) {
      console.error('Error fetching timezones:', error);
    }
  }

  async function fetchLanguages() {
    try {
      languages.value = await DropdownService.languages();

    } catch (error) {
      console.error('Error fetching languages:', error);
    }
  }

  return { countries, timezones, languages, fetchCountries, fetchTimezones, fetchLanguages };
});
