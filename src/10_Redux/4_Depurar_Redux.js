import text from '../translations/es/global.json';

export default function DepurarRedux() {
  return (
    <div>
      <h2>{text['redux-page-debug']}</h2>
      <p>
        {text['redux-page-debug-p']}
        <a
          href='https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd'
          target='_blank'>
          {text['redux-page-debug-p-link']}
        </a>
      </p>
    </div>
  );
}
