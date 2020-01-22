import { Component } from 'react';
import PropTypes from 'prop-types';

class Toggler extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    isOpen: false,
  };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return children({
      isOpen,
      onToggle: this.toggle,
    });
  }
}

export default Toggler;
