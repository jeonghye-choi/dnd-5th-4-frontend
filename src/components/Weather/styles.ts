import styled from 'styled-components/native';

export const Container = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #e7e7e7;
    background-color: #fff;
    margin-top: 8px;
`;
export const TopContainer = styled.View`
    flex-direction: row;
    padding-vertical: 15px;
    padding-horizontal: 16px;
    justify-content: space-between;
`;
export const BoxContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const WeatherImage = styled.Image`
    width: 24px;
    height: 16px;
    margin-right: 8px;
`;
export const Description = styled.Text`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #a8abb4;
`;
export const Temperature = styled.Text<{ color?: any }>`
    margin-right: 8px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.3px;
    color: ${(props) => props.color};
`;
export const Division = styled.Text`
    color: #e7e7e7;
    font-size: 16px;
    margin-left: 4px;
    margin-right: 6px;
`;

export const MaxTemperature = styled.Text`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #ff4743;
`;
export const MinTemperature = styled(MaxTemperature)`
    color: #4068b0;
    margin-right: 8px;
`;
export const DetailWeatherContainer = styled.View`
    padding-horizontal: 37px;
    padding-top: 8px;
    padding-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: #000000;
    margin-bottom: 7px;
`;
export const Box = styled.View`
    align-items: center;
`;

export const Information = styled.Text<{ color?: any; font?: any }>`
    color: ${(props) => (!props.color ? '#000000' : props.color)};
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.3px;
`;