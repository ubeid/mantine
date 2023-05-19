import React from 'react';
import { render } from '@testing-library/react'
import { rem } from '@mantine/styles'
import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests'
import { CSSGrid, CSSGridProps } from './CSSGrid'

const defaultProps: CSSGridProps = {}

describe('@mantine/core/CSSGrid', () => {
  itRendersChildren(CSSGrid, defaultProps)
  itSupportsSystemProps({
    component: CSSGrid,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/CSSGrid',
    providerName: 'CSSGrid',
  })

  it('has display: grid style', () => {
    const { container } = render(<CSSGrid />)
    expect(container.firstChild).toHaveStyle({ display: 'grid' })
  })

  it('sets gap based on gap prop', () => {
    const { container } = render(<CSSGrid gap={52} />)
    expect(container.firstChild).toHaveStyle({ gap: rem(52) })
  })

  it('sets row-gap based on rowGap prop', () => {
    const { container } = render(<CSSGrid rowGap={34} />)
    expect(container.firstChild).toHaveStyle({ rowGap: rem(34) })
  })

  it('sets column-gap based on columnGap prop', () => {
    const { container } = render(<CSSGrid columnGap={76} />)
    expect(container.firstChild).toHaveStyle({ columnGap: rem(76) })
  })

  it('sets align-items based on alignItems prop', () => {
    const { container } = render(<CSSGrid alignItems='center' />)
    expect(container.firstChild).toHaveStyle({ alignItems: 'center' })
  })

  it('sets align-content based on alignContent prop', () => {
    const { container } = render(<CSSGrid alignContent='center' />)
    expect(container.firstChild).toHaveStyle({ alignContent: 'center' })
  })

  it('sets justify-items based on justifyItems prop', () => {
    const { container } = render(<CSSGrid justifyItems='center' />)
    expect(container.firstChild).toHaveStyle({ justifyItems: 'center' })
  })

  it('sets justify-content based on justifyContent prop', () => {
    const { container } = render(<CSSGrid justifyContent='center' />)
    expect(container.firstChild).toHaveStyle({ justifyContent: 'center' })
  })

  it('sets grid-auto-rows based on autoRows prop', () => {
    const { container } = render(<CSSGrid autoRows={'16rem'} />)
    expect(container.firstChild).toHaveStyle({ gridAutoRows: '16rem' })
  })

  it('sets grid-auto-columns based on autoColumns prop', () => {
    const { container } = render(<CSSGrid autoColumns={'16rem'} />)
    expect(container.firstChild).toHaveStyle({ gridAutoColumns: '16rem' })
  })

  it('sets grid-auto-flow based on autoFlow prop', () => {
    const { container } = render(<CSSGrid autoFlow='dense' />)
    expect(container.firstChild).toHaveStyle({ gridAutoFlow: 'dense' })
  })

  it('sets grid-template-areas based on templateAreas prop', () => {
    const { container } = render(<CSSGrid templateAreas='"a b c" "d e f"' />)
    expect(container.firstChild).toHaveStyle({ gridTemplateAreas: '"a b c" "d e f"' })
  })

  it('sets grid-template-columns based on templateColumns prop', () => {
    const { container } = render(<CSSGrid templateColumns='1fr auto' />)
    expect(container.firstChild).toHaveStyle({ gridTemplateColumns: '1fr auto' })
  })

  it('sets grid-template-rows based on templateRows prop', () => {
    const { container } = render(<CSSGrid templateRows='1fr auto' />)
    expect(container.firstChild).toHaveStyle({ gridTemplateRows: '1fr auto' })
  })
})
