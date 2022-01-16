import About from './About'
import Work from './Work'
import Contacts from './Contacts'
import Stack from './Stack'

function Content(props) {
  const { value, openImage } = props;

  function renderSwitch(type) {
    switch (type) {
      case 'AboutMe':
        return <About />
      case 'Stack':
        return <Stack />
      case 'MyWork':
        return <Work openImage={openImage}/>
      case 'Contacts':
        return <Contacts />
      default:
        return null;
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Planet: #{value?.name}</h1>

      {value ? renderSwitch(value.name) : null}
    </div>
  );
}

export default Content;
