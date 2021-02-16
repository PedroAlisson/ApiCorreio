import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    align-content: center;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      flex: 1;
      align-items: center;
      color: #a1a;
    }

    button {
      width: 100px;
      height: 30px;
      margin-top: 14px;
      background: #000;
      color: #fff;
      border-radius: 20px;

      &:hover {
        background: ${shade(0.2, "#CCC")};
      }
    }
  }
`;

export const ContentResults = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 40px;

  h1 {
    text-align: center;
  }

  div {
    display: flex;
    align-content: center;

    label {
      display: flex;
      margin-right: 10px;
      align-items: center;
    }

    input {
      color: #a1a;
      // width: 150px;
      margin-right: 10px;
    }
  }
`;
