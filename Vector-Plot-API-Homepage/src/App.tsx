import './index.css'
import ContentCopyIcon from '/copy-icon.svg';
import { useState } from 'react'
import Header from './components/header/header'
import RoundedBtn from './components/roundedBtn/roundedBtn'
import Instruction from './components/instruction/instruction'
import Link from './components/Link/Link'

function App() {
  const dummyData = { x1 : 10, y1 : 20, x2 : 40, y2 : 60 };
  //  @ts-ignore
  const [textToCopy, setTextToCopy] = useState('text to copy');

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <main>
      <div className="head-section">
      <Header />
      <div className='Main_Heading'>
        <h1 className={"project_name"}>VECTOR PLOT API</h1>
        < RoundedBtn text='Give a ⭐ on GitHub'/>
      </div>
      </div>

      <div className="text-group">
        <h2>Hi there, 👋</h2>
        <p>Welcome to Vector-Plot-API project</p>
      </div>

      <div className="text-group">
        <h2>🚀 About</h2>
        <p>This is an  express based API that employs 
            Line drawing algorithms from Computer Graphics to generate straight Line coordinates</p>
      </div>

      <div className="text-group">
        <h2>⚒️ Usage</h2>
        <p>At the moment, it contains only 2 algorithms</p>
      </div>

      <div className="instructions-group">
      <div className="text-group-algo">
        <h4 className="algo">Digital Difference Analyzer</h4>
        <Instruction text='open postman or any API client of your choice'/>
        <Instruction text='Paste the url below '>
          <br />
          <br />
        <div className='highlight'>
        <span>https://vector-plot-api.vercel.app/api/DDA </span>
        <img src={ContentCopyIcon} alt="content copy icon" className='content-copy-icon' onClick={() => handleCopy('https://vector-plot-api.vercel.app/DDA')}/>
        </div>
        </Instruction>
        <Instruction text='Paste the data below into the body of the request in Json format '>
          <br />
          <br />
        <div className='highlight'>
        <span>{JSON.stringify(dummyData)}</span>
        <img src={ContentCopyIcon} alt="content copy icon" className='content-copy-icon' onClick={() => handleCopy(JSON.stringify(dummyData))}/>
        </div>
        </Instruction>
        <Instruction text='open postman or any API client of your choiceChange the HTTP request to POST and hit send'/>
        
      </div>

      <span className='divider'></span>

      <div className="text-group-algo">
        <h4 className="algo">BresenHam Line Drawing Algorithm</h4>
        <Instruction text='open postman or any API client of your choice'/>
        <Instruction text='Paste the url below '>
          <br />
          <br />
        <div className='highlight'>
        <span>https://vector-plot-api.vercel.app/api/bresenham</span>
        <img src={ContentCopyIcon} alt="content copy icon" className='content-copy-icon'onClick={() => handleCopy('https://vector-plot-api.vercel.app/bresenham')}/>
        </div>
        </Instruction>
        <Instruction text='Paste the data below into the body of the request in Json format '>
          <br />
          <br />
        <div className='highlight'>
        <span>{JSON.stringify(dummyData)}</span>
        <img src={ContentCopyIcon} alt="content copy icon" className='content-copy-icon' onClick={() => handleCopy(JSON.stringify(dummyData))}/>
        </div>
        </Instruction>
        <Instruction text='open postman or any API client of your choiceChange the HTTP request to POST and hit send'/>
        
      </div>
      </div>

      <h3 className='footer-heading'>THANK YOU FOR VISITING</h3>

      <div className="link-group link-group-short-links">
        <Link text='Home' url='https://github.com/wilfredeveloper' />
        <Link text='BLog' url='https://github.com/wilfredeveloper' />
        <Link text='Portfolio' url='https://github.com/wilfredeveloper' />
      </div>
      <div className="link-group">
        <Link text='GitHub Profile' url='https://github.com/wilfredeveloper' />
        <Link text='Follow me on X' url='https://github.com/wilfredeveloper' />
        <Link text='Test the project in Postman' url='https://github.com/wilfredeveloper' />
      </div>
    </main>
  )
}

export default App