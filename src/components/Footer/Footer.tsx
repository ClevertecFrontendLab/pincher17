import React from 'react';
import { Footers } from './Footer.styles';
import { LinkStyle } from '@components/LinkStyle';
import { CardDownload } from '@components/CardDownload';

export const Footer: React.FC = () => {
    return (
        <Footers>
            <div>
                <LinkStyle
                    to='/'
                    text='Смотреть отзывы'
                    color='rgba(47, 84, 235, 1)'
                    fontSize='16px'
                />
            </div>
            <CardDownload />
        </Footers>
    );
};
