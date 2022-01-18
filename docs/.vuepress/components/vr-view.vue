<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  props: {
    // 模型名称
    moduleName: {
      type: String,
      required: true,
    },
    // 模型根路径
    modulePath: {
      type: String,
      required: true,
    },
    // 显示大小（默认以一半窗口大小显示）
    size: {
      type: Object,
      required: false,
      default() {
        return {
          width: window.innerWidth / 2,
          height: window.innerHeight / 2,
        };
      },
    },
    // 模型显示位置
    position: {
      type: Object,
      required: false,
    },
    // 背景颜色
    backgroundColor: {
      type: Number,
      required: false,
      default: 0x87ceeb,
    },
    // 显示网格线（默认不显示）
    showGrid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1
      );

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.objLoader = new OBJLoader();
      this.mtlLoader = new MTLLoader();
      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );

      this.renderer.setSize(this.size.width, this.size.height);
      this.renderer.setClearColor(this.backgroundColor, 1);

      document
        .querySelector("#container")
        .appendChild(this.renderer.domElement);
      window.addEventListener("resize", () => this.onWindowResize());

      this.camera.position.set(-0.5, 2, 1);
      // this.camera.position.set(10, 500, 500);

      // 增加网格
      if (this.showGrid) this.scene.add(new THREE.GridHelper(10, 10));

      // 灯光
      this.scene.add(new THREE.AmbientLight("#FFFFFF", 1));

      // 加载3D贴图
      this.mtlLoader.load(
        `${this.modulePath}/${this.moduleName}.mtl`,
        (materials) => {
          this.objLoader.setMaterials(materials);

          // 加载3D模型
          this.objLoader.load(
            `${this.modulePath}/${this.moduleName}.obj`,
            (object) => {
              if (this.position) object.position.set(this.position);
              this.scene.add(object);
            }
          );
        }
      );
      this.render();
    },
    // 更新函数
    render() {
      this.renderer.render(this.scene, this.camera);
      this.orbitControls.update();
      window.requestAnimationFrame(() => this.render());
    },

    // 窗口大小发生改变
    onWindowResize() {
      this.renderer.setSize(this.size.width, this.size.height);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    },
  },
};
</script>
 