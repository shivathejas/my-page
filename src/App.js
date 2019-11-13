import React, {useState} from 'react';
import './App.css';

function Block(props) {
  return (
    <div className="block-list">
      {props.block.data}     
    </div>
  );
}

function BlockForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    props.addBlock(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Enter blok data:-
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [blocks, setBlocks] = useState([
    {
      data: "Learn about React",
    },
    {
      data: "Meet friend for lunch",
    },
    {
      data: "Build really cool todo app",
    }
  ]);

  const addBlock = data => {
    const newblocks = [...blocks, { data }];
    setBlocks(newblocks);
  };

  return (
    <div className="app">
      <BlockForm addBlock={addBlock} />
      <div >
        {blocks.map((block, index) => (
          <Block
            key={index}
            index={index}
            block={block}
          />
        ))}
      </div>
    </div>
  );
}

export default App;