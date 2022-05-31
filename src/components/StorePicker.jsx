import React from 'react';
import withNavigation from '../hocs'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.goToStore = this.goToStore.bind(this)
  }
  goToStore(event) {
    event.preventDefault()
    console.log(this.myInput.current.value)
    this.props.navigate(`/store/${this.myInput.current.value}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
export default withNavigation(StorePicker)
