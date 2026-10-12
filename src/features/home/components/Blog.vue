<script setup lang="ts">
import PreviewCard from "../../projects/components/PreviewCard.vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { blogPreviews } from "../../../content/blog/previews";
import { blogStrings } from "../../../content/blog/strings";
</script>

<template>
  <div class="blog" v-if="blogPreviews.length">
    <NotchSection class="blog-notch-end" />
    <div class="grid">
      <div class="blog-title">
        <Banner class="blog-title-banner" :copy="blogStrings.banner" size="sm" animated />
        <h2 class="blog-title-copy">{{ blogStrings.title }}</h2>
      </div>
    </div>
    <div class="grid">
      <div class="blog-cards">
        <PreviewCard v-for="preview in blogPreviews" :key="preview.slug" :preview="preview" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  padding-top: 24px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch-end {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--color-beige-600);
    --icon-color: var(--color-beige-600);
  }

  &-cards {
    max-width: 100%;
    flex: 1;
    grid-column: 1 / span 12;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("lg") {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-column: 3 / span 8;
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
}
</style>
