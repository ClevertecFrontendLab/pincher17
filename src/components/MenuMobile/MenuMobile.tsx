import React from 'react';
import { ButtonMobileMenu, ExitWrapper, LogoWrapper, Menu, MenuContent } from './MenuMobile.styles';
import { LinkStyle } from '@components/LinkStyle';
import logo from './logoMobile.svg';
import { MenuMobileProps } from './MenuMobile.types';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setAccessToken } from '@redux/userSlice';

export const MenuMobile: React.FC<MenuMobileProps> = ({ collapsed, onClick }) => {
    const dispatch = useAppDispatch()

    const onExit = () => {
        localStorage.removeItem('accessToken');
        dispatch(setAccessToken(''));
      };

    return (
        <Menu collapsed={collapsed}>
            <ButtonMobileMenu
                data-test-id={'sider-switch-mobile'}
                onClick={onClick}
                style={{ zIndex: '999' }}
            >
                {collapsed ? (
                    <MenuUnfoldOutlined
                        size={16}
                        style={{
                            position: 'absolute',
                            rotate: '90deg',
                            bottom: '-36px',
                            right: '11px',
                            fontSize: '24px',
                        }}
                    />
                ) : (
                    <MenuFoldOutlined
                        size={16}
                        style={{
                            position: 'absolute',
                            rotate: '90deg',
                            bottom: '-36px',
                            right: '11px',
                            fontSize: '24px',
                        }}
                    />
                )}
            </ButtonMobileMenu>
            <LogoWrapper>
                <img src={logo} />
            </LogoWrapper>

            <MenuContent>
                <div>
                    <LinkStyle to='/' text='Календарь' fontSize='14px' />
                </div>
                <div>
                    <LinkStyle to='/' text='Тренировки' fontSize='14px' />
                </div>
                <div>
                    <LinkStyle to='/' text='Достижения' fontSize='14px' />
                </div>
                <div>
                    <LinkStyle to='/' text='Профиль' fontSize='14px' />
                </div>
            </MenuContent>
            <ExitWrapper onClick={onExit}>
                <LinkStyle to='/' text='Выход' fontSize='14px' />
            </ExitWrapper>
        </Menu>
    );
};
