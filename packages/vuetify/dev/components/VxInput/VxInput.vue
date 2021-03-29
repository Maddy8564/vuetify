<template>
  <div>
    <v-autocomplete
      v-if="type === 'autocomplete'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-autocomplete>
    <v-combobox
      v-else-if="type === 'combobox'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-combobox>
    <v-checkbox
      v-else-if="type === 'checkbox' || type === 'boolean'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-checkbox>
    <v-file-input
      v-else-if="type === 'file'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-file-input>
    <v-radio
      v-else-if="type === 'radio'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-radio>
    <v-range-slider
      v-else-if="type === 'range'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-range-slider>
    <v-select
      v-else-if="type === 'select'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-select>
    <v-slider
      v-else-if="type === 'slider'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-slider>
    <v-switch
      v-else-if="type === 'switch'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-switch>
    <v-textarea
      v-else-if="type === 'textarea'"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-textarea>
    <v-text-field
      v-else
      :type="type"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "VxInput",
  props: { type: String },
  //   data() {
  //     return {
  //       inputValue: this.value,
  //     }
  //   },
};
</script>
