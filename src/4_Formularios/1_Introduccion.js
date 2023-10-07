import text from '../translations/es/global.json';

export default function Introduccion() {
  const submit = (e) => {
    e.preventDefault();
    console.log('E: ', e.target.value);
  };

  return (
    <>
      <div>
        <h1>{text['form-page-title']}</h1>
      </div>

      <form onSubmit={submit}>
        <input name='Campo1' />
        <input name='Campo2' />
        <input type='submit' value={text['form-page-button-send']} />
      </form>
    </>
  );
}
