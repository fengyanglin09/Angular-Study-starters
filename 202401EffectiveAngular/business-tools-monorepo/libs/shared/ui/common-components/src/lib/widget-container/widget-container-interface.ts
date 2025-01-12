import {Injector, Type} from "@angular/core";

export interface widget { component: Type<any> | null; injector?: Injector | any };

