<template>
  <div class="scene">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>

  import cm from "@/utils/cesium/index"

  export default {
    data() {
      return {
        id:"scene",
        viewer: "",
        _scene: ""
      }
    },
    props: {},
    methods: {
      init() {
        this.viewer = new Cesium.Viewer('cesiumContainer', {
          scene3DOnly: true,
          animation: false, //是否显示动画控件
          baseLayerPicker: false, //是否显示图层选择控件
          geocoder: false, //是否显示地名查找控件
          timeline: false, //是否显示时间线控件
          sceneModePicker: true, //是否显示投影方式控件
          homeButton: false,
          navigationHelpButton: false, //是否显示帮助信息控件
          infoBox: true, //是否显示点击要素之后显示的信息
          imageryProvider: new Cesium.UrlTemplateImageryProvider({
            url: process.env.SCENE_URL+"/zhlhscene/gis/{z}/{x}/{y}.png",
            // url: "http://192.168.20.18:800/zhlhscene/gis/{z}/{x}/{y}.png",
            layer: "tdtBasicLayer",
            style: "default"
          })
          // 天地图影像
          /* imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
               url: 'http://t0.tianditu.gov.cn/img_w/wmts?tk=dcfb31be4b1daef33e484e48348cb28b',
               layer: 'img',
               style: 'default',
               tileMatrixSetID: 'w',
               format: 'tiles',
               maximumLevel: 18
           })*/
        });
        /* //加载影像注记
         var layer1 = new Cesium.WebMapTileServiceImageryProvider({
             url: 'http://t0.tianditu.gov.cn/cia_w/wmts?tk=dcfb31be4b1daef33e484e48348cb28b',
             layer: 'cia',
             style: 'default',
             tileMatrixSetID: 'w',
             format: 'tiles',
             maximumLevel: 18
         });
         viewer.imageryLayers.addImageryProvider(layer1);*/


        // 加载地形1
        this._scene = cm.openScene(this.viewer,process.env.SCENE_URL+"/zhlhscene/b3dm/tileset.json");
        cm.addModeFN(this.viewer);
        cm.addPolygonFN(this.viewer);
        cm.addMarkerFN(cm.db.posts, "../../static/image/marker_2.png", this.viewer);
        cm.addMarkerFN(cm.db.posts2, "../../static/image/marker_3.png", this.viewer);
      },
      alpha(obj) {
        cm.alphaFN(obj, this.viewer, this._scene.scene);
      },
      fn() {

      }
    },
    created() {

    },
    mounted() {
      this.init();
      this.bus.$on(this.id, obj => {
        this[obj.fn](obj.value);
      });
    }
  };
</script>
<style lang="scss" scoped>
  @import "scene";
</style>
