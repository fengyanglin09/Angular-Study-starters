const widgetKeys = ['weatherWidget', 'clockWidget'] as const;

type WidgetKey = typeof widgetKeys[number];

export type WidgetLoader = { [key in WidgetKey]: () => Promise<any> };

export const widgetLoaders: WidgetLoader = {
  weatherWidget: () => import('../weatherWidget/weatherWidget.component'),
  clockWidget: () => import('../clockWidget/clockWidget.component'),
};

export type WidgetOption = WidgetLoader[keyof WidgetLoader];
