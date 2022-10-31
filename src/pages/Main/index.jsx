import React, { useState } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

import {
  Container,
  ButtonContainer,
  AddButton,
  GenerateButton,
  TableContainer,
  TableHeader,
  TableCell,
  TableTitle,
  TableBody,
  TableRow,
  TableData,
  EditRow,
  InputBox,
  InputName,
  SaveButton,
} from './styles';

function Main() {
  const [isShow, setIsShow] = useState(false);
  // const getData = () => {
  //   axios
  //     .get('https://sheet.best/api/sheets/893a5642-f135-44fb-9efa-73ed1206ad17')
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  const data = {
    irmao: [
      {
        nome: 'Tassio dos Santos',
        video: 'Sim',
        audio: 'Sim',
        zoom: 'Sim',
        id: 1,
      },
      { nome: 'José henrique', video: 'Não', audio: 'Sim', zoom: 'Sim', id: 2 },
      { nome: 'Nilson', video: 'Sim', audio: 'Sim', zoom: 'Sim', id: 3 },
    ],
  };
  const handleEditClick = () => {
    setIsShow((current) => !current);
  };
  return (
    <Container>
      <ButtonContainer>
        <AddButton>
          <HiPlusSm size={30} />
        </AddButton>
        <GenerateButton>
          Gerar planilha
          <BsFillFileEarmarkSpreadsheetFill
            size={20}
            style={{ marginLeft: '.5em' }}
          />
        </GenerateButton>
      </ButtonContainer>
      <TableContainer>
        <TableHeader>
          <TableCell>
            <TableTitle>NOME</TableTitle>
          </TableCell>
          <TableCell>
            <TableTitle>VIDEO</TableTitle>
          </TableCell>
          <TableCell>
            <TableTitle>AUDIO</TableTitle>
          </TableCell>
          <TableCell>
            <TableTitle>INDICADOR DO ZOOM</TableTitle>
          </TableCell>
          <TableCell>
            <TableTitle>Editar</TableTitle>
          </TableCell>
        </TableHeader>
        <TableBody>
          {data.irmao.map((d) => (
            <>
              <TableRow key={d.id}>
                <TableCell>
                  <TableTitle>{d.nome}</TableTitle>
                </TableCell>
                <TableCell>
                  <TableTitle>{d.video}</TableTitle>
                </TableCell>
                <TableCell>
                  <TableTitle>{d.audio}</TableTitle>
                </TableCell>
                <TableCell>
                  <TableTitle>{d.zoom}</TableTitle>
                </TableCell>
                <TableData />
                <TableCell style={{ color: '#f39c12', cursor: 'pointer' }}>
                  <AiFillEdit
                    size={30}
                    onClick={handleEditClick}
                    key={d.id.toString()}
                  />
                </TableCell>
              </TableRow>
              {isShow && (
                <EditRow>
                  <InputBox>
                    <InputName />
                  </InputBox>
                  <InputBox>
                    <InputName />
                  </InputBox>
                  <InputBox>
                    <InputName />
                  </InputBox>
                  <InputBox>
                    <InputName />
                  </InputBox>
                  <InputBox>
                    <SaveButton>Salvar</SaveButton>
                  </InputBox>
                </EditRow>
              )}
            </>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}

export default Main;
