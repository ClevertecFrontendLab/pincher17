import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './main-page.css';
import { HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { CardButtonWrapper, CardStyle, Text } from './MainPage.styles';
import calendar2 from '../../assets/icons/CalendarV2.svg';
import background from '../../assets/img/MainPageLight.png';
import { CardInfo } from '@components/CardInfo';
import { LinkStyle } from '@components/LinkStyle';
import { ButtonMenu } from '@components/ButtonMenu/ButtonMenu';
import { MenuMobile } from '@components/MenuMobile/MenuMobile';
import { Menu } from '@components/Menu';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

const { Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <MenuMobile collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
            <Layout style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Menu collapsed={collapsed} setCollapsed={setCollapsed} />
                <Layout className='site-layout'>
                    <Header />
                    <Content
                        className='site-layout-background'
                        style={{
                            position: 'relative',
                            padding: 24,
                            height: 'auto',
                            background: `no-repeat center/cover url(${background})`,
                        }}
                    >
                        <CardInfo>
                            <Text
                                fontSize='16px'
                                color='rgba(6, 17, 120, 1)'
                                lineheight='20.8px'
                                fontWeight='400'
                            >
                                С CleverFit ты сможешь: <br />— планировать свои тренировки на
                                календаре, выбирая тип и уровень нагрузки;
                                <br />— отслеживать свои достижения в разделе статистики, сравнивая
                                свои результаты с нормами и рекордами;
                                <br />— создавать свой профиль, где ты можешь загружать свои фото,
                                видео и отзывы о тренировках;
                                <br />— выполнять расписанные тренировки для разных частей тела,
                                следуя подробным инструкциям и советам профессиональных тренеров.
                            </Text>
                        </CardInfo>

                        <CardInfo marginBottom={'16px'}>
                            <Text
                                fontSize='20px'
                                lineheight='26px'
                                fontWeight='500'
                                maxWidth='664px'
                            >
                                CleverFit — это не просто приложение, а твой личный помощник в мире
                                фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                            </Text>
                        </CardInfo>

                        <CardButtonWrapper>
                            <CardStyle
                                title='Расписать тренировки'
                                bordered={false}
                                style={{ width: '100%', marginRight: '25px', fontFamily: "Inter", fontWeight: '400', lineHeight: '20.8px' }}
                            >
                                <LinkStyle to='/' text='Тренировки' color='rgba(47, 84, 235, 1)'>
                                    <HeartFilled
                                        style={{
                                            color: 'rgba(47, 84, 235, 1)',
                                            marginRight: '8px',
                                        }}
                                    />
                                </LinkStyle>
                            </CardStyle>

                            <CardStyle
                                title='Назначить календарь'
                                bordered={false}
                                style={{ width: '100%', marginRight: '25px', fontFamily: "Inter", fontWeight: '400', lineHeight: '20.8px' }}
                            >
                                <LinkStyle to='/' text='Календарь' color='rgba(47, 84, 235, 1)'>
                                    <img src={calendar2} style={{ marginRight: '8px' }} />
                                </LinkStyle>
                            </CardStyle>

                            <CardStyle
                                title='Заполнить профиль'
                                bordered={false}
                                style={{ width: '100%', fontFamily: "Inter", fontWeight: '400', lineHeight: '20.8px' }}
                            >
                                <LinkStyle to='/' text='Профиль' color='rgba(47, 84, 235, 1)'>
                                    <IdcardOutlined
                                        style={{
                                            color: 'rgba(47, 84, 235, 1)',
                                            marginRight: '8px',
                                        }}
                                    />
                                </LinkStyle>
                            </CardStyle>
                        </CardButtonWrapper>
                        <ButtonMenu
                            collapsed={collapsed}
                            onClick={() => setCollapsed(!collapsed)}
                        />
                        <Footer />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
