interface AmbientLightSensor extends EventTarget {
    readonly illuminance: number;
    onreading: ((this: this, ev: Event) => any) | null;
    onerror: ((this: this, ev: Event) => any) | null;
    start(): void;
    stop(): void;
  }
  
  declare var AmbientLightSensor: {
    prototype: AmbientLightSensor;
    new (): AmbientLightSensor;
  };
  