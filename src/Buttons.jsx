import React from 'react'
import { Stack, Button, Input } from '@mui/joy'

const Buttons = (props) => {
    const download = () => {
        console.log(props.selectedfiles)
        props.selectedfiles.forEach(async(i)=>{
            let newTab = window.open();
            newTab.location.href = props.backend + "/get_file?filename=" + i;
        })
    }

    const changeHandler = (event) => {
	    const file = event.target.files[0]
        console.log(file)
        const formdata = new FormData()
        formdata.append("File", file)
        fetch(props.backend+"/send_file", {
            method: "POST",
            body: formdata
            }
        )
        .then((result) => {
            console.log("good: ", result)
        })
        .catch((error) => {
            console.log("error: ", error)
        })

	};
    
    return (
        <Stack direction='row' spacing={2} justifyContent="space-evenly">
            <Button sx = {{width: '50%'}} onClick={download}>Download</Button>
            <Button component = "label" sx = {{width: '50%'}} >Upload
                <Input type = "file" sx={{display: "none"}} onChange={changeHandler}></Input>
            </Button>
        </Stack>
    )
}

export default Buttons