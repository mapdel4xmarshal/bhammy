<template>
  <div class="dialog">
    <header class="dialog__title">

    </header>

    <section class="dialog__content">

    </section>

    <footer class="dialog__actions">

    </footer>
  </div>
</template>

<script>
export default {
  name: 'Dialog'
}
</script>

<style scoped>
  .dialog {
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    flex-direction: row;
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
    transition: opacity .15s cubic-bezier(.25, .8, .25, 1), transform .2s cubic-bezier(.25, .8, .25, 1);
    will-change: opacity, transform, left, top;
  }

  .dialog__overlay {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 6;
    overflow: hidden;
    background: rgba(0, 0, 0, .6);
    transition: .35s cubic-bezier(.4, 0, .2, 1);
    transition-property: opacity;
    will-change: opacity;
  }
</style>
