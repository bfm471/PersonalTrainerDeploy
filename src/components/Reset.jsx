import Button from '@mui/material/Button';

export default function Reset() {

    const resetApi = () => {
        const options = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
        }
        fetch("https://traineeapp.azurewebsites.net/reset", options)
        .catch(error => console.error(error))  
    };


    return(
        <div>
            <Button onClick={resetApi}>Reset</Button>
        </div>
    )
};