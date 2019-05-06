<template>
  <div class="scene">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
  export default {
    props: {},
    methods: {
      init() {
        var viewer = new Cesium.Viewer('cesiumContainer', {
          animation: true, //是否显示动画控件
          baseLayerPicker: false, //是否显示图层选择控件
          geocoder: true, //是否显示地名查找控件
          timeline: true, //是否显示时间线控件
          sceneModePicker: true, //是否显示投影方式控件
          navigationHelpButton: false, //是否显示帮助信息控件
          infoBox: true, //是否显示点击要素之后显示的信息
          imageryProvider: new Cesium.UrlTemplateImageryProvider({
            url: "../static/gis/{z}/{x}/{y}.png",
            // url: "http://192.168.20.125:1109/scene/gis/{z}/{x}/{y}.png",
            layer: "tdtBasicLayer",
            style: "default",
            proxy: new Cesium.DefaultProxy('/proxy/')
          })
        });
      },
      fn() {

      }
    },
    created() {

    },
    mounted() {
      this.init();
    }
  };
</script>
<style lang="scss" scoped>
  @import "scene";
</style>
