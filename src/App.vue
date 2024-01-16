<script setup lang="ts">

import TodoContainer from './views/TodoContainer.vue'
</script>

<template>
  <v-app id="inspire">
    <v-app-bar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <TodoContainer />
      </v-container>
    </v-main>
  </v-app>
</template>