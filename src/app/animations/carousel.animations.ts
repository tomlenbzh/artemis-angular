// Imports from Angular
import { style, animate, animation } from '@angular/animations';

// =========================
// Fade
// =========================
export const fadeIn = animation([style({ opacity: 0 }), animate('{{time}}', style({ opacity: 1 }))]);
export const fadeOut = animation([animate('{{time}}', style({ opacity: 0 }))]);

// =========================
// Scale
// =========================
export const scaleIn = animation([
  style({ opacity: 0, transform: 'scale(0.5)' }),
  animate('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({ opacity: 1, transform: 'scale(1)' }))
]);

export const scaleOut = animation([
  animate('{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({ opacity: 0, transform: 'scale(0.5)' }))
]);

export const expandProgress = animation([style({ width: 0 }), animate('{{time}}', style({ width: '{{percent}}' }))]);
export const contractProgress = animation([animate('{{time}}', style({ width: '{{percent}}' }))]);
