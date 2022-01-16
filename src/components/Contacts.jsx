function Contacts() {

  return (
    <div>
      <h1>Write to me</h1>

      <div>
        <a href="https://t.me/Vict0rFrost" target="_blank" rel="noreferrer">
          <img
            src="/telega.png"
            alt="telegram"
            style={{
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              padding: '25px 25px',
            }}
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/victor-reznik-6664a01bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/lnkd.png"
            alt="whatsapp"
            style={{
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              padding: '25px 25px',
            }}
          ></img>
        </a>

        <h3>vict0r.frost@yandex.ru</h3>
      </div>
    </div>
  );
}

export default Contacts;
