import { HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import React from 'react';
import { LogoWrapper, MenuCustom, Siders } from './Menu.styles';
import { MenuProps } from './Menu.types';
import logo from '../../assets/icons/logo1.svg'
import logoCollapsed from '../../assets/icons/logo_collapse.svg'
import calendar from '../../assets/icons/calendar_icon.svg'
import exit from '../../assets/icons/Exit.svg'
import { ButtonMenu } from '@components/ButtonMenu/ButtonMenu';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setAccessToken } from '@redux/userSlice';
import { getTrainingThunk } from '@redux/trainingSlice';



export const Menu: React.FC<MenuProps> = ({collapsed, setCollapsed}) => {
    const dispatch = useAppDispatch()
    const accessToken = useAppSelector((state) => state.user.accessToken);

    const onExit = () => {
        localStorage.removeItem('accessToken');
        dispatch(setAccessToken(''));
      };
      const getTrainings = () => {
        dispatch(getTrainingThunk(accessToken));
      };
      
    
    return (
        <Siders trigger={null} collapsible collapsed={collapsed} width={'208px'}>
         <LogoWrapper>
         { collapsed ? <img src={logoCollapsed} /> : <img src={logo} />}
        </LogoWrapper>
        
        <MenuCustom
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          
          items={[
            {
              onClick: getTrainings,
              key: '1',
              icon: <img src={calendar}/>,
              label: <span data-test-id='menu-button-calendar' >Календарь</span>,
              style: { height: '42px', marginBottom: '16px'},
              
            },
            {
              key: '2',
              icon: <HeartFilled style={{ color: 'rgba(6, 17, 120, 1)', height: '42px'}} />,
              label: 'Тренировки',
              style: { height: '42px', marginBottom: '16px'},
            },
            {
              key: '3',
              icon: <TrophyFilled style={{ color: 'rgba(6, 17, 120, 1)'}} />,
              label: 'Достижения',
              style: { height: '42px', marginBottom: '16px'},
            },
            {
                key: '4',
                icon: <IdcardOutlined style={{ color: 'rgba(6, 17, 120, 1)'}} />,
                label: 'Профиль',
                style: { height: '42px'},
              },
              {
                key: '5',
                icon: <img src={exit}/>,
                style: {position: 'absolute',
                bottom: 0,
                boxShadow: `0px 1px 0px 0px rgba(240, 240, 240, 1) inset`,
                transition: 'all 0.2s',},
                label: 'Выход',
                onClick: onExit
              },
          ]}
        >
          <ButtonMenu collapsed={collapsed} onClick= {() => setCollapsed(!collapsed)} />
        </MenuCustom>
      </Siders>
    );
};
