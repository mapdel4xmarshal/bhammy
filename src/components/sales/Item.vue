<template>
  <!--<custom-dialog
    :active.sync="isVisible"
    :title="title">
    <div class="item">
      <div class="item__type item&#45;&#45;input">
        <label for="type">Type</label>
        <select id="type">
          <option value="Egg">Egg</option>
          <option value="Fish">Fish</option>
          <option value="Old layers">Old layers</option>
        </select>
      </div>

      <div class="item__size item&#45;&#45;input">
        <label for="size">Size</label>
        <select id="size" v-model="data.size">
          <option value="Jumbo">Jumbo</option>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Pullet">Pullet</option>
        </select>
      </div>

      <div class="item__price item&#45;&#45;input">
        <label for="price">Price</label>
        <span class="input-icon">₦</span>
        <input id="price" type="number" :value="data.price" disabled/>
      </div>

      <div class="item__quantity item&#45;&#45;input">
        <label for="quantity">Quantity</label>
        <input id="quantity" type="number" v-model="data.quantity"/>
      </div>

      <div class="item__discount item&#45;&#45;input">
        <label for="discount">Discount</label>
        <span class="input-icon">₦</span>
        <input id="discount" type="number"  v-model="data.discount"/>
      </div>
    </div>

    <template v-slot:dialog-actions>
      <button-pill
        :is-primary="false"
        :click-handler="close"
        class="item__cancel-button">
        Cancel
      </button-pill>

      <button-pill
        v-if="editMode"
        :is-primary="false"
        :click-handler="close">
        Delete
      </button-pill>

      <button-pill :title="action"/>
    </template>
  </custom-dialog>-->
  <v-dialog
    v-model="isVisible"
    max-width="500"
  >
    <v-card>
      <v-card-title class="headline">Use Google's location service?</v-card-title>

      <v-card-text>
    <div class="item">
      <div class="item__type item--input">
        <label for="type">Type</label>
        <select id="type">
          <option value="Egg">Egg</option>
          <option value="Fish">Fish</option>
          <option value="Old layers">Old layers</option>
        </select>
      </div>

      <div class="item__size item--input">
        <label for="size">Size</label>
        <select id="size" v-model="data.size">
          <option value="Jumbo">Jumbo</option>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Pullet">Pullet</option>
        </select>
      </div>

      <div class="item__price item--input">
        <label for="price">Price</label>
        <span class="input-icon">₦</span>
        <input id="price" type="number" :value="data.price" disabled/>
      </div>

      <div class="item__quantity item--input">
        <label for="quantity">Quantity</label>
        <input id="quantity" type="number" v-model="data.quantity"/>
      </div>

      <div class="item__discount item--input">
        <label for="discount">Discount</label>
        <span class="input-icon">₦</span>
        <input id="discount" type="number"  v-model="data.discount"/>
      </div>
    </div>
      </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <button-pill
            :is-primary="false"
            :click-handler="close"
            class="item__cancel-button">
            Cancel
          </button-pill>

          <button-pill
            v-if="editMode"
            :is-primary="false"
            :click-handler="close">
            Delete
          </button-pill>

          <button-pill :title="action"/>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
import ButtonPill from '../common/ButtonPill'
import CustomDialog from '@/components/common/Dialog'

export default {
  name: 'AddItem',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Object
    },
    editMode: {
      type: Boolean
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ButtonPill,
    CustomDialog
  },
  computed: {
    isVisible: {
      // getter
      get: function () {
        return this.show
      },
      // setter
      set: function (newValue) {
        this.$emit('update:show', newValue)
      }
    },
    action () {
      return this.editMode ? 'Update item' : 'Add item'
    },
    title () {
      return this.editMode ? 'Edit item' : 'Add item'
    }
  },
  methods: {
    close () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 15px;
  }

  .item--input {
    position: relative;

    &::after {
      height: 1px;
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      background-color: #0000006b;
    }
  }

  .item__actions {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  .input-icon {
    position: absolute;
    bottom: 5px;
    left: 0;

    & + input {
      padding-left: 15px;
    }
  }

  .item__cancel-button {
     margin-right: auto !important;
  }
</style>
