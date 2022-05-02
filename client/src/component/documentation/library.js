import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';

export default function Library(props) {

    const library = props.library
    const commandGroups = library.commandGroups

    const noLibrary = (
        <Typography variant='body1' marginTop={5} align='left'>No available library.</Typography>
    )

    const availableLibrary = (
        <>
            <Typography variant='h5' marginTop={5} align='left'>Usage</Typography>
            <Divider />
            <Typography variant='body1' marginTop={5} align='center'>{library.name}
            {library.commandGroups.sort((a, b) => a.order - b.order).map(commandGroup => ` [${commandGroup.groupName}]`)}
            </Typography>
            {                 
            commandGroups.map(commandGroup => {
                return (
                    <> 
                        <Typography variant='h5' marginTop={5} align='left'>{commandGroup.groupName}</Typography>
                        <Divider />
                        <Box sx={{mt: 2}}>
                            { commandGroup.commands.map(cmd => {
                                return (
                                    <Typography variant='body1' align='left'>
                                        {cmd.name} : 
                                        {` <${cmd.invocation.map(invoke => invoke)}> `}
                                        { isEmpty(cmd.allowedValues) ? " " : ` (${cmd.allowedValues.map(allowedVal => allowedVal)}) `}
                                        { isEmpty(cmd.allowedCommandSets) ? " " : ` [${cmd.allowedCommandSets.map(cmdSet => cmdSet)}] ` }
                                    </Typography>
                                )
                            }) }
                        </Box>    
                    </>
                )
            })}
        </>
    )


    return (
        <>
            <Typography variant='h4' marginTop={5} align='left'>Library</Typography>
            <Divider />
            {!library ? noLibrary : availableLibrary}
        </>  
    )
}

function isEmpty(array) {
    return !array || array.length == 0
}