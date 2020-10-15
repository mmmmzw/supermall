<template>
  <div class="toast"  v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      // message: {
      //   type: String,
      //   default: ''
      // },
      // show: {
      //   type: Boolean,
      //   default: false
      // }
    },
    data(){
      return {
        message: '',
        isshow: false
      }
    },
    methods: {
      show(message, duration=1000) {
        this.isshow = true
				this.message = "已添加到购物车"
				setTimeout(() => {
					this.isshow = false
					this.message = ''
				}, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%, -50%);

    z-index: 99;

    background-color: rgba(0, 0, 0, 0.35);
    color: #fff;
  }
</style>