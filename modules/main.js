let h = React.createElement;

class App extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      num: 0
    };
  }

  onClick() {
    console.log('onClick');
    this.setState({
      num: this.state.num + 1
    });
  }

  render() {
    let num = this.state.num;
    return h('div', {
      onClick: this.onClick.bind(this)
    }, `Hello React!--${num}`);
  }
}
export default App;
