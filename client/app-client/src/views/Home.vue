<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-banner></the-banner>
    <the-categories></the-categories>
    <the-blog></the-blog>
    <the-places></the-places>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheBanner from "../components/TheBanner.vue";
import TheCategories from "../components/TheCategories.vue";
import ThePlaces from "../components/ThePlaces.vue";
import TheBlog from "../components/TheBlog.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  name: "Home",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheBlog,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      loadUserLoginFromLocalStorage: "loadUserLoginFromLocalStorageAction",
    }),
  },
  created() {
    this.loadUserLoginFromLocalStorage();
  },
};
</script>
