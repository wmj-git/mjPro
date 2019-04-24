<template>
  <div class="win">
    <div ref="win" :id="id" v-if="this.data.show">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'win',
    data() {
      return {
        show: true,
        class:""
      }
    },
    props: ["id", "data"],
    methods: {
      init() {
        if((typeof this.data.class)!=="undefined"){
          this.class=this.data.class;
        }
        let _this = this;
        console.log(_this.data);
        $("#" + _this.id).window({
          title: _this.data.title,
          width:_this.data.width,
          height:_this.data.height,
          top:_this.data.top,
          left:_this.data.left,
          cls:_this.class,
          collapsible:false,
          minimizable:false,
          maximizable:false,
          closable:true,
          modal: false,
          shadow: false,
          draggable: true,
          resizable:_this.data.resizable,
          onBeforeClose: function () {
            if (this) {
              $(this).window('destroy');
            }
            _this.$store.commit("win/win_close", {win_id: _this.id});
          }
        });


      },
      fn() {

      }
    },
    mounted() {
      this.init();
    },
    beforeDestroy() {
      if ($("#" + this.id)) {
        $("#" + this.id).window('destroy');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "win";
</style>
