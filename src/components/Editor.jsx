import React from 'react';
import './Component.css'
import Previewer from './Previewer.jsx'
import DOMPurify from 'dompurify';

  class Editor extends React.Component {
      constructor(props){
      super(props);
      this.state = {
      input: placeHolder,
      };
      this.handleChange = this.handleChange.bind(this);
      }
  
  
      handleChange(e){
          this.setState({
              input: e.target.value,
          })
      }
  
      render(){
  
      // eslint-disable-next-line no-undef
      let input = marked.parse(this.state.input);
      
      return (
          <div id = "editor-div">
          <h4>Editor <svg viewBox="0 0 576 512" width="20" title="edit">
    <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
  </svg> </h4>
          <textarea id="editor" cols="105.1" rows="10" defaultValue={this.state.input}  onChange = {this.handleChange}>
          </textarea> 
          <Previewer  input = {DOMPurify.sanitize(input)}/> 
          </div>
      )
      }
  }
  
  
  
  const placeHolder = `# Welcome to my React Markdown Previewer!
  ---
  
  ## This is a sub-heading...
  ---
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  
  Or _italic_.
  
  Or... wait for it... **_both!_**
  
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  
  
   > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `

export default Editor;

