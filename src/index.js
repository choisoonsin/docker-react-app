import React from 'react';
import ReactDOM from 'react-dom';
import './tictactoe/tictactoe.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
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
    const winner = calculateWinner(this.state.squares);
    let status;
    if ( winner ) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }

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

