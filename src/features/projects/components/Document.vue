<script setup lang="ts">
import { computed } from "vue";
import Button from "../../../components/Button.vue";
import { blogStrings } from "../../../content/blog/strings";

export interface Props {
  // Ruta del archivo (ej. "docs/mi-investigacion.pdf" dentro de /public) o una URL completa
  src: string;
  // "pdf" = visor de PDF del navegador | "embed" = cualquier página incrustable (Google Slides, YouTube...)
  kind?: "pdf" | "embed";
  title?: string;
  // Archivo o enlace que descarga el botón. Si no lo pones, usa `src` (solo en PDFs).
  download?: string;
  downloadLabel?: string;
  // Alto del visor en porcentaje de la pantalla (por defecto 80)
  heightVh?: number;
  index: number;
}

const props = defineProps<Props>();

const resolve = (url: string) => {
  if (/^(https?:)?\/\//.test(url)) return url;
  return import.meta.env.BASE_URL + url.replace(/^\/+/, "");
};

const viewerSrc = computed(() => {
  const url = resolve(props.src);
  if ((props.kind ?? "pdf") === "pdf" && !/^(https?:)?\/\//.test(props.src)) {
    return `${url}#toolbar=1&navpanes=0&view=FitH`;
  }
  return url;
});

const downloadHref = computed(() => {
  const target = props.download ?? ((props.kind ?? "pdf") === "pdf" ? props.src : undefined);
  return target ? resolve(target) : null;
});

const frameStyle = computed(() => ({ height: `calc(var(--lvh) * ${props.heightVh ?? 80})` }));
</script>

<template>
  <div class="project-document">
    <div class="project-document-frame" :style="frameStyle">
      <iframe :src="viewerSrc" :title="props.title ?? 'Documento'" loading="lazy" allowfullscreen></iframe>
    </div>
    <div class="project-document-actions" v-if="downloadHref">
      <a :href="downloadHref" download target="_blank" rel="noopener" data-cursor="arrow-external">
        <Button renderAs="div" variant="accent" class="children-unclickable" data-hoversound="hover">
          {{ props.downloadLabel ?? blogStrings.download }}
        </Button>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-document {
  width: 100%;
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);

  @include mixins.mq("lg") {
    grid-column: 2 / 12;
  }

  &-frame {
    width: 100%;
    min-height: 420px;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px var(--color-grayscale-500);

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }
  }

  &-actions {
    display: flex;
    justify-content: center;
  }
}
</style>
