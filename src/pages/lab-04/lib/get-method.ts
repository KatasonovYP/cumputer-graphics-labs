import { type Irgba } from 'shared/model';

import { isNever } from 'shared/lib';

import { EMethod, type IPosition, type Pixel } from '../model';

import { canonicalCircle } from './canonical-circle';
import { parametricCircle } from './parametric-circle';
import { bresenhamCircle } from './bresenham-circle';

export type IMethodFunctionType = (center: IPosition, radius: number, color: Irgba) => Pixel[];

export function getMethod(name: EMethod): IMethodFunctionType {
	switch (name) {
		case EMethod.Canonical: {
			return canonicalCircle;
		}
		case EMethod.Parametric: {
			return parametricCircle;
		}
		case EMethod.Bresenham: {
			return bresenhamCircle;
		}
		default: {
			return isNever(name);
		}
	}
}
