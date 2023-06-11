import React from 'react';
import Image from 'next/image';
import { AddToCartIcon, HeartIcon, HeartIconFilled } from '../../svg';
import Button from '../button';

type Props = {
  image: string;
  width?: number;
  height?: number;
  imageClassName?: string;
  containerClassName?: string;
  title: string;
  price: number;
  currency?: string;
  tag: 'Xpress' | 'Special';
  discountPercentage?: number;
  discountPrice?: number;
  onAddToCart?: () => void;
  isWishlist?: boolean;
  onAddToWishlist?: () => void;
};

const ProductCard = ({
  image,
  width = 243,
  height = 285,
  containerClassName,
  imageClassName,
  title,
  price,
  currency = 'AED',
  tag,
  discountPrice,
  discountPercentage,
  onAddToCart,
  isWishlist,
  onAddToWishlist,
}: Props) => {
  return (
    <div className={`w-[243px] ${containerClassName || ''}`}>
      <div className={`relative max-w-fit`}>
        <Image
          src={image}
          width={width}
          height={height}
          className={`rounded-2xl border-2 border-gray-100 h-[${height}px] w-[${width}px] object-cover ${imageClassName}`}
          alt={title}
        />
        {tag && (
          <div
            className={`absolute top-0 left-4 border border-b&w-1  rounded-b-lg text-b&w-1 px-2 py-1 caption ${
              tag.toLowerCase() === 'xpress'
                ? 'bg-accent_green'
                : 'bg-accent_yellow'
            }`}
          >
            {tag}
          </div>
        )}
        {onAddToWishlist && (
          <Button
            className='!border absolute right-2 top-2 bg-b&w-2 shadow-lg '
            onClick={onAddToWishlist}
            variant='light'
            childrenType='icon'
          >
            {isWishlist ? <HeartIconFilled /> : <HeartIcon />}
          </Button>
        )}

        {onAddToCart && (
          <Button
            className=' !p-2 rounded-lg absolute bottom-3 right-3 '
            onClick={onAddToCart}
          >
            <AddToCartIcon />
          </Button>
        )}
      </div>
      <p className='text-b&w-5 b3 line-clamp-2'>{title}</p>
      <p className='text-b&w-5 b2 font-bold'>
        {currency} {price}
      </p>
      {discountPercentage && (
        <div className='flex items-center'>
          <p className='text-b&w-3 b3 font-semibold line-through'>
            {discountPrice}
          </p>
          <p className='ml-2 font-semibold text-accent_green b3 '>
            ({discountPercentage}% OFF)
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
