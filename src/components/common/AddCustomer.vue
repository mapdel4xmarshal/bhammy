<template>
 <!-- <div class="customer">
    <div class="customer__actions">
      <button>choose</button>
      <button>+ new</button>
    </div>
    <div class="customer__detail">
      <strong>Mr Bamidele Mapayi</strong>
      House 24, Mandate Estate. <br>
      Ilorin.<br>
      080730000000
    </div>
    <div class="customer__detail-handle">
      <font-awesome-icon icon="angle-up"/>
    </div>
  </div>-->
 <div>
   <v-autocomplete
     v-model="model"
     :items="items"
     :loading="isLoading"
     :search-input.sync="search"
     clearable
     hide-details
     hide-selected
     item-text="name"
     item-value="symbol"
     label="Search for a customer..."
   >
     <template v-slot:no-data>
       <v-list-item>
         <v-list-item-title>
           Search for a
           <strong>Customer</strong> by name
         </v-list-item-title>
       </v-list-item>
     </template>
     <template v-slot:selection="{ attr, on, item, selected }">
       <v-chip
         v-bind="attr"
         :input-value="selected"
         color="blue-grey"
         class="white--text"
         v-on="on"
       >
         <v-icon left>mdi-coin</v-icon>
         <span v-text="item.name"></span>
       </v-chip>
     </template>
     <template v-slot:item="{ item }">
       <v-list-item-avatar
         color="indigo"
         class="headline font-weight-light white--text"
       >
         {{ item.name.charAt(0) }}
       </v-list-item-avatar>
       <v-list-item-content>
         <v-list-item-title v-text="item.name"></v-list-item-title>
         <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
       </v-list-item-content>
       <v-list-item-action>
         <v-icon>mdi-coin</v-icon>
       </v-list-item-action>
     </template>
   </v-autocomplete>
  <!-- <v-card
    class="overflow-hidden"
    color="primary"
    dark
  >
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
      ></v-text-field>
      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="name"
        label="State"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>-->

 </div>
</template>

<script>
export default {
  name: 'AddCustomer'
}
</script>

<style lang="scss" scoped>
  .customer {

  }

  .customer__actions {
    display: inline-grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 5px;
    margin-bottom: 10px;
    width: 100%;
  }

  .customer__detail {
    padding: 10px;
    background-color: transparent;
  }

  .customer__detail-handle {
    margin: auto;
    height: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
