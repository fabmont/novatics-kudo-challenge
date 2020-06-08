import styled from 'styled-components';
import { desktopWidth } from '../../../constants/screenBreakpoints';

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContent = styled.div`
  margin: 0 auto;
  max-width: ${desktopWidth};
  padding: 30px 12px 12px 12px;
  flex: 1;
`;
