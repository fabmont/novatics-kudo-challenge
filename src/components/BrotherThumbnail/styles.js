import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #000;
  color: white;
  display: flex;

  .brother-img {
    flex: 1;
  }

  &:hover .brother-img {
    opacity: 0.3;
  }

  &:hover .overlay-container {
    opacity: 1;
  }
`;

export const OverlayOptions = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ThumbDescription = styled.span`
  font-size: 1em;
`;

export const BrotherName = styled.span`
  font-weight: bold;
  font-size: 1.3em;
`;

export const KudoButton = styled.button`
  padding: 12px;
  background-color: ${({ color }) => color || 'blue'};
  border: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
`;
