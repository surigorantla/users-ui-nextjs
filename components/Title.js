import styled from 'styled-components';
const Title = styled.h1`
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 1.18;
    color: ${({ theme }) => theme.colors.primary}
    `;
export default Title;