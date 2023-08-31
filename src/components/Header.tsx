import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  padding-left: 1em;
  padding-right: 1em;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 0;
  margin: 0.6em 1em;
  padding: 0.6em 2.5em;
  color: black;
  font-size: 1.2em;
  font-weight: 600;
  background-color: lightgray;
  cursor: pointer;
  transition: background-color .9s;

  &:hover {
    background-color: #b4b4b4;
  }

  &:focus,
  &:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: mediumturquoise;
`
interface HeaderProps {
  onToggleGuide: React.MouseEventHandler;
}

export default function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={props.onToggleGuide}>Cheat Sheat</Button>
    </HeaderContainer>
  )
}
