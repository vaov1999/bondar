<template>
  <div style="height: 100%; width: 100%">
    {{ product }}
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      product: {},
      routeParam: this.$route.params.id
    };
  },
  apollo: {
    product: {
      query: gql`
        query Products($id: ID!) {
          product(id: $id) {
            id
            title
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>
