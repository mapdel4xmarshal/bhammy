<template>
  <transition name="fade">
    <div v-if="active">
      <div class="dialog">
        <span class="dialog__close-btn"
              @click="$emit('update:active', false)">
          <font-awesome-icon icon="times" color="#9e9e9e"/>
        </span>
        <!-- header-->
        <slot name="title">
          <header class="dialog__title" v-if="title">
            <h1>{{ title }}</h1>
          </header>
        </slot>
        <!-- Content -->
        <section class="dialog__content">
          <slot/>
        </section>
        <!-- Footer -->
        <footer class="dialog__actions">
          <!--<slot name="dialog-actions"></slot>-->
        </footer>
      </div>

      <div class="dialog__overlay" @click="$emit('update:active', false)"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Dialog',
    props: {
      active: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: null
      }
    },
    computed: {}
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/global.scss";

  .dialog {
    background-color: #FFFFFF;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    margin: auto;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    position: fixed;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    z-index: 13;
    border-radius: 2px;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: auto;
    padding: 10px 20px;
    transform: translate(-50%, -50%);
    transform-origin: center center;

    @include respond-to(tablet) {
      max-width: 768px;
      max-height: 80%;
      height: unset;
      min-width: 280px;
    }
  }

  .dialog__close-btn {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  .dialog__title {
    display: block;
    border-bottom: 1px solid #CCC;
    margin-bottom: 10px;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 6;
    overflow: hidden;
    background: rgba(0, 0, 0, .6);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity $fast-animation;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
