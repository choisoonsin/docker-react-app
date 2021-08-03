import React from 'react';
import ReactDOM from 'react-dom';
import './tictactoe/tictactoe.css';
class Square extends React.Component {

  // Delete the `constructor` from Square because Square no longer keeps track of the game's state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }

  // render() {
  //   return (
  //     <button className="square" onClick={ () => this.setState({value: 'X'}) } >
  //       {this.state.value}
  //     </button>
  //   );
  // }

  render() {
    return (
      <button className="square"
        onClick={() => this.props.onClick()} >
          {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  // This is a user function
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  // You can define a new function in the Board class
  renderSquare2(i) {
    return <Square value={i * i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>Hello react world!!</h1>
    )
  }
}

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

