<template>
  <a v-if="support" :rel="rel" :target="target" v-bind="$attrs" v-on="$listeners" :href="`mailto:${mailto}`">{{
    mailto
  }}</a>

  <a
    v-else-if="hrefValue"
    :class="classes"
    :rel="rel"
    :target="target"
    :href="hrefValue"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </a>

  <nuxt-link
    v-else-if="to"
    :href="hrefValue"
    :to="toValue"
    :rel="rel"
    :target="target"
    :class="classes"
    :disabled="disabled"
    :event="disabled ? '' : 'click'"
  >
    <slot></slot>
  </nuxt-link>

  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vxLink',
  props: {
    link: { type: String, required: false },
    to: { type: Object, required: false },
    blank: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    support: { type: Boolean, default: false },
    href: { type: String, default: '' },
    mailto: { type: String, default: 'support@tutti.space' },
  },
  data() {
    return {
      hrefValue: this.href,
      toValue: this.to,
      rel: this.blank ? 'noopener' : '',
      target: this.blank ? '_blank' : '',
      classes: { 'dark--text': this.dark, 'text-decoration-underline': this.underline },
    };
  },
  created() {
    if (this.link) {
      if (this.link.startsWith('http://') || this.link.startsWith('https://')) {
        this.hrefValue = this.link;
      } else {
        this.toValue = this.link;
      }
    }
  },
};
</script>
