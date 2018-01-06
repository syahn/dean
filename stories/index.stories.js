import React from 'react'
import Dean from '../src/index'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

const { Button, Card, ICard } = Dean

storiesOf('Button', module).add('default', () => <Button>Default</Button>)
storiesOf('Card', module).add('default', () => <Card>Default</Card>)
storiesOf('ICard', module).add('default', () => <ICard>Default</ICard>)

storiesOf('Button', module)
