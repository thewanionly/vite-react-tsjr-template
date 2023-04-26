import styled from 'styled-components'

const S = {
  App: styled.div``,
  AppTitle: styled.h1`
    font-weight: bold;
  `,
}

export const App = () => {
  return (
    <S.App>
      <S.AppTitle>Vite + React + TSJR</S.AppTitle>
    </S.App>
  )
}
