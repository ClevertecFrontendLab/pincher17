import styled from 'styled-components'
import background from '../../assets/img/Blure.png';

export const Background = styled('div')`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 100;
background: no-repeat center/cover url(${background});
`