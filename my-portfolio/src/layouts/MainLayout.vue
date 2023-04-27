<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="mobile-only"
          @click="toggleDrawer"
        />

        <q-toolbar-title v-if="$q.platform.is.desktop">
          Tales B. de Albuquerque
        </q-toolbar-title>
        <q-toolbar-title v-if="$q.platform.is.mobile"> Tales </q-toolbar-title>

        <div>Frontend Dev</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :show-if-above="!$q.platform.is.mobile"
      bordered
      mini-to-overlay
      :overlay="$q.platform.is.mobile"
      v-model="drawerState"
      :mini="$q.platform.is.mobile ? false : menuState"
      :width="200"
      :breakpoint="300"
    >
      <q-list>
        <EssentialLink
          @mouseover="menuState = false"
          @mouseout="menuState = true"
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const menuState = ref(false)
const drawerState = ref(true)

const toggleDrawer = () => {
  drawerState.value = !drawerState.value
}

const linksList = [
  {
    title: 'Sobre mim',
    icon: 'face',
    to: '/me'
  },
  {
    title: 'Redes Sociais',
    icon: 'o_hub',
    to: '/socialmedia'
  },
  {
    title: 'Projetos',
    icon: 'construction',
    to: '/projects'
  },
  {
    title: 'Contato',
    icon: 'contact_phone',
    to: '/contact'
  }
]
</script>
