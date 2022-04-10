import { Fragment } from 'react';
function Input() {
  return (
    <Fragment>
      <div className="link-section">
        <input placeholder="Paste your link here..." type="text" />
        <input type="button" value="Drop" />
      </div>
    </Fragment>
  );
}

export default Input;
