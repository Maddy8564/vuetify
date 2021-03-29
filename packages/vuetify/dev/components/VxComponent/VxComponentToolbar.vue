<template>
  <v-hover v-slot="{ hover }">
    <v-toolbar
      height="48"
      color="transparent"
      :class="hover ? 'opacity-100' : 'opacity-50'"
      dense
      absolute
      class="top left w-100"
      flat
      v-if="!preview && component.toolbar"
    >
      <v-toolbar-title class="text-caption text-bold">
        {{ component.toolbar.title }}
      </v-toolbar-title>

      <!-- <v-text-field style="width:50px" height="24" dense solo  hide-details="" label="xs" v-model="component.props.cols" />
      <v-text-field style="width:50px" height="24" dense solo  hide-details="" label="sm" v-model="component.props.sm" />
      <v-text-field style="width:50px" height="24" dense solo  hide-details="" label="lg" v-model="component.props.lg" />
      <v-text-field style="width:50px" height="24" dense solo  hide-details="" label="xl" v-model="component.props.xl" /> -->

      <v-spacer />

      <v-btn
        depressed
        small
        icon
        color="primary"
        class="text-none text-caption"
        @click="$emit('edit')"
      >
        <!-- {{ component.toolbar.add }} -->
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>

      <v-btn
        v-if="component.toolbar.add"
        depressed
        small
        icon
        color="primary"
        class="text-none text-caption"
        @click="$emit('add', component.toolbar.add.value)"
      >
        <!-- {{ component.toolbar.add }} -->
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-btn
        v-if="!component.toolbar.hideRemove"
        depressed
        small
        icon
        color="error"
        class="text-none text-caption"
        @click="$emit('remove')"
      >
        <!-- Remove -->
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </v-toolbar>
  </v-hover>
</template>

<script>
export default {
  name: "VxComponentToolbar",
  props: {
    preview: { type: Boolean, required: true },
    component: { type: Object, required: true },
  },
  methods:{
    onAdd(name, component) {
      const item = components.find((x) => x.name == name);

      if (item) {
        component.components.push(_.cloneDeep(item));
        this.$root.$emit("forceUpdate");
      }
    },
  }
};
</script>