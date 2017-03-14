import Ember from 'ember';

const {
  Controller,
  computed: { readOnly }
} = Ember;

export default Controller.extend({
  queryParams: ['query', 'page'],

  query: '',
  page: 1,
  limit: 12,
  packageCount: readOnly('model.length'),

  actions: {
    resetPage() {
      this.set('page', 1);
    },
    nextPage() {
      this.incrementProperty('page');
    },

    previousPage() {
      this.decrementProperty('page');
    }
  }
});
