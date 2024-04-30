import './App.css';
import '@fontsource/public-sans';
import { CssVarsProvider, Typography } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import Search from './Search.jsx';
import { useEffect, useState } from 'react';
import Files from './Files';
import Buttons from './Buttons';
const backend = "http://mc.nasirk.ca:2999"


function App() {
  const [files, setFiles] = useState([]);
  const [selectedfiles, setSelectedFiles] = useState([]);

  const selectFunction = (file) => {
    if (selectedfiles.includes(file)) {
      setSelectedFiles(selectedfiles.filter((f)=>{return f != file}))
      console.log(selectedfiles.filter((f)=>{return f != file}))
    }
    else {
    setSelectedFiles([...selectedfiles, file])
    }
  }

  useEffect(() => {
    const startup = async () => {
      let f = await fetch(new URL(backend + "?filename="))
      setFiles(await f.json())
    }
    startup()
  }, []);

  return (
    <CssVarsProvider>
      <Sheet 
        sx={{
          width: 'auto',
          height: 600,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
      <Typography
        variant="soft"
        color="danger"
        startDecorator="🚨"
        fontSize="sm"
        sx={{ '--Typography-gap': '0.5rem', p: 1, alignSelf:"center" }}
      >
        If download does not work, enable popups.
      </Typography>
      <Search backend = {backend} files = {files} setFiles = {setFiles} setSelectedFiles = {setSelectedFiles}></Search>
      <Files files = {files} selectFunction = {selectFunction}></Files>
      <Buttons selectedfiles = {selectedfiles} backend = {backend}></Buttons>
      </Sheet>
    </CssVarsProvider>
  );
}
export default App;
