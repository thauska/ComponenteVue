<template>
  <div id="app">
    <ButtonVue></ButtonVue>
    <ButtonString></ButtonString>
    <ButtonTemplateString></ButtonTemplateString>
    <ButtonXTemplate></ButtonXTemplate>
    <ButtonInlineTemplate inline-template>
      <button @click="click">
        Click ButtonInlineTemplate {{ count }} times
      </button>
    </ButtonInlineTemplate>
    <ButtonRender></ButtonRender>
  </div>
</template>

<script>
import ButtonVue from './ButtonVue.vue'

export default {
  name: 'App',
  components: {
    ButtonVue
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
