import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-height: 200px;
`;

export const Indicator = styled.div`
  height: 100%;
  width: 5px;
  background-color: ${({ variant, theme }) => (variant === 'work' ? '#1E88E5' : theme.colors.primary2)};
  border-radius: 5px;
  position: relative;
`;

export const IndicatorHoriz = styled.div`
  height: 5px;
  width: 3rem;
  border-radius: 5px;
  background-color: ${({ variant, theme }) => (variant === 'work' ? '#1E88E5' : theme.colors.primary2)};
`;

export const InfoContainer = styled.div`
  height: 95%;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 35px 25px 25px;
  justify-content: center;
`;

export const InfoContainerTitle = styled.h3``;

export const IndicatorCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ variant, theme }) => (variant === 'work' ? '#1E88E5' : theme.colors.primary2)};
`;

export const IndicatorOuterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid ${({ variant, theme }) => (variant === 'work' ? '#1E88E5' : theme.colors.primary2)};
`;
