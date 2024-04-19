declare module '@/constants' {
  export * from '@/constants/index';
}

declare module '@/utils' {
  export * from '@/utils/index';
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
