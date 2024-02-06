import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  var index = 0;
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone key={index++}>
          <img src={icone} alt=""></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
