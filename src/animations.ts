import { animate, query, sequence, style, transition, trigger } from '@angular/animations';

export const routerAnimation = trigger('routeAnimations', [
  transition('home => projects', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }),
      { optional: true }
    ),

    query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),

    sequence([
      query(':leave', animate('0.2s ease-in-out', style({ transform: 'translateY(-100%)' })), { optional: true }),
      query(':enter', animate('0.3s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
    ]),
  ]),

  transition('projects => home', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }),
      { optional: true }
    ),

    query(':enter', style({ transform: 'translateY(-100%)' }), { optional: true }),

    sequence([
      query(':leave', animate('0.3s ease-in-out', style({ transform: 'translateX(100%)' })), { optional: true }),
      query(':enter', animate('0.3s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true }),
    ]),
  ]),
]);
