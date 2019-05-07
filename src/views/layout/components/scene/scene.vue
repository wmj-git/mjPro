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
          scene3DOnly:true,
          animation: false, //是否显示动画控件
          baseLayerPicker: false, //是否显示图层选择控件
          geocoder: false, //是否显示地名查找控件
          timeline: false, //是否显示时间线控件
          sceneModePicker: true, //是否显示投影方式控件
          homeButton:false,
          navigationHelpButton: false, //是否显示帮助信息控件
          infoBox: true, //是否显示点击要素之后显示的信息
          imageryProvider: new Cesium.UrlTemplateImageryProvider({
            url: "http://192.168.20.18:800/zhlhscene/gis/{z}/{x}/{y}.png",
            layer: "tdtBasicLayer",
            style: "default",
            proxy: new Cesium.DefaultProxy('/proxy/')
          })
        });

        var tileset = new Cesium.Cesium3DTileset({
          url: "http://192.168.20.18:800/zhlhscene/b3dm/tileset.json",
          loadSiblings: true,
          maximumMemoryUsage: 1000
        });

        viewer.scene.primitives.add(tileset);

        //跳转到场景全貌
        tileset.readyPromise.then(function(){
          var boundingSphere = tileset.boundingSphere;
          console.log(boundingSphere);
          viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0.0, -0.5, boundingSphere.radius + 500.0));
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
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
