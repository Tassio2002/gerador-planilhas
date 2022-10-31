import styled from 'styled-components';

const violetDark = (props) => props.theme.colors.turqueseDark;
const greenDark = (props) => props.theme.colors.greenDark;
const green = (props) => props.theme.colors.green;
const blueDark = (props) => props.theme.colors.blueDark;
const blue = (props) => props.theme.colors.blue;
const champagne = (props) => props.theme.colors.champagne;
const carbon = (props) => props.theme.colors.carbon;
const carbonDark = (props) => props.theme.colors.carbonDark;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  background: ${violetDark};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  display: flex;
  background: ${greenDark};
  &:hover {
    background: ${green};
  }
`;

export const GenerateButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 1rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  background: ${blueDark};
  &:hover {
    background: ${blue};
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${champagne};
`;

export const TableHeader = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
`;

export const TableCell = styled.span`
  width: 20%;
  text-align: center;
`;

export const TableTitle = styled.span`
  font-size: 14px;
  color: ${carbon};
`;

export const TableBody = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
`;

export const TableData = styled.span`
  font-size: 14px;
  color: ${carbonDark};
`;

export const EditRow = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
`;

export const InputBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const InputName = styled.input`
  width: 80%;
  border: none;
  color: black;
`;

export const SaveButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem;
  font-size: 14px;
  background: ${greenDark};
  &:hover {
    background: ${green};
  }
`;
