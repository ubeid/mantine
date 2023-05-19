import React, { forwardRef, CSSProperties } from 'react';
import { DefaultProps, useComponentDefaultProps, SystemProp, SpacingValue } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { Box, getSystemStyles } from '../Box';
import { CSSGRID_SYSTEM_PROPS } from './cssgrid-props';

export interface CSSGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** gap CSS property */
  gap?: SystemProp<SpacingValue>;

  /** row-gap CSS property */
  rowGap?: SystemProp<SpacingValue>;

  /** column-gap CSS property */
  columnGap?: SystemProp<SpacingValue>;

  /** align-items CSS property */
  alignItems?: SystemProp<CSSProperties['alignItems']>;

  /** align-content CSS property */
  alignContent?: SystemProp<CSSProperties['alignContent']>;

  /** justify-items CSS property */
  justifyItems?: SystemProp<CSSProperties['justifyItems']>;

  /** justify-content CSS property */
  justifyContent?: SystemProp<CSSProperties['justifyContent']>;

  /** grid-auto-flow CSS property */
  autoFlow?: SystemProp<CSSProperties['gridAutoFlow']>;

  /** grid-auto-columns CSS property */
  autoColumns?: SystemProp<CSSProperties['gridAutoColumns']>;

  /** grid-auto-Rows CSS property */
  autoRows?: SystemProp<CSSProperties['gridAutoRows']>;

  /** grid-template-areas CSS property */
  templateAreas?: SystemProp<CSSProperties['gridTemplateAreas']>;

  /** grid-template-columns CSS property */
  templateColumns?: SystemProp<CSSProperties['gridTemplateColumns']>;

  /** grid-template-rows CSS property */
  templateRows?: SystemProp<CSSProperties['gridTemplateRows']>;
}

const defaultProps: Partial<CSSGridProps> = {};

export const CSSGrid = forwardRef<HTMLDivElement, CSSGridProps>((props, ref) => {
  const {
    gap,
    rowGap,
    columnGap,
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    autoFlow,
    autoColumns,
    autoRows,
    templateAreas,
    templateColumns,
    templateRows,

    sx,
    ...others
  } = useComponentDefaultProps('CSSGrid', defaultProps, props);

  return (
    <Box
      {...others}
      sx={[
        { display: 'grid' },
        (theme) =>
          getSystemStyles(
            {
              gap,
              rowGap,
              columnGap,
              alignItems,
              alignContent,
              justifyItems,
              justifyContent,
              autoFlow,
              autoColumns,
              autoRows,
              templateAreas,
              templateColumns,
              templateRows,
            },
            theme,
            CSSGRID_SYSTEM_PROPS
          ),
        ...packSx(sx),
      ]}
      ref={ref}
    />
  );
});

CSSGrid.displayName = '@mantine/core/CSSGrid';
