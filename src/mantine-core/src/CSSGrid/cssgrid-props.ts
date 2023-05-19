import type { SystemPropData } from '../Box';

export const CSSGRID_SYSTEM_PROPS: Record<string, SystemPropData> = {
    gap: { type: 'spacing', property: 'gap' },
    rowGap: { type: 'spacing', property: 'rowGap' },
    columnGap: { type: 'spacing', property: 'columnGap' },
  
    alignItems: { type: 'identity', property: 'alignItems' },
    alignContent: { type: 'identity', property: 'alignContent' },
    justifyItems: { type: 'identity', property: 'justifyItems' },
    justifyContent: { type: 'identity', property: 'justifyContent' },
  
    autoFlow: { type: 'identity', property: 'gridAutoFlow' },
    autoColumns: { type: 'identity', property: 'gridAutoColumns' },
    autoRows: { type: 'identity', property: 'gridAutoRows' },
  
    templateAreas: { type: 'identity', property: 'gridTemplateAreas' },
    templateColumns: { type: 'identity', property: 'gridTemplateColumns' },
    templateRows: { type: 'identity', property: 'gridTemplateRows' },
  };