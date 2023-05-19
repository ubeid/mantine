import React from 'react';
import { Button } from '../Button';
import { CSSGrid } from './CSSGrid';
import { Text } from '../Text';

export default { title: 'CSSGrid' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CSSGrid gap={{ base: 10, sm: 100 }} templateColumns={'1fr auto'}>
        <Text>Look at that cool button</Text>
        <Button>Second</Button>
      </CSSGrid>
    </div>
  );
};
