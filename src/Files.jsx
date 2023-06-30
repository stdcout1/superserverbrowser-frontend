import React from 'react'
import { Sheet, ListItemButton, List, Checkbox, Typography } from '@mui/joy'

const Files = (props) => {

  return (
    <Sheet sx = {{ height: 'auto', overflow: 'auto', width: 'auto', border: 1 }}>
      <List>
        {props.files.map(function (file, i) {
          return <ListItemButton><Checkbox onChange={() => {props.selectFunction(file)}}></Checkbox><Typography>{file}</Typography></ListItemButton>
        })}
      </List>
    </Sheet>
  )
}

export default Files