<template lang='pug' src='./MmFilters.pug'></template>
<style src='./MmFilters.css' scoped></style>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MmFilters',
  data: () => ({
    formFilters: {
      statuses: {
        published: false,
        pending: false
      },
      severities: {
        low: false,
        medium: false,
        high: false,
        dangerous: false
      },
      tags: {}
    }
  }),
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      filtersVisible: 'map/filtersVisible',
      filters: 'map/filters',
      tags: 'tags/tags'
    })
  },
  watch: {
    filtersVisible (newVal, oldVal) {
      if (newVal) {
        this.getTags()
      }
    },
    tags (newVal, oldVal) {
      let tags = []
      newVal.forEach(tag => (
        tags.push({
          slug: tag.slug,
          name: tag.name,
          selected: false
        })
      ))
      this.formFilters.tags = Object.assign(tags, this.formFilters.tags)
    }
  },
  methods: {
    ...mapMutations({
      setFiltersVisibility: 'map/SET_FILTERS_VISIBILITY',
      setFilters: 'map/SET_FILTERS'
    }),
    ...mapActions({
      getTags: 'tags/getTags'
    }),
    handleClose () {
      this.setFiltersVisibility(false)
    },
    handleSubmit () {
      this.setFilters({
        statuses: this.formFilters.statuses,
        severities: this.formFilters.severities,
        tags: this.formFilters.tags.filter(tag => tag.selected).map(tag => tag.name)
      })
    }
  }
}
</script>
