<template>
  <transition name="slide-fade">
    <div v-if="active">
      <div class="dialog">
        <header class="dialog__title">
          <h1>Add Item</h1>
        </header>

        <section class="dialog__content">
          This is the content area
          <slot></slot>
        </section>

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
      }
    },
    computed: {}
  }
</script>

<style scoped>
  .dialog {
    background-color: #FFFFFF;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 13;
    border-radius: 2px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: auto;
    transform: translate(-50%, -50%);
    transform-origin: center center;
  }

  .dialog__title {
    display: block;
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

  .zoom-fade-enter-active {
    transition: all .3s ease;
  }

  .zoom-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .zoom-fade-enter, .zoom-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>
