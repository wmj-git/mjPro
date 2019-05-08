//data
import {db} from "./data/db"
import {api, toScene, entitiesClear} from "./utils"
import {infoInit} from "./info";
import {addModeFN, modeClear} from "./mode"
import {addPolygonFN} from "./grid"
import {addMarkerFN, markerClear} from "./marker"
import {alphaFN} from "./alpha"
/*
import "./xyz.js"
import "./measure.js"
*/


/*$('#alpha').slider({
  mode: 'h',
  tipFormatter: function (value) {
    return value + '%';
  },
  onChange: function (newValue, oldValue) {
    console.log(newValue);
    globeAlphaFn(newValue / 100);
  }
});*/


export function openScene(viewer,tileset_url) {
  let scene = viewer.scene;
  scene.invertClassification = true;
  scene.invertClassificationColor = new Cesium.Color(1.0, 1.0, 1.0, 1.0);

  let globe = viewer.scene.globe;
  globe.depthTestAgainstTerrain = true;


  let tileset = new Cesium.Cesium3DTileset({
    name: "tileset_hc",
    url: tileset_url,
    loadSiblings: true,
    maximumMemoryUsage: 1000
  });

  viewer.scene.primitives.add(tileset);

//跳转到场景全貌
  tileset.readyPromise.then(function () {
    let boundingSphere = tileset.boundingSphere;
    console.log(boundingSphere);
    viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0.0, -0.5, boundingSphere.radius + 500.0));
    viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);


    let cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
    let surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
    let offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, -50);
    let translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
  });

// viewer.zoomTo(tileset);//场景跳转

  infoInit(viewer);//初始化信息窗

  let polyline = viewer.entities.add({
    name: '线路1',
    id: 'polyline_1',
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([
        106.2880394470837,
        30.020255734295507,
        106.28999155378249,
        30.02314206001763,
        106.29005396817485,
        30.022175733467922,
        106.29144371823138,
        30.022515625860592,
        106.29083865072324,
        30.02556221957544,
        106.28666473851872,
        30.02695784278787
      ]),
      width: 18,
      material: new Cesium.PolylineOutlineMaterialProperty({
        color: Cesium.Color.fromCssColorString('#4cf02c').withAlpha(0.8),
        outlineWidth: 2,
        outlineColor: Cesium.Color.BLACK
      }),
      clampToGround: true,
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE
    }
  });

  return {
    scene,
    globe,
    tileset
  }
}


export default {
  db: db,
  api: api,
  openScene: openScene,
  toScene: toScene,
  alphaFN: alphaFN,
  addModeFN: addModeFN,
  modeClear: modeClear,
  addPolygonFN: addPolygonFN,
  addMarkerFN: addMarkerFN,
  markerClear: markerClear,
  entitiesClear: entitiesClear
}
