<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { profile } from "../../../content/profile";

const fileUrl = (path: string) => import.meta.env.BASE_URL + path.replace(/^\/+/, "");
</script>

<template>
  <section class="profile">
    <NotchSection class="profile-notch-start" />
    <div class="grid">
      <div class="profile-head">
        <Banner class="profile-head-banner" :copy="profile.banner" size="sm" animated />
        <h2 class="profile-head-name">{{ profile.fullName }}</h2>
        <p class="profile-head-role">{{ profile.role }}</p>
      </div>
    </div>
    <div class="grid">
      <div class="profile-cards">
        <article class="profile-card">
          <h3 class="profile-card-title">{{ profile.who.title }}</h3>
          <p class="profile-card-text">{{ profile.who.text }}</p>
        </article>
        <article class="profile-card">
          <h3 class="profile-card-title">{{ profile.can.title }}</h3>
          <p class="profile-card-text">{{ profile.can.text }}</p>
        </article>
        <article class="profile-card profile-card-wide">
          <h3 class="profile-card-title">{{ profile.education.title }}</h3>
          <ul class="profile-education">
            <li v-for="item in profile.education.items" :key="item.name" class="profile-education-item">
              <strong>{{ item.name }}</strong>
              <span>{{ item.detail }}</span>
              <span class="profile-education-place">{{ item.place }}</span>
            </li>
          </ul>
        </article>
        <article class="profile-card profile-card-wide">
          <h3 class="profile-card-title">{{ profile.skills.title }}</h3>
          <div class="profile-skills">
            <div class="profile-skills-group">
              <h4 class="profile-skills-title">{{ profile.skills.technical.title }}</h4>
              <ul class="profile-chips">
                <li v-for="skill in profile.skills.technical.items" :key="skill" class="profile-chip profile-chip-tech">
                  {{ skill }}
                </li>
              </ul>
            </div>
            <div class="profile-skills-group">
              <h4 class="profile-skills-title">{{ profile.skills.social.title }}</h4>
              <ul class="profile-chips">
                <li v-for="skill in profile.skills.social.items" :key="skill" class="profile-chip profile-chip-social">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article class="profile-card profile-card-wide">
          <h3 class="profile-card-title">{{ profile.certifications.title }}</h3>
          <ul class="profile-certs">
            <li v-for="item in profile.certifications.items" :key="item.name" class="profile-cert">
              <span
                class="profile-cert-status"
                :class="{
                  'profile-cert-status-done': item.status === 'Completado',
                  'profile-cert-status-progress': item.status === 'En curso',
                  'profile-cert-status-award': item.status === 'Reconocimiento',
                }"
                >{{ item.status }}</span
              >
              <strong class="profile-cert-name">{{ item.name }}</strong>
              <span v-if="item.issuer" class="profile-cert-issuer">{{ item.issuer }}</span>
              <span v-if="item.detail" class="profile-cert-detail">{{ item.detail }}</span>
              <a v-if="item.file" class="profile-cert-link" :href="fileUrl(item.file)" target="_blank" rel="noopener"
                >Ver constancia</a
              >
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  padding-top: 96px;
  padding-bottom: 0;

  @include mixins.mq("md") {
    padding-top: 144px;
    gap: var(--space-xxl);
  }

  &-notch-start {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-beige-400);
    --icon-color: var(--color-beige-400);
  }

  &-head {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
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

    &-name {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-sm);
      line-height: 1.1;

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-md);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-lg);
      }
    }

    &-role {
      margin-top: var(--space-sm);
      font-size: var(--font-size-lg);
      font-weight: 700;
      color: var(--color-text-300);

      @include mixins.mq("md") {
        font-size: var(--font-size-xl);
      }
    }
  }

  &-cards {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: 1fr;

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.mq("lg") {
      grid-column: 3 / span 8;
    }
  }

  &-card {
    background-color: var(--color-beige-500);
    border: 1px solid var(--color-grayscale-500);
    border-radius: var(--radius-xl);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-wide {
      @include mixins.mq("md") {
        grid-column: 1 / -1;
      }
    }

    &-title {
      font-size: var(--font-size-title-xs);
      font-weight: 900;
    }

    &-text {
      font-size: var(--font-size-md);
      line-height: 1.6;
      color: var(--color-text-400);
    }
  }

  &-education {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-size: var(--font-size-md);
    }

    &-place {
      color: var(--color-text-300);
      font-size: var(--font-size-sm);
    }
  }

  &-skills {
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: 1fr;

    @include mixins.mq("md") {
      grid-template-columns: 1.4fr 1fr;
    }

    &-title {
      font-size: var(--font-size-sm);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text-300);
      margin-bottom: var(--space-xs);
    }
  }

  &-chips {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  &-chip {
    padding: 6px 14px;
    border-radius: 999px;
    font-size: var(--font-size-sm);
    font-weight: 700;

    &-tech {
      background-color: var(--color-orange-400);
      color: var(--color-white-400);
    }

    &-social {
      background-color: var(--color-beige-700);
      color: var(--color-text-400);
    }
  }
  &-certs {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--space-md);
    grid-template-columns: 1fr;

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-cert {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    background-color: var(--color-beige-400);

    &-name {
      font-size: var(--font-size-md);
      line-height: 1.3;
    }

    &-issuer {
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-text-300);
    }

    &-detail {
      font-size: var(--font-size-sm);
      color: var(--color-text-400);
    }

    &-link {
      margin-top: 4px;
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-orange-400);
      text-decoration: underline;
    }

    &-status {
      padding: 2px 10px;
      border-radius: 999px;
      font-size: var(--font-size-xs, 12px);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      &-done {
        background-color: #d8f3e7;
        color: #1b6b3a;
      }

      &-progress {
        background-color: #ffe3c2;
        color: #a85500;
      }

      &-award {
        background-color: #ecd9f7;
        color: #6a2c91;
      }
    }
  }
}
</style>
