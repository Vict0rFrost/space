function Title(props) {
  const { value } = props 

  return (
    <div>
      <h1>Planet: #{value.name}</h1>
    </div>
  );
}

export default Title;
