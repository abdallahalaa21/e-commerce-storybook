import type { Meta } from '@storybook/react';

import ProductComponent from '../components/productCard';

const meta: Meta = {
  title: 'Example/product',
  component: ProductComponent,
  argTypes: {
    tag: {
      options: ['Xpress', 'Special'],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const Product = {
  args: {
    title: 'Product title',
    description: 'Product description',
    image: 'https://picsum.photos/200/300',
    price: 100,
    tag: 'Xpress',
    onAddToCart: () => {},
    onAddToWishlist: () => {},
  },
};
