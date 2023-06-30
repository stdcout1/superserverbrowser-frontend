import React from 'react'
import { Typography, FormControl, FormLabel, Input } from '@mui/joy'

const Search = (props) => {
    //props has .backend
    const update = async (event) => {
        const backend = await fetch(new URL(props.backend + "?filename=" + event.target.value))
        let files = await backend.json()
        props.setFiles(files)
        props.setSelectedFiles([])
    }

    /* 
        TODO: 
         -Search should only be files no dirs done
         -download multiple things done
         -implment upload 
         -clean the selectedlist done
         -be able to delsectlist done
         -fix for electron...
    */

    return (
        <FormControl>
            <FormLabel sx={{mx:"auto"}}> <Typography sx={{fontWeight: "bold"}}> Search </Typography> </FormLabel>
            <Input
            name = "search"
            type = "search"
            onChange={update}
            />
        </FormControl>
  )
}

export default Search