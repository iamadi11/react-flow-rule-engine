import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const ImageCard = ({
    src,
    alt,
    fill = true,
    priority = true,
    className = '',
}: {
    src: string;
    alt: string;
    fill?: boolean;
    priority?: boolean;
    className?: string;
}) => (
    <div className={clsx('relative min-h-40 min-w-40', className)}>
        <Image src={src} alt={alt || 'Image'} fill={fill} priority={priority} />
    </div>
);

const Header = ({ children, className }: Props) => <div className={clsx(className)}>{children}</div>;

const Footer = ({ children, className }: Props) => <div className={clsx(className)}>{children}</div>;

const Main = ({ children, className }: Props) => <div className={clsx(className)}>{children}</div>;

interface Card extends React.FC<Props> {
    ImageCard: typeof ImageCard;
    Header: typeof Header;
    Main: typeof Main;
    Footer: typeof Footer;
}

const Card: Card = ({ children, className }: Props) => <div className={clsx(className)}>{children}</div>;

Card.Header = Header;
Card.Main = Main;
Card.Footer = Footer;
Card.ImageCard = ImageCard;

export default Card;
