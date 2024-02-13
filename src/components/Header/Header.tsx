import React from 'react';
import {
    H1,
    H1Wrapper,
    HeaderStyle,
    LinkMain,
    SettingsMobileWrapper,
    SettingsWrapper,
} from './Header.styles';
import { LinkStyle } from '@components/LinkStyle';
import { SettingOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
    return (
        <HeaderStyle
            className='site-layout-background'
            style={{
                padding: `0px 24px 22px 24px`,
                height: 'auto',
                background: `rgba(240, 245, 255, 1)`,
                zIndex: '0',
            }}
        >
            <LinkMain to='/'>Главная</LinkMain>
            <H1Wrapper>
                <H1>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </H1>
                <SettingsWrapper>
                    <LinkStyle to='/' text='Настройки'>
                        <SettingOutlined style={{ marginRight: '10px' }} />
                    </LinkStyle>
                </SettingsWrapper>

                <SettingsMobileWrapper>
                    <LinkStyle to='/' text=''>
                        <SettingOutlined style={{ fontSize: '19px' }} size={16} />
                    </LinkStyle>
                </SettingsMobileWrapper>
            </H1Wrapper>
        </HeaderStyle>
    );
};
