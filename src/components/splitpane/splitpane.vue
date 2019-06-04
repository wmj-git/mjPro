<template>
  <div class="splitpane">
    <split-pane split="vertical" @resize="resize" :min-percent='20' :default-percent='30'>
      <template slot="paneL">
        <div class="left-container"/>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container"/>
          </template>
          <template slot="paneR">
            <div class="bottom-container"/>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
<!--  <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical">
    <template slot="paneL">
      A
    </template>
    <template slot="paneR">
      <split-pane split="horizontal">
        <template slot="paneL">
          B
        </template>
        <template slot="paneR">
          C
        </template>
      </split-pane>
    </template>
  </split-pane>-->

</template>

<script>

  import splitPane from 'vue-splitpane'
  import button_group from '@/components/button_group/button_group'

  export default {
    name: "splitpane",
    data() {
      return {}
    },
    props: ["data"],
    components: {
      splitPane,
      button_group
    },
    methods: {
      resize() {
        console.log('resize')
      }
    },
    created() {
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "splitpane";
</style>
