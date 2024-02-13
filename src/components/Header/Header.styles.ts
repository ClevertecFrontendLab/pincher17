import styled from 'styled-components'
import { Layout } from 'antd';
const { Header } = Layout;
import { Link } from '@components/LinkStyle/LinkStyle.styles';
import { LinkStyleProps } from '@components/LinkStyle/LinkStyle.types';

export const HeaderStyle = styled(Header)`
    padding-top: 0;
    margin-top: -6px;
`

export const LinkMain = styled(Link)<LinkStyleProps>`
    cursor: pointer;
    text-decoration: none;
    display: inline;
    color: black;
    height: 18px;
    line-height: 15px;
    font-family: "Inter";
`
export const H1Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
`
export const H1 = styled('h1')`
    max-width: 970px;
    margin: 0;
    font-weight: 700;
    font-size: 38px;
    line-height: 49.4px;
    font-family: "Inter";
    @media screen and (max-width: 834px) {
        font-weight: 500;
        font-size: 24px;
        line-height: 32.1px;
  }
`

export const SettingsWrapper = styled('div')`

    @media screen and (max-width: 730px) {
        display: none;
  }
  @media screen and (max-width: 834px) {
        & span{
            display: none;
        }
  }
`

export const SettingsMobileWrapper = styled('div')`
    display: none;
    height: 40px;
    width: 41px;
    background-color: #fff;
    border-radius: 50%;
    padding-top: 10px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.043);
    border: 1px solid rgba(240, 240, 240, 1);
    margin-left: 10px;
    flex: none;
    @media screen and (max-width: 730px) {
        display: block;
  }
`